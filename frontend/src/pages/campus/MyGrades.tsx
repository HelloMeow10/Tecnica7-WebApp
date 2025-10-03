import React from 'react';
import { useAuth } from '@/hooks/useAuth';
import { useQuery } from '@tanstack/react-query';

const MyGrades: React.FC = () => {
  const { token } = useAuth();
  const { data, isLoading, error } = useQuery({
    queryKey: ['my-grades'],
    queryFn: async () => {
      const res = await fetch('/api/campus/my/grades', { headers: { Authorization: `Bearer ${token}` } });
      if (!res.ok) throw new Error('No se pudieron cargar tus calificaciones');
      return res.json();
    },
    enabled: !!token,
  });

  if (isLoading) return <div>Cargando calificaciones...</div>;
  if (error) return <div>Error: {(error as Error).message}</div>;

  return (
    <div className="space-y-3">
      {data?.length ? data.map((g: any) => (
        <div key={g.id} className="p-3 border rounded">
          <div className="font-semibold">{g.course_name} — {g.title}</div>
          <div className="text-sm">{g.score} / {g.max_score}</div>
          <div className="text-xs text-muted-foreground">{new Date(g.graded_at).toLocaleString()}</div>
        </div>
      )) : <div className="text-muted-foreground">Sin calificaciones aún.</div>}
    </div>
  );
};

export default MyGrades;
