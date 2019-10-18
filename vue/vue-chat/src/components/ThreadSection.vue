<template>
  <div class="thread-section">
    <div class="thread-count"></div>
    <ul class="thread-list">
      <thread 
        v-for="thread in threads"
        :key="thread.id"
        :thread="thread"
        :active="thread.id === currentThread.id"
        @switch-thread="switchThread"></thread>
    </ul>
  </div>
</template>

<script>
import thread from './Thread'
import {mapGetters,mapActions} from 'vuex'
export default {
  computed: mapGetters(['threads','currentThread']),
  components:{
    thread
  },
  methods: mapActions(['switchThread'])
}
</script>

<style>

</style>