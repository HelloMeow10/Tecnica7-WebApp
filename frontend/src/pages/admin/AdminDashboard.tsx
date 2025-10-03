import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, GraduationCap, BarChart, Book } from "lucide-react";
import { Link } from "react-router-dom";
import { useAuth } from '@/hooks/useAuth';
import { useQuery } from '@tanstack/react-query';

const AdminDashboard = () => {
  const adminFeatures = [
    {
      title: "Gestión de Alumnos",
      description: "Administrar perfiles, inscripciones y notas de alumnos.",
      icon: <Users className="h-8 w-8 text-primary" />,
      href: "/admin/students",
      disabled: false,
    },
    {
      title: "Gestión de Profesores",
      description: "Administrar perfiles y asignaturas de profesores.",
      icon: <GraduationCap className="h-8 w-8 text-primary" />,
      href: "/admin/teachers",
      disabled: false,
    },
    {
      title: "Gestión de Cursos",
      description: "Crear, editar y eliminar cursos y asignaturas.",
      icon: <Book className="h-8 w-8 text-primary" />,
      href: "/admin/courses",
      disabled: false,
    },
    {
      title: "Reportes y Estadísticas",
      description: "Generar reportes y visualizar datos.",
      icon: <BarChart className="h-8 w-8 text-primary" />,
      href: "/admin/reports",
      disabled: false,
    },
  ];

  const { token } = useAuth();
  const { data } = useQuery({
    queryKey: ['admin-metrics'],
    queryFn: async () => {
      const res = await fetch('/api/admin/metrics', { headers: { Authorization: `Bearer ${token}` } });
      if (!res.ok) throw new Error('No se pudieron cargar las métricas');
      return res.json();
    },
    enabled: !!token,
  });

  return (
    <div>
      <div className="mb-8">
        <h1 className="font-heading font-bold text-4xl text-foreground">
          Sistema de <span className="text-primary">Gestión</span>
        </h1>
        <p className="text-lg text-muted-foreground mt-1">
          Panel de administración central.
        </p>
      </div>
      {/* KPI Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <Card>
          <CardHeader><CardTitle>Alumnos</CardTitle></CardHeader>
          <CardContent className="text-3xl font-bold">{data?.counts?.students ?? '-'}</CardContent>
        </Card>
        <Card>
          <CardHeader><CardTitle>Profesores</CardTitle></CardHeader>
          <CardContent className="text-3xl font-bold">{data?.counts?.teachers ?? '-'}</CardContent>
        </Card>
        <Card>
          <CardHeader><CardTitle>Usuarios</CardTitle></CardHeader>
          <CardContent className="text-3xl font-bold">{data?.counts?.users ?? '-'}</CardContent>
        </Card>
        <Card>
          <CardHeader><CardTitle>Contactos</CardTitle></CardHeader>
          <CardContent className="text-3xl font-bold">{data?.counts?.contacts ?? '-'}</CardContent>
        </Card>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {adminFeatures.map((feature) => (
          <Link
            to={feature.disabled ? "#" : feature.href}
            key={feature.title}
            className={`group ${feature.disabled ? "cursor-not-allowed" : ""}`}
            onClick={(e) => feature.disabled && e.preventDefault()}
          >
            <Card
              className={`h-full transition-shadow duration-300 ${
                feature.disabled
                  ? "bg-muted/50"
                  : "hover:shadow-lg"
              }`}
            >
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="font-heading text-2xl text-foreground">
                    {feature.title}
                  </CardTitle>
                  {feature.icon}
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
      {/* Recent Contacts */}
      <div className="mt-10">
        <h2 className="text-2xl font-heading mb-4">Últimos contactos</h2>
        <div className="space-y-2">
          {data?.recentContacts?.map((c: any) => (
            <div key={c.id} className="flex justify-between bg-muted rounded-md p-3">
              <div>
                <div className="font-semibold">{c.name}</div>
                <div className="text-sm text-muted-foreground">{c.email}</div>
              </div>
              <div className="text-sm">{new Date(c.submitted_at).toLocaleString()}</div>
            </div>
          )) || <div className="text-muted-foreground">Sin registros</div>}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
