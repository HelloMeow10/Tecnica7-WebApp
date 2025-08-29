import Header from "@/components/Header";
import Footer from "@/components/Footer";

const PrivacyPolicyPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8">Política de Privacidad</h1>
        <div className="max-w-3xl mx-auto bg-white bg-opacity-80 rounded-lg shadow p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4">Contenido de la Política de Privacidad</h2>
          <p>
            Este es un contenido de marcador de posición para la Política de Privacidad.
            Por favor, reemplace este texto con la política de privacidad real de la institución.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicyPage;
