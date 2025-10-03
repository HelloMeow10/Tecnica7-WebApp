import { Request, Response, NextFunction } from 'express';
import prisma from '../services/prisma.service';

export const getMetrics = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const [teachers, students, users, contacts] = await prisma.$transaction([
      prisma.teachers.count(),
      prisma.students.count(),
      prisma.users.count(),
      prisma.contactSubmissions.count(),
    ]);

    const recentContacts = await prisma.contactSubmissions.findMany({
      orderBy: { submitted_at: 'desc' },
      take: 5,
      select: { id: true, name: true, email: true, submitted_at: true },
    });

    res.json({
      counts: { teachers, students, users, contacts },
      recentContacts,
    });
  } catch (error) {
    next(error);
  }
};
