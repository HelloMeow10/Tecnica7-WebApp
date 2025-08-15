
import { useState, useEffect } from 'react';
import codificacion from '../assets/codificacion.png';
import campanaDigital from '../assets/campana-digital.png';
import inscripcion from '../assets/inscripcion.png';
import instagram from '../assets/instagram.png';
import flecha from '../assets/flecha.png';
import fotoalumnos from '../assets/fotoalumnos.png';
import paisaje2 from '../assets/paisaje2.png';
import paisaje3 from '../assets/paisaje3.png';
import paisaje4 from '../assets/paisaje4.png';

const HomePage = () => {
  // Slider logic
  const images = [fotoalumnos, paisaje2, paisaje3, paisaje4];
  const [current, setCurrent] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="container mx-auto px-4">
      {/* Slider */}
      <div className="relative h-96 bg-gray-200 my-8 overflow-hidden rounded-lg shadow-lg" id="slider-section">
        <img
          src={images[current]}
          alt={`slide-${current}`}
          className="object-cover w-full h-96 transition-all duration-700"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-5xl font-bold text-white bg-black bg-opacity-50 p-4 rounded">E.E.S.T N°7</h1>
        </div>
        {/* Flecha de scroll */}
        <a href="#orientaciones-section" className="absolute bottom-4 left-1/2 transform -translate-x-1/2 animate-bounce">
          <img src={flecha} alt="Flecha" className="h-10 w-10" />
        </a>
        {/* Slider dots */}
        <div className="absolute bottom-4 right-4 flex space-x-2">
          {images.map((_, idx) => (
            <button
              key={idx}
              className={`w-3 h-3 rounded-full ${current === idx ? 'bg-white' : 'bg-gray-400'} border-2 border-black`}
              onClick={() => setCurrent(idx)}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Orientaciones */}
      <div className="text-center my-12" id="orientaciones-section">
        <h2 className="text-3xl font-bold mb-8">ORIENTACIONES</h2>
        <div className="flex flex-col md:flex-row justify-center items-center gap-12">
          <div className="flex flex-col items-center">
            <a href="/programacion">
              <img src={codificacion} alt="Programación" className="h-24 w-24 hover:scale-110 transition-transform duration-300" />
            </a>
            <p className="mt-2 text-lg font-semibold">Programación</p>
          </div>
          <div className="flex flex-col items-center">
            <a href="/multimedios">
              <img src={campanaDigital} alt="Multimedios" className="h-24 w-24 hover:scale-110 transition-transform duration-300" />
            </a>
            <p className="mt-2 text-lg font-semibold">Multimedios</p>
          </div>
        </div>
      </div>

      {/* Inscripcion */}
      <div className="text-center my-12">
        <a href="/inscripcion">
          <img src={inscripcion} alt="Inscripción" className="h-24 w-24 mx-auto hover:scale-110 transition-transform duration-300" />
        </a>
        <p className="mt-2 text-lg font-semibold">Inscripción</p>
      </div>

      {/* Contacto */}
      <div className="text-center my-12">
        <h2 className="text-3xl font-bold mb-8">CONTACTO</h2>
        <div className="flex justify-center items-center space-x-4 mb-4">
          <a href="https://www.instagram.com/tecnica7ldz/" target="_blank" rel="noopener noreferrer">
            <img src={instagram} alt="Instagram" className="h-10 w-10" />
          </a>
          <p className="text-2xl">011 4248-6259</p>
        </div>
        <div className="w-full mb-8">
          <iframe
            className="w-full h-96"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13114.721495185673!2d-58.3968068!3d-34.7384502!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xc61e14ed0cc44a21!2sEscuela%20Tecnica%207%20Lomas%20de%20Zamora!5e0!3m2!1ses!2sar!4v1650329442413!5m2!1ses!2sar"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        {/* Formulario de contacto moderno */}
        <div className="max-w-lg mx-auto bg-white rounded-lg shadow p-6">
          <h3 className="text-xl font-bold mb-4">Envianos tu mensaje</h3>
          <form className="flex flex-col gap-4">
            <input type="text" name="nombre" placeholder="Nombre" required className="border rounded px-3 py-2" />
            <input type="email" name="email" placeholder="E-mail" required className="border rounded px-3 py-2" />
            <textarea name="mensaje" placeholder="Mensaje" required className="border rounded px-3 py-2 min-h-[80px]" />
            <button type="submit" className="bg-blue-600 text-white rounded px-4 py-2 hover:bg-blue-700 transition">Enviar</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
