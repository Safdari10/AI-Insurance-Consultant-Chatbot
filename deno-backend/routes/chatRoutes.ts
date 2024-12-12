import { Hono } from 'hono@latest';
import { startChat, sendMessage } from '../controllers/chatController.ts';

const chatRoutes = new Hono();

chatRoutes.post('/start', startChat);
chatRoutes.post('/send', sendMessage);

export default chatRoutes;
