import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, GraduationCap, BarChart, Book } from "lucide-react";
import { Link } from "react-router-dom";

const AdminDashboard = () => {
  const adminFeatures = [
    {
      title: "Gestión de Alumnos",
      description: "Administrar perfiles, inscripciones y notas de alumnos.",
      icon: <Users className="h-8 w-8 text-primary" />,
      href: "#",
      disabled: true,
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
      href: "#",
      disabled: true,
    },
    {
      title: "Reportes y Estadísticas",
      description: "Generar reportes y visualizar datos.",
      icon: <BarChart className="h-8 w-8 text-primary" />,
      href: "#",
      disabled: true,
    },
  ];

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
    </div>
  );
};

export default AdminDashboard;
