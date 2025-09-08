import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link2 } from "lucide-react";
import { Link } from "react-router-dom";

const EnlacesUtiles = () => {
  const usefulLinks = [
    {
      title: "Plataforma de Gestión Educativa",
      description: "Accede a la plataforma para gestionar tus datos académicos.",
      icon: <Link2 className="h-8 w-8 text-primary" />,
      href: "#",
      disabled: true,
    },
    {
      title: "Sistema de Novedades",
      description: "Mantente al día con las últimas noticias y anuncios.",
      icon: <Link2 className="h-8 w-8 text-primary" />,
      href: "#",
      disabled: true,
    },
    {
      title: "Correo Institucional",
      description: "Accede a tu cuenta de correo electrónico institucional.",
      icon: <Link2 className="h-8 w-8 text-primary" />,
      href: "#",
      disabled: true,
    },
    {
      title: "Soporte Técnico",
      description: "Contacta al equipo de soporte para obtener ayuda.",
      icon: <Link2 className="h-8 w-8 text-primary" />,
      href: "#",
      disabled: true,
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="font-heading font-bold text-4xl lg:text-5xl text-foreground">
            Enlaces <span className="text-primary">Útiles</span>
          </h1>
          <p className="text-xl text-muted-foreground mt-2">
            Recursos y herramientas para la comunidad educativa.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {usefulLinks.map((link) => (
            <Link
              to={link.disabled ? "#" : link.href}
              key={link.title}
              className={`group ${link.disabled ? "cursor-not-allowed" : ""}`}
              onClick={(e) => link.disabled && e.preventDefault()}
            >
              <Card
                className={`h-full transition-shadow duration-300 ${
                  link.disabled
                    ? "bg-muted/50"
                    : "hover:shadow-lg"
                }`}
              >
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="font-heading text-2xl text-foreground">
                      {link.title}
                    </CardTitle>
                    {link.icon}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{link.description}</p>
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

export default EnlacesUtiles;
