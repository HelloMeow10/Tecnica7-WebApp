import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { FileText } from "lucide-react";
import { motion } from "framer-motion";

const TermsOfUsePage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto px-4 pt-32 pb-24">
        <div className="w-28 h-28 bg-gray-100 rounded-3xl flex items-center justify-center mx-auto shadow-md relative overflow-hidden">
          <FileText className="mx-auto mb-4 h-12 w-12 text-gray-700" />
        </div>
        <h1 className="text-5xl font-bold text-center mb-12 font-heading mt-12 text-gray-800">
          <span className="pb-2">Términos de Uso</span>
        </h1>
        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-12 mb-8 border border-gray-100">
          <div className="space-y-12">
            <section>
              <h2 className="text-2xl font-bold mb-4">Aceptación de los Términos</h2>
              <p className="text-gray-700 mb-4">
                Al acceder y utilizar el sitio web de la E.E.S.T. N°7 "Taller Regional Quilmes", usted acepta cumplir con estos términos de uso. Si no está de acuerdo con alguna parte de estos términos, le pedimos que no utilice nuestro sitio web.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Uso del Contenido</h2>
              <p className="text-gray-700 mb-4">
                Todo el contenido publicado en este sitio web, incluyendo texto, imágenes, logotipos, fotografías y material multimedia, es propiedad de la E.E.S.T. N°7 o se utiliza con los permisos correspondientes.
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>El contenido está protegido por las leyes de propiedad intelectual y derechos de autor.</li>
                <li>No está permitida la reproducción total o parcial sin autorización expresa.</li>
                <li>El contenido solo puede ser utilizado para fines informativos y educativos.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Privacidad y Datos Personales</h2>
              <p className="text-gray-700 mb-4">
                Protegemos la privacidad de nuestros usuarios según la legislación vigente. La información personal recopilada a través de formularios se utiliza únicamente para los fines específicos indicados en cada caso, como:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Proceso de inscripción y matriculación</li>
                <li>Comunicaciones institucionales</li>
                <li>Gestión académica y administrativa</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Responsabilidades del Usuario</h2>
              <p className="text-gray-700 mb-4">
                Al utilizar este sitio web, usted se compromete a:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Proporcionar información veraz y actualizada en los formularios</li>
                <li>Utilizar el sitio de manera responsable y ética</li>
                <li>No realizar acciones que puedan dañar o comprometer la seguridad del sitio</li>
                <li>Respetar los derechos de propiedad intelectual</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Enlaces Externos</h2>
              <p className="text-gray-700 mb-4">
                Nuestro sitio puede contener enlaces a sitios web de terceros. No nos hacemos responsables por el contenido, políticas de privacidad o prácticas de sitios web externos. La inclusión de cualquier enlace no implica respaldo o aprobación por parte de la E.E.S.T. N°7.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Modificaciones</h2>
              <p className="text-gray-700 mb-4">
                La E.E.S.T. N°7 se reserva el derecho de modificar estos términos de uso en cualquier momento. Los cambios entrarán en vigor inmediatamente después de su publicación en el sitio web. El uso continuado del sitio después de dichos cambios constituirá su aceptación de los mismos.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Legislación Aplicable</h2>
              <p className="text-gray-700 mb-4">
                Estos términos de uso se rigen por las leyes de la República Argentina. Cualquier disputa relacionada con el uso del sitio web estará sujeta a la jurisdicción de los tribunales competentes de Quilmes, Buenos Aires.
              </p>
            </section>

            <section className="mt-12 pt-6 border-t border-gray-100">
              <p className="text-sm text-gray-500 italic">
                Última actualización: Septiembre 2025
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TermsOfUsePage;
