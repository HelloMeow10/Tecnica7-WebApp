import { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface DisenoCurricularProps {
  filePath: string;
}

const DisenoCurricular = ({ filePath }: DisenoCurricularProps) => {
  const [markdown, setMarkdown] = useState('');

  useEffect(() => {
    fetch(filePath)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Error al cargar el archivo: ${response.status}`);
        }
        return response.text();
      })
      .then((text) => {
        if (!text.trim()) {
          throw new Error('El archivo está vacío');
        }
        console.log('Contenido cargado:', text.substring(0, 100) + '...'); // Para depuración
        setMarkdown(text);
      })
      .catch((error) => {
        console.error('Error al cargar el diseño curricular:', error);
        setMarkdown('**Error al cargar el contenido del diseño curricular.** Por favor, intente más tarde.');
      });
  }, [filePath]);

  return (
    <Card className="card-elegant p-8 mb-16">
      <CardHeader>
        <CardTitle className="font-heading text-2xl text-foreground">Diseño Curricular</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="prose prose-lg max-w-none prose-headings:text-foreground prose-p:text-muted-foreground prose-strong:text-foreground prose-ul:text-muted-foreground">
          {markdown ? (
            <ReactMarkdown remarkPlugins={[remarkGfm]}>{markdown}</ReactMarkdown>
          ) : (
            <p className="text-muted-foreground">Cargando diseño curricular...</p>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default DisenoCurricular;
