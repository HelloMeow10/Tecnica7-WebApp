import React, { useState } from 'react';
import { useAuth } from '@/hooks/useAuth';
import { useQuery } from '@tanstack/react-query';

const MyCourses: React.FC = () => {
  const { token } = useAuth();
  const { data, isLoading, error } = useQuery({
    queryKey: ['my-courses'],
    queryFn: async () => {
      const res = await fetch('/api/campus/my/courses', { headers: { Authorization: `Bearer ${token}` } });
      if (!res.ok) throw new Error('No se pudieron cargar tus cursos');
      return res.json();
    },
    enabled: !!token,
  });

  const [openCourseId, setOpenCourseId] = useState<number | null>(null);
  const { data: subjects } = useQuery({
    queryKey: ['course-subjects', openCourseId],
    queryFn: async () => {
      const res = await fetch(`/api/campus/courses/${openCourseId}/subjects`, { headers: { Authorization: `Bearer ${token}` } });
      if (!res.ok) throw new Error('No se pudieron cargar las materias');
      return res.json();
    },
    enabled: !!token && !!openCourseId,
  });

  if (isLoading) return <div>Cargando cursos...</div>;
  if (error) return <div>Error: {(error as Error).message}</div>;

  return (
    <div className="space-y-3">
      {data?.length ? data.map((c: any) => (
        <div key={c.course_id} className="p-3 border rounded">
          <div className="flex items-center justify-between">
            <div>
              <div className="font-semibold">{c.name}</div>
              <div className="text-sm text-muted-foreground">{c.description ?? ''}</div>
            </div>
            <button className="text-primary text-sm" onClick={() => setOpenCourseId(openCourseId === c.course_id ? null : c.course_id)}>
              {openCourseId === c.course_id ? 'Ocultar materias' : 'Ver materias'}
            </button>
          </div>
          {openCourseId === c.course_id && (
            <div className="mt-2 pl-2">
              {subjects?.length ? (
                <ul className="list-disc pl-6 space-y-1">
                  {subjects.map((s: any) => (
                    <li key={s.id}>{s.name}</li>
                  ))}
                </ul>
              ) : (
                <div className="text-sm text-muted-foreground">Sin materias</div>
              )}
            </div>
          )}
        </div>
      )) : <div className="text-muted-foreground">No estás inscripto a ningún curso.</div>}
    </div>
  );
};

export default MyCourses;
