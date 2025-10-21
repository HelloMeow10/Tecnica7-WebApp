import React, { useState } from 'react';
import { useAuth } from '@/hooks/useAuth';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { ExternalLink, Trash2 } from 'lucide-react';

const Materials: React.FC = () => {
  const { token, user } = useAuth();
  const qc = useQueryClient();
  const [courseId, setCourseId] = useState<number | ''>('');

  const { data: myCourses } = useQuery({
    queryKey: ['my-courses'],
    queryFn: async () => {
      const res = await fetch('/api/campus/my/courses', { headers: { Authorization: `Bearer ${token}` } });
      if (!res.ok) throw new Error('No se pudieron cargar cursos');
      return res.json();
    },
    enabled: !!token,
  });

  const { data: materials } = useQuery({
    queryKey: ['materials', courseId],
    queryFn: async () => {
      const res = await fetch(`/api/campus/courses/${courseId}/materials`, { headers: { Authorization: `Bearer ${token}` } });
      if (!res.ok) throw new Error('No se pudieron cargar materiales');
      return res.json();
    },
    enabled: !!token && !!courseId,
  });

  const createMutation = useMutation({
    mutationFn: async (payload: { title: string; description?: string; url?: string }) => {
      const res = await fetch(`/api/campus/courses/${courseId}/materials`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error('No se pudo crear el material');
      return res.json();
    },
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ['materials', courseId] });
    }
  });

  const deleteMutation = useMutation({
    mutationFn: async (id: number) => {
      const res = await fetch(`/api/campus/courses/materials/${id}`, { method: 'DELETE', headers: { Authorization: `Bearer ${token}` } });
      if (!res.ok) throw new Error('No se pudo borrar el material');
      return res.json();
    },
    onSuccess: () => qc.invalidateQueries({ queryKey: ['materials', courseId] })
  });

  return (
    <div className="space-y-4">
      <div className="flex gap-2">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {myCourses?.map((c: any) => (
            <Card
              key={c.course_id}
              className={`cursor-pointer border-2 ${courseId === c.course_id ? 'border-primary' : 'border-transparent'} hover:shadow-lg transition-shadow duration-300`}
              onClick={() => setCourseId(c.course_id)}
            >
              <CardHeader>
                <CardTitle className="text-xl font-bold">{c.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{c.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {courseId && (
        <div className="space-y-3">
          <h3 className="font-semibold">Materiales</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {materials?.length ? materials.map((m: any) => (
              <Card key={m.id} className="bg-white shadow-md hover:shadow-lg transition-shadow duration-300 rounded-lg">
                <CardHeader>
                  <CardTitle className="text-xl font-bold">{m.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{m.description}</p>
                  <div className="flex items-center justify-between mt-4">
                    {m.url && (
                      <a href={m.url} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline flex items-center">
                        <ExternalLink className="w-4 h-4 mr-1" />
                        Abrir
                      </a>
                    )}
                    {(user?.role === 'PROFESOR' || user?.role === 'DIRECTOR') && (
                      <Button variant="destructive" size="sm" onClick={() => deleteMutation.mutate(m.id)}>
                        <Trash2 className="w-4 h-4 mr-1" />
                        Eliminar
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            )) : <div className="text-muted-foreground col-span-full text-center py-12">No hay materiales disponibles para este curso.</div>}
          </div>

          {(user?.role === 'PROFESOR' || user?.role === 'DIRECTOR') && (
            <Card className="mt-6">
              <CardHeader>
                <CardTitle>Agregar Nuevo Material</CardTitle>
              </CardHeader>
              <CardContent>
                <form
                  className="grid grid-cols-1 md:grid-cols-2 gap-4"
                  onSubmit={(e) => {
                    e.preventDefault();
                    const fd = new FormData(e.currentTarget as HTMLFormElement);
                    const payload = {
                      title: String(fd.get('title') || ''),
                      description: String(fd.get('description') || ''),
                      url: String(fd.get('url') || ''),
                    };
                    if (!payload.title) return;
                    createMutation.mutate(payload);
                    (e.currentTarget as HTMLFormElement).reset();
                  }}
                >
                  <div className="col-span-2">
                    <Input name="title" placeholder="Título del material" className="w-full" />
                  </div>
                  <div className="col-span-2">
                    <Textarea name="description" placeholder="Descripción del material" className="w-full" />
                  </div>
                  <div className="col-span-2">
                    <Input name="url" placeholder="URL del recurso (opcional)" className="w-full" />
                  </div>
                  <div className="col-span-2 text-right">
                    <Button type="submit" disabled={createMutation.isPending}>
                      {createMutation.isPending ? 'Agregando...' : 'Agregar Material'}
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          )}
        </div>
      )}
    </div>
  );
};

export default Materials;
