import express, { Express, Request, Response, NextFunction } from 'express';
import path from 'path';
import config from './config';
import contactRoutes from './routes/contact.route';
import authRoutes from './routes/auth.route';
import teacherRoutes from './routes/teacher.route';
import studentRoutes from './routes/student.route';
import chatRoutes from './routes/chat.route';

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

// Ruta de prueba
app.get('/api/health', (req: Request, res: Response) => {
  res.status(200).json({ status: 'UP', message: 'Server is healthy' });
});

// Rutas de la API
app.use('/api/contact', contactRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/teachers', teacherRoutes);
app.use('/api/students', studentRoutes);
app.use('/api', chatRoutes);

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
