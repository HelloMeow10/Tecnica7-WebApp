import { Request, Response, NextFunction } from 'express';
import prisma from '../services/prisma.service';

export const listRadios = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const items = await (prisma as any).radioItem.findMany({ orderBy: { created_at: 'desc' } });
    res.json(items);
  } catch (err) { next(err); }
};

export const getRadio = async (req: Request, res: Response, next: NextFunction) => {
  const id = Number(req.params.id);
  if (!Number.isInteger(id)) return res.status(400).json({ message: 'ID inválido.' });
  try {
    const item = await (prisma as any).radioItem.findUnique({ where: { id } });
    if (!item) return res.status(404).json({ message: 'No encontrado.' });
    res.json(item);
  } catch (err) { next(err); }
};

export const createRadio = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { title, url, description, image_url, published } = req.body as any;
    if (!title) return res.status(400).json({ message: 'Faltan campos obligatorios.' });
    const created = await (prisma as any).radioItem.create({ data: { title, url, description, image_url, published } });
    res.status(201).json(created);
  } catch (err) { next(err); }
};

export const updateRadio = async (req: Request, res: Response, next: NextFunction) => {
  const id = Number(req.params.id);
  if (!Number.isInteger(id)) return res.status(400).json({ message: 'ID inválido.' });
  try {
    const { title, url, description, image_url, published } = req.body as any;
    const updated = await (prisma as any).radioItem.update({ where: { id }, data: { title, url, description, image_url, published, updated_at: new Date() } });
    res.json(updated);
  } catch (err) { next(err); }
};

export const deleteRadio = async (req: Request, res: Response, next: NextFunction) => {
  const id = Number(req.params.id);
  if (!Number.isInteger(id)) return res.status(400).json({ message: 'ID inválido.' });
  try {
    await (prisma as any).radioItem.delete({ where: { id } });
    res.json({ message: 'Eliminado.' });
  } catch (err) { next(err); }
};
