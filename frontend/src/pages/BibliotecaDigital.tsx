import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Search } from "lucide-react";

const BibliotecaDigital = () => {
  const featuredResources = [
    {
      title: "Manual de Programación en C++",
      description: "Una guía completa para principiantes y avanzados.",
      category: "Programación",
    },
    {
      title: "Historia de la Tecnología",
      description: "Un recorrido desde el ábaco hasta la IA.",
      category: "Cultura General",
    },
    {
      title: "Diseño de Circuitos Electrónicos",
      description: "Principios y prácticas para el diseño de hardware.",
      category: "Multimedios",
    },
    {
      title: "Redes de Computadoras: Un Enfoque Descendente",
      description: "El libro de referencia para entender las redes.",
      category: "Programación",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="font-heading font-bold text-4xl lg:text-5xl text-foreground">
            Biblioteca <span className="text-primary">Digital</span>
          </h1>
          <p className="text-xl text-muted-foreground mt-2">
            Tu centro de conocimiento y recursos académicos.
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-16 animate-fade-in">
          <form className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Buscar libros, artículos, guías..."
              className="w-full pl-12 pr-32 py-3 h-16 text-lg rounded-full shadow-lg border-2 border-transparent focus:border-primary transition-all"
            />
             <Button
              type="submit"
              className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full h-12 w-28 bg-gradient-primary text-white font-bold"
            >
              Buscar
            </Button>
          </form>
        </div>

        {/* Featured Resources */}
        <div className="animate-slide-in-from-top">
          <h2 className="font-heading text-3xl font-bold text-foreground mb-8 text-center">
            Recursos Destacados
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredResources.map((resource, index) => (
              <Card
                key={resource.title}
                className="card-elegant flex flex-col transition-all duration-300 transform hover:-translate-y-2"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader>
                  <CardTitle className="font-heading text-xl">
                    {resource.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-muted-foreground text-sm">
                    {resource.description}
                  </p>
                </CardContent>
                <CardFooter>
                  <span className="text-xs font-semibold bg-primary/10 text-primary px-2 py-1 rounded-full">
                    {resource.category}
                  </span>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BibliotecaDigital;
