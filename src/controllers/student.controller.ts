import { Request, Response, NextFunction } from 'express';
import { db } from '../services/database.service';
import bcrypt from 'bcrypt';

// Obtener todos los alumnos
export const getAllStudents = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const query = `
      SELECT s.student_id, u.user_id, u.first_name, u.last_name, u.email, s.enrollment_date
      FROM Students s
      JOIN Users u ON s.user_id = u.user_id;
    `;
    const result = await db.query(query);
    res.json(result.rows);
  } catch (error: any) {
    console.error('Error fetching students:', error);
    next(error);
  }
};

// Obtener un alumno por ID
export const getStudentById = async (req: Request, res: Response, next: NextFunction) => {
  const { id } = req.params;
  try {
    const query = `
      SELECT s.student_id, u.user_id, u.first_name, u.last_name, u.email, s.enrollment_date
      FROM Students s
      JOIN Users u ON s.user_id = u.user_id
      WHERE s.student_id = $1;
    `;
    const result = await db.query(query, [id]);
    if (result.rows.length === 0) {
      return res.status(404).json({ message: 'Alumno no encontrado.' });
    }
    res.json(result.rows[0]);
  } catch (error: any) {
    console.error(`Error fetching student ${id}:`, error);
    next(error);
  }
};

// Crear un nuevo alumno
export const createStudent = async (req: Request, res: Response, next: NextFunction) => {
  const { email, password, firstName, lastName, enrollmentDate } = req.body;
  const client = await db.getClient();

  try {
    await client.query('BEGIN');

    // 1. Obtener role_id de 'ALUMNO'
    const roleResult = await client.query("SELECT role_id FROM Roles WHERE role_name = 'ALUMNO'");
    const roleId = roleResult.rows[0].role_id;

    // 2. Crear el registro en la tabla Users
    const passwordHash = await bcrypt.hash(password, 10);
    const userQuery = `
      INSERT INTO Users (email, password_hash, first_name, last_name, role_id)
      VALUES ($1, $2, $3, $4, $5) RETURNING user_id;
    `;
    const userResult = await client.query(userQuery, [email, passwordHash, firstName, lastName, roleId]);
    const newUserId = userResult.rows[0].user_id;

    // 3. Crear el registro en la tabla Students
    const studentQuery = `
      INSERT INTO Students (user_id, enrollment_date)
      VALUES ($1, $2) RETURNING student_id;
    `;
    const studentResult = await client.query(studentQuery, [newUserId, enrollmentDate]);
    const newStudentId = studentResult.rows[0].student_id;

    await client.query('COMMIT');

    res.status(201).json({
      message: 'Alumno creado con éxito.',
      studentId: newStudentId,
      userId: newUserId
    });
  } catch (error: any) {
    await client.query('ROLLBACK');
    console.error('Error creating student:', error);
    if (error.code === '23505') { // unique_violation
      return res.status(409).json({ message: 'El email ya está en uso.' });
    }
    next(error);
  } finally {
    client.release();
  }
};

// Actualizar un alumno
export const updateStudent = async (req: Request, res: Response, next: NextFunction) => {
  const { id } = req.params;
  const { firstName, lastName, email, enrollmentDate } = req.body;
  const client = await db.getClient();

  try {
    await client.query('BEGIN');
    // Obtener el user_id del student_id
    const studentUserQuery = "SELECT user_id FROM Students WHERE student_id = $1";
    const studentUserResult = await client.query(studentUserQuery, [id]);
    if (studentUserResult.rows.length === 0) {
      return res.status(404).json({ message: 'Alumno no encontrado.' });
    }
    const userId = studentUserResult.rows[0].user_id;

    // Actualizar la tabla Users
    const userQuery = `
      UPDATE Users SET first_name = $1, last_name = $2, email = $3, updated_at = CURRENT_TIMESTAMP
      WHERE user_id = $4;
    `;
    await client.query(userQuery, [firstName, lastName, email, userId]);

    // Actualizar la tabla Students
    const studentQuery = "UPDATE Students SET enrollment_date = $1 WHERE student_id = $2;";
    await client.query(studentQuery, [enrollmentDate, id]);

    await client.query('COMMIT');

    res.status(200).json({ message: `Alumno ${id} actualizado con éxito.` });
  } catch (error: any) {
    await client.query('ROLLBACK');
    console.error(`Error updating student ${id}:`, error);
    if (error.code === '23505') {
      return res.status(409).json({ message: 'El email ya está en uso por otro usuario.' });
    }
    next(error);
  } finally {
    client.release();
  }
};

// Eliminar un alumno
export const deleteStudent = async (req: Request, res: Response, next: NextFunction) => {
  const { id } = req.params;
  try {
    // La FK en Students tiene ON DELETE CASCADE, por lo que al borrar el User, se borra el Student.
    // Primero necesitamos el user_id del alumno.
    const studentUserQuery = "SELECT user_id FROM Students WHERE student_id = $1";
    const studentUserResult = await db.query(studentUserQuery, [id]);
    if (studentUserResult.rows.length === 0) {
      return res.status(404).json({ message: 'Alumno no encontrado.' });
    }
    const userId = studentUserResult.rows[0].user_id;

    // Borrar el usuario. Esto debería eliminar en cascada el registro de la tabla Students.
    await db.query("DELETE FROM Users WHERE user_id = $1", [userId]);

    res.status(200).json({ message: `Alumno ${id} y su usuario asociado han sido eliminados.` });
  } catch (error: any) {
    console.error(`Error deleting student ${id}:`, error);
    next(error);
  }
};
