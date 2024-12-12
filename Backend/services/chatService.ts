import { chatSession } from "../models/geminiModel.ts";
import process from "node:process";

export class ChatService {
    async startChat() {
        try {
            const text = "Start chat";
            if (chatSession.params?.history) {
                chatSession.params.history.push({
                    role: "user",
                    parts: [{ text }],
                });
            }

            return await chatSession.sendMessage(text);
        } catch (error) {
            console.error("Error starting chat:", error);
            throw error;
        }
    }

    async sendMessage(message: string) {
        try {
            if (chatSession.params?.history) {
                chatSession.params.history.push({
                    role: "user",
                    parts: [{ text: message }],
                });

                const result = await chatSession.sendMessageStream(message);

                // print text as it comes in.
                for await (const chunk of result.stream) {
                    const chunkText = chunk.text();
                    process.stdout.write(chunkText);
                }

                if (chatSession.params?.history) {
                    chatSession.params.history.push({
                        role: "model",
                        parts: [{ text: result.stream.toString() }],
                    });
                }
            }
        } catch (error) {
            console.error("Error sending message:", error);
            throw error;
        }
    }
}
