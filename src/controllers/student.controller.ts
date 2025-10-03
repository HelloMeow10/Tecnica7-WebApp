import { Request, Response, NextFunction } from 'express';
import bcrypt from 'bcrypt';
import prisma from '../services/prisma.service';
import { Prisma } from '@prisma/client';

// Obtener todos los alumnos
export const getAllStudents = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const students = await prisma.students.findMany({
      select: {
        student_id: true,
        user_id: true,
        enrollment_date: true,
        user: {
          select: { first_name: true, last_name: true, email: true }
        }
      }
    });

    const rows = students.map((s: {
      student_id: number; user_id: number; enrollment_date: Date | null;
      user: { first_name: string | null; last_name: string | null; email: string } | null;
    }) => ({
      student_id: s.student_id,
      user_id: s.user_id,
      first_name: s.user?.first_name ?? null,
      last_name: s.user?.last_name ?? null,
      email: s.user?.email ?? null,
      enrollment_date: s.enrollment_date,
    }));

    res.json(rows);
  } catch (error: any) {
    console.error('Error fetching students:', error);
    next(error);
  }
};

// Obtener un alumno por ID
export const getStudentById = async (req: Request, res: Response, next: NextFunction) => {
  const id = Number(req.params.id);
  if (!Number.isInteger(id)) {
    return res.status(400).json({ message: 'ID inválido.' });
  }
  try {
    const s = await prisma.students.findUnique({
      where: { student_id: id },
      select: {
        student_id: true,
        user_id: true,
        enrollment_date: true,
        user: { select: { first_name: true, last_name: true, email: true } }
      }
    });

    if (!s) {
      return res.status(404).json({ message: 'Alumno no encontrado.' });
    }

    return res.json({
      student_id: s.student_id,
      user_id: s.user_id,
      first_name: s.user?.first_name ?? null,
      last_name: s.user?.last_name ?? null,
      email: s.user?.email ?? null,
      enrollment_date: s.enrollment_date,
    });
  } catch (error: any) {
    console.error(`Error fetching student ${id}:`, error);
    next(error);
  }
};

// Crear un nuevo alumno
export const createStudent = async (req: Request, res: Response, next: NextFunction) => {
  const { email, password, firstName, lastName, enrollmentDate } = req.body as {
    email: string; password: string; firstName: string; lastName: string; enrollmentDate?: string | Date;
  };

  if (!email || !password || !firstName || !lastName) {
    return res.status(400).json({ message: 'Faltan campos requeridos: email, password, firstName, lastName.' });
  }

  try {
    const role = await prisma.roles.findUnique({ where: { role_name: 'ALUMNO' } });
    if (!role) {
      return res.status(500).json({ message: 'Rol ALUMNO no configurado.' });
    }

    const passwordHash = await bcrypt.hash(password, 10);

  const result = await prisma.$transaction(async (tx: Prisma.TransactionClient) => {
      const user = await tx.users.create({
        data: {
          email,
          password_hash: passwordHash,
          first_name: firstName,
          last_name: lastName,
          role_id: role.role_id,
        },
        select: { user_id: true }
      });

      const student = await tx.students.create({
        data: {
          user_id: user.user_id,
          enrollment_date: enrollmentDate ? new Date(enrollmentDate) : undefined,
        },
        select: { student_id: true }
      });

      return { userId: user.user_id, studentId: student.student_id };
    });

    res.status(201).json({
      message: 'Alumno creado con éxito.',
      studentId: result.studentId,
      userId: result.userId,
    });
  } catch (error: any) {
    console.error('Error creating student:', error);
    // Prisma unique constraint violation
    if (error.code === 'P2002') {
      return res.status(409).json({ message: 'El email ya está en uso.' });
    }
    next(error);
  }
};

// Actualizar un alumno
export const updateStudent = async (req: Request, res: Response, next: NextFunction) => {
  const id = Number(req.params.id);
  if (!Number.isInteger(id)) {
    return res.status(400).json({ message: 'ID inválido.' });
  }
  const { firstName, lastName, email, enrollmentDate } = req.body as {
    firstName?: string; lastName?: string; email?: string; enrollmentDate?: string | Date;
  };

  try {
    const student = await prisma.students.findUnique({ where: { student_id: id } });
    if (!student) {
      return res.status(404).json({ message: 'Alumno no encontrado.' });
    }

  await prisma.$transaction(async (tx: Prisma.TransactionClient) => {
      // Update user
      await tx.users.update({
        where: { user_id: student.user_id },
        data: {
          first_name: firstName ?? undefined,
          last_name: lastName ?? undefined,
          email: email ?? undefined,
          updated_at: new Date(),
        },
      });

      // Update student
      await tx.students.update({
        where: { student_id: id },
        data: {
          enrollment_date: enrollmentDate ? new Date(enrollmentDate) : undefined,
        },
      });
    });

    res.status(200).json({ message: `Alumno ${id} actualizado con éxito.` });
  } catch (error: any) {
    console.error(`Error updating student ${id}:`, error);
    if (error.code === 'P2002') {
      return res.status(409).json({ message: 'El email ya está en uso por otro usuario.' });
    }
    next(error);
  }
};

// Eliminar un alumno
export const deleteStudent = async (req: Request, res: Response, next: NextFunction) => {
  const id = Number(req.params.id);
  if (!Number.isInteger(id)) {
    return res.status(400).json({ message: 'ID inválido.' });
  }
  try {
    const student = await prisma.students.findUnique({ select: { user_id: true }, where: { student_id: id } });
    if (!student) {
      return res.status(404).json({ message: 'Alumno no encontrado.' });
    }

    await prisma.users.delete({ where: { user_id: student.user_id } });

    res.status(200).json({ message: `Alumno ${id} y su usuario asociado han sido eliminados.` });
  } catch (error: any) {
    console.error(`Error deleting student ${id}:`, error);
    next(error);
  }
};
