

import logo from '../assets/logo.png';
import multimedios from '../assets/multimedios.png';
import flecha from '../assets/flecha.png';

const MultimediosPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Logo principal */}
      <div className="flex justify-center mb-6">
        <img src={logo} alt="Logo" className="h-20 w-20" />
      </div>
      {/* Imagen principal de multimedios */}
      <div className="mb-6">
        <img src={multimedios} alt="Multimedios" className="w-full max-h-[400px] object-cover rounded-lg shadow" />
      </div>
      <h1 className="text-4xl font-bold text-center mb-4">MULTIMEDIOS</h1>
      <div className="flex justify-center mb-6">
        <a href="#info-multimedios" className="animate-bounce">
          <img src={flecha} alt="Flecha" className="h-10 w-10" />
        </a>
      </div>
      <section id="info-multimedios" className="max-w-3xl mx-auto bg-white bg-opacity-80 rounded-lg shadow p-6">
        <h2 className="text-2xl font-bold mb-4">MULTIMEDIOS</h2>
        <p className="mb-4 text-justify">
          Es una de las especialidades más nuevas de la técnica, sus materias se basan sobre todo en la creación audiovisual y diseño digital. En el cual se integran los siguientes talleres: sistemas multimediales, guión, síntesis de imagen y animación, realización audiovisual, diseño gráfico, y más... Estos talleres cuentan con ordenadores junto a programas, aplicaciones y material de trabajo (cámaras, micrófonos, equipos de sonido, etc), que ayudarán en el desarrollo de las materias. Dentro de los proyectos a realizar, podrán aprender sobre la publicidad, cinematografía, editorial e ilustración. Contactar para más información...
        </p>
        <h2 className="text-xl font-bold mb-2">TECNICATURA EN MULTIMEDIOS</h2>
        <ul className="list-disc pl-6 text-left">
          <li>Diseño, supervisión y asistencia en producción de medios digitales.</li>
          <li>Creación de Medios Digitales.</li>
          <li>Diseñar y desarrollar animaciones y videos.</li>
          <li>Creación de guiones y producción de cortos.</li>
          <li>Práctica Profesionalizante Externa</li>
        </ul>
      </section>
    </div>
  );
};

export default MultimediosPage;
