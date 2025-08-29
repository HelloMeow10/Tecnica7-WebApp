import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { FileText } from "lucide-react";

const ReglamentoInterno = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-16">
        <div className="text-left space-y-8">
          <div className="text-center space-y-6 mb-16">
            <div className="w-20 h-20 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto">
              <FileText className="h-10 w-10 text-white" />
            </div>
            <h1 className="font-heading font-bold text-4xl lg:text-6xl text-foreground">
              Reglamento <span className="text-primary">Interno</span>
            </h1>
          </div>

          <section>
            <h2 className="text-3xl font-bold mb-4">Medidas de Seguridad e Higiene</h2>
            <p className="mb-4">Con el propósito de prevenir accidentes recomendamos:</p>
            <ul className="list-disc list-inside space-y-2">
              <li>Entrar y salir de la escuela en forma ordenada y sin apuro.</li>
              <li>Cruzar las calles por las esquinas, mirando bien hacia ambos lados, aún en las intersecciones en las que haya semáforo.</li>
              <li>Respetar las señales de tránsito. En las vías férreas hacerlo siempre por los pasos habilitados atendiendo a las campanillas y señales del guardabarreras, si lo hubiese.</li>
              <li>Si está en grupo, evitar distraerse con charlas y juegos en el momento de cruzar la calle, vías o al ascender o descender de un medio de transporte.</li>
              <li>Evitar viajar en los estribos, sacar los brazos por la ventanilla.</li>
              <li>No arrojar botellas, ni objetos cortantes, en las aulas, patios ni pasillos.</li>
            </ul>
            <p className="mt-4 font-semibold">Recuerda que en todo momento, dentro y fuera del establecimiento, representas a la Escuela. Haz que tu conducta la prestigie.</p>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-4">ACUERDO INSTITUCIONAL DE CONVIVENCIA</h2>
            <h3 className="text-2xl font-semibold mb-3">A) Presentación. Mensaje del Equipo Directivo a la comunidad educativa</h3>
            <p className="mb-4">El AIC es un acuerdo creado en un marco flexible, de retroalimentación, que surge del intercambio de propuestas elaboradas por los distintos actores de la comunidad educativa (estudiantes, docentes, preceptores, EOE, auxiliares, familias y Equipo de Conducción) con el objetivo de respetar y cumplir ciertas pautas establecidas en normativa vigente y aquellos compromisos que hemos consensuado asumir para una mejor convivencia escolar y un adecuado clima de estudio y trabajo en la Institución.</p>
            <p className="mb-4">Nuestra Institución entiende que esta construcción del acuerdo, es posible con la participación efectiva de las/los estudiantes, siendo una práctica útil para la toma de decisiones de aquellos aspectos de la vida escolar que hacen al pleno ejercicio de los derechos como estudiantes y como personas que forman esta comunidad, en un marco democrático, de relaciones más igualitarias, buscando alcanzar la finalidad de habilitar a las y los adolescentes y jóvenes para el ejercicio pleno de la ciudadanía, para el trabajo y la continuidad de estudios superiores.</p>

            <h3 className="text-2xl font-semibold mb-3">B) Diagnóstico participativo de la convivencia escolar</h3>
            <p className="mb-4">Las principales problemáticas detectadas en la institución son:</p>
            <ul className="list-disc list-inside space-y-2">
              <li>Construcción de un sentido de pertenencia, así como también mejora de los vínculos a partir de situaciones de acoso y hostigamiento.</li>
              <li>Necesidad de abordar el respeto entre pares y adultos de la institución.</li>
              <li>El fomentar buenos hábitos, el cumplimiento de normas básicas y el cuidado del edificio, equipamiento tecnológico e insumos.</li>
              <li>Fortalecimiento del abordaje de la ESI.</li>
            </ul>

            <h3 className="text-2xl font-semibold mb-3">C) Fundamentos y objetivos</h3>
            <p className="mb-4">Con la Ley de Educación 26.206, La Ley de Educación Provincial 13.688, el Decreto 2299/11 y la Resolución 1235/23 en los cuales se establece la obligatoriedad de la educación secundaria, desde nuestra Institución garantizamos el bienestar, la contención, el diálogo que permite desarrollar un sentido de pertenencia para asegurar de este modo su ingreso, permanencia y egreso. Por lo tanto, desde nuestro Proyecto Institucional se propone:</p>
            <ul className="list-disc list-inside space-y-2">
              <li>Trabajar la ESI durante todo el año, comenzando por temas tales como: bullying, acoso escolar, convivencia, respeto por el otro, entre otros. Trabajamos de manera transversal todos los contenidos con el abordaje de aprendizajes aplicados a proyectos con el objetivo claro de plasmar lo aprendido y darle valor a cada contenido.</li>
              <li>Incentivarnos al centro de estudiantes a crear espacios de encuentro, de diálogo y consenso con el objetivo de tener una comunidad unida, cooperativa y solidaria.</li>
              <li>Realizamos mejoras de los entornos formativos con la participación activa de todos los cursos de ambos ciclos, ya que eso los motiva a cuidar desde el mobiliario hasta el equipamiento tecnológico tan utilizado en la escuela.</li>
              <li>Las dependencias son lugares abiertos de escucha y reflexión ante cualquier dificultad, brindando contención y atención tanto por el equipo de conducción como preceptores, auxiliares y equipo de conducción.</li>
            </ul>

            <h3 className="text-2xl font-semibold mb-3">D) Elaboración</h3>
            <p className="mb-4">La actualización del A.I.C. comenzó a desarrollarse durante el ciclo lectivo 2014, a partir de la realización de la Jornada de Convivencia Escolar y las propuestas de reformulación realizadas por estudiantes (siendo representados por delegados de curso e integrantes del Centro de Estudiantes), docentes, preceptores, auxiliares, familias, EOE y Equipo de Conducción, en distintas reuniones que se llevaron a cabo con dicha finalidad, entrevistas, la utilización de un buzón de sugerencias, propuestas y comentarios de forma anónima, reuniones con adultos responsable y reuniones con el personal docente y no docente.</p>
            <p className="mb-4">Se continúo este año con la Primer Jornada de Convivencia llevada a cabo el 9 de mayo, donde los y las estudiantes, docentes, no docentes y los/as responsables de los/as estudiantes revisaron y trabajaron los AIC, se conformó el CIC y se calendarizó las reuniones tentativas del CIC para la reformulación del AIC. Las reuniones del CIC con la presencia del EOE que permitieron lograr acuerdos y consensuar modificaciones y actualizaciones de nuestro AIC.</p>

            <h3 className="text-2xl font-semibold mb-3">E) Acuerdos alcanzados por la comunidad educativa para una convivencia escolar democrática, participativa y justa</h3>
            <p className="mb-4">A raíz de todos los encuentros y reuniones con la comunidad educativa hemos acordado que EN NUESTRA ESCUELA:</p>
            <ul className="list-disc list-inside space-y-2">
              <li>Todo conflicto deberá resolverse a través del diálogo y la escuela garantizará los espacios y los tiempos para que el diálogo ocurra, evitándose toda violencia física, verbal o de cualquier índole.</li>
              <li>La relación entre todas las personas que conforman la EEST N°7 deberá ser cordial y respetuosa. Se rechaza toda forma de acoso, las agresiones y el hostigamiento.</li>
              <li>Con respecto a la vestimenta, consideramos que cada uno tiene su estilo con el cual se siente identificado, por lo que acordamos que nos vestiremos acorde al lugar al que asistimos, sin que ello modifique sus gustos y preferencias.</li>
              <li>El color que nos identifica es el azul, eso facilita al corredor escolar saber que son estudiantes de la E.E.S.T N° 7, por lo que se sugiere utilizar remera, chomba o buzo azul con el pin institucional. (no es obligatorio).</li>
              <li>Todos conformamos un mismo equipo donde nos basamos en el respeto por el otro, la cooperación y motivación hacia aquellos estudiantes que tengan dificultades en los aprendizajes o se encuentren emocionalmente frágiles.</li>
              <li>Uso responsable de las redes sociales, sin utilizarlos para generar daño, discriminar o invadir la intimidad de otros y otras; ni difundir imágenes y/o videos sin consentimiento de el/los implicado/os.</li>
              <li>Se acuerda cuidar la higiene de los espacios escolares, así como del mobiliario y los elementos de trabajo, los cuales no deberán ser dañados o escritos. Las aulas y otras dependencias deberán abandonarse en el mismo estado en que se encontraron al ingreso.</li>
            </ul>

            <h3 className="text-2xl font-semibold mb-3">F) Acuerdos Aúlicos</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>Se respetará y cuidará el espacio áulico como ámbito diario de trabajo y lugar de pertenencia.</li>
              <li>Se mantendrá el hábito del orden y la limpieza de los espacios utilizados, de no dañar el ámbito escolar (instalaciones y bienes), colaborando para cuidarlo y mantenerlo.</li>
              <li>Se permite el uso de teléfonos celulares con fines educativos, los mismos se utilizarán silenciados, PUDIENDO ATENDER EL LLAMADO DEL ADULTO RESPONSABLE.</li>
              <li>El respeto mutuo entre el personal docente y los estudiantes y viceversa.</li>
              <li>Para las prácticas de taller ciclo básico se proporcionan todos los elementos de seguridad asistiendo preferentemente con calzado cerrado para mayor protección ante la caída de una herramienta, o alguna pieza de maquinarias.</li>
              <li>Se permite el pelo de colores y solicitamos prudencia con los piercing y largo de uñas que pueda ponerlos en riesgo en las prácticas de taller.</li>
              <li>A las clases de educación física se asiste con vestimenta y calzado apropiado para evitar lesiones. Téngase presente que realizar actividad física con jeans puede ocasionar desgarros.</li>
            </ul>

            <h3 className="text-2xl font-semibold mb-3">G) Acciones Institucionales y sanciones pedagógicas a aplicarse en caso de transgresiones</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>Citación a la familia para comunicar lo sucedido y habilitar un espacio de reflexión fuera del ámbito escolar.</li>
              <li>Llamada de atención oral y/o escrita en cuaderno de comunicaciones a fin de generar una instancia de reflexión respecto de lo sucedido.</li>
              <li>Elaboración de un proyecto de investigación relacionado con el acuerdo transgredido. El mismo se realizará en un primer momento recabando información y fuentes precisas acerca de la temática a abordar. Una vez concluido este deberá exponerse ante los pares. De esta forma se espera no solamente reparar el acuerdo transgredido sino también dar un sentido pedagógico a la reparación.</li>
              <li>Reparación del mobiliario o los elementos dañados por su accionar. Esta acción se llevará a cabo previa notificación a las familias.</li>
              <li>Participación en una propuesta pedagógica que aborden el/los acuerdo/s transgredido/s en forma grupal. Así se podrán fortalecer los acuerdos e involucrar a todos los estudiantes más allá de los que hayan transgredido los presentes AIC.</li>
            </ul>

            <h3 className="text-2xl font-semibold mb-3">H) Consejo Institucional de Convivencia (CIC)</h3>
            <p className="mb-4">El Consejo Institucional de Convivencia (CIC) es un órgano participativo y dinámico que funciona como instancia de análisis, evaluación y deliberación de todo asunto a proyecto propuesto a su consideración, especialmente aquellos planteados en las Jornadas correspondientes a los AIC. Es un organismo permanente, cuya función se centra en el asesoramiento al Equipo Directivo sobre acciones institucionales que propicien una convivencia basada en el respeto, impulsora de una cultura participativa que reconoce el protagonismo de las/los integrantes de la escuela secundaria. Una de sus tareas centrales es la de propiciar la circulación del AIC, en la mayor amplitud de soportes comunicacionales posibles, de la versión en consulta y los aportes de todos los integrantes de la comunidad educativa, siendo condición indispensable que el borrador del AIC se discuta en el CIC, pudiendo ser impugnado si así no ocurriese. Para ello, se conformará el Consejo Institucional de Convivencia integrado por 5 estudiantes (4 delegados de curso y un representante del Centro de Estudiantes), 2 profesores, 1 cargo base (preceptora, bibliotecaria, EMATP),1 integrante del EOE y 1 integrante personal auxiliar y 1 miembro del Equipo de Conducción, debiéndose respetar la misma proporción de representantes entre adultos y estudiantes y la paridad de género por cada ámbito de representación. Los miembros del CIC serán elegidos democráticamente por sus pares, previendo la elección de titulares y suplentes para cada uno de los sectores. El mandato de las/os consejeras/os será de dos años, renovándose por mitades. Los miembros del CIC podrán ser reelectos hasta dos mandatos consecutivos y la elección se realizará una vez por año durante la primera jornada institucional para el abordaje de la convivencia escolar, a fin de poder realizar la primera sesión anual entre los meses de mayo y junio, pudiendo abordar las inquietudes, intereses y necesidades de la comunidad educativas, planteadas en las jornadas y las acciones propuestas por ellos, estableciéndose una agenda anual tentativa. El CIC deberá reunirse en forma ordinaria al menos una vez cada dos meses, de acuerdo con el cronograma de reuniones anuales establecido en la agenda anual tentativa, pudiendo ser convocado por el Equipo de Conducción a una sesión extraordinaria. Las situaciones que serán abordadas por el CIC deberán estar encuadradas sosteniendo la resolución de conflictos desde las políticas de cuidado, manteniendo el principio de confidencialidad, resguardando la información privada y centrando la problemática a resolver desde una perspectiva institucional. Las sesiones del CIC, junto con las orientaciones y propuestas que de ese espacio surjan, serán debidamente consignadas en un libro de actas habilitado para tal fin.</p>
            <p className="mb-4">El/la estudiante asumirá el compromiso de realizar la acción reparadora acorde a la gravedad de la transgresión cometida, teniendo en cuenta: el contexto dentro del cual se desarrolló el hecho. El personal docente y no docente, será pasible de las acciones o sanciones establecidas.</p>

            <h3 className="text-2xl font-semibold mb-3">Planificación de las instancias de revisión de los AIC</h3>
            <p className="mb-4">El presente AIC podrá ser revisado en todo o en sus partes. Para poder realizar cualquier tipo de modificación se deberá reunir el CIC en sesión ordinaria y con la debida notificación a toda la comunidad educativa de los motivos que justifican las modificaciones.</p>
            <p className="mb-4">Las modificaciones a los presentes acuerdos también podrán realizarse en las tres jornadas de convivencia a realizarse en el mes de marzo, en la semana previa al receso invernal y en la última semana de noviembre. Otra instancia para tratar modificaciones en los presentes acuerdos será la semana de Evaluación de la Convivencia Escolar en el mes de diciembre.</p>
            <p className="mb-4">En la sesión extraordinaria la necesidad de modificación deberá ser aprobada por dos tercios de los votos de los integrantes del CIC.</p>
            <p className="mb-4">En un lapso, no mayor a treinta días se volverá a reunir el Consejo y se procederá a la aprobación de las modificaciones propuestas con mayoría simple para cada una de las mismas. Se deberá alcanzar el consenso en caso de empate y el director no podrá modificar los puntos en cuestión hasta que el mismo no sea logrado.</p>
            <p className="mb-4">Aprobada la modificación de él o los puntos actualizados se elevará el texto nuevo a la Inspección del Nivel para que se someta a la evaluación de los organismos competentes y se oficialice el nuevo texto.</p>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-4">Acciones vinculadas a la evaluación, acreditación, promoción y cierre del ciclo lectivo 2024 y 2025 en el Nivel Secundario</h2>
            <p className="mb-4">El presente documento tiene como propósito comunicar las principales acciones vinculadas a la evaluación, acreditación y promoción para el cierre del ciclo lectivo 2024-2025 en base al Régimen Académico N° 1650/24 y Anexos</p>

            <h3 className="text-2xl font-semibold mb-3">1. Cierre del segundo cuatrimestre y entrega del RITE</h3>
            <p className="mb-4">De acuerdo a lo establecido en la Comunicación Conjunta citada y en el Calendario de Actividades Docentes, se entregarán Registros Institucionales de Trayectorias Educativas a estudiantes y sus familias al cierre del cuatrimestre con la valoración cualitativa expresada en las categorías establecidas: Trayectoria Educativa Avanzada (TEA), Trayectoria Educativa en Proceso (TEP) y Trayectoria Educativa Discontinua (TED).</p>
            <p className="mb-4">Se considerará materia aprobada cuando la/el estudiante tenga de 7 a 10 en ambos cuatrimestres. En este caso, se consignará en el RITE la calificación numérica final de la materia.</p>
            <p className="mb-4">Se considerará materia no aprobada cuando la calificación sea menor a 7 en ambos cuatrimestres. En este caso, la/el estudiante participará de instancias de intensificación de la enseñanza durante diciembre y febrero a fines de acreditar la misma.</p>
            <p className="mb-4">También se considerará no aprobada la materia cuando la valoración sea TEP-TED en un cuatrimestre, como se especifica a continuación:</p>
            <ul className="list-disc list-inside space-y-2">
                <li>7 o más en el primer cuatrimestre y menos de 7 en el segundo. En este caso, intensificarán solo los contenidos pendientes del segundo cuatrimestre.</li>
                <li>Menos de 7 en el primer cuatrimestre y 7 o más en el segundo. En este caso, intensificarán solo los contenidos pendientes del primer cuatrimestre.</li>
            </ul>

            <h3 className="text-2xl font-semibold mb-3">2. Cierre del segundo cuatrimestre y entrega del RITE</h3>
            <p className="mb-4">En cuanto a Comisiones Evaluadoras para completar nivel y equivalencia se implementarán según fechas pautadas en el Calendario de Actividades Docentes.</p>

            <h3 className="text-2xl font-semibold mb-3">Nuevo Régimen Académico</h3>
            <ul className="list-disc list-inside space-y-2">
                <li>Con Nuevas pautas para la planificación de la enseñanza, para atender a las diversas realidades que presentan los estudiantes.</li>
                <li>Los estudiantes podrán tener un máximo de 5 materias pendientes de aprobación y acreditación para intensificar al año siguiente, 4 de curricular y 1 de taller.</li>
                <li>Las materias aprobadas no se recursan.</li>
                <li>El ciclo lectivo se divide en dos cuatrimestres. Se entrega una valoración preliminar a mediados de cada cuatrimestre TEA. TEP. TED, y una calificación numérica final al finalizar cada cuatrimestre.</li>
                <li>Más instancias de estudio para intensificar los aprendizajes no logrados. 6 periodos de intensificación, al inicio y cierre de cada cuatrimestre, en diciembre y en febrero.</li>
                <li>Ahora también se computa la asistencia por materia, que deberá alcanzar el 75%. De lo contrario se deberá participar de los periodos de intensificación.</li>
            </ul>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ReglamentoInterno;
