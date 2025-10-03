import React from 'react';
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

  if (isLoading) return <div>Cargando cursos...</div>;
  if (error) return <div>Error: {(error as Error).message}</div>;

  return (
    <div className="space-y-3">
      {data?.length ? data.map((c: any) => (
        <div key={c.course_id} className="p-3 border rounded flex items-center justify-between">
          <div>
            <div className="font-semibold">{c.name}</div>
            <div className="text-sm text-muted-foreground">{c.description ?? ''}</div>
          </div>
        </div>
      )) : <div className="text-muted-foreground">No estás inscripto a ningún curso.</div>}
    </div>
  );
};

export default MyCourses;
