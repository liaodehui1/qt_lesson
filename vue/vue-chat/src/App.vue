<template>
  <div id="chatapp">
    <!-- 容器组件 -->
    <thread-section></thread-section>
    <message-section></message-section>
  </div>
</template>

<script>
import ThreadSection from './components/ThreadSection'
import MessageSection from './components/MessageSection'

export default {
  name: 'App',
  components: {
    'thread-section':ThreadSection,
    'message-section':MessageSection    
  },
  mounted() {
    this.$store.dispatch('getAllMessages')
  },
}
</script>

<style>
@import './css/chat.css';
</style>
