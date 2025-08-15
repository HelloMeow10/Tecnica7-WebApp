

import logo from '../assets/logo.png';
import escuela from '../assets/escuela.jpeg';
import flecha from '../assets/flecha.png';

const HistoriaPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Logo principal */}
      <div className="flex justify-center mb-6">
        <img src={logo} alt="Logo" className="h-20 w-20" />
      </div>
      {/* Imagen principal de historia */}
      <div className="mb-6">
        <img src={escuela} alt="Historia" className="w-full max-h-[400px] object-cover rounded-lg shadow" />
      </div>
      <h1 className="text-4xl font-bold text-center mb-4">HISTORIA</h1>
      <div className="flex justify-center mb-6">
        <a href="#info-historia" className="animate-bounce">
          <img src={flecha} alt="Flecha" className="h-10 w-10" />
        </a>
      </div>
      <section id="info-historia" className="max-w-3xl mx-auto bg-white bg-opacity-80 rounded-lg shadow p-6">
        <h2 className="text-2xl font-bold mb-4">¿QUIENES SOMOS?</h2>
        <p className="mb-4 text-justify">
          La E.E.S.T N°7 tiene el propósito de atraer a jóvenes egresados y formarlos con conocimientos útiles mediante talleres.
        </p>
        <p className="mb-4 text-justify">
          Los ciclos electivos tienen las materias comunes, junto a talleres fundamentales para el ciclo básico. En el ciclo superior tendrán la oportunidad de elegir especialización, multimedia y programación, con talleres específicos de la tecnicatura.
        </p>
        <p className="mb-4 text-justify">
          Durante el último año (7mo) se llevan a cabo las prácticas (pasantías) para desarrollar sus fuentes del trabajo y sus oportunidades a futuro.
        </p>
        <h2 className="text-2xl font-bold mb-4 mt-8">UN POCO MÁS DE HISTORIA...</h2>
        <p className="mb-4 text-justify">
          La institución originalmente se llamaba Escuela Secundaria de Mujeres Julia Moreno de Moreno, fundada el 24 de diciembre de 1911. Su objetivo era lograr preparar jóvenes con talleres como cocina, planchado, corte y confección. Posteriormente se agregaron más talleres como lencería, florería, encajes, arte y música.
        </p>
        <p className="mb-4 text-justify">
          El 20 de Julio de 1924 por una iniciativa de la Señora Presidenta Rosa V. la escuela se incorpora al Consejo Nacional de Mujeres de la Confederación Nacional de Beneficencia. En 1937 se agregaron taquigrafía, mecanografía, lectura selecta, artística, etc. En 1960 se modifican los planes de estudio y la escuela pasa a ser E.N.E.T. N°1. Cinco años después se compra una vieja casona en Acevedo 1864 de Banfield, que es donde se encuentra actualmente la escuela.
        </p>
        <p className="mb-4 text-justify">
          El 21 de Marzo de 1980 el Ministerio de Educación de la Nación se hizo cargo de la construcción del nuevo edificio, después de 20 años, se finalizó la obra de la nueva escuela E.E.S.T N°7 de Lomas de Zamora.
        </p>
      </section>
    </div>
  );
};

export default HistoriaPage;
