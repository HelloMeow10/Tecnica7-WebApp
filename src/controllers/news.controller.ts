import { Request, Response, NextFunction } from 'express';
import prisma from '../services/prisma.service';

export const listNews = async (req: Request, res: Response, next: NextFunction) => {
  try {
  const items = await (prisma as any).news.findMany({ orderBy: { published_at: 'desc' } });
    res.json(items);
  } catch (err) { next(err); }
};

export const getNews = async (req: Request, res: Response, next: NextFunction) => {
  const id = Number(req.params.id);
  if (!Number.isInteger(id)) return res.status(400).json({ message: 'ID inválido.' });
  try {
  const item = await (prisma as any).news.findUnique({ where: { id } });
    if (!item) return res.status(404).json({ message: 'Noticia no encontrada.' });
    res.json(item);
  } catch (err) { next(err); }
};

export const createNews = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { title, slug, summary, content, image_url, published } = req.body as any;
    if (!title || !slug || !content) return res.status(400).json({ message: 'Faltan campos obligatorios.' });
  const created = await (prisma as any).news.create({ data: { title, slug, summary, content, image_url, published, published_at: published ? new Date() : null } });
    res.status(201).json(created);
  } catch (err: any) {
    if (err.code === 'P2002') return res.status(409).json({ message: 'Slug ya existe.' });
    next(err);
  }
};

export const updateNews = async (req: Request, res: Response, next: NextFunction) => {
  const id = Number(req.params.id);
  if (!Number.isInteger(id)) return res.status(400).json({ message: 'ID inválido.' });
  try {
    const { title, slug, summary, content, image_url, published } = req.body as any;
  const updated = await (prisma as any).news.update({ where: { id }, data: { title, slug, summary, content, image_url, published, published_at: published ? new Date() : null, updated_at: new Date() } });
    res.json(updated);
  } catch (err: any) {
    if (err.code === 'P2002') return res.status(409).json({ message: 'Slug ya existe.' });
    next(err);
  }
};

export const deleteNews = async (req: Request, res: Response, next: NextFunction) => {
  const id = Number(req.params.id);
  if (!Number.isInteger(id)) return res.status(400).json({ message: 'ID inválido.' });
  try {
  await (prisma as any).news.delete({ where: { id } });
    res.json({ message: 'Noticia eliminada.' });
  } catch (err) { next(err); }
};
