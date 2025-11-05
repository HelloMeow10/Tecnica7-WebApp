import React, { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Switch } from '@/components/ui/switch';
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

  // UI específica: teléfonos y prompt IA
  const [phoneEnabled, setPhoneEnabled] = useState<boolean>(true);
  const [phoneNumbersText, setPhoneNumbersText] = useState<string>('');
  const [aiPrompt, setAiPrompt] = useState<string>('');

  const fetchItems = async () => {
    setLoading(true);
    const res = await fetch('/api/settings');
    const data = await res.json();
    setItems(data);
    // hidratar controles específicos
    try {
      const enabled = data.find((i: any) => i.key === 'site.phone.enabled')?.value;
      setPhoneEnabled((enabled ?? 'true') !== 'false');
      const numbersRaw = data.find((i: any) => i.key === 'site.phone.numbers')?.value;
      if (numbersRaw) {
        const arr = JSON.parse(numbersRaw);
        if (Array.isArray(arr)) setPhoneNumbersText(arr.join('\n'));
      }
      const promptVal = data.find((i: any) => i.key === 'ai.prompt.system')?.value ?? '';
      setAiPrompt(promptVal);
    } catch {}
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
    const headers: any = { 'Content-Type': 'application/json' };
    if (auth?.token) headers['Authorization'] = `Bearer ${auth.token}`;

    const res = await fetch('/api/settings', { method: 'POST', headers, body: JSON.stringify({ key: keyField, value: valueField }) });
    if (!res.ok) return alert('Error al guardar');
    setOpen(false);
    fetchItems();
  };

  // Guardar teléfonos y prompt IA
  const savePhoneSettings = async () => {
    const headers: any = { 'Content-Type': 'application/json' };
    if (auth?.token) headers['Authorization'] = `Bearer ${auth.token}`;
    const numbers = phoneNumbersText
      .split(/\n|,/)
      .map(s => s.trim())
      .filter(Boolean);
    await fetch('/api/settings', { method: 'POST', headers, body: JSON.stringify({ key: 'site.phone.enabled', value: String(phoneEnabled) }) });
    await fetch('/api/settings', { method: 'POST', headers, body: JSON.stringify({ key: 'site.phone.numbers', value: JSON.stringify(numbers) }) });
    fetchItems();
  };

  const disablePhonesQuick = async () => {
    const headers: any = { 'Content-Type': 'application/json' };
    if (auth?.token) headers['Authorization'] = `Bearer ${auth.token}`;
    await fetch('/api/settings', { method: 'POST', headers, body: JSON.stringify({ key: 'site.phone.enabled', value: 'false' }) });
    setPhoneEnabled(false);
    fetchItems();
  };

  const saveAiPrompt = async () => {
    const headers: any = { 'Content-Type': 'application/json' };
    if (auth?.token) headers['Authorization'] = `Bearer ${auth.token}`;
    await fetch('/api/settings', { method: 'POST', headers, body: JSON.stringify({ key: 'ai.prompt.system', value: aiPrompt }) });
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

      {/* Sección específica: Teléfonos y Prompt IA */}
      <div className="grid gap-4 mb-8">
        <Card>
          <CardHeader>
            <CardTitle>Teléfonos de contacto</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Mostrar números de teléfono</p>
                <p className="text-sm text-muted-foreground">Desactívalo para ocultar los teléfonos del sitio y del prompt de la IA.</p>
              </div>
              <Switch checked={phoneEnabled} onCheckedChange={(v) => setPhoneEnabled(Boolean(v))} />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Números (uno por línea)</label>
              <Textarea rows={4} value={phoneNumbersText} onChange={(e) => setPhoneNumbersText(e.target.value)} placeholder="(011) 4248-6259\n11 6523-3593" />
            </div>
            <div className="flex gap-2">
              <Button onClick={savePhoneSettings}>Guardar teléfonos</Button>
              <Button variant="secondary" onClick={disablePhonesQuick}>Deshabilitar números de teléfono</Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Prompt de la IA</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <p className="text-sm text-muted-foreground">Personaliza la instrucción del asistente. Se añadirá al final la información actualizada del sitio.</p>
            <Textarea rows={8} value={aiPrompt} onChange={(e) => setAiPrompt(e.target.value)} placeholder="Eres un asistente virtual para la E.E.S.T. N°7..." />
            <div className="flex justify-end">
              <Button onClick={saveAiPrompt}>Guardar prompt</Button>
            </div>
          </CardContent>
        </Card>
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
        <DialogContent className="!bg-white !text-black dark:!bg-neutral-900 dark:!text-white">
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
