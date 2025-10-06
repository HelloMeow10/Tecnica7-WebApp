import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { FileText } from "lucide-react";
import { motion } from "framer-motion";

const TermsOfUsePage = () => {
  return (
    <div className="flex flex-col min-h-screen relative overflow-hidden">
      {/* Fondo animado */}
      <motion.div
        className="absolute inset-0 -z-10 w-full h-full pointer-events-none"
        initial={{ opacity: 0.8 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Círculo verde suave */}
        <motion.div
          className="absolute top-[-120px] left-[-120px] bg-gray-300/30 rounded-full"
          style={{ width: 420, height: 420, filter: "blur(90px)" }}
          animate={{ x: [0, 60, 0], y: [0, 40, 0] }}
          transition={{ repeat: Infinity, duration: 13, ease: "easeInOut" }}
        />
        {/* Círculo gris claro */}
        <motion.div
          className="absolute bottom-[-140px] right-[-140px] bg-gray-200/30 rounded-full"
          style={{ width: 370, height: 370, filter: "blur(80px)" }}
          animate={{ x: [0, -40, 0], y: [0, -60, 0] }}
          transition={{ repeat: Infinity, duration: 15, ease: "easeInOut" }}
        />
      </motion.div>

      <Header />
      <main className="flex-grow container mx-auto px-4 pt-32 pb-24">
        <motion.div
          className="relative mx-auto w-fit"
          initial={{ scale: 0.8, rotate: -5 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, ease: "backOut" }}
        >
          <motion.div
            className="w-28 h-28 bg-gradient-to-br from-gray-400 via-gray-500 to-gray-600 rounded-3xl flex items-center justify-center mx-auto shadow-xl relative overflow-hidden"
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent"
              animate={{ x: [-100, 200] }}
              transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
            />
            <FileText className="h-14 w-14 text-white relative z-10" />
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h1 className="font-heading font-bold text-5xl lg:text-6xl text-foreground mb-4 text-center mt-16">
            Términos de <span className="bg-gradient-to-r from-gray-600 to-gray-800 bg-clip-text text-transparent">Uso</span>
          </h1>
          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-gray-400 to-gray-600 mx-auto rounded-full mb-6"
            initial={{ width: 0 }}
            animate={{ width: 96 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-4xl mx-auto bg-white/95 backdrop-blur-sm rounded-xl shadow-lg p-12 mb-8 border border-white/20"
        >
          <div className="space-y-12">
            <section>
              <motion.h2 
                className="text-2xl font-bold mb-4 bg-gradient-to-r from-gray-700 to-gray-900 bg-clip-text text-transparent"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                Aceptación de los Términos
              </motion.h2>
              <p className="text-gray-700 mb-4">
                Al acceder y utilizar el sitio web de la E.E.S.T. N°7 "Taller Regional Quilmes", usted acepta cumplir con estos términos de uso. Si no está de acuerdo con alguna parte de estos términos, le pedimos que no utilice nuestro sitio web.
              </p>
            </section>

            <section>
              <motion.h2 
                className="text-2xl font-bold mb-4 bg-gradient-to-r from-gray-700 to-gray-900 bg-clip-text text-transparent"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                Uso del Contenido
              </motion.h2>
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
              <motion.h2 
                className="text-2xl font-bold mb-4 bg-gradient-to-r from-gray-700 to-gray-900 bg-clip-text text-transparent"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                Privacidad y Datos Personales
              </motion.h2>
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
              <motion.h2 
                className="text-2xl font-bold mb-4 bg-gradient-to-r from-gray-700 to-gray-900 bg-clip-text text-transparent"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                Responsabilidades del Usuario
              </motion.h2>
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
              <motion.h2 
                className="text-2xl font-bold mb-4 bg-gradient-to-r from-gray-700 to-gray-900 bg-clip-text text-transparent"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                Enlaces Externos
              </motion.h2>
              <p className="text-gray-700 mb-4">
                Nuestro sitio puede contener enlaces a sitios web de terceros. No nos hacemos responsables por el contenido, políticas de privacidad o prácticas de sitios web externos. La inclusión de cualquier enlace no implica respaldo o aprobación por parte de la E.E.S.T. N°7.
              </p>
            </section>

            <section>
              <motion.h2 
                className="text-2xl font-bold mb-4 bg-gradient-to-r from-gray-700 to-gray-900 bg-clip-text text-transparent"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                Modificaciones
              </motion.h2>
              <p className="text-gray-700 mb-4">
                La E.E.S.T. N°7 se reserva el derecho de modificar estos términos de uso en cualquier momento. Los cambios entrarán en vigor inmediatamente después de su publicación en el sitio web. El uso continuado del sitio después de dichos cambios constituirá su aceptación de los mismos.
              </p>
            </section>

            <section>
              <motion.h2 
                className="text-2xl font-bold mb-4 bg-gradient-to-r from-gray-700 to-gray-900 bg-clip-text text-transparent"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                Legislación Aplicable
              </motion.h2>
              <p className="text-gray-700 mb-4">
                Estos términos de uso se rigen por las leyes de la República Argentina. Cualquier disputa relacionada con el uso del sitio web estará sujeta a la jurisdicción de los tribunales competentes de Quilmes, Buenos Aires.
              </p>
            </section>

            <motion.section 
              className="mt-12 pt-6 border-t border-gray-200"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              <p className="text-sm text-gray-500 italic">
                Última actualización: Septiembre 2025
              </p>
            </motion.section>
          </div>
        </motion.div>

        {/* Elementos flotantes decorativos */}
        <motion.div
          className="fixed top-20 right-10 w-4 h-4 bg-gray-400 rounded-full opacity-30 z-0"
          animate={{ y: [0, -20, 0], rotate: [0, 180, 360] }}
          transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
        />
        <motion.div
          className="fixed bottom-32 left-10 w-6 h-6 bg-gray-300 rounded-full opacity-25 z-0"
          animate={{ y: [0, 30, 0], x: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
        />
        <motion.div
          className="fixed top-1/2 right-5 w-3 h-3 bg-gray-400 rounded-full opacity-30 z-0"
          animate={{ scale: [1, 1.5, 1], opacity: [0.7, 1, 0.7] }}
          transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
        />
      </main>
      <Footer />
    </div>
  );
};

export default TermsOfUsePage;