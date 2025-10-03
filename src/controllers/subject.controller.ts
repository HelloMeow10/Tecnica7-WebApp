import { Request, Response, NextFunction } from 'express';
import prisma from '../services/prisma.service';

export const listSubjects = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const courseId = Number(req.params.id);
    if (!Number.isInteger(courseId)) return res.status(400).json({ message: 'ID inválido.' });
    const subjects = await prisma.courseSubjects.findMany({
      where: { course_id: courseId },
      orderBy: { order_index: 'asc' },
    });
    res.json(subjects);
  } catch (err) { next(err); }
};

export const addSubject = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const courseId = Number(req.params.id);
    const { name } = req.body as { name: string };
    if (!Number.isInteger(courseId) || !name) return res.status(400).json({ message: 'Datos inválidos.' });
    const last = await prisma.courseSubjects.findFirst({ where: { course_id: courseId }, orderBy: { order_index: 'desc' } });
    const nextIndex = (last?.order_index ?? -1) + 1;
    const created = await prisma.courseSubjects.create({ data: { course_id: courseId, name, order_index: nextIndex } });
    res.status(201).json(created);
  } catch (err: any) {
    if (err.code === 'P2002') return res.status(409).json({ message: 'La materia ya existe en este curso.' });
    next(err);
  }
};

export const updateSubject = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = Number(req.params.subjectId);
    const { name, order_index } = req.body as { name?: string; order_index?: number };
    if (!Number.isInteger(id)) return res.status(400).json({ message: 'ID inválido.' });
    const updated = await prisma.courseSubjects.update({
      where: { id },
      data: { name, order_index },
    });
    res.json(updated);
  } catch (err: any) {
    if (err.code === 'P2002') return res.status(409).json({ message: 'La materia ya existe en este curso.' });
    next(err);
  }
};

export const deleteSubject = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = Number(req.params.subjectId);
    if (!Number.isInteger(id)) return res.status(400).json({ message: 'ID inválido.' });
    await prisma.courseSubjects.delete({ where: { id } });
    res.json({ message: 'Materia eliminada.' });
  } catch (err) { next(err); }
};
