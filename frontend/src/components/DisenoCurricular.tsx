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
      .then((response) => response.text())
      .then((text) => setMarkdown(text));
  }, [filePath]);

  return (
    <Card className="card-elegant p-8 mb-16">
      <CardHeader>
        <CardTitle className="font-heading text-2xl text-foreground">Diseño Curricular</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="prose prose-lg max-w-none">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{markdown}</ReactMarkdown>
        </div>
      </CardContent>
    </Card>
  );
};

export default DisenoCurricular;
