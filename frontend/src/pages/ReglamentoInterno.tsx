import Footer from "@/components/Footer";
import Header from "@/components/Header";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FileText } from "lucide-react";

const ReglamentoInterno = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-16">
        <div className="text-center space-y-6 mb-16 animate-fade-in">
          <div className="w-20 h-20 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto">
            <FileText className="h-10 w-10 text-white" />
          </div>
          <h1 className="font-heading font-bold text-4xl lg:text-6xl text-foreground">
            Reglamento <span className="text-primary">Interno</span>
          </h1>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          <div className="card-elegant p-6 animate-slide-in-from-top">
            <h2 className="text-3xl font-bold mb-4">Medidas de Seguridad e Higiene</h2>
            <p className="mb-4">Con el propósito de prevenir accidentes recomendamos:</p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Entrar y salir de la escuela en forma ordenada y sin apuro.</li>
              <li>Cruzar las calles por las esquinas, mirando bien hacia ambos lados.</li>
              <li>Respetar las señales de tránsito.</li>
              <li>Evitar distracciones al cruzar calles o vías.</li>
              <li>No viajar en estribos ni sacar brazos por la ventanilla.</li>
              <li>No arrojar objetos peligrosos en la escuela.</li>
            </ul>
            <p className="mt-4 font-semibold text-primary">
              Tu conducta representa a la Escuela. ¡Haz que nos sintamos orgullosos!
            </p>
          </div>

          <div className="card-elegant p-6 animate-slide-in-from-top" style={{ animationDelay: '100ms' }}>
            <h2 className="text-3xl font-bold mb-4">Acuerdo Institucional de Convivencia</h2>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="font-semibold text-xl">A) Presentación</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  El AIC es un acuerdo flexible que surge del intercambio de propuestas de toda la comunidad educativa para mejorar la convivencia y el clima de estudio y trabajo.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger className="font-semibold text-xl">B) Diagnóstico</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Problemáticas detectadas: sentido de pertenencia, respeto, buenos hábitos y fortalecimiento de la ESI.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger className="font-semibold text-xl">C) Fundamentos y Objetivos</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Garantizar el bienestar y la contención a través de la ESI, el centro de estudiantes y la mejora de los entornos formativos.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger className="font-semibold text-xl">D) Elaboración</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Actualización continua desde 2014 con la participación de todos los actores institucionales.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          <div className="card-elegant p-6 animate-slide-in-from-top" style={{ animationDelay: '200ms' }}>
            <h2 className="text-3xl font-bold mb-4">Evaluación y Acreditación</h2>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="font-semibold text-xl">Cierre de Cuatrimestre</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Se entrega el RITE con valoración cualitativa (TEA, TEP, TED). Materia aprobada con 7 o más en ambos cuatrimestres.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger className="font-semibold text-xl">Nuevo Régimen Académico</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Máximo 5 materias pendientes. Las materias aprobadas no se recursan. Dos cuatrimestres con 6 periodos de intensificación. Asistencia del 75% por materia.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ReglamentoInterno;
