import { Hono } from 'hono@latest';
import chatRoutes from './routes/chatRoutes.ts';

const app = new Hono();

app.route('/chat', chatRoutes);

export default {
    port: 3000,
    fetch: app.fetch,
};