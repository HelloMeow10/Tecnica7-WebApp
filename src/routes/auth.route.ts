import { Router } from 'express';
import { register, login } from '../controllers/auth.controller';

const router = Router();

// Ruta para registrar un nuevo usuario
// POST /api/auth/register
router.post('/register', register);

// Ruta para iniciar sesión
// POST /api/auth/login
router.post('/login', login);

export default router;
