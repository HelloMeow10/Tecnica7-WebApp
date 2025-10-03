import { Request, Response, NextFunction } from 'express';
import prisma from '../services/prisma.service';

interface AuthenticatedRequest extends Request {
  user?: { userId: number; role: string; email: string };
}

export const getMyCourses = async (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
  try {
    const me = await prisma.users.findUnique({
      where: { user_id: req.user!.userId },
      select: { Student: { select: { student_id: true } }, Teacher: { select: { teacher_id: true } } }
    });

    if (me?.Student) {
      const courses = await prisma.enrollments.findMany({
        where: { student_id: me.Student.student_id },
        include: { course: true }
      });
      const myCourses: any[] = [];
      for (const c of courses as Array<{ course: any }>) {
        myCourses.push(c.course);
      }
      return res.json(myCourses);
    }
    if (me?.Teacher) {
      const courses = await prisma.courses.findMany({ where: { teacher_id: me.Teacher.teacher_id } });
      return res.json(courses);
    }
    return res.json([]);
  } catch (err) { next(err); }
};

export const getMyGrades = async (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
  try {
    const me = await prisma.users.findUnique({ where: { user_id: req.user!.userId }, select: { Student: { select: { student_id: true } } } });
    if (!me?.Student) return res.json([]);
    const grades = await prisma.grades.findMany({
      where: { student_id: me.Student.student_id },
      include: { course: { select: { name: true } } },
      orderBy: { graded_at: 'desc' },
    });
    const shaped: Array<{ id: number; course_id: number; course_name?: string; title: string; score: number; max_score: number; graded_at: Date }> = [];
    for (const g of grades as Array<{ id: number; course_id: number; title: string; score: number; max_score: number; graded_at: Date; course?: { name?: string } | null }>) {
      shaped.push({
        id: g.id,
        course_id: g.course_id,
        course_name: g.course?.name,
        title: g.title,
        score: g.score,
        max_score: g.max_score,
        graded_at: g.graded_at,
      });
    }
    res.json(shaped);
  } catch (err) { next(err); }
};

export const listCourseMaterials = async (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
  try {
    const courseId = Number(req.params.courseId);
    if (!Number.isInteger(courseId)) return res.status(400).json({ message: 'ID inválido' });

    const materials = await prisma.courseMaterials.findMany({ where: { course_id: courseId }, orderBy: { created_at: 'desc' } });
    res.json(materials);
  } catch (err) { next(err); }
};

export const createCourseMaterial = async (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
  try {
    const courseId = Number(req.params.courseId);
    const { title, description, url } = req.body as { title: string; description?: string; url?: string };
    if (!title) return res.status(400).json({ message: 'El título es requerido' });

    await prisma.courseMaterials.create({ data: { course_id: courseId, title, description, url } });
    res.status(201).json({ message: 'Material creado' });
  } catch (err) { next(err); }
};

export const deleteCourseMaterial = async (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
  try {
    const id = Number(req.params.id);
    if (!Number.isInteger(id)) return res.status(400).json({ message: 'ID inválido' });

    await prisma.courseMaterials.delete({ where: { id } });
    res.json({ message: 'Material eliminado' });
  } catch (err) { next(err); }
};
