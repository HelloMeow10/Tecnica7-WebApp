

import logo from '../assets/logo.png';
import instagram from '../assets/instagram.png';
import facebook from '../assets/facebook.png';
import gmail from '../assets/gmail.png';
import telefono from '../assets/telefono.png';
import maps from '../assets/maps.png';

const ContactoPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Logo principal */}
      <div className="flex justify-center mb-6">
        <img src={logo} alt="Logo" className="h-20 w-20" />
      </div>
      <h1 className="text-4xl font-bold text-center mb-4">CONTACTO</h1>
      <div className="flex flex-col items-center space-y-4 mb-8">
        <div className="flex space-x-4">
          <a href="https://www.instagram.com/tecnica7ldz/" target="_blank" rel="noopener noreferrer">
            <img src={instagram} alt="Instagram" className="h-10 w-10" />
          </a>
          <a href="https://www.facebook.com/TecnicasieteLz-130834800923650/" target="_blank" rel="noopener noreferrer">
            <img src={facebook} alt="Facebook" className="h-10 w-10" />
          </a>
          <a href="mailto:tecnica7ldz@gmail.com">
            <img src={gmail} alt="Gmail" className="h-10 w-10" />
          </a>
        </div>
        <div className="flex items-center space-x-2">
          <img src={telefono} alt="Teléfono" className="h-8 w-8" />
          <span className="text-2xl">011 4248-6259</span>
        </div>
      </div>
      <div className="flex flex-col items-center mb-8">
        <img src={maps} alt="Ubicación" className="h-16 w-16 mb-2" />
        <iframe
          className="w-full h-96 max-w-2xl rounded-lg shadow"
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13114.721495185673!2d-58.3968068!3d-34.7384502!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xc61e14ed0cc44a21!2sEscuela%20Tecnica%207%20Lomas%20de%20Zamora!5e0!3m2!1ses!2sar!4v1650329442413!5m2!1ses!2sar"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Ubicación Escuela Técnica 7"
        ></iframe>
      </div>
      {/* Formulario de contacto moderno */}
      <div className="max-w-lg mx-auto bg-white rounded-lg shadow p-6">
        <h3 className="text-xl font-bold mb-4">Envianos tu mensaje</h3>
        <form className="flex flex-col gap-4">
          <input type="text" name="fullname" placeholder="Nombre Completo" required className="border rounded px-3 py-2" />
          <input type="email" name="email" placeholder="E-mail" required className="border rounded px-3 py-2" />
          <input type="tel" name="phone" placeholder="Número de Teléfono" className="border rounded px-3 py-2" />
          <input type="text" name="affair" placeholder="Asunto" className="border rounded px-3 py-2" />
          <textarea name="message" placeholder="Mensaje" rows={3} required className="border rounded px-3 py-2 min-h-[80px]" />
          <button type="submit" className="bg-blue-600 text-white rounded px-4 py-2 hover:bg-blue-700 transition">Enviar</button>
        </form>
      </div>
    </div>
  );
};

export default ContactoPage;
