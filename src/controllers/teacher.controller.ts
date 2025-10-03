import { Request, Response, NextFunction } from 'express';
import prisma from '../services/prisma.service';
import bcrypt from 'bcrypt';
import { Prisma } from '@prisma/client';

// Obtener todos los profesores
export const getAllTeachers = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const teachers = await prisma.teachers.findMany({
      select: {
        teacher_id: true,
        user_id: true,
        bio: true,
        user: { select: { first_name: true, last_name: true, email: true } }
      }
    });
    const rows = teachers.map((t: {
      teacher_id: number; user_id: number; bio: string | null;
      user: { first_name: string | null; last_name: string | null; email: string } | null;
    }) => ({
      teacher_id: t.teacher_id,
      user_id: t.user_id,
      first_name: t.user?.first_name ?? null,
      last_name: t.user?.last_name ?? null,
      email: t.user?.email ?? null,
      bio: t.bio ?? null,
    }));
    res.json(rows);
  } catch (error: any) {
    console.error('Error fetching teachers:', error);
    next(error);
  }
};

// Obtener un profesor por ID
export const getTeacherById = async (req: Request, res: Response, next: NextFunction) => {
  const id = Number(req.params.id);
  try {
    const t = await prisma.teachers.findUnique({
      where: { teacher_id: id },
      select: {
        teacher_id: true,
        user_id: true,
        bio: true,
        user: { select: { first_name: true, last_name: true, email: true } }
      }
    });
    if (!t) return res.status(404).json({ message: 'Profesor no encontrado.' });
    res.json({
      teacher_id: t.teacher_id,
      user_id: t.user_id,
      first_name: t.user?.first_name ?? null,
      last_name: t.user?.last_name ?? null,
      email: t.user?.email ?? null,
      bio: t.bio ?? null,
    });
  } catch (error: any) {
    console.error(`Error fetching teacher ${id}:`, error);
    next(error);
  }
};

// Crear un nuevo profesor
export const createTeacher = async (req: Request, res: Response, next: NextFunction) => {
  const { email, password, firstName, lastName, bio } = req.body as { email: string; password: string; firstName: string; lastName: string; bio?: string };
  try {
    const role = await prisma.roles.findUnique({ where: { role_name: 'PROFESOR' } });
    if (!role) return res.status(500).json({ message: 'Rol PROFESOR no configurado.' });

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
      const teacher = await tx.teachers.create({
        data: { user_id: user.user_id, bio },
        select: { teacher_id: true }
      });
      return { userId: user.user_id, teacherId: teacher.teacher_id };
    });

    res.status(201).json({ message: 'Profesor creado con éxito.', teacherId: result.teacherId, userId: result.userId });
  } catch (error: any) {
    console.error('Error creating teacher:', error);
    if (error.code === 'P2002') { // unique_violation (Prisma)
      return res.status(409).json({ message: 'El email ya está en uso.' });
    }
    next(error);
  }
};

// Actualizar un profesor
export const updateTeacher = async (req: Request, res: Response, next: NextFunction) => {
  const id = Number(req.params.id);
  const { firstName, lastName, email, bio } = req.body as { firstName?: string; lastName?: string; email?: string; bio?: string };
  try {
    const current = await prisma.teachers.findUnique({ where: { teacher_id: id } });
    if (!current) return res.status(404).json({ message: 'Profesor no encontrado.' });

  await prisma.$transaction(async (tx: Prisma.TransactionClient) => {
      await tx.users.update({
        where: { user_id: current.user_id },
        data: {
          first_name: firstName ?? undefined,
          last_name: lastName ?? undefined,
          email: email ?? undefined,
          updated_at: new Date(),
        },
      });
      await tx.teachers.update({
        where: { teacher_id: id },
        data: { bio: bio ?? undefined },
      });
    });

    res.status(200).json({ message: `Profesor ${id} actualizado con éxito.` });
  } catch (error: any) {
    console.error(`Error updating teacher ${id}:`, error);
    if (error.code === 'P2002') {
      return res.status(409).json({ message: 'El email ya está en uso por otro usuario.' });
    }
    next(error);
  }
};

// Eliminar un profesor
export const deleteTeacher = async (req: Request, res: Response, next: NextFunction) => {
  const id = Number(req.params.id);
  try {
    const teacher = await prisma.teachers.findUnique({ where: { teacher_id: id }, select: { user_id: true } });
    if (!teacher) return res.status(404).json({ message: 'Profesor no encontrado.' });

    await prisma.users.delete({ where: { user_id: teacher.user_id } });

    res.status(200).json({ message: `Profesor ${id} y su usuario asociado han sido eliminados.` });
  } catch (error: any) {
    console.error(`Error deleting teacher ${id}:`, error);
    next(error);
  }
};
