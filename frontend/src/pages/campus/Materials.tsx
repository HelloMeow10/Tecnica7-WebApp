import React, { useState } from 'react';
import { useAuth } from '@/hooks/useAuth';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { Button } from '@/components/ui/button';

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
        <select className="border rounded px-2 py-2" value={courseId} onChange={(e) => setCourseId(e.target.value ? Number(e.target.value) : '')}>
          <option value="">Selecciona un curso...</option>
          {myCourses?.map((c: any) => (
            <option key={c.course_id} value={c.course_id}>{c.name}</option>
          ))}
        </select>
      </div>

      {courseId && (
        <div className="space-y-3">
          <h3 className="font-semibold">Materiales</h3>
          <div className="space-y-2">
            {materials?.length ? materials.map((m: any) => (
              <div key={m.id} className="p-3 border rounded flex items-center justify-between">
                <div>
                  <div className="font-semibold">{m.title}</div>
                  <div className="text-sm text-muted-foreground">{m.description}</div>
                </div>
                {m.url && <a href={m.url} target="_blank" className="text-primary underline">Abrir</a>}
                {(user?.role === 'PROFESOR' || user?.role === 'DIRECTOR') && (
                  <Button variant="destructive" size="sm" onClick={() => deleteMutation.mutate(m.id)}>Eliminar</Button>
                )}
              </div>
            )) : <div className="text-muted-foreground">Sin materiales</div>}
          </div>

          {(user?.role === 'PROFESOR' || user?.role === 'DIRECTOR') && (
            <form
              className="flex flex-col md:flex-row gap-2"
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
              <input name="title" placeholder="Título" className="border rounded px-2 py-2 flex-1" />
              <input name="description" placeholder="Descripción" className="border rounded px-2 py-2 flex-1" />
              <input name="url" placeholder="URL (opcional)" className="border rounded px-2 py-2 flex-1" />
              <Button type="submit">Agregar</Button>
            </form>
          )}
        </div>
      )}
    </div>
  );
};

export default Materials;
