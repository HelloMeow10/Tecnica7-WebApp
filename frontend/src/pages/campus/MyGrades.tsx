import React from 'react';
import { useAuth } from '@/hooks/useAuth';
import { useQuery } from '@tanstack/react-query';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { BookOpen, AlertCircle, CheckCircle } from 'lucide-react';

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

  if (isLoading) return <div className="flex justify-center items-center h-full"><div className="text-lg font-semibold text-gray-700">Cargando calificaciones...</div></div>;
  if (error) return <div className="flex justify-center items-center h-full"><div className="text-red-500 font-semibold flex items-center"><AlertCircle className="mr-2" /> Error: {(error as Error).message}</div></div>;

  return (
    <div className="space-y-6 p-4 md:p-6">
      <h1 className="text-3xl font-bold text-gray-800">Mis Calificaciones</h1>
      {data?.length ? (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {data.map((g: any) => (
            <Card key={g.id} className="bg-white shadow-md hover:shadow-lg transition-shadow duration-300 rounded-lg">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-xl font-bold text-gray-800">{g.course_name}</CardTitle>
                <BookOpen className="w-6 h-6 text-primary" />
              </CardHeader>
              <CardContent>
                <p className="text-lg font-semibold text-gray-700">{g.title}</p>
                <div className="flex items-center justify-between mt-4">
                  <span className="text-2xl font-bold text-primary">{g.score}</span>
                  <span className="text-lg text-gray-500">/ {g.max_score}</span>
                </div>
                <Progress value={(g.score / g.max_score) * 100} className="mt-2" />
                <p className="text-sm text-muted-foreground mt-3 text-right">{new Date(g.graded_at).toLocaleDateString()}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <CheckCircle className="mx-auto h-12 w-12 text-gray-400" />
          <h3 className="mt-2 text-lg font-medium text-gray-900">Todo en orden</h3>
          <p className="mt-1 text-md text-gray-500">No tienes calificaciones registradas por el momento.</p>
        </div>
      )}
    </div>
  );
};

export default MyGrades;
