import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Calendar, GraduationCap, Star, Library, Activity, FileText } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useAuth } from "@/hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import { Skeleton } from "@/components/ui/skeleton";


const CampusVirtual = () => {
  const { token, user } = useAuth();
  const role = user?.role;

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

  const { data: myCourses } = useQuery({
    queryKey: ['my-courses-campus'],
    queryFn: async () => {
      const res = await fetch('/api/campus/my/courses', { headers: { Authorization: `Bearer ${token}` } });
      if (!res.ok) throw new Error('No se pudieron cargar los cursos');
      return res.json();
    },
    enabled: !!token,
  });

  const { data: myGrades } = useQuery({
    queryKey: ['my-grades-campus'],
    queryFn: async () => {
      const res = await fetch('/api/campus/my/grades', { headers: { Authorization: `Bearer ${token}` } });
      if (!res.ok) throw new Error('No se pudieron cargar las calificaciones');
      return res.json();
    },
    enabled: !!token && role === 'ALUMNO',
  });

  const { data: recentMaterials, isLoading: loadingMaterials } = useQuery({
    queryKey: ['my-materials-recent'],
    queryFn: async () => {
      const res = await fetch('/api/campus/my/materials/recent', { headers: { Authorization: `Bearer ${token}` } });
      if (!res.ok) throw new Error('No se pudieron cargar materiales');
      return res.json();
    },
    enabled: !!token,
  });

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
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-16 pt-32">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="font-heading font-bold text-4xl lg:text-5xl text-foreground">
            Campus <span className="text-primary">Virtual</span>
          </h1>
          <p className="text-xl text-muted-foreground mt-2">
            Tu portal de aprendizaje y colaboración.
          </p>
        </motion.div>
        <motion.div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8" variants={containerVariants} initial="hidden" animate="visible">
          {campusFeatures.map(feature => (
            <motion.div key={feature.title} variants={itemVariants}>
              <Link to={feature.disabled ? '#': feature.href} className={`group ${feature.disabled ? 'cursor-not-allowed':''}`} onClick={(e)=> feature.disabled && e.preventDefault()}>
                <Card className={`h-full transition-all duration-300 ${feature.disabled ? 'bg-muted/50 opacity-60':'hover:shadow-xl hover:scale-105'}`}>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="font-heading text-2xl text-foreground">{feature.title}</CardTitle>
                      {feature.icon}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm">{feature.description}</p>
                    {feature.disabled && (
                      <span className="text-xs font-semibold bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full mt-4 inline-block">Próximamente</span>
                    )}
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-12 grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-xl"><Activity className="h-5 w-5" /> Resumen</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                  <Kpi label={role === 'PROFESOR' ? 'Cursos asignados' : 'Mis cursos'} value={myCourses?.length} />
                  {role === 'ALUMNO' && <Kpi label="Promedio" value={calcAverage(myGrades)} />}
                  <Kpi label="Materiales recientes" value={recentMaterials?.length} />
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-xl"><Library className="h-5 w-5" /> Últimos Materiales</CardTitle>
              </CardHeader>
              <CardContent>
                {loadingMaterials ? (
                  <div className="grid sm:grid-cols-2 gap-4">{[1,2,3,4].map(i => <Skeleton key={i} className="h-16" />)}</div>
                ) : recentMaterials?.length ? (
                  <ul className="space-y-3">
                    {recentMaterials.map((m: any) => (
                      <li key={m.id} className="p-3 border rounded text-sm flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                        <span className="font-medium break-all">{m.title}</span>
                        <span className="text-muted-foreground text-xs">{new Date(m.created_at).toLocaleDateString()} • Curso {m.course_id}</span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <div className="text-sm text-muted-foreground">No hay materiales recientes.</div>
                )}
              </CardContent>
            </Card>
          </div>
          <div className="space-y-6">
            {role === 'ALUMNO' && myGrades?.length ? (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-xl"><FileText className="h-5 w-5" /> Calificaciones recientes</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    {myGrades.slice(0,6).map((g: any) => (
                      <li key={g.id} className="flex justify-between border rounded px-2 py-1">
                        <span className="truncate max-w-[140px]" title={g.title}>{g.title}</span>
                        <span className="text-muted-foreground">{g.score}/{g.max_score}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ) : null}
            {role === 'PROFESOR' && myCourses?.length ? (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-xl"><GraduationCap className="h-5 w-5" /> Mis Cursos</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    {myCourses.map((c: any) => (
                      <li key={c.course_id} className="flex justify-between border rounded px-2 py-1">
                        <span>{c.name}</span>
                        {c.students_count !== undefined && <span className="text-muted-foreground">{c.students_count} alumnos</span>}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ) : null}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

const Kpi: React.FC<{ label: string; value: number | undefined }> = ({ label, value }) => (
  <div className="p-4 border rounded">
    <div className="text-xs uppercase tracking-wide text-muted-foreground">{label}</div>
    <div className="text-2xl font-semibold mt-1">{value ?? '—'}</div>
  </div>
);

function calcAverage(grades: any[] | undefined) {
  if (!grades || !grades.length) return undefined;
  const total = grades.reduce((acc, g) => acc + (g.score / g.max_score), 0);
  const avg = total / grades.length * 10; // escala 0-10
  return Number(avg.toFixed(1));
}

export default CampusVirtual;
