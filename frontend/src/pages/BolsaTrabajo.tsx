import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Briefcase, Building, Code, Film, Handshake } from "lucide-react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const BolsaTrabajo = () => {
  const pasantias = [
    { name: "BACOPE S.A.", description: "Fabricación de equipos de refrigeración." },
    { name: "Hangar", description: "Centro de servicios para mantenimiento de vehículos." },
    { name: "CreaPack", description: "Soluciones de packaging innovadoras." },
    { name: "EGEO", description: "Equipamiento e instrumental odontológico." },
    { name: "Municipalidad de Lomas de Zamora", description: "Gestión pública y proyectos comunitarios." },
  ];

  const opportunities = [
    {
      icon: <Building className="w-10 h-10 text-primary" />,
      title: "Pasantías Educativas",
      description: "Nuestros estudiantes de 7º año realizan pasantías en empresas de primer nivel, aplicando sus conocimientos en un entorno laboral real.",
      details: pasantias.map(p => p.name).join(", ") + ".",
    },
    {
      icon: <Code className="w-10 h-10 text-primary" />,
      title: "Oportunidades para Programadores",
      description: "Recomendamos el curso de Oracle ONE, que brinda acceso a una bolsa de trabajos exclusiva con empresas aliadas de Oracle.",
      details: "Una excelente puerta de entrada al mundo laboral de la tecnología.",
    },
    {
      icon: <Handshake className="w-10 h-10 text-primary" />,
      title: "Actividades y Colaboraciones",
      description: "Fomentamos el contacto con el mundo profesional a través de visitas a empresas como Oracle (Junior Achievement) y proyectos con la Municipalidad.",
      details: "Experiencia práctica en cortometrajes, visitas al teatro y más.",
    },
    {
      icon: <Film className="w-10 h-10 text-primary" />,
      title: "Trabajo Freelance",
      description: "Preparamos a los estudiantes para el mundo del trabajo independiente, desarrollando y vendiendo software o servicios de edición de video.",
      details: "Nuestros egresados son emprendedores y creativos.",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-16">
        <motion.div
          className="text-center space-y-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="w-24 h-24 bg-gradient-to-br from-primary to-blue-700 rounded-3xl flex items-center justify-center mx-auto shadow-lg">
            <Briefcase className="h-12 w-12 text-white" />
          </div>
          <h1 className="font-heading font-bold text-4xl lg:text-6xl text-foreground">
            Bolsa de <span className="text-primary">Trabajo</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Descubre las oportunidades laborales y de desarrollo profesional que te esperan.
          </p>
        </motion.div>

        <motion.div
          className="mt-20 grid md:grid-cols-2 gap-10"
          initial="hidden"
          animate="visible"
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
        >
          {opportunities.map((opp, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <Card className="h-full bg-white rounded-xl shadow-md overflow-hidden transform hover:-translate-y-2 transition-transform duration-300 ease-in-out">
                <CardHeader className="flex flex-row items-center gap-4">
                  <div className="flex-shrink-0">{opp.icon}</div>
                  <CardTitle className="font-heading text-2xl text-foreground">{opp.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-base text-muted-foreground">{opp.description}</p>
                  <p className="text-sm text-gray-500 pt-2 border-t border-gray-200">{opp.details}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </main>
      <Footer />
    </div>
  );
};

export default BolsaTrabajo;
