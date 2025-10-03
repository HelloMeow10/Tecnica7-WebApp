import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, BookKey, Users, FileText, GraduationCap, Activity } from "lucide-react";
import { Link } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import { Skeleton } from "@/components/ui/skeleton";
import { Badge } from "@/components/ui/badge";

interface MetricsResponse {
  usersCount: number;
  studentsCount: number;
  teachersCount: number;
  contactsCount: number;
  recentContacts: Array<{ id: number; name: string; email: string; submitted_at: string }>;
}

const SistemaGestion = () => {
  const { token, user } = useAuth();

  const { data: metrics, isLoading: loadingMetrics, error } = useQuery<MetricsResponse>({
    queryKey: ["admin-metrics"],
    queryFn: async () => {
      const res = await fetch('/api/admin/metrics', { headers: { Authorization: `Bearer ${token}` } });
      if (!res.ok) throw new Error('No se pudieron cargar los indicadores');
      return res.json();
    },
    enabled: !!token && !!user && user.role === 'DIRECTOR'
  });

  const featureCards = [
    {
      title: "Alumnos",
      description: "Listado y gestión de estudiantes.",
      icon: <Users className="h-7 w-7 text-primary" />,
      href: "/admin/students",
    },
    {
      title: "Cursos",
      description: "Administrar cursos y materias.",
      icon: <BookKey className="h-7 w-7 text-primary" />,
      href: "/admin/courses",
    },
    {
      title: "Reportes",
      description: "Indicadores y estadísticas.",
      icon: <BarChart className="h-7 w-7 text-primary" />,
      href: "/admin/reports",
    },
    {
      title: "Campus Virtual",
      description: "Vista académica para alumnos y docentes.",
      icon: <GraduationCap className="h-7 w-7 text-primary" />,
      href: "/campus",
    }
  ];

  const kpis = [
    { label: 'Usuarios', value: metrics?.usersCount },
    { label: 'Alumnos', value: metrics?.studentsCount },
    { label: 'Docentes', value: metrics?.teachersCount },
    { label: 'Mensajes contacto', value: metrics?.contactsCount },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-16 pt-32">
        <div className="text-center mb-12">
          <h1 className="font-heading font-bold text-4xl lg:text-5xl text-foreground">
            Sistema de <span className="text-primary">Gestión</span>
          </h1>
          <p className="text-xl text-muted-foreground mt-2 max-w-3xl mx-auto">
            Panel central para administración académica y acceso rápido a módulos clave.
          </p>
          {user?.role !== 'DIRECTOR' && (
            <p className="mt-4 text-sm text-muted-foreground">Acceso limitado: algunas métricas solo visibles para Dirección.</p>
          )}
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {featureCards.map(card => (
            <Link key={card.title} to={card.href} className="group">
              <Card className="h-full transition-all duration-300 hover:shadow-lg hover:scale-[1.02]">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="font-heading text-xl text-foreground">{card.title}</CardTitle>
                    {card.icon}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{card.description}</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        {user?.role === 'DIRECTOR' && (
          <div className="mb-10">
            <h2 className="font-heading text-2xl mb-4 flex items-center gap-2"><Activity className="h-5 w-5" /> Indicadores</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {kpis.map(k => (
                <Card key={k.label} className="relative overflow-hidden">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium text-muted-foreground">{k.label}</CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    {loadingMetrics ? <Skeleton className="h-8 w-16" /> : (
                      <div className="text-3xl font-bold">{k.value ?? '—'}</div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {user?.role === 'DIRECTOR' && (
          <div>
            <h2 className="font-heading text-2xl mb-4 flex items-center gap-2"><FileText className="h-5 w-5" /> Últimos contactos</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {loadingMetrics && !metrics && [1,2,3].map(i => <Skeleton key={i} className="h-24" />)}
              {metrics?.recentContacts?.slice(0,6).map(rc => (
                <Card key={rc.id}>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base flex items-center justify-between">
                      <span>{rc.name}</span>
                      <Badge variant="secondary">{new Date(rc.submitted_at).toLocaleDateString()}</Badge>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-xs text-muted-foreground break-all">{rc.email}</p>
                  </CardContent>
                </Card>
              ))}
              {metrics && metrics.recentContacts.length === 0 && (
                <div className="text-sm text-muted-foreground">Sin mensajes recientes.</div>
              )}
              {error && <div className="text-sm text-red-500">Error al cargar métricas.</div>}
            </div>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default SistemaGestion;
