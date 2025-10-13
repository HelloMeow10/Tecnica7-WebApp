import React, { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';

type NewsItem = {
  id: number;
  title: string;
  slug: string;
  summary?: string;
  content: string;
  image_url?: string;
  published: boolean;
};

const NewsPage = () => {
  const [items, setItems] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchNews = async () => {
    setLoading(true);
    const res = await fetch('/api/news');
    const data = await res.json();
    setItems(data);
    setLoading(false);
  };

  useEffect(() => { fetchNews(); }, []);

  return (
    <div className="container mx-auto p-6">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">Noticias (admin)</h1>
        <Dialog>
          <DialogTrigger asChild>
            <Button>Crear Noticia</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Crear noticia</DialogTitle>
            </DialogHeader>
            {/* Formulario simple - se puede mejorar */}
            <form onSubmit={e => { e.preventDefault(); alert('No implementado aún'); }}>
              <div className="space-y-2">
                <input name="title" placeholder="Título" className="w-full p-2 border" />
                <input name="slug" placeholder="Slug" className="w-full p-2 border" />
                <textarea name="content" placeholder="Contenido" className="w-full p-2 border" />
                <div className="flex justify-end">
                  <Button type="submit">Guardar</Button>
                </div>
              </div>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      <div className="grid gap-4">
        {loading && <div>Cargando...</div>}
        {items.map(item => (
          <Card key={item.id}>
            <CardHeader>
              <CardTitle className="flex justify-between items-center">
                <span>{item.title}</span>
                <div className="space-x-2">
                  <Button variant="outline" onClick={() => alert('Editar no implementado')}>Editar</Button>
                  <Button variant="destructive" onClick={() => alert('Borrar no implementado')}>Borrar</Button>
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm">{item.summary}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default NewsPage;
