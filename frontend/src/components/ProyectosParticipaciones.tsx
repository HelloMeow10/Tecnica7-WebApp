import { FC } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Rocket } from 'lucide-react';

interface ProyectosParticipacionesProps {
  title: string;
  description: string;
  items: string[];
}

const ProyectosParticipaciones: FC<ProyectosParticipacionesProps> = ({ title, description, items }) => {
  return (
    <Card className="card-elegant p-8 mb-16">
      <CardHeader>
        <CardTitle className="font-heading text-2xl text-foreground">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground mb-6">{description}</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {items.map((item, index) => (
            <div key={index} className="flex items-start">
              <Rocket className="h-6 w-6 text-primary mr-4 mt-1 flex-shrink-0" />
              <span className="text-muted-foreground">{item}</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default ProyectosParticipaciones;
