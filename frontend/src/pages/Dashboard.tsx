import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap, Book, Settings, ArrowRight, Building, Users, Briefcase, ExternalLink, Trash2 } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useAuth } from "@/hooks/useAuth";

const Dashboard = () => {
  const { user } = useAuth();

  const features = [
    {
      title: "Campus Virtual",
      description: "Accede a tus cursos, materiales y calificaciones.",
      href: "/campus-virtual",
      icon: <Briefcase className="h-8 w-8 text-primary" />,
      color: "from-blue-500 to-indigo-600",
    },
    {
      title: "Biblioteca Digital",
      description: "Explora nuestro catálogo de libros y recursos digitales.",
      href: "/biblioteca-digital",
      icon: <Book className="h-8 w-8 text-primary" />,
      color: "from-green-500 to-emerald-600",
    },
    {
      title: "Sistema de Gestión",
      description: "Administra la información académica y administrativa.",
      href: "/sistema-gestion",
      icon: <Settings className="h-8 w-8 text-primary" />,
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
      <main className="flex-grow container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-xl shadow-md p-8 mb-12 border border-gray-200"
        >
          <div className="flex items-center justify-between">
            <div>
              <h1 className="font-heading font-bold text-3xl my-8 text-gray-800">
                ¡Hola de nuevo, {user?.email ?? 'Estudiante'}!
              </h1>
              <p className="text-lg text-muted-foreground mt-1">
                Bienvenido a tu panel personal. ¿Qué te gustaría hacer hoy?
              </p>
            </div>
            <div className="hidden sm:block">
              <Building className="w-16 h-16 text-primary/20" />
            </div>
          </div>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {features.map((feature) => (
            <motion.div key={feature.title} variants={itemVariants}>
              <Link to={feature.href} className="group block h-full">
                <Card className="h-full bg-white text-gray-800 shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 rounded-xl overflow-hidden border border-gray-200">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="font-heading text-2xl text-gray-800">
                        {feature.title}
                      </CardTitle>
                      {feature.icon}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{feature.description}</p>
                    <div className="flex items-center font-semibold mt-6 text-primary">
                      <span>Ir ahora</span>
                      <ArrowRight className="h-4 w-4 ml-2 transform transition-transform duration-300 group-hover:translate-x-1" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8, duration: 0.5 }}>
          <Card className="mt-12 bg-white border-gray-200">
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