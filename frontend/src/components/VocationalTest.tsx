import { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from '@/components/ui/dialog';
import { Slider } from '@/components/ui/slider';
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const questions = [
  {
    text: 'Disfruto resolviendo problemas lógicos y rompecabezas.',
    area: 'programacion',
  }, // <-- Coma agregada aquí
  {
    text: 'Me interesa aprender cómo se construyen los sitios web y las aplicaciones.',
    area: 'programacion',
  },
  {
    text: 'Me gusta experimentar con diferentes lenguajes de programación.',
    area: 'programacion',
  },
  {
    text: 'Siento curiosidad por la inteligencia artificial y el aprendizaje automático.',
    area: 'programacion',
  },
  {
    text: 'Me atrae la idea de crear algoritmos para automatizar tareas.',
    area: 'programacion',
  },
  {
    text: 'Me siento cómodo/a trabajando con conceptos abstractos y matemáticos.',
    area: 'programacion',
  },
  {
    text: 'Me gusta desarmar cosas para entender cómo funcionan.',
    area: 'programacion',
  },
  {
    text: 'Disfruto planificando y estructurando proyectos complejos.',
    area: 'programacion',
  },
  {
    text: 'Me interesa la ciberseguridad y la protección de datos.',
    area: 'programacion',
  },
  {
    text: 'Me veo trabajando en una empresa de tecnología en el futuro.',
    area: 'programacion',
  },
  {
    text: 'Disfruto expresándome visualmente a través del dibujo, la fotografía o el video.',
    area: 'multimedios',
  },
  {
    text: 'Me interesa el diseño gráfico y la comunicación visual.',
    area: 'multimedios',
  },
  {
    text: 'Me gusta crear y editar videos o animaciones.',
    area: 'multimedios',
  },
  {
    text: 'Siento curiosidad por el mundo del cine y la producción audiovisual.',
    area: 'multimedios',
  },
  {
    text: 'Me atrae la idea de contar historias a través de imágenes y sonidos.',
    area: 'multimedios',
  },
  {
    text: 'Disfruto trabajando con software de edición de imágenes como Photoshop o GIMP.',
    area: 'multimedios',
  },
  {
    text: 'Me gusta el diseño de personajes y la creación de mundos imaginarios.',
    area: 'multimedios',
  },
  {
    text: 'Me interesa la producción musical y el diseño de sonido.',
    area: 'multimedios',
  },
  {
    text: 'Me gustaría trabajar en publicidad o marketing digital.',
    area: 'multimedios',
  },
  {
    text: 'Me veo trabajando en un estudio de animación o una productora de cine.',
    area: 'multimedios',
  },
];

const VocationalTest = ({ open, onOpenChange }) => {
  const [answers, setAnswers] = useState(Array(questions.length).fill(5));
  const [results, setResults] = useState(null);

  const handleSliderChange = (index, value) => {
    const newAnswers = [...answers];
    newAnswers[index] = value[0];
    setAnswers(newAnswers);
  };

  const calculateResults = () => {
    const scores = {
      programacion: 0,
      multimedios: 0,
    };
    // Corrige el cálculo del máximo por área
    const maxScorePerArea: { programacion: number; multimedios: number } = { programacion: 0, multimedios: 0 };
    questions.forEach((question) => {
      maxScorePerArea[question.area] += 10;
    });

    questions.forEach((question, index) => {
      scores[question.area] += answers[index];
    });

    const percentages = {
      programacion: (scores.programacion / maxScorePerArea.programacion) * 100,
      multimedios: (scores.multimedios / maxScorePerArea.multimedios) * 100,
    };

    setResults(percentages);
  };

  const data = results
    ? [
        { name: 'Programación', value: Math.round(results.programacion) },
        { name: 'Multimedios', value: Math.round(results.multimedios) },
      ]
    : [];

  const COLORS = ['#0088FE', '#00C49F'];

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[600px] !bg-white !text-black">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center">Test Vocacional</DialogTitle>
          <DialogDescription className="text-center">
            Respondé del 1 al 10 qué tan de acuerdo estás con cada afirmación.
          </DialogDescription>
        </DialogHeader>

        {!results ? (
          <div className="max-h-[60vh] overflow-y-auto pr-4">
            <div className="space-y-6">
              {questions.map((question, index) => (
                <div key={index} className="space-y-3">
                  <label className="font-medium">
                    {index + 1}. {question.text}
                  </label>
                  <div className="flex items-center space-x-4">
                    <span className="text-sm w-8 text-center">{answers[index]}</span>
                    <Slider
                      defaultValue={[answers[index]]}
                      min={1}
                      max={10}
                      step={1}
                      onValueChange={(value) => handleSliderChange(index, value)}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center h-96">
            <h3 className="text-xl font-bold mb-4">Tus Resultados</h3>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={data}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
        )}

        <DialogFooter>
          {!results ? (
            <Button onClick={calculateResults} className="w-full">
              Ver Resultados
            </Button>
          ) : (
            <Button
              onClick={() => {
                setResults(null);
                setAnswers(Array(questions.length).fill(5));
              }}
              className="w-full"
            >
              Hacer el test de nuevo
            </Button>
          )}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default VocationalTest;
