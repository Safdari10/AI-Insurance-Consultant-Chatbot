import { GoogleGenerativeAI } from "@google/generative-ai";
import { config } from "https://deno.land/x/dotenv@v3.2.0/mod.ts";
import { systemInstructions } from "./systemInstruction.ts";

const env = config();

const API_KEY = env.API_KEY;

const genAI = new GoogleGenerativeAI(API_KEY);

const model = genAI.getGenerativeModel({ 
  model: "gemini-1.5-flash",
  systemInstruction: systemInstructions
});

export const chatSession = model.startChat({
  history: [],
});
