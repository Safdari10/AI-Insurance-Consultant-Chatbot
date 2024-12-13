<template>
  <div class="chat-app">
    <div class="chat-history">
      <div
        v-for="(msg, index) in messages"
        :key="index"
        :class="`message ${msg.role}`">
        <div v-html="renderMarkdown(msg.text)" v-if="msg.role === 'ai'"></div>
        <div v-else>{{ msg.text }}</div>
      </div>
    </div>
    <div class="chat-input">
      <input
        type="text"
        v-model="input"
        placeholder="Type your message..."
        @keyup.enter="handleSendMessage" />
      <button @click="handleSendMessage">Send</button>
      <button @click="handleRestart">Restart</button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";
import { startChat, sendMessage } from "../services/chatService";
import MarkdownIt from "markdown-it";

export default defineComponent({
  name: "ChatApp",
  setup() {
    const messages = ref<{ role: string; text: string }[]>([]);
    const input = ref("");
    const md = new MarkdownIt();

    onMounted(async () => {
      const response = await startChat();
      messages.value.push({ role: "system", text: response });
    });

    const handleSendMessage = async () => {
      const userMessage = { role: "user", text: input.value };
      messages.value.push(userMessage);
      const aiResponse = await sendMessage(input.value);
      messages.value.push({ role: "ai", text: aiResponse });
      input.value = "";
    };

    const handleRestart = async () => {
      messages.value = [];
      const response = await startChat();
      messages.value.push({ role: "system", text: response });
    };

    const renderMarkdown = (text: string) => {
      return md.render(text);
    };

    return {
      messages,
      input,
      handleSendMessage,
      handleRestart,
      renderMarkdown,
    };
  },
});
</script>
