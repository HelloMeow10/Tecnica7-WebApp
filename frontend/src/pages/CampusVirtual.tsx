import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Calendar, GraduationCap, Star, Library, Activity, FileText, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useAuth } from "@/hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import { Skeleton } from "@/components/ui/skeleton";

const CampusVirtual = () => {
  const { token, user } = useAuth();
  const role = user?.role;

  const { data: summary, isLoading: loadingSummary } = useQuery({
    queryKey: ['campus-summary'],
    queryFn: async () => {
      const res = await fetch('/api/campus/my/summary', { headers: { Authorization: `Bearer ${token}` } });
      if (!res.ok) throw new Error('No se pudo cargar el resumen');
      return res.json();
    },
    enabled: !!token,
  });

  const campusFeatures = [
    {
      title: role === 'PROFESOR' ? 'Cursos que dicto' : 'Mis Cursos',
      description: role === 'PROFESOR' ? 'Listado de cursos asignados.' : 'Accede a los cursos en los que estás inscrito.',
      icon: <GraduationCap className="h-8 w-8 text-primary" />,
      href: "/campus/mis-cursos",
      disabled: false,
    },
    {
      title: "Calificaciones",
      description: "Consulta tus notas y el progreso académico.",
      icon: <Star className="h-8 w-8 text-primary" />,
      href: "/campus/calificaciones",
      disabled: role === 'PROFESOR',
    },
    {
      title: "Material de Estudio",
      description: role === 'PROFESOR' ? 'Administra materiales de tus cursos.' : 'Encuentra recursos y apuntes.',
      icon: <BookOpen className="h-8 w-8 text-primary" />,
      href: "/campus/materiales",
      disabled: false,
    },
    {
      title: "Calendario Académico",
      description: "No te pierdas ninguna fecha importante.",
      icon: <Calendar className="h-8 w-8 text-primary" />,
      href: "/calendario-academico",
      disabled: false,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring" as const,
        stiffness: 100,
      },
    },
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />
      <main className="flex-grow container mx-auto px-12 pt-32 pb-12">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 10 }}
          transition={{ duration: 0.50 }}
        >
          <h1 className="font-heading font-bold text-4xl lg:text-5xl text-blak-600 mb-4">
            Campus <span className="text-primary font-bold text-black">Virtual</span>
          </h1>
          <p className="text-xl text-muted-foreground mt-2">
            Tu portal de aprendizaje y colaboración.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 items-start">
          <motion.div className="lg:col-span-2 grid md:grid-cols-2 gap-6" variants={containerVariants} initial="hidden" animate="visible">
            {campusFeatures.map(feature => (
              <motion.div key={feature.title} variants={itemVariants}>
                <Link to={feature.disabled ? '#' : feature.href} className={`group ${feature.disabled ? 'cursor-not-allowed' : ''}`} onClick={(e) => feature.disabled && e.preventDefault()}>
                  <Card className={`h-full transition-all duration-300 bg-white border-blue-400 ${feature.disabled ? 'opacity-60' : 'hover:shadow-lg hover:border-primary'}`}>
                    <CardHeader className="flex-row items-center justify-between">
                      <div className='space-y-1'>
                        <CardTitle className="font-heading text-xl text-blue-800">{feature.title}</CardTitle>
                        <p className="text-muted-foreground text-sm">{feature.description}</p>
                      </div>
                      <div className="p-3 bg-primary/10 rounded-lg">
                        {feature.icon}
                      </div>
                    </CardHeader>
                    <CardContent>
                      {!feature.disabled && (
                        <div className="flex items-center text-sm text-primary font-semibold">
                          <span>{feature.title === 'Cursos que dicto' || feature.title === 'Mis Cursos' ? 'Ver mis cursos' : 'Ir ahora'}</span>
                          <ChevronRight className="h-4 w-4 ml-1 transform transition-transform duration-300 group-hover:translate-x-3" />
                        </div>
                      )}
                      {feature.disabled && (
                        <span className="text-xs font-semibold bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full inline-block">Próximamente</span>
                      )}
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </motion.div>

          <div className="space-y-6">
            <Card className="bg-white border-blue-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-xl"><Activity className="h-5 w-5 text-primary" /> Resumen</CardTitle>
              </CardHeader>
              <CardContent>
                {loadingSummary ? <SummarySkeleton /> : (
                  <div className="space-y-4">
                    <Kpi label={role === 'PROFESOR' ? 'Cursos asignados' : 'Mis cursos'} value={summary?.coursesCount} />
                    {role === 'ALUMNO' && <Kpi label="Promedio General" value={summary?.averageGrade} suffix="/10" />}
                    <Kpi label="Materiales recientes" value={summary?.recentMaterialsCount} />
                  </div>
                )}
              </CardContent>
            </Card>

            {summary?.recentGrades?.length > 0 && role === 'ALUMNO' && (
              <Card className="bg-white border-gray-200">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-xl"><FileText className="h-5 w-5 text-primary" /> Calificaciones Recientes</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    {summary.recentGrades.map((g: any) => (
                      <li key={g.id} className="flex justify-between items-center p-2 border rounded-md hover:bg-gray-50">
                        <span className="truncate max-w-[160px]" title={g.title}>{g.title}</span>
                        <span className="font-semibold text-primary">{g.score}/{g.max_score}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

const Kpi: React.FC<{ label: string; value: number | undefined; suffix?: string }> = ({ label, value, suffix }) => (
  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-md">
    <div className="text-sm uppercase tracking-wide text-muted-foreground">{label}</div>
    <div className="text-xl font-semibold text-gray-800">{value ?? '—'}{value !== undefined && suffix}</div>
  </div>
);

const SummarySkeleton = () => (
  <div className="space-y-4">
    <Skeleton className="h-12 w-full" />
    <Skeleton className="h-12 w-full" />
    <Skeleton className="h-12 w-full" />
  </div>
);

export default CampusVirtual;