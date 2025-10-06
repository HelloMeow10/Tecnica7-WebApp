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
                  <div className="mt-4 flex justify-center relative overflow-hidden">
                    {/* Fondo animado con framer-motion */}
                    <motion.div
                      className="absolute inset-0 w-full h-full pointer-events-none rounded-lg"
                      initial={{ opacity: 0.9 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 1 }}
                    >
                      <div
                        className="w-full h-full"
                        style={{
                          background:
                            center.name === "Unidos por la Libertad"
                              ? "linear-gradient(135deg, #2563eb 0%, #fde047 100%)"
                              : "linear-gradient(135deg, #000000 0%, #ffffff 100%)",
                          borderRadius: "0.5rem",
                          position: "absolute",
                          inset: 0,
                          zIndex: 1,
                        }}
                      />
                    </motion.div>
                    {/* Imagen */}
                    <img
                      src={center.image}
                      alt={`Imagen de ${center.name}`}
                      className="rounded-lg max-h-[28rem] w-auto object-contain relative z-10 shadow-xl transition-transform duration-500 hover:scale-105"
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
