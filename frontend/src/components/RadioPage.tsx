

import logo from '../assets/logo.png';

const RadioPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Logo principal */}
      <div className="flex justify-center mb-6">
        <img src={logo} alt="Logo" className="h-20 w-20" />
      </div>
      <h1 className="text-4xl font-bold text-center mb-4">RADIO</h1>
      <section className="max-w-3xl mx-auto bg-white bg-opacity-80 rounded-lg shadow p-6 text-center">
        <p className="mb-4 text-justify">
          La radio tiene como objetivo ampliar las trayectorias escolares de los alumnos de la tecnicatura de Multimedios diversificando el horizonte de oportunidades y experiencias educativas.<br/>
          Constituyen una nueva herramienta pedagógica que permite abordar, con diversos recursos, los contenidos curriculares a través de un canal de expresión lúdico y, a la vez, reflexivo.<br/>
          El Proyecto propone el desarrollo de diferentes estrategias en tiempos y espacios complementarios a los de la jornada escolar que estimulen la investigación, la expresión y el intercambio entre los alumnos, los educadores y la comunidad.<br/>
          A través de este medio nuestros alumnos ponen en valor sus capacidades, fortalecen el sentido de pertenencia a la institución, promueven nuevas formas de estar en ella y, consecuentemente, el de mejorar en forma permanente la calidad de los aprendizajes.<br/>
          <b>UN LUGAR DONDE TOMAN Y DAN LA PALABRA</b>
        </p>
        <div className="my-8">
          <h2 className="text-xl font-bold mb-2">Ver y escuchar la radio online</h2>
          <p className="mb-2">(Aquí puedes insertar el reproductor o el enlace a la transmisión en vivo)</p>
          {/* Ejemplo de embed de YouTube (reemplazar URL por la de la radio real) */}
          <div className="flex justify-center">
            <iframe
              width="360"
              height="215"
              src="https://www.youtube.com/embed/"
              title="Radio Online"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RadioPage;
