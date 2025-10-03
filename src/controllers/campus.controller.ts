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
      const courses = await prisma.courses.findMany({ where: { teacher_id: me.Teacher.teacher_id }, include: { enrollments: true } });
      return res.json(courses.map(c => ({
        course_id: c.course_id,
        name: c.name,
        description: c.description,
        year: c.year,
        division: c.division,
        students_count: c.enrollments.length,
        created_at: c.created_at,
      })));
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

export const listCourseSubjects = async (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
  try {
    const courseId = Number(req.params.courseId);
    if (!Number.isInteger(courseId)) return res.status(400).json({ message: 'ID inválido' });

    // Access rules: Director always allowed; Teacher only if owns course; Student only if enrolled
    const role = req.user?.role;
    if (role === 'DIRECTOR') {
      const subs = await prisma.courseSubjects.findMany({ where: { course_id: courseId }, orderBy: { order_index: 'asc' } });
      return res.json(subs);
    }

    const me = await prisma.users.findUnique({
      where: { user_id: req.user!.userId },
      select: { Student: { select: { student_id: true } }, Teacher: { select: { teacher_id: true } } }
    });

    // Teacher owns this course?
    if (me?.Teacher) {
      const owns = await prisma.courses.findFirst({ where: { course_id: courseId, teacher_id: me.Teacher.teacher_id }, select: { course_id: true } });
      if (owns) {
        const subs = await prisma.courseSubjects.findMany({ where: { course_id: courseId }, orderBy: { order_index: 'asc' } });
        return res.json(subs);
      }
    }

    // Student enrolled?
    if (me?.Student) {
      const enrolled = await prisma.enrollments.findFirst({ where: { course_id: courseId, student_id: me.Student.student_id }, select: { id: true } });
      if (enrolled) {
        const subs = await prisma.courseSubjects.findMany({ where: { course_id: courseId }, orderBy: { order_index: 'asc' } });
        return res.json(subs);
      }
    }

    return res.status(403).json({ message: 'Acceso prohibido.' });
  } catch (err) { next(err); }
};

export const getMyRecentMaterials = async (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
  try {
    // For students: materials from enrolled courses. For teachers: materials from their courses.
    const me = await prisma.users.findUnique({
      where: { user_id: req.user!.userId },
      select: { Student: { select: { student_id: true } }, Teacher: { select: { teacher_id: true } } }
    });

    let courseIds: number[] = [];
    if (me?.Student) {
      const enrolls = await prisma.enrollments.findMany({ where: { student_id: me.Student.student_id }, select: { course_id: true } });
      courseIds = enrolls.map(e => e.course_id);
    } else if (me?.Teacher) {
      const teaches = await prisma.courses.findMany({ where: { teacher_id: me.Teacher.teacher_id }, select: { course_id: true } });
      courseIds = teaches.map(c => c.course_id);
    }

    if (courseIds.length === 0) return res.json([]);

    const materials = await prisma.courseMaterials.findMany({
      where: { course_id: { in: courseIds } },
      orderBy: { created_at: 'desc' },
      take: 10,
    });
    res.json(materials);
  } catch (err) { next(err); }
};
