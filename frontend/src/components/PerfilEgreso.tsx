import { FC } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle } from 'lucide-react';

interface PerfilEgresoProps {
  title: string;
  description: string;
  items: string[];
}

const PerfilEgreso: FC<PerfilEgresoProps> = ({ title, description, items }) => {
  return (
    <Card className="card-elegant p-8 mb-16">
      <CardHeader>
        <CardTitle className="font-heading text-2xl text-foreground">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground mb-6">{description}</p>
        <ul className="space-y-4">
          {items.map((item, index) => (
            <li key={index} className="flex items-start">
              <CheckCircle className="h-6 w-6 text-primary mr-4 mt-1 flex-shrink-0" />
              <span className="text-muted-foreground">{item}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

export default PerfilEgreso;
