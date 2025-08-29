import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const CentroEstudiantes = () => {
  const studentCenters = [
    {
      period: "2022-2023",
      name: "Avance Estudiantil",
      president: "Luz Roggerone (Presidente interina Juliana Goux)",
      // image: "/path/to/image1.jpg", // Placeholder for image
    },
    {
      period: "2023-2024",
      name: "Unidos por la Libertad",
      president: "Lucas Ramos",
      // image: "/path/to/image2.jpg", // Placeholder for image
    },
    {
      period: "2024-2025",
      name: "Crear + Libertad",
      president: "Lucas Ramos",
      // image: "/path/to/image3.jpg", // Placeholder for image
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">
          Centro de Estudiantes - Historia
        </h1>
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
                {/* Uncomment the following lines when images are available */}
                {/*
              {center.image && (
                <div className="mt-4">
                  <img src={center.image} alt={`Imagen de ${center.name}`} className="rounded-lg" />
                </div>
              )}
              */}
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
