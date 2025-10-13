import { Request, Response, NextFunction } from 'express';
import prisma from '../services/prisma.service';

export const listSettings = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const items = await (prisma as any).siteSetting.findMany({ orderBy: { key: 'asc' } });
    res.json(items);
  } catch (err) { next(err); }
};

export const getSetting = async (req: Request, res: Response, next: NextFunction) => {
  const key = req.params.key;
  try {
    const item = await (prisma as any).siteSetting.findUnique({ where: { key } });
    if (!item) return res.status(404).json({ message: 'No encontrado.' });
    res.json(item);
  } catch (err) { next(err); }
};

export const upsertSetting = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { key, value } = req.body as any;
    if (!key) return res.status(400).json({ message: 'Key requerido.' });
    const existing = await (prisma as any).siteSetting.findUnique({ where: { key } });
    if (existing) {
      const updated = await (prisma as any).siteSetting.update({ where: { key }, data: { value, updated_at: new Date() } });
      return res.json(updated);
    }
    const created = await (prisma as any).siteSetting.create({ data: { key, value } });
    res.status(201).json(created);
  } catch (err) { next(err); }
};

export const deleteSetting = async (req: Request, res: Response, next: NextFunction) => {
  const key = req.params.key;
  try {
    await (prisma as any).siteSetting.delete({ where: { key } });
    res.json({ message: 'Eliminado.' });
  } catch (err) { next(err); }
};
