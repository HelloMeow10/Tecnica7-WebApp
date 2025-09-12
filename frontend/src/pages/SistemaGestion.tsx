import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, BookKey, Settings, Users } from "lucide-react";
import { Link } from "react-router-dom";

const SistemaGestion = () => {
  const gestionFeatures = [
    {
      title: "Gestión de Alumnos",
      description: "Administra la información y el seguimiento de los estudiantes.",
      icon: <Users className="h-8 w-8 text-primary" />,
      href: "#",
      disabled: true,
    },
    {
      title: "Gestión de Cursos",
      description: "Organiza los cursos, asignaturas y horarios.",
      icon: <BookKey className="h-8 w-8 text-primary" />,
      href: "#",
      disabled: true,
    },
    {
      title: "Reportes Académicos",
      description: "Genera informes y estadísticas del rendimiento académico.",
      icon: <BarChart className="h-8 w-8 text-primary" />,
      href: "#",
      disabled: true,
    },
    {
      title: "Configuración",
      description: "Ajusta los parámetros y la configuración del sistema.",
      icon: <Settings className="h-8 w-8 text-primary" />,
      href: "#",
      disabled: true,
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-16 pt-32">
        <div className="text-center mb-12">
          <h1 className="font-heading font-bold text-4xl lg:text-5xl text-foreground">
            Sistema de <span className="text-primary">Gestión</span>
          </h1>
          <p className="text-xl text-muted-foreground mt-2">
            Herramientas administrativas para la comunidad educativa.
          </p>
          <p className="text-lg text-amber-600 mt-4 bg-amber-100 border border-amber-300 rounded-lg p-4 max-w-2xl mx-auto">
            Esta sección se encuentra actualmente en desarrollo.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {gestionFeatures.map((feature) => (
            <Link
              to={feature.disabled ? "#" : feature.href}
              key={feature.title}
              className={`group ${feature.disabled ? "cursor-not-allowed" : ""}`}
              onClick={(e) => feature.disabled && e.preventDefault()}
            >
              <Card
                className={`h-full transition-all duration-300 ${
                  feature.disabled
                    ? "bg-muted/50 opacity-60"
                    : "hover:shadow-lg hover:scale-105"
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
      </main>
      <Footer />
    </div>
  );
};

export default SistemaGestion;
