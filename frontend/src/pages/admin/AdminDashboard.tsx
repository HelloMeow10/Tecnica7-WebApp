import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, GraduationCap, BarChart, Book, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useAuth } from '@/hooks/useAuth';
import { useQuery } from '@tanstack/react-query';
import { motion } from "framer-motion";

const AdminDashboard = () => {
  const adminFeatures = [
    {
      title: "Gestión de Alumnos",
      description: "Administrar perfiles, inscripciones y notas de alumnos.",
      icon: <Users className="h-8 w-8 text-white" />,
      href: "/admin/students",
      color: "from-blue-500 to-indigo-600",
    },
    {
      title: "Gestión de Profesores",
      description: "Administrar perfiles y asignaturas de profesores.",
      icon: <GraduationCap className="h-8 w-8 text-white" />,
      href: "/admin/teachers",
      color: "from-green-500 to-emerald-600",
    },
    {
      title: "Gestión de Cursos",
      description: "Crear, editar y eliminar cursos y asignaturas.",
      icon: <Book className="h-8 w-8 text-white" />,
      href: "/admin/courses",
      color: "from-purple-500 to-violet-600",
    },
    {
      title: "Reportes y Estadísticas",
      description: "Generar reportes y visualizar datos.",
      icon: <BarChart className="h-8 w-8 text-white" />,
      href: "/admin/reports",
      color: "from-red-500 to-orange-600",
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };

  return (
    <div className="p-4 md:p-6">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-gradient-to-r from-gray-100 to-white-200 rounded-xl shadow-md p-8 mb-12 border border-gray-500"
      >
        <div className="flex items-center justify-between">
          <div>
            <h1 className="font-heading font-bold text-3xl text-gray-800">
              Panel de Administración
            </h1>
            <p className="text-lg text-muted-foreground mt-1">
              Bienvenido al sistema de gestión.
            </p>
          </div>
        </div>
      </motion.div>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants}>
          <Card className="bg-gradient-to-r from-gray-100 to-white-200 shadow-md rounded-lg * border-gray-500">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Alumnos</CardTitle>
              <Users className="w-5 h-5 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-gray-800">{data?.counts?.students ?? '-'}</div>
            </CardContent>
          </Card>
        </motion.div>
        <motion.div variants={itemVariants}>
          <Card className="bg-gradient-to-r from-gray-100 to-white-200 shadow-md rounded-lg border-gray-500">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Profesores</CardTitle>
              <GraduationCap className="w-5 h-5 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-gray-800">{data?.counts?.teachers ?? '-'}</div>
            </CardContent>
          </Card>
        </motion.div>
        <motion.div variants={itemVariants}>
          <Card className="bg-gradient-to-r from-gray-100 to-white-200 shadow-md rounded-lg border-gray-500">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Usuarios</CardTitle>
              <Users className="w-5 h-5 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-gray-800">{data?.counts?.users ?? '-'}</div>
            </CardContent>
          </Card>
        </motion.div>
        <motion.div variants={itemVariants}>
          <Card className="bg-gradient-to-r from-gray-100 to-white-200 shadow-md rounded-lg border-gray-500">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Contactos</CardTitle>
              <Book className="w-5 h-5 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-gray-800">{data?.counts?.contacts ?? '-'}</div>
            </CardContent>
          </Card>
        </motion.div>
      </motion.div>

      <motion.div
        className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {adminFeatures.map((feature) => (
          <motion.div key={feature.title} variants={itemVariants}>
            <Link to={feature.href} className="group block h-full">
              <Card className={`h-full bg-gradient-to-br ${feature.color} text-white shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 rounded-xl overflow-hidden`}>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="font-heading text-2xl">
                      {feature.title}
                    </CardTitle>
                    {feature.icon}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="opacity-90 mb-4">{feature.description}</p>
                  <div className="flex items-center font-semibold mt-6">
                    <span>Ir ahora</span>
                    <ArrowRight className="h-4 w-4 ml-2 transform transition-transform duration-300 group-hover:translate-x-1" />
                  </div>
                </CardContent>
              </Card>
            </Link>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.5 }}
        className="mt-12"
      >
        <Card className="bg-white shadow-md rounded-lg">
          <CardHeader>
            <CardTitle className="text-xl font-semibold text-gray-800">Últimos Contactos</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {data?.recentContacts?.length ? data.recentContacts.map((c: any) => (
                <div key={c.id} className="flex items-center justify-between p-3 rounded-md hover:bg-gray-50 transition-colors">
                  <div className="flex items-center">
                    <div className="p-2 bg-primary/10 rounded-full mr-4">
                      <Users className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-800">{c.name}</div>
                      <div className="text-sm text-muted-foreground">{c.email}</div>
                    </div>
                  </div>
                  <div className="text-sm text-muted-foreground">{new Date(c.submitted_at).toLocaleDateString()}</div>
                </div>
              )) : <div className="text-center text-muted-foreground py-8">No hay contactos recientes.</div>}
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
};

export default AdminDashboard;
