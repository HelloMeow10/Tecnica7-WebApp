import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Settings } from "lucide-react";

const SistemaGestion = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-16">
        <div className="text-center space-y-6">
          <div className="w-20 h-20 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto">
            <Settings className="h-10 w-10 text-white" />
          </div>
          <h1 className="font-heading font-bold text-4xl lg:text-6xl text-foreground">
            Sistema de <span className="text-primary">Gestión</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Esta sección se encuentra en construcción. Vuelve pronto para más novedades.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default SistemaGestion;
