import { Request, Response } from 'express';
import { startChat, sendMessage } from '../services/gemini.service';

// In-memory session store for simplicity.
// For production, you would use a more robust session management solution (e.g., Redis, database).
const sessions: { [sessionId: string]: any } = {};

export const handleChat = async (req: Request, res: Response) => {
  const { prompt, history, sessionId } = req.body;

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
    const responseText = await sendMessage(chatSession, prompt);

    res.json({ response: responseText });
  } catch (error) {
    console.error('Chat handling error:', error);
    res.status(500).json({ error: 'Failed to handle chat request.' });
  }
};
