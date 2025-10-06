import prisma from './prisma.service';

export const getMySummary = async (userId: number, role: string) => {
  const me = await prisma.users.findUnique({
    where: { user_id: userId },
    select: { Student: { select: { student_id: true } }, Teacher: { select: { teacher_id: true } } }
  });

  let coursesCount = 0;
  let averageGrade: number | undefined;
  let recentMaterialsCount = 0;
  let recentGrades: any[] = [];
  let courseIds: number[] = [];

  if (role === 'ALUMNO' && me?.Student) {
    const enrollments = await prisma.enrollments.findMany({
      where: { student_id: me.Student.student_id },
      select: { course_id: true }
    });
    courseIds = enrollments.map(e => e.course_id);
    coursesCount = courseIds.length;

    const grades = await prisma.grades.findMany({
      where: { student_id: me.Student.student_id },
      select: { score: true, max_score: true, title: true, id: true, graded_at: true },
      orderBy: { graded_at: 'desc' }
    });

    if (grades.length > 0) {
      const total = grades.reduce((acc, g) => acc + (g.score / g.max_score), 0);
      const avg = total / grades.length * 10;
      averageGrade = Number(avg.toFixed(1));
      recentGrades = grades.slice(0, 5).map(g => ({ id: g.id, title: g.title, score: g.score, max_score: g.max_score }));
    }
  } else if (role === 'PROFESOR' && me?.Teacher) {
    const courses = await prisma.courses.findMany({
      where: { teacher_id: me.Teacher.teacher_id },
      select: { course_id: true }
    });
    courseIds = courses.map(c => c.course_id);
    coursesCount = courseIds.length;
  }

  if (courseIds.length > 0) {
    const sevenDaysAgo = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000);
    recentMaterialsCount = await prisma.courseMaterials.count({
      where: {
        course_id: { in: courseIds },
        created_at: { gte: sevenDaysAgo }
      }
    });
  }

  return {
    coursesCount,
    averageGrade,
    recentMaterialsCount,
    recentGrades
  };
};