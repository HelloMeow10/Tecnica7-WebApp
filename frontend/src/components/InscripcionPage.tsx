

import logo from '../assets/logo.png';
import inscripcion from '../assets/inscripcion.png';

const InscripcionPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Logo principal */}
      <div className="flex justify-center mb-6">
        <img src={logo} alt="Logo" className="h-20 w-20" />
      </div>
      {/* Imagen principal de inscripción */}
      <div className="mb-6">
        <img src={inscripcion} alt="Inscripción" className="w-full max-h-[400px] object-cover rounded-lg shadow" />
      </div>
      <h1 className="text-4xl font-bold text-center mb-8">INSCRIPCIONES</h1>
      <section className="max-w-3xl mx-auto bg-white bg-opacity-80 rounded-lg shadow p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4">DOCUMENTACIÓN PARA INSCRIPCIÓN</h2>
        <h3 className="text-lg font-semibold mb-2">Planilla de inscripción</h3>
        <p className="mb-4">Imprimir la planilla de inscripción que se adjunta en la página, completar y firmar.</p>
        <h3 className="text-lg font-semibold mb-2">Documentación que debe presentar junto con la planilla de inscripción:</h3>
        <ul className="list-disc pl-6 text-left mb-4">
          <li>DNI del alumno (Original y Fotocopia).</li>
          <li>Constancia de CUIL del alumno.</li>
          <li>Partida de nacimiento del alumno (Original y Fotocopia).</li>
          <li>Vacunas (Original y Fotocopia).</li>
          <li>Título de Primaria o Constancia de finalización de 6° Grado. (Original y Fotocopia).</li>
          <li>Certificado de <b>ANALITICO INCOMPLETO EN TRAMITE</b> (Para ingresantes en 2°, 3° o 4° AÑO).</li>
          <li>DNI del Padre/Madre o Tutor (Original y Fotocopia).</li>
          <li>Dos Folios tamaño oficio.</li>
        </ul>
        <div className="flex justify-center">
          <a href="/PlanillaInscripcion.pdf" download className="bg-blue-600 text-white rounded px-4 py-2 hover:bg-blue-700 transition">Descargar Inscripción</a>
        </div>
      </section>
    </div>
  );
};

export default InscripcionPage;
