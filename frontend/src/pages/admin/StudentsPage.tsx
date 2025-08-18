import React, { useState } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { useAuth } from '@/hooks/useAuth';
import { toast } from 'sonner';
import StudentForm from '@/components/admin/StudentForm';
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


interface Student {
  student_id: number;
  first_name: string;
  last_name: string;
  email: string;
  enrollment_date: string;
}

type StudentFormValues = Omit<Student, 'student_id'>;

const apiCall = async (url:string, method: string, token: string | null, body?: Partial<Student>) => {
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

const AdminStudentsPage: React.FC = () => {
  const { token } = useAuth();
  const queryClient = useQueryClient();
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingStudent, setEditingStudent] = useState<Student | undefined>(undefined);

  const { data: students, isLoading, error } = useQuery<Student[]>({
    queryKey: ['students'],
    queryFn: () => apiCall('/api/students', 'GET', token),
    enabled: !!token,
  });

  const mutationOptions = {
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['students'] });
      setIsDialogOpen(false);
      setEditingStudent(undefined);
    },
    onError: (error: Error) => {
      toast.error(error.message);
    },
  };

  const createMutation = useMutation({
    mutationFn: (newStudent: StudentFormValues) => apiCall('/api/students', 'POST', token, newStudent),
    ...mutationOptions,
    onSuccess: () => {
      toast.success('Alumno creado con éxito.');
      mutationOptions.onSuccess();
    }
  });

  const updateMutation = useMutation({
    mutationFn: (updatedStudent: StudentFormValues) => apiCall(`/api/students/${editingStudent?.student_id}`, 'PUT', token, updatedStudent),
    ...mutationOptions,
    onSuccess: () => {
      toast.success('Alumno actualizado con éxito.');
      mutationOptions.onSuccess();
    }
  });

  const deleteMutation = useMutation({
    mutationFn: (studentId: number) => apiCall(`/api/students/${studentId}`, 'DELETE', token),
    ...mutationOptions,
    onSuccess: () => {
      toast.success('Alumno eliminado con éxito.');
      mutationOptions.onSuccess();
    }
  });

  const handleFormSubmit = (values: StudentFormValues) => {
    if (editingStudent) {
      updateMutation.mutate(values);
    } else {
      createMutation.mutate(values);
    }
  };

  const handleEditClick = (student: Student) => {
    setEditingStudent(student);
    setIsDialogOpen(true);
  };

  if (isLoading) return <div>Cargando alumnos...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Gestión de Alumnos</h1>
        <Dialog open={isDialogOpen} onOpenChange={(open) => {
          setIsDialogOpen(open);
          if (!open) setEditingStudent(undefined);
        }}>
          <DialogTrigger asChild>
            <Button>Añadir Alumno</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>{editingStudent ? 'Editar Alumno' : 'Añadir Nuevo Alumno'}</DialogTitle>
            </DialogHeader>
            <StudentForm
              onSubmit={handleFormSubmit}
              isPending={createMutation.isPending || updateMutation.isPending}
              initialData={editingStudent}
            />
          </DialogContent>
        </Dialog>
      </div>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>ID</TableHead>
            <TableHead>Nombre</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Fecha de Inscripción</TableHead>
            <TableHead className="text-right">Acciones</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {students?.map((student) => (
            <TableRow key={student.student_id}>
              <TableCell>{student.student_id}</TableCell>
              <TableCell>{student.first_name} {student.last_name}</TableCell>
              <TableCell>{student.email}</TableCell>
              <TableCell>{new Date(student.enrollment_date).toLocaleDateString()}</TableCell>
              <TableCell className="text-right">
                <Button variant="outline" size="sm" className="mr-2" onClick={() => handleEditClick(student)}>Editar</Button>
                <AlertDialog>
                  <AlertDialogTrigger asChild>
                    <Button variant="destructive" size="sm">Eliminar</Button>
                  </AlertDialogTrigger>.
                  <AlertDialogContent>
                    <AlertDialogHeader>
                      <AlertDialogTitle>¿Estás seguro?</AlertDialogTitle>
                      <AlertDialogDescription>
                        Esta acción no se puede deshacer. Se eliminará permanentemente al alumno y su cuenta de usuario asociada.
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                      <AlertDialogCancel>Cancelar</AlertDialogCancel>
                      <AlertDialogAction onClick={() => deleteMutation.mutate(student.student_id)}>
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
    </div>
  );
};

export default AdminStudentsPage;
