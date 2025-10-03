import React, { useMemo, useState } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { useAuth } from '@/hooks/useAuth';
import { toast } from 'sonner';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';

interface CourseRow {
  course_id: number;
  name: string;
  description?: string | null;
  year?: number | null;
  division?: string | null;
  teacher_id?: number | null;
  teacher_name?: string | null;
  students_count: number;
}

const api = async (url: string, method: string, token: string | null, body?: any) => {
  const res = await fetch(url, {
    method,
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    body: body ? JSON.stringify(body) : undefined,
  });
  if (!res.ok) {
    const err = await res.json().catch(() => ({}));
    throw new Error(err.message || 'Ocurrió un error.');
  }
  return res.json();
};

const CoursesPage: React.FC = () => {
  const { token, user } = useAuth();
  const qc = useQueryClient();
  const [isOpen, setIsOpen] = useState(false);
  const [editing, setEditing] = useState<CourseRow | null>(null);
  const [search, setSearch] = useState('');
  const [manageOpen, setManageOpen] = useState(false);
  const [manageCourse, setManageCourse] = useState<CourseRow | null>(null);
  const [subjectsOpen, setSubjectsOpen] = useState(false);
  const [subjectsCourse, setSubjectsCourse] = useState<CourseRow | null>(null);

  const { data, isLoading, error } = useQuery<CourseRow[]>({
    queryKey: ['courses'],
    queryFn: () => api('/api/courses', 'GET', token),
    enabled: !!token,
  });

  const filtered = useMemo(() => {
    if (!data) return [];
    const q = search.toLowerCase();
    return data.filter(c => `${c.name} ${c.teacher_name ?? ''}`.toLowerCase().includes(q));
  }, [data, search]);

  // Manage enrollments: course details and students list
  const { data: courseDetail } = useQuery({
    queryKey: ['course', manageCourse?.course_id],
    queryFn: async () => api(`/api/courses/${manageCourse?.course_id}`, 'GET', token),
    enabled: !!token && !!manageCourse && manageOpen,
  });

  type StudentRow = { student_id: number; first_name: string | null; last_name: string | null; email: string | null };
  const { data: studentsList } = useQuery<StudentRow[]>({
    queryKey: ['students', 'all-for-enroll'],
    queryFn: async () => api('/api/students', 'GET', token),
    enabled: !!token && manageOpen,
  });

  const common = {
    onSuccess: () => { qc.invalidateQueries({ queryKey: ['courses'] }); setIsOpen(false); setEditing(null); },
    onError: (e: Error) => toast.error(e.message),
  };

  const createMutation = useMutation({
    mutationFn: (payload: Partial<CourseRow>) => api('/api/courses', 'POST', token, payload),
    ...common,
  });
  const updateMutation = useMutation({
    mutationFn: (payload: Partial<CourseRow>) => api(`/api/courses/${editing?.course_id}`, 'PUT', token, payload),
    ...common,
  });
  const deleteMutation = useMutation({
    mutationFn: (id: number) => api(`/api/courses/${id}`, 'DELETE', token),
    ...common,
  });

  const enrollMutation = useMutation({
    mutationFn: ({ courseId, student_id }: { courseId: number; student_id: number }) =>
      api(`/api/courses/${courseId}/enroll`, 'POST', token, { student_id }),
    onSuccess: () => {
      toast.success('Alumno inscripto.');
      qc.invalidateQueries({ queryKey: ['courses'] });
      if (manageCourse) qc.invalidateQueries({ queryKey: ['course', manageCourse.course_id] });
    },
    onError: (e: Error) => toast.error(e.message),
  });

  // Subjects logic
  type Subject = { id: number; course_id: number; name: string; order_index: number };
  const { data: subjects } = useQuery<Subject[]>({
    queryKey: ['subjects', subjectsCourse?.course_id],
    queryFn: async () => api(`/api/courses/${subjectsCourse?.course_id}/subjects`, 'GET', token),
    enabled: !!token && !!subjectsCourse && subjectsOpen,
  });
  const addSubjectMutation = useMutation({
    mutationFn: (payload: { name: string }) => api(`/api/courses/${subjectsCourse?.course_id}/subjects`, 'POST', token, payload),
    onSuccess: () => { toast.success('Materia agregada'); if (subjectsCourse) qc.invalidateQueries({ queryKey: ['subjects', subjectsCourse.course_id] }); },
    onError: (e: Error) => toast.error(e.message),
  });
  const updateSubjectMutation = useMutation({
    mutationFn: ({ subjectId, data }: { subjectId: number; data: Partial<Subject> }) => api(`/api/courses/${subjectsCourse?.course_id}/subjects/${subjectId}`, 'PUT', token, data),
    onSuccess: () => { if (subjectsCourse) qc.invalidateQueries({ queryKey: ['subjects', subjectsCourse.course_id] }); },
    onError: (e: Error) => toast.error(e.message),
  });
  const deleteSubjectMutation = useMutation({
    mutationFn: (subjectId: number) => api(`/api/courses/${subjectsCourse?.course_id}/subjects/${subjectId}`, 'DELETE', token),
    onSuccess: () => { toast.success('Materia eliminada'); if (subjectsCourse) qc.invalidateQueries({ queryKey: ['subjects', subjectsCourse.course_id] }); },
    onError: (e: Error) => toast.error(e.message),
  });

  const unenrollMutation = useMutation({
    mutationFn: ({ courseId, studentId }: { courseId: number; studentId: number }) =>
      api(`/api/courses/${courseId}/enroll/${studentId}`, 'DELETE', token),
    onSuccess: () => {
      toast.success('Alumno desinscripto.');
      qc.invalidateQueries({ queryKey: ['courses'] });
      if (manageCourse) qc.invalidateQueries({ queryKey: ['course', manageCourse.course_id] });
    },
    onError: (e: Error) => toast.error(e.message),
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const payload = {
      name: String(form.get('name') || ''),
      description: String(form.get('description') || ''),
      year: form.get('year') ? Number(form.get('year')) : undefined,
      division: String(form.get('division') || ''),
      teacher_id: form.get('teacher_id') ? Number(form.get('teacher_id')) : undefined,
    };
    if (!payload.name) { toast.error('El nombre es requerido.'); return; }
    if (editing) updateMutation.mutate(payload); else createMutation.mutate(payload);
  };

  if (isLoading) return <div>Cargando cursos...</div>;
  if (error) return <div>Error: {(error as Error).message}</div>;

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold">Gestión de Cursos</h1>
        <div className="flex gap-2">
          <Input placeholder="Buscar curso o docente..." value={search} onChange={(e) => setSearch(e.target.value)} />
          <Dialog open={isOpen} onOpenChange={(o) => { setIsOpen(o); if (!o) setEditing(null); }}>
            <DialogTrigger asChild>
              <Button onClick={() => setEditing(null)}>Nuevo Curso</Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>{editing ? 'Editar curso' : 'Nuevo curso'}</DialogTitle>
              </DialogHeader>
              <form onSubmit={handleSubmit} className="space-y-3">
                <Input name="name" placeholder="Nombre" defaultValue={editing?.name} />
                <Input name="description" placeholder="Descripción" defaultValue={editing?.description ?? ''} />
                <div className="grid grid-cols-2 gap-2">
                  <Input name="year" type="number" placeholder="Año" defaultValue={editing?.year ?? ''} />
                  <Input name="division" placeholder="División" defaultValue={editing?.division ?? ''} />
                </div>
                <Input name="teacher_id" type="number" placeholder="ID docente (opcional)" defaultValue={editing?.teacher_id ?? ''} />
                <div className="flex justify-end gap-2">
                  <Button type="button" variant="outline" onClick={() => setIsOpen(false)}>Cancelar</Button>
                  <Button type="submit" disabled={createMutation.isPending || updateMutation.isPending}>
                    {createMutation.isPending || updateMutation.isPending ? 'Guardando...' : 'Guardar'}
                  </Button>
                </div>
              </form>
            </DialogContent>
          </Dialog>
        </div>
      </div>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>ID</TableHead>
            <TableHead>Nombre</TableHead>
            <TableHead>Docente</TableHead>
            <TableHead>Alumnos</TableHead>
            <TableHead>Inscripciones</TableHead>
            <TableHead className="text-right">Acciones</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filtered?.map(c => (
            <TableRow key={c.course_id}>
              <TableCell>{c.course_id}</TableCell>
              <TableCell>{c.name}</TableCell>
              <TableCell>{c.teacher_name ?? '-'}</TableCell>
              <TableCell>{c.students_count}</TableCell>
              <TableCell>
                <Button
                  variant="secondary"
                  size="sm"
                  onClick={() => { setManageCourse(c); setManageOpen(true); }}
                >Gestionar</Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="ml-2"
                  onClick={() => { setSubjectsCourse(c); setSubjectsOpen(true); }}
                >Materias</Button>
              </TableCell>
              <TableCell className="text-right">
                <Button variant="outline" size="sm" className="mr-2" onClick={() => { setEditing(c); setIsOpen(true); }}>Editar</Button>
                <Button variant="destructive" size="sm" onClick={() => deleteMutation.mutate(c.course_id)}>Eliminar</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

        {/* Manage Enrollments Dialog */}
        <Dialog open={manageOpen} onOpenChange={(o) => { setManageOpen(o); if (!o) setManageCourse(null); }}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Inscripciones {manageCourse ? `- ${manageCourse.name}` : ''}</DialogTitle>
            </DialogHeader>
            <div className="space-y-4">
              <form
                className="flex gap-2"
                onSubmit={(e) => {
                  e.preventDefault();
                  const form = new FormData(e.currentTarget as HTMLFormElement);
                  const studentId = Number(form.get('student_id'));
                  if (!studentId || !manageCourse) return;
                  enrollMutation.mutate({ courseId: manageCourse.course_id, student_id: studentId });
                  (e.currentTarget as HTMLFormElement).reset();
                }}
              >
                <select name="student_id" className="w-full border rounded px-2 py-2">
                  <option value="">Seleccionar alumno...</option>
                  {studentsList?.map(s => (
                    <option key={s.student_id} value={s.student_id}>
                      {`${s.first_name ?? ''} ${s.last_name ?? ''}`.trim()} - {s.email}
                    </option>
                  ))}
                </select>
                <Button type="submit" disabled={enrollMutation.isPending}>Inscribir</Button>
              </form>

              <div>
                <h3 className="font-semibold mb-2">Alumnos inscriptos</h3>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Nombre</TableHead>
                      <TableHead>Email</TableHead>
                      <TableHead className="text-right">Acciones</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {courseDetail?.enrollments?.length
                      ? courseDetail.enrollments.map((e: any) => (
                        <TableRow key={e.id}>
                          <TableCell>{`${e.student?.user?.first_name ?? ''} ${e.student?.user?.last_name ?? ''}`.trim()}</TableCell>
                          <TableCell>{e.student?.user?.email}</TableCell>
                          <TableCell className="text-right">
                            <Button
                              variant="destructive"
                              size="sm"
                              onClick={() => unenrollMutation.mutate({ courseId: courseDetail.course_id, studentId: e.student_id })}
                            >Desinscribir</Button>
                          </TableCell>
                        </TableRow>
                      ))
                      : (
                        <TableRow>
                          <TableCell colSpan={3} className="text-center text-muted-foreground">Sin inscripciones</TableCell>
                        </TableRow>
                      )}
                  </TableBody>
                </Table>
              </div>
            </div>
          </DialogContent>
        </Dialog>

        {/* Manage Subjects Dialog */}
        <Dialog open={subjectsOpen} onOpenChange={(o) => { setSubjectsOpen(o); if (!o) setSubjectsCourse(null); }}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Materias {subjectsCourse ? `- ${subjectsCourse.name}` : ''}</DialogTitle>
            </DialogHeader>
            <div className="space-y-4">
              {user?.role === 'DIRECTOR' && (
              <form
                className="flex gap-2"
                onSubmit={(e) => {
                  e.preventDefault();
                  const form = new FormData(e.currentTarget as HTMLFormElement);
                  const name = String(form.get('name') || '').trim();
                  if (!name || !subjectsCourse) return;
                  addSubjectMutation.mutate({ name });
                  (e.currentTarget as HTMLFormElement).reset();
                }}
              >
                <Input name="name" placeholder="Nueva materia..." className="w-full" />
                <Button type="submit" disabled={addSubjectMutation.isPending}>Agregar</Button>
              </form>
              )}

              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Orden</TableHead>
                    <TableHead>Nombre</TableHead>
                    <TableHead className="text-right">Acciones</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {subjects?.length ? subjects.map((s) => (
                    <TableRow key={s.id}>
                      <TableCell>{s.order_index + 1}</TableCell>
                      <TableCell>
                        {user?.role === 'DIRECTOR' ? (
                          <input
                            defaultValue={s.name}
                            className="w-full border rounded px-2 py-1"
                            onBlur={(e) => {
                              const val = e.target.value.trim();
                              if (val && val !== s.name) updateSubjectMutation.mutate({ subjectId: s.id, data: { name: val } });
                            }}
                          />
                        ) : (
                          <span>{s.name}</span>
                        )}
                      </TableCell>
                      <TableCell className="text-right space-x-2">
                        {user?.role === 'DIRECTOR' ? (
                          <>
                            <Button
                              variant="secondary"
                              size="sm"
                              onClick={() => {
                                const idx = s.order_index;
                                if (!subjects || idx === 0) return;
                                const prev = subjects.find(x => x.order_index === idx - 1);
                                if (!prev) return;
                                updateSubjectMutation.mutate({ subjectId: prev.id, data: { order_index: idx } });
                                updateSubjectMutation.mutate({ subjectId: s.id, data: { order_index: idx - 1 } });
                              }}
                            >▲</Button>
                            <Button
                              variant="secondary"
                              size="sm"
                              onClick={() => {
                                if (!subjects) return;
                                const idx = s.order_index;
                                const next = subjects.find(x => x.order_index === idx + 1);
                                if (!next) return;
                                updateSubjectMutation.mutate({ subjectId: next.id, data: { order_index: idx } });
                                updateSubjectMutation.mutate({ subjectId: s.id, data: { order_index: idx + 1 } });
                              }}
                            >▼</Button>
                            <Button variant="destructive" size="sm" onClick={() => deleteSubjectMutation.mutate(s.id)}>Eliminar</Button>
                          </>
                        ) : null}
                      </TableCell>
                    </TableRow>
                  )) : (
                    <TableRow>
                      <TableCell colSpan={3} className="text-center text-muted-foreground">Sin materias</TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </div>
          </DialogContent>
        </Dialog>
    </div>
  );
};

export default CoursesPage;
