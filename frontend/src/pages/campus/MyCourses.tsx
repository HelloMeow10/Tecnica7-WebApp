import React, { useState } from 'react';
import { useAuth } from '@/hooks/useAuth';
import { useQuery } from '@tanstack/react-query';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Book, Users, Briefcase } from 'lucide-react';
import { Skeleton } from '@/components/ui/skeleton';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const MyCourses: React.FC = () => {
  const { token, user } = useAuth();
  const { data: courses, isLoading, error } = useQuery({
    queryKey: ['my-courses'],
    queryFn: async () => {
      const res = await fetch('/api/campus/my/courses', { headers: { Authorization: `Bearer ${token}` } });
      if (!res.ok) throw new Error('No se pudieron cargar tus cursos');
      return res.json();
    },
    enabled: !!token,
  });

  const [expandedCourseId, setExpandedCourseId] = useState<number | null>(null);

  const handleToggleCourse = (courseId: number) => {
    setExpandedCourseId(prevId => (prevId === courseId ? null : courseId));
  };

  if (isLoading) return <CoursesSkeleton />;
  if (error) return <div className="text-center text-red-500">Error: {(error as Error).message}</div>;

  return (
    <div className="space-y-4">
      <AnimatePresence>
        {courses?.length ? courses.map((course: any) => (
          <motion.div
            key={course.course_id}
            layout
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <Card className="hover:shadow-md transition-shadow duration-300">
              <CardHeader className="cursor-pointer" onClick={() => handleToggleCourse(course.course_id)}>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <Briefcase className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-lg font-semibold">{course.name}</CardTitle>
                      <p className="text-sm text-muted-foreground">{course.description ?? 'Sin descripción'}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <Users className="w-4 h-4" />
                      <span>{course.students_count ?? 0}</span>
                    </div>
                    <motion.div
                      animate={{ rotate: expandedCourseId === course.course_id ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ChevronDown className="w-5 h-5" />
                    </motion.div>
                  </div>
                </div>
              </CardHeader>
              <AnimatePresence>
                {expandedCourseId === course.course_id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <CardContent>
                      <CourseSubjects courseId={course.course_id} token={token} />
                    </CardContent>
                  </motion.div>
                )}
              </AnimatePresence>
            </Card>
          </motion.div>
        )) : (
          <div className="text-center py-12 text-muted-foreground">
            <Briefcase className="w-12 h-12 mx-auto mb-4 text-gray-300" />
            <h3 className="text-lg font-semibold">No estás inscrito en ningún curso.</h3>
            <p className="text-sm">Cuando te inscribas, tus cursos aparecerán aquí.</p>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

const CourseSubjects: React.FC<{ courseId: number; token: string | null }> = ({ courseId, token }) => {
  const { data: subjects, isLoading, error } = useQuery({
    queryKey: ['course-subjects', courseId],
    queryFn: async () => {
      const res = await fetch(`/api/campus/courses/${courseId}/subjects`, { headers: { Authorization: `Bearer ${token}` } });
      if (!res.ok) throw new Error('No se pudieron cargar las materias');
      return res.json();
    },
    enabled: !!token,
  });

  if (isLoading) return <div className="space-y-2 mt-2">{[...Array(3)].map((_, i) => <Skeleton key={i} className="h-8 w-full" />)}</div>;
  if (error) return <div className="text-sm text-red-500">Error al cargar materias.</div>;

  return (
    <div className="mt-4 border-t pt-4">
      <h4 className="text-md font-semibold mb-3">Materias del curso</h4>
      {subjects?.length ? (
        <ul className="space-y-2">
          {subjects.map((subject: any) => (
            <motion.li
              key={subject.id}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.2 }}
              className="flex items-center gap-3 p-2 rounded-md hover:bg-gray-50"
            >
              <Book className="w-4 h-4 text-primary" />
              <span>{subject.name}</span>
            </motion.li>
          ))}
        </ul>
      ) : (
        <p className="text-sm text-muted-foreground">No hay materias asignadas a este curso.</p>
      )}
    </div>
  );
};

const CoursesSkeleton = () => (
  <div className="space-y-4">
    {[...Array(3)].map((_, i) => (
      <Card key={i}>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Skeleton className="w-12 h-12 rounded-lg" />
              <div className="space-y-2">
                <Skeleton className="h-4 w-48" />
                <Skeleton className="h-3 w-64" />
              </div>
            </div>
            <Skeleton className="w-8 h-5" />
          </div>
        </CardHeader>
      </Card>
    ))}
  </div>
);

export default MyCourses;