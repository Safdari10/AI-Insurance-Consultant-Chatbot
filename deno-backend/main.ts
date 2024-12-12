import { Hono } from 'hono@latest';
import { cors } from 'hono@latest/cors';
import chatRoutes from './routes/chatRoutes.ts';

const app = new Hono();

app.use('*', cors());

app.route('/chat', chatRoutes);

Deno.serve({ port: 3000 }, app.fetch);
