import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import UnidosPorLaLibertad from "@/assets/UnidosPorLaLibertad.jpeg";
import CrearMasLibertad from "@/assets/Crear+Libertad.jpeg";
import { motion } from "framer-motion";

const CentroEstudiantes = () => {
  const studentCenters = [
    {
      period: "2022-2023",
      name: "Avance Estudiantil",
      president: "Luz Roggerone (Presidente interina Juliana Goux)",
      // image: "/path/to/image1.jpg",
    },
    {
      period: "2023-2024",
      name: "Unidos por la Libertad",
      president: "Lucas Ramos",
      image: UnidosPorLaLibertad,
    },
    {
      period: "2024-2025",
      name: "Crear + Libertad",
      president: "Lucas Ramos",
      image: CrearMasLibertad,
    },
  ];

  return (
    <div className="flex flex-col min-h-screen relative overflow-hidden">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8 relative">
        <h1 className="text-3xl font-bold mb-8">
          Centro de Estudiantes - Historia
        </h1>
        <div className="mb-8">
          <a
            href="http://centro.tecnica7ldz.edu.ar"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            Visita el blog del Centro de Estudiantes
          </a>
        </div>
        <div className="grid gap-8">
          {studentCenters.map((center, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="flex justify-between items-center">
                  {center.name}
                  <Badge>{center.period}</Badge>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  <strong>Presidente:</strong> {center.president}
                </p>
                {center.image && (
                  <div className="mt-4 flex justify-center relative overflow-hidden" style={{ minHeight: "18rem" }}>
                    {/* Fondo animado detrás de la imagen */}
                    <motion.div
                      className="absolute inset-0 w-full h-full pointer-events-none"
                      initial={{ opacity: 0.9 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 2 }}
                    >
                      {/* Círculo azul */}
                      <motion.div
                        className="absolute top-[-40px] left-[-40px] bg-blue-200 rounded-full"
                        style={{ width: 540, height: 480, filter: "blur(40px)" }}
                        animate={{ x: [0, 30, 20], y: [0, 20, 0] }}
                        transition={{ repeat: Infinity, duration: 7, ease: "easeInOut" }}
                      />
                      {/* Círculo violeta */}
                      <motion.div
                        className="absolute bottom-[-50px] right-[-50px] bg-purple-200 rounded-full"
                        style={{ width: 540, height: 480, filter: "blur(40px)" }}
                        animate={{ x: [0, -20, 0], y: [0, -30, 0] }}
                        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                      />
                      {/* Círculo celeste */}
                      <motion.div
                        className="absolute top-1/2 left-1/2 bg-blue-100 rounded-full"
                        style={{ width: 120, height: 120, filter: "blur(30px)", transform: "translate(-50%, -50%)" }}
                        animate={{ scale: [1, 1.1, 1], opacity: [0.7, 1, 0.7] }}
                        transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                      />
                    </motion.div>
                    {/* Imagen */}
                    <img
                      src={center.image}
                      alt={`Imagen de ${center.name}`}
                      className="rounded-lg max-h-[28rem] w-auto object-contain relative z-10"
                      style={{ maxWidth: "100%" }}
                    />
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CentroEstudiantes;
