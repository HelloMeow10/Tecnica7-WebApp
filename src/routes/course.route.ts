import { Router } from 'express';
import { protect } from '../middleware/auth.middleware';
import {
  listCourses,
  getCourse,
  createCourse,
  updateCourse,
  deleteCourse,
  enrollStudent,
  unenrollStudent,
  getReports,
} from '../controllers/course.controller';
import { listSubjects, addSubject, updateSubject, deleteSubject } from '../controllers/subject.controller';

const router = Router();

// reports - only director
router.get('/reports', protect(['DIRECTOR']), getReports);

// courses CRUD - only director
router.route('/')
  .get(protect(['DIRECTOR']), listCourses)
  .post(protect(['DIRECTOR']), createCourse);

router.route('/:id')
  .get(protect(['DIRECTOR']), getCourse)
  .put(protect(['DIRECTOR']), updateCourse)
  .delete(protect(['DIRECTOR']), deleteCourse);

router.post('/:id/enroll', protect(['DIRECTOR']), enrollStudent);
router.delete('/:id/enroll/:studentId', protect(['DIRECTOR']), unenrollStudent);

// course subjects management - director full, professor read-only
router.get('/:id/subjects', protect(['DIRECTOR','PROFESOR']), listSubjects);
router.post('/:id/subjects', protect(['DIRECTOR']), addSubject);
router.put('/:id/subjects/:subjectId', protect(['DIRECTOR']), updateSubject);
router.delete('/:id/subjects/:subjectId', protect(['DIRECTOR']), deleteSubject);

export default router;
