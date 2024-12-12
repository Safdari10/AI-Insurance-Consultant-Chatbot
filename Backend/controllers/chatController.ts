import { Context } from "hono@latest";
import { ChatService } from "../services/chatService.ts";

const chatService = new ChatService();

export const startChat = async (c: Context) => {
    try {
        const response = await chatService.startChat();
        if (response.response.candidates && response.response.candidates.length > 0) {
            return c.json(response.response.candidates[0].content.parts[0].text);
        } else {
            return c.json({ error: "No candidates found" }, 500);
        }
    } catch (error) {
        if (error instanceof Error) {
            return c.json({ error: error.message }, 500);
        } else {
            return c.json({ error: "Unknown error" }, 500);
        }
    }
};

export const sendMessage = async (c: Context) => {
    try {
        const { message } = await c.req.json();
        const response = await chatService.sendMessage(message);
        return c.json(response);
    } catch (error) {
        if (error instanceof Error) {
            return c.json({ error: error.message }, 500);
        } else {
            return c.json({ error: "Unknown error" }, 500);
        }
    }
};