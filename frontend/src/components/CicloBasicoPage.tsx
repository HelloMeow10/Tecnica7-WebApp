import React from 'react';
import logo from '../assets/logo.png';
import programacion from '../assets/programacion.png'; // Ajusta la extensión si es .jpg
import Header from "./Header";

const CicloBasicoPage = () => {
  return (
      <>
    <Header />
    
    <div className="container mx-auto px-4 py-8 pt-24">
      {/* Logo principal */}
      <div className="flex justify-center mb-6 bg-black">
        <img src={logo} alt="Logo" className="h-20 w-20" />
      </div>
    
      {/* Imagen principal de ciclo básico */}
      <div className="mb-6">
        <img src={programacion} alt="Ciclo Básico" className="w-full max-h-[400px] object-cover rounded-lg shadow" />
      </div>
      <h1 className="text-4xl font-bold text-center mb-8">CICLO BÁSICO</h1>
      <div className="flex justify-center mb-8">
        <img src={logo} alt="Escudo" className="h-24 w-24" />
      </div>
      <section className="max-w-3xl mx-auto bg-white bg-opacity-80 rounded-lg shadow p-6">
        <h2 className="text-2xl font-bold text-center mb-4">¡ SABER HACER !</h2>
        <p className="mb-4 text-justify">
          En la escuela de Educación Secundaria Técnica, conforman alternativas de educación obligatoria, con siete años de duración, definidas como unidades pedagógicas y organizativas, están constituidas por dos Ciclos, siendo el primero de ellos Básico (CICLO BÁSICO), de tres años de duración y común a todas las tecnicaturas y el segundo Superior de cuatro años de duración y orientado a cada una de las especialidades implementadas por la Jurisdicción en nuestro caso son la de Programación y Multimedia, el alumno recibe el título de Técnico en el área ocupacional específica elegida.
        </p>
        <p className="mb-4 text-justify">
          Los contenidos de enseñanza de la Formación Técnica Específica del Ciclo Básico de la Educación Secundaria Técnica están organizados en módulos que utilizarán preponderantemente la estrategia didáctica de taller, ya que aquí se prioriza el HACER Y EL REFLEXIONAR SOBRE LO QUE SE HACE, aunque los aprendizajes resulten individuales, el APRENDER CON EL OTRO, constituye la clave motivacional, metodológica y organizacional desde donde se diseña y desarrollan las actividades de aprendizaje y su secuenciación didáctica.
        </p>
        <p className="mb-4 text-justify">
          La Formación Técnica Específica, en el Ciclo Básico, es común a todas las instituciones de la Provincia de Buenos Aires, independientemente de la oferta educativa que estas tengan en el Ciclo Superior Técnico, respetando así la movilidad de los estudiantes en el Ciclo mencionado. Las Instituciones organizarán acciones pedagógicas para vincular, durante el 3er año, los saberes y capacidades adquiridas por los estudiantes a lo largo de su trayectoria con las especialidades del Ciclo Superior Técnico que conforman la oferta educativa de cada escuela.
        </p>
      </section>
    </div>
    </>
  );
};

export default CicloBasicoPage;
