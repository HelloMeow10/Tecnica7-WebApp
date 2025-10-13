import { Request, Response, NextFunction } from 'express';
import prisma from '../services/prisma.service';

export const listCenters = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const items = await (prisma as any).studentCenter.findMany({ orderBy: { created_at: 'desc' } });
    res.json(items);
  } catch (err) { next(err); }
};

export const getCenter = async (req: Request, res: Response, next: NextFunction) => {
  const id = Number(req.params.id);
  if (!Number.isInteger(id)) return res.status(400).json({ message: 'ID inválido.' });
  try {
    const item = await (prisma as any).studentCenter.findUnique({ where: { id } });
    if (!item) return res.status(404).json({ message: 'No encontrado.' });
    res.json(item);
  } catch (err) { next(err); }
};

export const createCenter = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { period, name, president, image_url, description } = req.body as any;
    if (!period || !name) return res.status(400).json({ message: 'Faltan campos obligatorios.' });
    const created = await (prisma as any).studentCenter.create({ data: { period, name, president, image_url, description } });
    res.status(201).json(created);
  } catch (err) { next(err); }
};

export const updateCenter = async (req: Request, res: Response, next: NextFunction) => {
  const id = Number(req.params.id);
  if (!Number.isInteger(id)) return res.status(400).json({ message: 'ID inválido.' });
  try {
    const { period, name, president, image_url, description } = req.body as any;
    const updated = await (prisma as any).studentCenter.update({ where: { id }, data: { period, name, president, image_url, description, updated_at: new Date() } });
    res.json(updated);
  } catch (err) { next(err); }
};

export const deleteCenter = async (req: Request, res: Response, next: NextFunction) => {
  const id = Number(req.params.id);
  if (!Number.isInteger(id)) return res.status(400).json({ message: 'ID inválido.' });
  try {
    await (prisma as any).studentCenter.delete({ where: { id } });
    res.json({ message: 'Eliminado.' });
  } catch (err) { next(err); }
};
