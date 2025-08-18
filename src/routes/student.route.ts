import { Router } from 'express';
import {
  getAllStudents,
  getStudentById,
  createStudent,
  updateStudent,
  deleteStudent,
} from '../controllers/student.controller';
import { protect } from '../middleware/auth.middleware';

const router = Router();

// Todas las rutas de alumnos requieren el rol de 'DIRECTOR'
router.use(protect(['DIRECTOR']));

router.route('/')
  .get(getAllStudents)
  .post(createStudent);

router.route('/:id')
  .get(getStudentById)
  .put(updateStudent)
  .delete(deleteStudent);

export default router;
