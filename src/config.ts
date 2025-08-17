import dotenv from 'dotenv';
import { URL } from 'url';

dotenv.config();

const databaseUrl = new URL(process.env.DATABASE_URL || 'postgresql://user:password@localhost:5432/mydb?schema=public');

export const dbConfig = {
  user: databaseUrl.username,
  password: databaseUrl.password,
  host: databaseUrl.hostname,
  port: parseInt(databaseUrl.port, 10),
  database: databaseUrl.pathname.split('/')[1], // Extrae el nombre de la base de datos del path
};

const config = {
  port: process.env.PORT ? parseInt(process.env.PORT, 10) : 3000,
  databaseUrl: process.env.DATABASE_URL,
  jwtSecret: process.env.JWT_SECRET || 'SUPER_SECRET_KEY_CHANGE_IN_PRODUCTION',
  mail: {
    host: process.env.MAIL_HOST || 'smtp.ethereal.email', // Usar Ethereal para pruebas por defecto
    port: process.env.MAIL_PORT ? parseInt(process.env.MAIL_PORT, 10) : 587,
    secure: process.env.MAIL_SECURE === 'true', // true for 465, false for other ports
    auth: {
      user: process.env.MAIL_USER || 'your_ethereal_user@ethereal.email', // Usuario Ethereal o de tu proveedor SMTP
      pass: process.env.MAIL_PASS || 'your_ethereal_password', // Contraseña Ethereal o de tu proveedor SMTP
    },
    from: process.env.MAIL_FROM || 'noreply@example.com', // Dirección "De" para los correos
    to: process.env.MAIL_TO || 'dominefolcomatiass@gmail.com', // Dirección "Para" por defecto (tomada del PHP original)
  },
  geminiApiKey: process.env.GEMINI_API_KEY || '',
};

export default config;
