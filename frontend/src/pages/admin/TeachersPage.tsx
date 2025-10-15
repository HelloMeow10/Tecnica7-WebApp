import React, { useState } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { useAuth } from '@/hooks/useAuth';
import { toast } from 'sonner';
import TeacherForm from '@/components/admin/TeacherForm';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PlusCircle, Edit, Trash2 } from 'lucide-react';


interface Teacher {
  teacher_id: number;
  first_name: string;
  last_name: string;
  email: string;
  bio: string;
}

type TeacherFormValues = Omit<Teacher, 'teacher_id'>;

const apiCall = async (url:string, method: string, token: string | null, body?: Partial<Teacher>) => {
  const response = await fetch(url, {
    method,
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    body: body ? JSON.stringify(body) : undefined,
  });
  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || 'Ocurrió un error.');
  }
  return response.json();
};

const AdminTeachersPage: React.FC = () => {
  const { token } = useAuth();
  const queryClient = useQueryClient();
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingTeacher, setEditingTeacher] = useState<Teacher | undefined>(undefined);

  const { data: teachers, isLoading, error } = useQuery<Teacher[]>({
    queryKey: ['teachers'],
    queryFn: () => apiCall('/api/teachers', 'GET', token),
    enabled: !!token,
  });

  const mutationOptions = {
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['teachers'] });
      setIsDialogOpen(false);
      setEditingTeacher(undefined);
    },
    onError: (error: Error) => {
      toast.error(error.message);
    },
  };

  const createMutation = useMutation({
    mutationFn: (newTeacher: TeacherFormValues) => apiCall('/api/teachers', 'POST', token, newTeacher),
    ...mutationOptions,
    onSuccess: () => {
      toast.success('Profesor creado con éxito.');
      mutationOptions.onSuccess();
    }
  });

  const updateMutation = useMutation({
    mutationFn: (updatedTeacher: TeacherFormValues) => apiCall(`/api/teachers/${editingTeacher?.teacher_id}`, 'PUT', token, updatedTeacher),
    ...mutationOptions,
    onSuccess: () => {
      toast.success('Profesor actualizado con éxito.');
      mutationOptions.onSuccess();
    }
  });

  const deleteMutation = useMutation({
    mutationFn: (teacherId: number) => apiCall(`/api/teachers/${teacherId}`, 'DELETE', token),
    ...mutationOptions,
    onSuccess: () => {
      toast.success('Profesor eliminado con éxito.');
      mutationOptions.onSuccess();
    }
  });

  const handleFormSubmit = (values: TeacherFormValues) => {
    if (editingTeacher) {
      updateMutation.mutate(values);
    } else {
      createMutation.mutate(values);
    }
  };

  const handleEditClick = (teacher: Teacher) => {
    setEditingTeacher(teacher);
    setIsDialogOpen(true);
  };

  if (isLoading) return <div className="text-center py-12">Cargando profesores...</div>;
  if (error) return <div className="text-center py-12 text-red-500">Error: {(error as Error).message}</div>;

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Gestión de Profesores</h1>
        <Dialog open={isDialogOpen} onOpenChange={(open) => {
          setIsDialogOpen(open);
          if (!open) setEditingTeacher(undefined);
        }}>
          <DialogTrigger asChild>
            <Button className="flex items-center gap-2">
              <PlusCircle className="w-5 h-5" />
              Añadir Profesor
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>{editingTeacher ? 'Editar Profesor' : 'Añadir Nuevo Profesor'}</DialogTitle>
            </DialogHeader>
            <TeacherForm
              onSubmit={handleFormSubmit}
              isPending={createMutation.isPending || updateMutation.isPending}
              initialData={editingTeacher}
            />
          </DialogContent>
        </Dialog>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Lista de Profesores</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>ID</TableHead>
                <TableHead>Nombre</TableHead>
                <TableHead>Email</TableHead>
                <TableHead className="text-right">Acciones</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {teachers?.map((teacher) => (
                <TableRow key={teacher.teacher_id}>
                  <TableCell className="font-medium">{teacher.teacher_id}</TableCell>
                  <TableCell>{teacher.first_name} {teacher.last_name}</TableCell>
                  <TableCell>{teacher.email}</TableCell>
                  <TableCell className="text-right space-x-2">
                    <Button variant="outline" size="icon" className="mr-2" onClick={() => handleEditClick(teacher)}>
                      <Edit className="w-4 h-4" />
                    </Button>
                    <AlertDialog>
                      <AlertDialogTrigger asChild>
                        <Button variant="destructive" size="icon">
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </AlertDialogTrigger>
                      <AlertDialogContent>
                        <AlertDialogHeader>
                          <AlertDialogTitle>¿Estás seguro?</AlertDialogTitle>
                          <AlertDialogDescription>
                            Esta acción no se puede deshacer. Se eliminará permanentemente al profesor y su cuenta de usuario asociada.
                          </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                          <AlertDialogCancel>Cancelar</AlertDialogCancel>
                          <AlertDialogAction onClick={() => deleteMutation.mutate(teacher.teacher_id)}>
                            Sí, eliminar
                          </AlertDialogAction>
                        </AlertDialogFooter>
                      </AlertDialogContent>
                    </AlertDialog>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminTeachersPage;
