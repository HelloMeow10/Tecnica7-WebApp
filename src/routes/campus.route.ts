import { Router } from 'express';
import { protect } from '../middleware/auth.middleware';
import { getMyCourses, getMyGrades, listCourseMaterials, createCourseMaterial, deleteCourseMaterial, listCourseSubjects, getMyRecentMaterials } from '../controllers/campus.controller';

const router = Router();

router.use(protect([])); // cualquier usuario autenticado

router.get('/my/courses', getMyCourses);
router.get('/my/grades', getMyGrades);

router.get('/courses/:courseId/materials', listCourseMaterials);
router.post('/courses/:courseId/materials', protect(['PROFESOR','DIRECTOR']), createCourseMaterial);
router.delete('/courses/materials/:id', protect(['PROFESOR','DIRECTOR']), deleteCourseMaterial);
router.get('/courses/:courseId/subjects', listCourseSubjects);
router.get('/my/materials/recent', getMyRecentMaterials);

export default router;
