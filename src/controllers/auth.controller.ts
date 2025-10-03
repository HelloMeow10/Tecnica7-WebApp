import { Request, Response, NextFunction } from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import prisma from '../services/prisma.service';
import config from '../config';

const saltRounds = 10;
const jwtSecret = config.jwtSecret;

export const register = async (req: Request, res: Response, next: NextFunction) => {
  const { email, password, firstName, lastName } = req.body;

  if (!email || !password || !firstName || !lastName) {
    return res.status(400).json({ message: 'Todos los campos son requeridos: email, password, firstName, lastName' });
  }

  try {
    // 1. Obtener el role_id para 'ALUMNO'
    const role = await prisma.roles.findUnique({ where: { role_name: 'ALUMNO' } });
    if (!role) {
      return res.status(500).json({ message: 'Error interno del servidor: no se pudo encontrar el rol de alumno.' });
    }

    // 2. Hashear la contraseña
    const passwordHash = await bcrypt.hash(password, saltRounds);

    // 3. Insertar el nuevo usuario en la base de datos
    const newUser = await prisma.users.create({
      data: {
        email,
        password_hash: passwordHash,
        first_name: firstName,
        last_name: lastName,
        role_id: role.role_id,
      },
      select: { user_id: true, email: true, first_name: true, last_name: true, role_id: true }
    });

    res.status(201).json({
      message: 'Usuario registrado con éxito.',
      user: {
        id: newUser.user_id,
        email: newUser.email,
        firstName: newUser.first_name,
        lastName: newUser.last_name,
        roleId: newUser.role_id,
      },
    });
  } catch (error: any) {
    console.error('Error durante el registro:', error);
    if (error.code === 'P2002') { // unique_violation (Prisma)
      return res.status(409).json({ message: 'El email ya está en uso.' });
    }
    next(error);
  }
};

export const login = async (req: Request, res: Response, next: NextFunction) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: 'Email y password son requeridos.' });
  }

  try {
    // 1. Buscar al usuario por email y obtener también el nombre del rol
    const user = await prisma.users.findUnique({
      where: { email },
      select: { user_id: true, email: true, password_hash: true, role: { select: { role_name: true } } }
    });
    if (!user) {
      return res.status(401).json({ message: 'Credenciales inválidas.' });
    }

    // 2. Comparar la contraseña proporcionada con el hash almacenado
  const isMatch = await bcrypt.compare(password, user.password_hash);

    if (!isMatch) {
      return res.status(401).json({ message: 'Credenciales inválidas.' }); // Contraseña incorrecta
    }

    // 3. Generar el JWT
    const tokenPayload = {
      userId: user.user_id,
      email: user.email,
      role: user.role?.role_name,
    };

    const token = jwt.sign(tokenPayload, jwtSecret, { expiresIn: '1h' }); // Token expira en 1 hora

    res.json({
      message: 'Login exitoso.',
      token,
      user: {
        id: user.user_id,
        email: user.email,
        role: user.role?.role_name,
      },
    });

  } catch (error: any) {
    console.error('Error durante el login:', error);
    next(error);
  }
};
