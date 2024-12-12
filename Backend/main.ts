import { Hono } from 'hono@latest';
import chatRoutes from './routes/chatRoutes.ts';

const app = new Hono();

app.route('/chat', chatRoutes);

Deno.serve({ port: 3000 }, app.fetch)

export default {
    port: 3000,
    fetch: app.fetch,
};