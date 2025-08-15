import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import config from '../config';

// Extender la interfaz de Request de Express para incluir el payload del usuario
interface AuthenticatedRequest extends Request {
  user?: {
    userId: number;
    email: string;
    role: string;
  };
}

export const protect = (allowedRoles: string[]) => {
  return (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res.status(401).json({ message: 'No autorizado, no se encontró token.' });
    }

    const token = authHeader.split(' ')[1];

    try {
      const decoded = jwt.verify(token, config.jwtSecret) as { userId: number; email: string; role: string; iat: number; exp: number };

      req.user = {
        userId: decoded.userId,
        email: decoded.email,
        role: decoded.role,
      };

      if (allowedRoles.length > 0 && !allowedRoles.includes(req.user.role)) {
        return res.status(403).json({ message: 'Acceso prohibido, no tienes el rol requerido.' });
      }

      next();
    } catch (error) {
      console.error('Error de autenticación:', error);
      return res.status(401).json({ message: 'No autorizado, el token falló.' });
    }
  };
};
