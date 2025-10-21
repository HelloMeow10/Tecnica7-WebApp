import React from 'react';
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap, Book, Settings, ArrowRight, Building, Users, Briefcase } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useAuth } from "@/hooks/useAuth";

const Dashboard: React.FC = () => {
  const { user } = useAuth();

  const features = [
    {
      title: "Campus Virtual",
      description: "Accede a tus cursos, materiales y calificaciones.",
      href: "/campus-virtual",
      icon: <Briefcase />, 
      color: "from-blue-500 to-indigo-600",
    },
    {
      title: "Biblioteca Digital",
      description: "Explora nuestro catálogo de libros y recursos digitales.",
      href: "/biblioteca-digital",
      icon: <Book />,
      color: "from-green-500 to-emerald-600",
    },
    {
      title: "Sistema de Gestión",
      description: "Administra la información académica y administrativa.",
      href: "/sistema-gestion",
      icon: <Settings />,
      color: "from-purple-500 to-violet-600",
    },
  ];

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
        type: "spring" as const,
        stiffness: 100,
      },
    },
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />
      <main className="flex-grow container mx-auto px-5 py-8 pt-18 md:pt-32">
        <div className="md:flex md:items-start md:space-x-6">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-md shadow-md p-6 mb-6 mt-3 border border-blue-400 md:w-1/3"
          >
            <div className="flex items-start justify-between">
              <div>
                <h1 className="font-heading font-bold text-2xl my-4 text-gray-800">
                  ¡Hola de nuevo, {user?.email ?? 'Estudiante'}!
                </h1>
                <p className="text-base text-muted-foreground mt-1">
                  Bienvenido a tu panel personal. ¿Qué te gustaría hacer hoy?
                </p>
              </div>
              <div className="hidden sm:block">
                <Building className="w-12 h-12 text-primary/20 m-1 px-2" />
              </div>
            </div>
          </motion.div>

          <motion.div
            className="md:flex-1 grid md:grid-cols-3 gap-3"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {features.map((feature) => (
              <motion.div key={feature.title} variants={itemVariants}>
                <Link to={feature.href} className="group block h-full">
                  <Card className={`h-full bg-gradient-to-br ${feature.color} text-white shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 rounded-xl overflow-hidden`}>
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <CardTitle className="font-heading text-2xl text-white">
                          {feature.title}
                        </CardTitle>
                        {React.cloneElement(feature.icon as any, { className: 'h-8 w-8 text-white' })}
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-white opacity-90 mb-4">{feature.description}</p>
                      <div className="flex items-center font-semibold mt-6 text-white/90">
                        <span>Ir ahora</span>
                        <ArrowRight className="h-4 w-4 ml-2 transform transition-transform duration-300 group-hover:translate-x-1 text-white" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8, duration: 0.5 }}>
          <Card className="mt-12 bg-white border-blue-500">
            <CardHeader>
              <CardTitle className="text-xl font-semibold text-gray-800">Accesos Rápidos</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
                <QuickLink href="/campus/mis-cursos" icon={<Users className="w-6 h-6 mx-auto text-primary"/>} label="Mis Cursos" />
                <QuickLink href="/calendario-academico" icon={<GraduationCap className="w-6 h-6 mx-auto text-primary"/>} label="Calendario" />
                <QuickLink href="/biblioteca-digital" icon={<Book className="w-6 h-6 mx-auto text-primary"/>} label="Biblioteca" />
                <QuickLink href="/contacto" icon={<Settings className="w-6 h-6 mx-auto text-primary"/>} label="Soporte" />
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </main>
      <Footer />
    </div>
  );
};

const QuickLink: React.FC<{ href: string; icon: React.ReactNode; label: string }> = ({ href, icon, label }) => (
  <Link to={href} className="group p-4 rounded-lg hover:bg-primary/5 transition-colors duration-200">
    <div className="p-3 bg-primary/10 rounded-full inline-block mb-2 group-hover:bg-primary/20">
      {icon}
    </div>
    <p className="font-medium text-sm text-gray-700 group-hover:text-primary">{label}</p>
  </Link>
);

export default Dashboard;