import { Request, Response, NextFunction } from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { db } from '../services/database.service';
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
    const roleResult = await db.query('SELECT role_id FROM Roles WHERE role_name = $1', ['ALUMNO']);
    if (roleResult.rows.length === 0) {
      // Este es un caso de error grave: los roles iniciales no se cargaron.
      return res.status(500).json({ message: 'Error interno del servidor: no se pudo encontrar el rol de alumno.' });
    }
    const roleId = roleResult.rows[0].role_id;

    // 2. Hashear la contraseña
    const passwordHash = await bcrypt.hash(password, saltRounds);

    // 3. Insertar el nuevo usuario en la base de datos
    const insertUserQuery = `
      INSERT INTO Users (email, password_hash, first_name, last_name, role_id)
      VALUES ($1, $2, $3, $4, $5)
      RETURNING user_id, email, first_name, last_name, role_id;
    `;
    const newUserResult = await db.query(insertUserQuery, [email, passwordHash, firstName, lastName, roleId]);
    const newUser = newUserResult.rows[0];

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
    if (error.code === '23505') { // unique_violation
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
    const query = `
      SELECT u.user_id, u.email, u.password_hash, r.role_name
      FROM Users u
      JOIN Roles r ON u.role_id = r.role_id
      WHERE u.email = $1;
    `;
    const result = await db.query(query, [email]);

    if (result.rows.length === 0) {
      return res.status(401).json({ message: 'Credenciales inválidas.' }); // Usuario no encontrado
    }

    const user = result.rows[0];

    // 2. Comparar la contraseña proporcionada con el hash almacenado
    const isMatch = await bcrypt.compare(password, user.password_hash);

    if (!isMatch) {
      return res.status(401).json({ message: 'Credenciales inválidas.' }); // Contraseña incorrecta
    }

    // 3. Generar el JWT
    const tokenPayload = {
      userId: user.user_id,
      email: user.email,
      role: user.role_name,
    };

    const token = jwt.sign(tokenPayload, jwtSecret, { expiresIn: '1h' }); // Token expira en 1 hora

    res.json({
      message: 'Login exitoso.',
      token,
      user: {
        id: user.user_id,
        email: user.email,
        role: user.role_name,
      },
    });

  } catch (error: any) {
    console.error('Error durante el login:', error);
    next(error);
  }
};
