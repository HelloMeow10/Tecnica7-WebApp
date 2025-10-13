import React, { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Dialog, DialogContent, DialogTrigger, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { useAuth } from '@/hooks/useAuth';

const SettingsAdminPage = () => {
  const [items, setItems] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [editing, setEditing] = useState<any | null>(null);
  const [keyField, setKeyField] = useState('');
  const [valueField, setValueField] = useState('');
  const auth = useAuth();

  const fetchItems = async () => {
    setLoading(true);
    const res = await fetch('/api/settings');
    const data = await res.json();
    setItems(data);
    setLoading(false);
  };

  useEffect(() => { fetchItems(); }, []);

  const openCreate = () => {
    setEditing(null);
    setKeyField('');
    setValueField('');
    setOpen(true);
  };

  const openEdit = (item: any) => {
    setEditing(item);
    setKeyField(item.key);
    setValueField(item.value);
    setOpen(true);
  };

  const save = async () => {
    if (!keyField) return alert('Key requerido');
    const method = editing ? 'PUT' : 'POST';
    const url = editing ? `/api/settings/${encodeURIComponent(editing.key)}` : '/api/settings';
    const headers: any = { 'Content-Type': 'application/json' };
    if (auth?.token) headers['Authorization'] = `Bearer ${auth.token}`;

    const res = await fetch(url, { method, headers, body: JSON.stringify({ key: keyField, value: valueField }) });
    if (!res.ok) return alert('Error al guardar');
    setOpen(false);
    fetchItems();
  };

  const remove = async (item: any) => {
    if (!confirm(`Eliminar ajuste ${item.key}?`)) return;
    const headers: any = {};
    if (auth?.token) headers['Authorization'] = `Bearer ${auth.token}`;
    const res = await fetch(`/api/settings/${encodeURIComponent(item.key)}`, { method: 'DELETE', headers });
    if (!res.ok) return alert('Error al eliminar');
    fetchItems();
  };

  return (
    <div className="container mx-auto p-6">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">Ajustes del Sitio (admin)</h1>
        <div className="flex items-center gap-2">
          <Button onClick={openCreate}>Crear ajuste</Button>
        </div>
      </div>
      <div className="grid gap-4">
        {loading && <div>Cargando...</div>}
        {items.map(i => (
          <Card key={i.key}>
            <CardHeader>
              <CardTitle className="flex justify-between items-center">
                <span>{i.key}</span>
                <div className="space-x-2">
                  <Button variant="outline" onClick={() => openEdit(i)}>Editar</Button>
                  <Button variant="destructive" onClick={() => remove(i)}>Eliminar</Button>
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <pre className="text-sm whitespace-pre-wrap">{i.value}</pre>
            </CardContent>
          </Card>
        ))}
      </div>

      <Dialog open={open} onOpenChange={(o) => setOpen(o)}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{editing ? 'Editar ajuste' : 'Crear ajuste'}</DialogTitle>
          </DialogHeader>
          <div className="space-y-4 mt-4">
            <div>
              <label className="block text-sm font-medium">Key</label>
              <Input value={keyField} onChange={(e: any) => setKeyField(e.target.value)} disabled={!!editing} />
            </div>
            <div>
              <label className="block text-sm font-medium">Value</label>
              <textarea className="w-full border rounded p-2" rows={8} value={valueField} onChange={(e) => setValueField(e.target.value)} />
            </div>
            <div className="flex justify-end gap-2">
              <Button variant="ghost" onClick={() => setOpen(false)}>Cancelar</Button>
              <Button onClick={save}>{editing ? 'Guardar' : 'Crear'}</Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default SettingsAdminPage;
