import { Request, Response, NextFunction } from 'express';
import prisma from '../services/prisma.service';

export const listEvents = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const items = await (prisma as any).event.findMany({ orderBy: { start_at: 'asc' } });
    res.json(items);
  } catch (err) { next(err); }
};

export const getEvent = async (req: Request, res: Response, next: NextFunction) => {
  const id = Number(req.params.id);
  if (!Number.isInteger(id)) return res.status(400).json({ message: 'ID inválido.' });
  try {
    const item = await (prisma as any).event.findUnique({ where: { id } });
    if (!item) return res.status(404).json({ message: 'No encontrado.' });
    res.json(item);
  } catch (err) { next(err); }
};

export const createEvent = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { title, description, start_at, end_at, location, all_day } = req.body as any;
    if (!title || !start_at) return res.status(400).json({ message: 'Faltan campos obligatorios.' });
    const created = await (prisma as any).event.create({ data: { title, description, start_at: new Date(start_at), end_at: end_at ? new Date(end_at) : null, location, all_day } });
    res.status(201).json(created);
  } catch (err) { next(err); }
};

export const updateEvent = async (req: Request, res: Response, next: NextFunction) => {
  const id = Number(req.params.id);
  if (!Number.isInteger(id)) return res.status(400).json({ message: 'ID inválido.' });
  try {
    const { title, description, start_at, end_at, location, all_day } = req.body as any;
    const updated = await (prisma as any).event.update({ where: { id }, data: { title, description, start_at: new Date(start_at), end_at: end_at ? new Date(end_at) : null, location, all_day, updated_at: new Date() } });
    res.json(updated);
  } catch (err) { next(err); }
};

export const deleteEvent = async (req: Request, res: Response, next: NextFunction) => {
  const id = Number(req.params.id);
  if (!Number.isInteger(id)) return res.status(400).json({ message: 'ID inválido.' });
  try {
    await (prisma as any).event.delete({ where: { id } });
    res.json({ message: 'Eliminado.' });
  } catch (err) { next(err); }
};
