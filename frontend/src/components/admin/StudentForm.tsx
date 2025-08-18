import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';

// Esquema de validación para el formulario
const formSchema = z.object({
  firstName: z.string().min(1, 'El nombre es requerido.'),
  lastName: z.string().min(1, 'El apellido es requerido.'),
  email: z.string().email('Email inválido.'),
  password: z.string().optional(), // La contraseña es opcional al editar
  enrollmentDate: z.string().min(1, 'La fecha de inscripción es requerida.'),
});

// Definimos un esquema más estricto para la creación
const createSchema = formSchema.extend({
  password: z.string().min(6, 'La contraseña debe tener al menos 6 caracteres.'),
});

interface Student {
  student_id: number;
  first_name: string;
  last_name: string;
  email: string;
  enrollment_date: string;
}

interface StudentFormProps {
  onSubmit: (values: z.infer<typeof formSchema>) => void;
  isPending: boolean;
  initialData?: Student;
}

const StudentForm: React.FC<StudentFormProps> = ({ onSubmit, isPending, initialData }) => {
  const isEditMode = !!initialData;

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(isEditMode ? formSchema : createSchema),
    defaultValues: {
      firstName: initialData?.first_name || '',
      lastName: initialData?.last_name || '',
      email: initialData?.email || '',
      password: '',
      enrollmentDate: initialData?.enrollment_date ? new Date(initialData.enrollment_date).toISOString().split('T')[0] : '',
    },
  });

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="firstName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nombre</FormLabel>
              <FormControl>
                <Input placeholder="María" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="lastName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Apellido</FormLabel>
              <FormControl>
                <Input placeholder="García" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input type="email" placeholder="maria.garcia@email.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Contraseña</FormLabel>
              <FormControl>
                <Input type="password" {...field} placeholder={isEditMode ? 'Dejar en blanco para no cambiar' : '********'} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="enrollmentDate"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Fecha de Inscripción</FormLabel>
              <FormControl>
                <Input type="date" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" disabled={isPending}>
          {isPending ? 'Guardando...' : (isEditMode ? 'Guardar Cambios' : 'Crear Alumno')}
        </Button>
      </form>
    </Form>
  );
};

export default StudentForm;
