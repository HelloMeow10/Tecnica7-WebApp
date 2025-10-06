import Header from "@/components/Header";
import Footer from "@/components/Footer";

const PoliticaDePrivacidad = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />
      <main className="flex-grow container mx-auto px-4 pt-32 pb-24">
        <h1 className="text-5xl font-bold text-center mb-16 font-heading mt-16">
          <span className=" border-primary pb-2">Política de Privacidad</span>
        </h1>
        <div className="max-w-4xl mx-auto bg-white/95 rounded-xl shadow-lg p-12 mb-8">
          <div className="space-y-12">
            <section>
              <h2 className="text-2xl font-bold mb-4">Introducción</h2>
              <p className="text-gray-700 mb-4">
                En la E.E.S.T. N°7 "Taller Regional Quilmes" nos comprometemos a proteger la privacidad de los usuarios de nuestro sitio web. Esta política describe cómo recopilamos, usamos y protegemos su información personal.
              </p>
            </section>
            <section>
              <h2 className="text-2xl font-bold mb-4">Información que Recopilamos</h2>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Datos de contacto proporcionados en formularios (nombre, correo electrónico, teléfono, etc.).</li>
                <li>Información de navegación y uso del sitio (cookies, dirección IP, tipo de dispositivo, etc.).</li>
                <li>Datos académicos o administrativos necesarios para la gestión escolar.</li>
              </ul>
            </section>
            <section>
              <h2 className="text-2xl font-bold mb-4">Uso de la Información</h2>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Gestionar inscripciones, consultas y comunicaciones institucionales.</li>
                <li>Mejorar la experiencia del usuario y la seguridad del sitio.</li>
                <li>Cumplir con obligaciones legales y administrativas.</li>
              </ul>
            </section>
            <section>
              <h2 className="text-2xl font-bold mb-4">Protección de la Información</h2>
              <p className="text-gray-700 mb-4">
                Implementamos medidas técnicas y organizativas para proteger los datos personales contra accesos no autorizados, alteraciones, divulgación o destrucción.
              </p>
            </section>
            <section>
              <h2 className="text-2xl font-bold mb-4">Compartir Información</h2>
              <p className="text-gray-700 mb-4">
                No compartimos información personal con terceros, salvo obligación legal o consentimiento explícito del usuario.
              </p>
            </section>
            <section>
              <h2 className="text-2xl font-bold mb-4">Derechos de los Usuarios</h2>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Acceder, rectificar o eliminar sus datos personales.</li>
                <li>Solicitar información sobre el tratamiento de sus datos.</li>
                <li>Revocar el consentimiento para el uso de sus datos.</li>
              </ul>
            </section>
            <section>
              <h2 className="text-2xl font-bold mb-4">Cambios en la Política</h2>
              <p className="text-gray-700 mb-4">
                Nos reservamos el derecho de modificar esta política de privacidad en cualquier momento. Los cambios serán publicados en esta página y entrarán en vigor inmediatamente.
              </p>
            </section>
            <section>
              <h2 className="text-2xl font-bold mb-4">Contacto</h2>
              <p className="text-gray-700 mb-4">
                Para consultas sobre privacidad, puede contactarnos a través de los canales oficiales disponibles en la sección de contacto.
              </p>
            </section>
            <section className="mt-12 pt-6 border-t border-gray-200">
              <p className="text-sm text-gray-600 italic">
                Última actualización: Octubre 2025
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PoliticaDePrivacidad;
