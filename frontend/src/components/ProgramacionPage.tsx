

import logo from '../assets/logo.png';
import programacion from '../assets/programacion.png';
import flecha from '../assets/flecha.png';

const ProgramacionPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Logo principal */}
      <div className="flex justify-center mb-6">
        <img src={logo} alt="Logo" className="h-20 w-20" />
      </div>
      {/* Imagen principal de programación */}
      <div className="mb-6">
        <img src={programacion} alt="Programación" className="w-full max-h-[400px] object-cover rounded-lg shadow" />
      </div>
      <h1 className="text-4xl font-bold text-center mb-4">PROGRAMACIÓN</h1>
      <div className="flex justify-center mb-6">
        <a href="#info-programacion" className="animate-bounce">
          <img src={flecha} alt="Flecha" className="h-10 w-10" />
        </a>
      </div>
      <section id="info-programacion" className="max-w-3xl mx-auto bg-white bg-opacity-80 rounded-lg shadow p-6">
        <h2 className="text-2xl font-bold mb-4">PROGRAMACIÓN</h2>
        <p className="mb-4 text-justify">
          Es una de las especialidades más populares de la técnica, sus materias se basan sobre todo en la creación de hardware y software y de páginas web. En el cual se integran los siguientes talleres: Procesos industriales, Programación, Diseño web estático y dinámico, Seguridad informática, y más... Estos talleres cuentan con ordenadores junto a aplicaciones y material necesario para el trabajo (editores de código, programas para crear aplicaciones, etc...), que ayudarán en el desarrollo de las materias. Dentro de los proyectos a realizar, podrán aprender sobre programación y creación tanto de aplicaciones como páginas web, entre otros conocimientos. Contactar para más información...
        </p>
        <h2 className="text-xl font-bold mb-2">TECNICATURA EN PROGRAMACIÓN</h2>
        <p className="mb-4 text-justify">
          Se prepara al alumno para la construcción de diferentes tipos de software y plataformas (Visual Basic.NET, Sql, Html, CSS, Javascript, C#, PHP, Arduino), aplicaciones de uso general. El Técnico en Programación estará capacitado para realizar programas o componentes de sistemas de computación, participa en proyectos de desarrollo de software desempeñando roles que tienen por objeto producir programas, módulos o componentes de sistemas existentes desarrolladas con la misma o diferente tecnología...
        </p>
        <ul className="list-disc pl-6 text-left">
          <li>Creación de Soluciones a los problemas empresariales</li>
          <li>Diseñar y desarrollar Sistema de gestión.</li>
          <li>Creación de Aplicaciones</li>
          <li>Interpretar especificaciones de diseño o requisitos de las asignaciones a programar</li>
          <li>Verificar y depurar el producto desarrollado</li>
          <li>Explotar las funcionalidades de los sistemas de información, hardware, software y redes</li>
          <li>Producir programas, módulos o componentes de sistemas de computación en el contexto de la tecnología a utilizar</li>
        </ul>
      </section>
    </div>
  );
};

export default ProgramacionPage;
