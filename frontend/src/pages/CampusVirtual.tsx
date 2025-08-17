import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Calendar, GraduationCap, Star } from "lucide-react";
import { Link } from "react-router-dom";

const CampusVirtual = () => {
  const campusFeatures = [
    {
      title: "Mis Cursos",
      description: "Accede a los cursos en los que estás inscrito.",
      icon: <GraduationCap className="h-8 w-8 text-primary" />,
      href: "#",
      disabled: true,
    },
    {
      title: "Calificaciones",
      description: "Consulta tus notas y el progreso académico.",
      icon: <Star className="h-8 w-8 text-primary" />,
      href: "#",
      disabled: true,
    },
    {
      title: "Material de Estudio",
      description: "Encuentra recursos, apuntes y material de clase.",
      icon: <BookOpen className="h-8 w-8 text-primary" />,
      href: "#",
      disabled: true,
    },
    {
      title: "Calendario Académico",
      description: "No te pierdas ninguna fecha importante.",
      icon: <Calendar className="h-8 w-8 text-primary" />,
      href: "/calendario-academico",
      disabled: false,
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="font-heading font-bold text-4xl lg:text-5xl text-foreground">
            Campus <span className="text-primary">Virtual</span>
          </h1>
          <p className="text-xl text-muted-foreground mt-2">
            Tu portal de aprendizaje y colaboración.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {campusFeatures.map((feature) => (
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
      </main>
      <Footer />
    </div>
  );
};

export default CampusVirtual;
