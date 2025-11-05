import express, { Express, Request, Response, NextFunction } from 'express';
import path from 'path';
import config from './config';
import contactRoutes from './routes/contact.route';
import authRoutes from './routes/auth.route';
import teacherRoutes from './routes/teacher.route';
import studentRoutes from './routes/student.route';
import chatRoutes from './routes/chat.route';
import adminRoutes from './routes/admin.route';
import courseRoutes from './routes/course.route';
import campusRoutes from './routes/campus.route';
import newsRoutes from './routes/news.route';
import studentCenterRoutes from './routes/studentCenter.route';
import radioRoutes from './routes/radio.route';
import eventRoutes from './routes/event.route';
import settingRoutes from './routes/setting.route';
import { db } from './services/database.service';

const app: Express = express();

// Middleware para parsear JSON en las solicitudes
app.use(express.json());

// Middleware para parsear datos de formularios URL-encoded
app.use(express.urlencoded({ extended: true }));

// Servir archivos estáticos desde la carpeta 'public'
// Esto permitirá acceder al frontend existente
// Por ejemplo, si tienes public/index.html, será accesible en /index.html
// O si el frontend original estaba en 'frontend/', copiaremos su contenido a 'public/'
app.use(express.static(path.join(__dirname, '..', 'public')));

// Auto-bootstrap: asegurar tabla SiteSettings si no existe (soporte para despliegues sin migraciones Prisma)
(async () => {
  try {
    await db.query(`
      CREATE TABLE IF NOT EXISTS "SiteSettings" (
        id SERIAL PRIMARY KEY,
        "key" VARCHAR(191) UNIQUE NOT NULL,
        value TEXT NOT NULL,
        created_at TIMESTAMPTZ DEFAULT NOW(),
        updated_at TIMESTAMPTZ DEFAULT NOW()
      );
    `);
    console.log('Tabla SiteSettings verificada/creada');
  } catch (e) {
    console.error('No se pudo verificar/crear la tabla SiteSettings:', e);
  }
})();

// Ruta de prueba
app.get('/api/health', (req: Request, res: Response) => {
  res.status(200).json({ status: 'UP', message: 'Server is healthy' });
});

// Rutas de la API
app.use('/api/contact', contactRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/teachers', teacherRoutes);
app.use('/api/students', studentRoutes);
app.use('/api/admin', adminRoutes);
app.use('/api/courses', courseRoutes);
app.use('/api/campus', campusRoutes);
app.use('/api', chatRoutes);
app.use('/api/news', newsRoutes);
app.use('/api/student-centers', studentCenterRoutes);
app.use('/api/radio', radioRoutes);
app.use('/api/events', eventRoutes);
app.use('/api/settings', settingRoutes);

// Middleware para manejar errores 404 (Not Found)
app.use((req: Request, res: Response, next: NextFunction) => {
  res.status(404).json({ message: 'Resource not found' });
});

// Middleware para manejar errores globales
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Internal Server Error', error: err.message });
});

export default app;
