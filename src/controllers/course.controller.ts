import { Request, Response, NextFunction } from 'express';
import prisma from '../services/prisma.service';
import { Prisma } from '@prisma/client';

export const listCourses = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const courses = await prisma.courses.findMany({
      include: {
        teacher: {
          include: {
            user: { select: { first_name: true, last_name: true, email: true } }
          }
        },
        enrollments: true,
      }
    });
    res.json(courses.map((c: any) => ({
      course_id: c.course_id,
      name: c.name,
      description: c.description,
      year: c.year,
      division: c.division,
      teacher_id: c.teacher_id,
      teacher_name: c.teacher?.user ? `${c.teacher.user.first_name ?? ''} ${c.teacher.user.last_name ?? ''}`.trim() : null,
      students_count: c.enrollments.length,
      created_at: c.created_at,
      updated_at: c.updated_at,
    })));
  } catch (err) { next(err); }
};

export const getCourse = async (req: Request, res: Response, next: NextFunction) => {
  const id = Number(req.params.id);
  if (!Number.isInteger(id)) return res.status(400).json({ message: 'ID inválido.' });
  try {
    const c = await prisma.courses.findUnique({
      where: { course_id: id },
      include: {
        teacher: { include: { user: { select: { first_name: true, last_name: true, email: true } } } },
        enrollments: { include: { student: { include: { user: { select: { first_name: true, last_name: true, email: true } } } } } }
      }
    });
    if (!c) return res.status(404).json({ message: 'Curso no encontrado.' });
    res.json(c);
  } catch (err) { next(err); }
};

export const createCourse = async (req: Request, res: Response, next: NextFunction) => {
  const { description, year, division, teacher_id } = req.body as {
    description?: string; year?: number; division?: string; teacher_id?: number;
  };
  const allowed: Record<number, string[]> = { 1: ['1','2','3'], 2: ['1','2','3'], 3: ['1','2','3'], 4: ['2','3'], 5: ['2','3'], 6: ['2','3'], 7: ['2','3'] };
  if (!year || !division || !allowed[year]?.includes(division)) {
    return res.status(400).json({ message: 'Solo se permiten cursos: 1°1,1°2,1°3,2°1,2°2,2°3,3°1,3°2,3°3,4°2,4°3,5°2,5°3,6°2,6°3,7°2,7°3.' });
  }
  const name = `${year}°${division}`;
  try {
    const course = await prisma.courses.create({
      data: { name, description, year, division, teacher_id },
      select: { course_id: true }
    });
    res.status(201).json({ message: 'Curso creado con éxito.', course_id: course.course_id });
  } catch (err) { next(err); }
};

export const updateCourse = async (req: Request, res: Response, next: NextFunction) => {
  const id = Number(req.params.id);
  if (!Number.isInteger(id)) return res.status(400).json({ message: 'ID inválido.' });
  const { description, year, division, teacher_id } = req.body as {
    description?: string; year?: number; division?: string; teacher_id?: number | null;
  };
  try {
    let computedName: string | undefined = undefined;
    if (year !== undefined || division !== undefined) {
      const allowed: Record<number, string[]> = { 1: ['1','2','3'], 2: ['1','2','3'], 3: ['1','2','3'], 4: ['2','3'], 5: ['2','3'], 6: ['2','3'], 7: ['2','3'] };
      const current = await prisma.courses.findUnique({ where: { course_id: id }, select: { year: true, division: true } });
      const y = year ?? current?.year ?? undefined;
      const d = division ?? current?.division ?? undefined;
      if (!y || !d || !allowed[y]?.includes(String(d))) {
        return res.status(400).json({ message: 'Combinación año/división no permitida.' });
      }
      computedName = `${y}°${d}`;
    }
    await prisma.courses.update({
      where: { course_id: id },
      data: { name: computedName, description, year, division, teacher_id: teacher_id === undefined ? undefined : teacher_id },
    });
    res.json({ message: 'Curso actualizado con éxito.' });
  } catch (err) { next(err); }
};

export const deleteCourse = async (req: Request, res: Response, next: NextFunction) => {
  const id = Number(req.params.id);
  if (!Number.isInteger(id)) return res.status(400).json({ message: 'ID inválido.' });
  try {
    await prisma.courses.delete({ where: { course_id: id } });
    res.json({ message: 'Curso eliminado con éxito.' });
  } catch (err) { next(err); }
};

export const enrollStudent = async (req: Request, res: Response, next: NextFunction) => {
  const courseId = Number(req.params.id);
  const { student_id } = req.body as { student_id: number };
  if (!Number.isInteger(courseId) || !Number.isInteger(student_id)) return res.status(400).json({ message: 'IDs inválidos.' });
  try {
    await prisma.enrollments.create({ data: { course_id: courseId, student_id } });
    res.status(201).json({ message: 'Alumno inscripto al curso.' });
  } catch (err: any) {
    if (err.code === 'P2002') return res.status(409).json({ message: 'El alumno ya está inscripto en este curso.' });
    next(err);
  }
};

export const unenrollStudent = async (req: Request, res: Response, next: NextFunction) => {
  const courseId = Number(req.params.id);
  const studentId = Number(req.params.studentId);
  if (!Number.isInteger(courseId) || !Number.isInteger(studentId)) return res.status(400).json({ message: 'IDs inválidos.' });
  try {
    await prisma.enrollments.deleteMany({ where: { course_id: courseId, student_id: studentId } });
    res.json({ message: 'Alumno desinscripto del curso.' });
  } catch (err) { next(err); }
};

// Reports & statistics
export const getReports = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const [coursesCount, enrollmentsCount, topCourses, monthlyRaw] = await prisma.$transaction([
      prisma.courses.count(),
      prisma.enrollments.count(),
      prisma.courses.findMany({
        include: { enrollments: true },
        orderBy: { enrollments: { _count: 'desc' } },
        take: 5,
      }),
      prisma.$queryRawUnsafe(`
        SELECT to_char(date_trunc('month', e.enrolled_at), 'YYYY-MM') as month, COUNT(*)::int as count
        FROM "Enrollments" e
        GROUP BY 1
        ORDER BY 1
      `),
    ]);

    const monthlyEnrollments = monthlyRaw as Array<{ month: string; count: number }>;

    res.json({
      coursesCount,
      enrollmentsCount,
      topCourses: (topCourses as any[]).map((c: any) => ({ course_id: c.course_id, name: c.name, count: c.enrollments.length })),
      monthlyEnrollments,
    });
  } catch (err) { next(err); }
};
