import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap, Book, Settings, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const features = [
    {
      title: "Campus Virtual",
      description: "Accede a tus cursos, materiales y calificaciones.",
      href: "/campus-virtual",
      icon: <GraduationCap className="h-8 w-8 text-primary" />,
    },
    {
      title: "Biblioteca Digital",
      description: "Explora nuestro catálogo de libros y recursos digitales.",
      href: "/biblioteca-digital",
      icon: <Book className="h-8 w-8 text-primary" />,
    },
    {
      title: "Sistema de Gestión",
      description: "Administra la información académica y administrativa.",
      href: "/sistema-gestion",
      icon: <Settings className="h-8 w-8 text-primary" />,
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="font-heading font-bold text-4xl lg:text-5xl text-foreground">
            Panel de Usuario
          </h1>
          <p className="text-xl text-muted-foreground mt-2">
            Bienvenido a tu espacio personal.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature) => (
            <Link to={feature.href} key={feature.title} className="group">
              <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="font-heading text-2xl text-foreground">
                      {feature.title}
                    </CardTitle>
                    {feature.icon}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{feature.description}</p>
                  <div className="flex items-center text-primary font-semibold">
                    <span>Ir ahora</span>
                    <ArrowRight className="h-4 w-4 ml-2 transform transition-transform duration-300 group-hover:translate-x-1" />
                  </div>
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

export default Dashboard;
