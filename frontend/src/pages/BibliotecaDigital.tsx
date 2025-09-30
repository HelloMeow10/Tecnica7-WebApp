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
import { Search, BookOpen, Video, FileText } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

const BibliotecaDigital = () => {
  const [filterType, setFilterType] = useState('');
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
        type: "spring" as const,
        stiffness: 100,
      },
    },
  };

  return (
    <div className="flex flex-col min-h-screen relative overflow-hidden">
      {/* Fondo animado con colores suaves */}
      <motion.div
        className="absolute inset-0 -z-10 w-full h-full pointer-events-none"
        initial={{ opacity: 0.8 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Círculo gris suave */}
        <motion.div
          className="absolute top-[-120px] left-[-120px] bg-gray-200 rounded-full"
          style={{ width: 420, height: 420, filter: "blur(90px)" }}
          animate={{ x: [0, 60, 0], y: [0, 40, 0] }}
          transition={{ repeat: Infinity, duration: 13, ease: "easeInOut" }}
        />
        {/* Círculo azul muy suave */}
        <motion.div
          className="absolute bottom-[-140px] right-[-140px] bg-slate-100 rounded-full"
          style={{ width: 370, height: 370, filter: "blur(80px)" }}
          animate={{ x: [0, -40, 0], y: [0, -60, 0] }}
          transition={{ repeat: Infinity, duration: 15, ease: "easeInOut" }}
        />
        {/* Círculo beige central */}
        <motion.div
          className="absolute top-1/2 left-1/2 bg-stone-100 rounded-full"
          style={{ width: 320, height: 320, filter: "blur(70px)", transform: "translate(-50%, -50%)" }}
          animate={{ scale: [1, 1.1, 1], opacity: [0.7, 1, 0.7] }}
          transition={{ repeat: Infinity, duration: 11, ease: "easeInOut" }}
        />
      </motion.div>

      <Header />
      <main className="flex-grow container mx-auto px-4 py-16 pt-32 relative z-10">
        <motion.div
          className="text-center space-y-8 mb-20"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div 
            className="relative mx-auto w-fit"
            initial={{ scale: 0.8, rotate: -5 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, ease: "backOut" }}
          >
            <motion.div
              className="w-28 h-28 bg-gradient-to-br from-slate-400 via-stone-400 to-gray-500 rounded-3xl flex items-center justify-center mx-auto shadow-xl relative overflow-hidden"
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent"
                animate={{ x: [-100, 200] }}
                transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
              />
              <Search className="h-14 w-14 text-white relative z-10" />
            </motion.div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h1 className="font-heading font-bold text-5xl lg:text-6xl text-foreground mb-4">
              Biblioteca <span className="bg-gradient-to-r from-slate-500 to-stone-600 bg-clip-text text-transparent">Digital</span>
            </h1>
            <motion.div
              className="w-24 h-1 bg-gradient-to-r from-slate-400 to-stone-500 mx-auto rounded-full mb-6"
              initial={{ width: 0 }}
              animate={{ width: 96 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            />
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Tu centro de <span className="font-semibold text-slate-600">conocimiento</span> y recursos <span className="font-semibold text-stone-600">académicos</span>.
            </p>
          </motion.div>
        </motion.div>

        {/* Elementos flotantes decorativos */}
        <motion.div
          className="fixed top-20 right-10 w-4 h-4 bg-slate-300 rounded-full opacity-60 z-0"
          animate={{ y: [0, -20, 0], rotate: [0, 180, 360] }}
          transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
        />
        <motion.div
          className="fixed bottom-32 left-10 w-6 h-6 bg-stone-300 rounded-full opacity-50 z-0"
          animate={{ y: [0, 30, 0], x: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
        />
        <motion.div
          className="fixed top-1/2 right-5 w-3 h-3 bg-gray-300 rounded-full opacity-70 z-0"
          animate={{ scale: [1, 1.5, 1], opacity: [0.7, 1, 0.7] }}
          transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
        />

        {/* Search Bar */}
        <motion.div
          className="max-w-3xl mx-auto mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <motion.div 
            className="bg-white/80 backdrop-blur-sm border border-white/20 rounded-2xl shadow-lg p-2 hover:shadow-xl transition-all duration-300"
            whileHover={{ y: -2 }}
          >
            <form className="relative">
              <Search className="absolute left-6 top-1/2 -translate-y-1/2 h-6 w-6 text-slate-500" />
              <Input
                type="search"
                placeholder="Buscar libros, artículos, guías y recursos académicos..."
                className="w-full pl-16 pr-32 py-4 h-16 text-lg bg-transparent border-0 focus:ring-0 focus:outline-none placeholder:text-slate-400"
              />
              <Button
                type="submit"
                className="absolute right-2 top-1/2 -translate-y-1/2 h-12 w-28 text-base bg-gradient-to-r from-slate-500 to-stone-600 hover:from-slate-600 hover:to-stone-700 rounded-xl"
              >
                Buscar
              </Button>
            </form>
          </motion.div>
        </motion.div>

        {/* Filtros */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-16 flex justify-center"
        >
          <div className="flex flex-wrap gap-4 p-2 bg-white/60 backdrop-blur-sm rounded-2xl border border-white/30 shadow-lg">
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setFilterType('')}
              className={`px-6 py-3 rounded-xl transition-all duration-300 font-medium flex items-center gap-2 ${
                filterType === '' 
                  ? 'bg-slate-600 text-white shadow-lg' 
                  : 'bg-gray-100/80 text-gray-700 hover:bg-gray-200/90'
              }`}
            >
              <Search className="h-4 w-4" />
              Todos
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setFilterType('libro')}
              className={`px-6 py-3 rounded-xl transition-all duration-300 font-medium flex items-center gap-2 ${
                filterType === 'libro' 
                  ? 'bg-slate-600 text-white shadow-lg' 
                  : 'bg-gray-100/80 text-gray-700 hover:bg-gray-200/90'
              }`}
            >
              <BookOpen className="h-4 w-4" />
              Libros
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setFilterType('video')}
              className={`px-6 py-3 rounded-xl transition-all duration-300 font-medium flex items-center gap-2 ${
                filterType === 'video' 
                  ? 'bg-slate-600 text-white shadow-lg' 
                  : 'bg-gray-100/80 text-gray-700 hover:bg-gray-200/90'
              }`}
            >
              <Video className="h-4 w-4" />
              Videos
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setFilterType('guía')}
              className={`px-6 py-3 rounded-xl transition-all duration-300 font-medium flex items-center gap-2 ${
                filterType === 'guía' 
                  ? 'bg-slate-600 text-white shadow-lg' 
                  : 'bg-gray-100/80 text-gray-700 hover:bg-gray-200/90'
              }`}
            >
              <FileText className="h-4 w-4" />
              Guías
            </motion.button>
          </div>
        </motion.div>

        {/* Featured Resources */}
        <div className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mb-12"
          >
            <h2 className="font-heading text-4xl font-bold text-foreground mb-4">
              Recursos <span className="bg-gradient-to-r from-slate-500 to-stone-600 bg-clip-text text-transparent">Destacados</span>
            </h2>
            <motion.div
              className="w-16 h-1 bg-gradient-to-r from-slate-400 to-stone-500 mx-auto rounded-full mb-4"
              initial={{ width: 0 }}
              animate={{ width: 64 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            />
            <p className="text-muted-foreground text-lg">
              Explora nuestra colección curada de materiales de estudio
            </p>
          </motion.div>
          
          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {featuredResources.map((resource, index) => (
              <motion.div 
                key={resource.title} 
                variants={itemVariants}
                whileHover={{ y: -6, boxShadow: "0 20px 40px -10px rgba(0, 0, 0, 0.15)" }}
                className="group"
              >
                <Card className="flex flex-col h-full bg-white/80 backdrop-blur-sm border border-white/20 rounded-2xl shadow-lg overflow-hidden hover:bg-white/90 transition-all duration-300">
                  <CardHeader className="relative overflow-hidden">
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-slate-50 to-stone-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    />
                    <div className="relative z-10 flex items-start justify-between">
                      <CardTitle className="font-heading text-xl text-foreground group-hover:text-slate-700 transition-colors">
                        {resource.title}
                      </CardTitle>
                      <motion.div
                        className="w-8 h-8 bg-gradient-to-br from-slate-400 to-stone-500 rounded-lg flex items-center justify-center"
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.5 }}
                      >
                        <Search className="h-4 w-4 text-white" />
                      </motion.div>
                    </div>
                  </CardHeader>
                  <CardContent className="flex-grow relative z-10">
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {resource.description}
                    </p>
                  </CardContent>
                  <CardFooter className="relative z-10">
                    <motion.span 
                      className="text-xs font-semibold bg-gradient-to-r from-slate-100 to-stone-100 text-slate-700 px-4 py-2 rounded-full border border-slate-200"
                      whileHover={{ scale: 1.05 }}
                    >
                      {resource.category}
                    </motion.span>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* Estadísticas */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-20 grid md:grid-cols-3 gap-8 text-center"
          >
            <motion.div 
              className="bg-white/60 backdrop-blur-sm border border-white/30 rounded-2xl p-8 shadow-lg"
              whileHover={{ y: -5, boxShadow: "0 20px 40px -10px rgba(0, 0, 0, 0.1)" }}
            >
              <motion.div
                className="w-16 h-16 bg-gradient-to-br from-slate-400 to-stone-500 rounded-2xl flex items-center justify-center mx-auto mb-4"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <BookOpen className="h-8 w-8 text-white" />
              </motion.div>
              <h3 className="font-heading text-3xl font-bold text-slate-700 mb-2">500+</h3>
              <p className="text-muted-foreground">Recursos Disponibles</p>
            </motion.div>
            
            <motion.div 
              className="bg-white/60 backdrop-blur-sm border border-white/30 rounded-2xl p-8 shadow-lg"
              whileHover={{ y: -5, boxShadow: "0 20px 40px -10px rgba(0, 0, 0, 0.1)" }}
            >
              <motion.div
                className="w-16 h-16 bg-gradient-to-br from-stone-400 to-gray-500 rounded-2xl flex items-center justify-center mx-auto mb-4"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <Video className="h-8 w-8 text-white" />
              </motion.div>
              <h3 className="font-heading text-3xl font-bold text-stone-700 mb-2">120+</h3>
              <p className="text-muted-foreground">Videos Educativos</p>
            </motion.div>
            
            <motion.div 
              className="bg-white/60 backdrop-blur-sm border border-white/30 rounded-2xl p-8 shadow-lg"
              whileHover={{ y: -5, boxShadow: "0 20px 40px -10px rgba(0, 0, 0, 0.1)" }}
            >
              <motion.div
                className="w-16 h-16 bg-gradient-to-br from-gray-400 to-slate-500 rounded-2xl flex items-center justify-center mx-auto mb-4"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <FileText className="h-8 w-8 text-white" />
              </motion.div>
              <h3 className="font-heading text-3xl font-bold text-gray-700 mb-2">80+</h3>
              <p className="text-muted-foreground">Guías de Estudio</p>
            </motion.div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BibliotecaDigital;
