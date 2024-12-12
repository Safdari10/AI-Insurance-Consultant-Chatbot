<template>
  <ChatApp />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ChatApp from './components/ChatApp.vue';

export default defineComponent({
  name: 'App',
  components: {
    ChatApp,
  },
});
</script>