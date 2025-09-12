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
import { motion } from "framer-motion";

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
      title: "Redes de Computadoras",
      description: "El libro de referencia para entender las redes.",
      category: "Programación",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-16">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="font-heading font-bold text-4xl lg:text-5xl text-foreground">
            Biblioteca <span className="text-primary">Digital</span>
          </h1>
          <p className="text-xl text-muted-foreground mt-2">
            Tu centro de conocimiento y recursos académicos.
          </p>
        </motion.div>

        {/* Search Bar */}
        <motion.div
          className="max-w-2xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <form className="relative">
            <Search className="absolute left-6 top-1/2 -translate-y-1/2 h-6 w-6 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Buscar libros, artículos, guías..."
              className="w-full pl-16 pr-32 py-4 h-16 text-lg rounded-full shadow-lg border-2 border-transparent focus:border-primary focus:ring-primary"
            />
            <Button
              type="submit"
              className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full h-12 w-28 text-base"
            >
              Buscar
            </Button>
          </form>
        </motion.div>

        {/* Featured Resources */}
        <div>
          <h2 className="font-heading text-3xl font-bold text-foreground mb-8 text-center">
            Recursos Destacados
          </h2>
          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {featuredResources.map((resource) => (
              <motion.div key={resource.title} variants={itemVariants}>
                <Card className="flex flex-col h-full bg-white rounded-xl shadow-md overflow-hidden transform hover:-translate-y-2 transition-transform duration-300 ease-in-out">
                  <CardHeader>
                    <CardTitle className="font-heading text-xl text-foreground">
                      {resource.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-muted-foreground text-sm">
                      {resource.description}
                    </p>
                  </CardContent>
                  <CardFooter>
                    <span className="text-xs font-semibold bg-primary/10 text-primary px-3 py-1 rounded-full">
                      {resource.category}
                    </span>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BibliotecaDigital;
