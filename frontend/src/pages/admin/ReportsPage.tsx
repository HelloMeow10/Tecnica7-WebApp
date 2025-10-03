import React from 'react';
import { useAuth } from '@/hooks/useAuth';
import { useQuery } from '@tanstack/react-query';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';

const api = async (url: string, token: string | null) => {
  const res = await fetch(url, { headers: { 'Authorization': `Bearer ${token}` } });
  if (!res.ok) throw new Error('Error al cargar los reportes');
  return res.json();
};

const ReportsPage: React.FC = () => {
  const { token } = useAuth();
  const { data, isLoading, error } = useQuery({
    queryKey: ['reports'],
    queryFn: () => api('/api/courses/reports', token),
    enabled: !!token,
  });

  if (isLoading) return <div>Cargando reportes...</div>;
  if (error) return <div>Error: {(error as Error).message}</div>;

  const { coursesCount, enrollmentsCount, topCourses, monthlyEnrollments } = data as any;

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardHeader><CardTitle>Cursos</CardTitle></CardHeader>
          <CardContent className="text-2xl font-bold">{coursesCount}</CardContent>
        </Card>
        <Card>
          <CardHeader><CardTitle>Inscripciones</CardTitle></CardHeader>
          <CardContent className="text-2xl font-bold">{enrollmentsCount}</CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader><CardTitle>Top cursos por inscripciones</CardTitle></CardHeader>
        <CardContent style={{ width: '100%', height: 320 }}>
          <ResponsiveContainer>
            <BarChart data={topCourses} margin={{ left: 10, right: 10, top: 10, bottom: 10 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" hide={topCourses?.length > 6} />
              <YAxis allowDecimals={false} />
              <Tooltip />
              <Bar dataKey="count" fill="#2563eb" radius={[4,4,0,0]} />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      <Card>
        <CardHeader><CardTitle>Inscripciones por mes</CardTitle></CardHeader>
        <CardContent style={{ width: '100%', height: 320 }}>
          <ResponsiveContainer>
            <BarChart data={monthlyEnrollments} margin={{ left: 10, right: 10, top: 10, bottom: 10 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis allowDecimals={false} />
              <Tooltip />
              <Bar dataKey="count" fill="#10b981" radius={[4,4,0,0]} />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  );
};

export default ReportsPage;
