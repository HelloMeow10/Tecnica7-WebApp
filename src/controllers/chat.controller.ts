import { Request, Response } from 'express';
import { startChat, sendMessage } from '../services/gemini.service';
import prisma from '../services/prisma.service';

// In-memory session store for simplicity.
// For production, you would use a more robust session management solution (e.g., Redis, database).
const sessions: { [sessionId: string]: any } = {};

export const handleChat = async (req: Request, res: Response) => {
  const { prompt, history, sessionId } = req.body;

  // Cargar ajustes dinámicos (teléfonos y prompt IA)
  const [phoneEnabledSetting, phoneNumbersSetting, aiPromptSetting] = await Promise.all([
    prisma.siteSetting.findUnique({ where: { key: 'site.phone.enabled' } }).catch(() => null),
    prisma.siteSetting.findUnique({ where: { key: 'site.phone.numbers' } }).catch(() => null),
    prisma.siteSetting.findUnique({ where: { key: 'ai.prompt.system' } }).catch(() => null),
  ]);

  const schoolName = "Escuela Secundaria Técnica N°7 de Lomas de Zamora";
  // Valores por defecto actuales
  const defaultPhones = ["(011) 4248-6259", "11 6523-3593"]; // oficial, directora
  const phoneEnabled = (phoneEnabledSetting?.value ?? 'true') !== 'false';
  let phoneNumbers: string[] = defaultPhones;
  try {
    if (phoneNumbersSetting?.value) {
      const parsed = JSON.parse(phoneNumbersSetting.value);
      if (Array.isArray(parsed)) phoneNumbers = parsed.map(String);
    }
  } catch {}

  const address = 'Manuel Acevedo 1864, Banfield';
  const email = 'tecnica7ldz@gmail.com';
  const instagram = 'https://www.instagram.com/tecnica7ldz';
  const orientations = 'Técnico en Programación y Técnico en Multimedios';
  const hours = 'lunes a viernes de 07:30 a 18:00hs';

  const lines: string[] = [
    `Dirección: ${address}`,
    `Correo electrónico: ${email}`,
    `Instagram: ${instagram}`,
    `Orientaciones: ${orientations}`,
    `Horarios de atención: ${hours}`,
  ];
  if (phoneEnabled && phoneNumbers.length) {
    phoneNumbers.forEach((n, idx) => {
      lines.splice(1, 0, idx === 0 ? `Teléfono oficial: ${n}` : `Teléfono alternativo: ${n}`);
    });
  }
  const datosActuales = lines.join('\n');

  const defaultSystemInstruction = `Eres un asistente virtual exclusivamente para la ${schoolName}. Tu única función es responder preguntas relacionadas con esta escuela, como horarios, inscripciones, materias, historia de la escuela, y eventos. No respondas ninguna pregunta que no esté directamente relacionada con la escuela. Si te preguntan sobre cualquier otro tema, debes responder amablemente que solo puedes proporcionar información sobre la escuela. Utiliza la siguiente información actualizada como tu principal fuente de conocimiento:\n${datosActuales}`;
  const baseInstruction = (aiPromptSetting?.value && aiPromptSetting.value.trim().length > 0)
    ? `${aiPromptSetting.value}\n\nInformación actualizada:\n${datosActuales}`
    : defaultSystemInstruction;
  const finalPrompt = `${baseInstruction}\n\nPregunta del usuario: ${prompt}`;

  if (!prompt || !sessionId) {
    return res.status(400).json({ error: 'Prompt and sessionId are required.' });
  }

  try {
    // Retrieve or create a new chat session
    if (!sessions[sessionId]) {
      const initialHistory = history || [];
      sessions[sessionId] = startChat(initialHistory);
    }

    const chatSession = sessions[sessionId];
    // Usar el prompt modificado con la instrucción de sistema
    const responseText = await sendMessage(chatSession, finalPrompt);

    res.json({ response: responseText });
  } catch (error) {
    console.error('Chat handling error:', error);
    res.status(500).json({ error: 'Failed to handle chat request.' });
  }
};
