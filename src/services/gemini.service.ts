import { GoogleGenerativeAI, ChatSession, Content } from '@google/generative-ai';
import config from '../config';

const genAI = new GoogleGenerativeAI(config.geminiApiKey);
const model = genAI.getGenerativeModel({ model: 'gemini-2.5-flash' });

interface ChatMessage {
  role: 'user' | 'model';
  parts: { text: string }[];
}

export const startChat = (history: ChatMessage[]): ChatSession => {
  return model.startChat({
    history: history as Content[],
  });
};

export const sendMessage = async (
  chat: ChatSession,
  message: string
): Promise<string> => {
  try {
    const result = await chat.sendMessage(message);
    const response = await result.response;
    return response.text();
  } catch (error) {
    console.error('Error sending message to Gemini:', error);
    throw new Error('Failed to get response from AI service.');
  }
};
