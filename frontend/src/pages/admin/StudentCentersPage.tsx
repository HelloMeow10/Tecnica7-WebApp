import React, { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const StudentCentersPage = () => {
  const [items, setItems] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchCenters = async () => {
    setLoading(true);
    const res = await fetch('/api/student-centers');
    const data = await res.json();
    setItems(data);
    setLoading(false);
  };

  useEffect(() => { fetchCenters(); }, []);

  return (
    <div className="container mx-auto p-6">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">Centro de Estudiantes (admin)</h1>
        <Button onClick={() => alert('Crear no implementado aún')}>Crear</Button>
      </div>
      <div className="grid gap-4">
        {loading && <div>Cargando...</div>}
        {items.map(i => (
          <Card key={i.id}>
            <CardHeader>
              <CardTitle className="flex justify-between items-center">
                <span>{i.name} — {i.period}</span>
                <div className="space-x-2">
                  <Button variant="outline" onClick={() => alert('Editar no implementado')}>Editar</Button>
                  <Button variant="destructive" onClick={() => alert('Borrar no implementado')}>Borrar</Button>
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm">{i.president}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default StudentCentersPage;
