<template>
  <div>
    <h1>vue-timer-hook </h1>
    <p>Timer Demo</p>
    <div>
      <span>{{ timer.days }}</span>:<span>{{ timer.hours }}</span>:<span>{{ timer.minutes }}</span>:<span>{{ timer.seconds
      }}</span>
    </div>
    <p>{{ timer.isRunning ? 'Running' : 'Not running' }}</p>
    <button @click="startTimer">Start</button>
    <button @click="timer.pause()">Pause</button>
    <button @click="timer.resume()">Resume</button>
    <button @click="restartFive()">Restart</button>
  </div>
</template>


<script setup lang="ts">
import { watchEffect, onMounted } from "vue";
import { useTimer } from 'vue-timer-hook';

const time = new Date();
time.setSeconds(time.getSeconds() + 600); // 10 minutes timer
const timer = useTimer(time);
const startTimer = () => {
  if (!timer.isRunning) {
    timer.start()
  }
}
const restartFive = () => {
  // Restarts to 5 minutes timer
  const time = new Date();
  time.setSeconds(time.getSeconds() + 300);
  timer.restart(time);
}
onMounted(() => {
  watchEffect(async () => {

    if (timer.isExpired.value) {
      console.warn('IsExpired')
    }
  })
})
</script>