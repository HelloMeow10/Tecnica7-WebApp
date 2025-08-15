import { Request, Response, NextFunction } from 'express';
import { db } from '../services/database.service';

// Obtener todos los profesores
export const getAllTeachers = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const query = `
      SELECT t.teacher_id, u.user_id, u.first_name, u.last_name, u.email, t.bio
      FROM Teachers t
      JOIN Users u ON t.user_id = u.user_id;
    `;
    const result = await db.query(query);
    res.json(result.rows);
  } catch (error: any) {
    console.error('Error fetching teachers:', error);
    next(error);
  }
};

// Obtener un profesor por ID
export const getTeacherById = async (req: Request, res: Response, next: NextFunction) => {
  const { id } = req.params;
  try {
    const query = `
      SELECT t.teacher_id, u.user_id, u.first_name, u.last_name, u.email, t.bio
      FROM Teachers t
      JOIN Users u ON t.user_id = u.user_id
      WHERE t.teacher_id = $1;
    `;
    const result = await db.query(query, [id]);
    if (result.rows.length === 0) {
      return res.status(404).json({ message: 'Profesor no encontrado.' });
    }
    res.json(result.rows[0]);
  } catch (error: any) {
    console.error(`Error fetching teacher ${id}:`, error);
    next(error);
  }
};

// Crear un nuevo profesor
export const createTeacher = async (req: Request, res: Response, next: NextFunction) => {
  const { email, password, firstName, lastName, bio } = req.body;
  // NOTA: En una implementación real, se debería usar una transacción (BEGIN/COMMIT/ROLLBACK)
  try {
    // 1. Obtener role_id de 'PROFESOR'
    const roleResult = await db.query("SELECT role_id FROM Roles WHERE role_name = 'PROFESOR'");
    const roleId = roleResult.rows[0].role_id;

    // 2. Crear el registro en la tabla Users
    const passwordHash = await require('bcrypt').hash(password, 10);
    const userQuery = `
      INSERT INTO Users (email, password_hash, first_name, last_name, role_id)
      VALUES ($1, $2, $3, $4, $5) RETURNING user_id;
    `;
    const userResult = await db.query(userQuery, [email, passwordHash, firstName, lastName, roleId]);
    const newUserId = userResult.rows[0].user_id;

    // 3. Crear el registro en la tabla Teachers
    const teacherQuery = `
      INSERT INTO Teachers (user_id, bio)
      VALUES ($1, $2) RETURNING teacher_id;
    `;
    const teacherResult = await db.query(teacherQuery, [newUserId, bio]);
    const newTeacherId = teacherResult.rows[0].teacher_id;

    res.status(201).json({
      message: 'Profesor creado con éxito.',
      teacherId: newTeacherId,
      userId: newUserId
    });
  } catch (error: any) {
    console.error('Error creating teacher:', error);
    if (error.code === '23505') { // unique_violation
      return res.status(409).json({ message: 'El email ya está en uso.' });
    }
    next(error);
  }
};

// Actualizar un profesor
export const updateTeacher = async (req: Request, res: Response, next: NextFunction) => {
  const { id } = req.params;
  const { firstName, lastName, email, bio } = req.body;
  try {
    // Obtener el user_id del teacher_id
    const teacherUserQuery = "SELECT user_id FROM Teachers WHERE teacher_id = $1";
    const teacherUserResult = await db.query(teacherUserQuery, [id]);
    if (teacherUserResult.rows.length === 0) {
      return res.status(404).json({ message: 'Profesor no encontrado.' });
    }
    const userId = teacherUserResult.rows[0].user_id;

    // Actualizar la tabla Users
    const userQuery = `
      UPDATE Users SET first_name = $1, last_name = $2, email = $3, updated_at = CURRENT_TIMESTAMP
      WHERE user_id = $4;
    `;
    await db.query(userQuery, [firstName, lastName, email, userId]);

    // Actualizar la tabla Teachers
    const teacherQuery = "UPDATE Teachers SET bio = $1 WHERE teacher_id = $2;";
    await db.query(teacherQuery, [bio, id]);

    res.status(200).json({ message: `Profesor ${id} actualizado con éxito.` });
  } catch (error: any) {
    console.error(`Error updating teacher ${id}:`, error);
    if (error.code === '23505') {
      return res.status(409).json({ message: 'El email ya está en uso por otro usuario.' });
    }
    next(error);
  }
};

// Eliminar un profesor
export const deleteTeacher = async (req: Request, res: Response, next: NextFunction) => {
  const { id } = req.params;
  try {
    // La FK en Teachers tiene ON DELETE CASCADE, por lo que al borrar el User, se borra el Teacher.
    // Primero necesitamos el user_id del profesor.
    const teacherUserQuery = "SELECT user_id FROM Teachers WHERE teacher_id = $1";
    const teacherUserResult = await db.query(teacherUserQuery, [id]);
    if (teacherUserResult.rows.length === 0) {
      return res.status(404).json({ message: 'Profesor no encontrado.' });
    }
    const userId = teacherUserResult.rows[0].user_id;

    // Borrar el usuario. Esto debería eliminar en cascada el registro de la tabla Teachers.
    await db.query("DELETE FROM Users WHERE user_id = $1", [userId]);

    res.status(200).json({ message: `Profesor ${id} y su usuario asociado han sido eliminados.` });
  } catch (error: any) {
    console.error(`Error deleting teacher ${id}:`, error);
    next(error);
  }
};
