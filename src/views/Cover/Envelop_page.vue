<template>
  <section class="envelop-back">
    <div class="banchmark">
      <h1 class="p-all">Bootcamp</h1>
      <RouterLink :to="{ name: 'major_page' }"> <button class="p-all">Blog</button></RouterLink>
    </div>
  </section>
</template>

<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<style scoped>
.envelop-back {
  width: 100vw;
  height: 100vh;
  background-color: #3da57b;
  display: grid;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;
}
.banchmark {
  align-self: center;
  justify-self: center;
  display: grid;
  align-items: center;
  justify-items: center;
  gap: 29px;
}
h1 {
  font-size: 69px;
  color: white;
}
button {
  padding: 24px 40px 24px 40px;
  font-size: 48px;
  border-radius: 29px;
  font-weight: 700;
  cursor: pointer;
  border: none;
}
</style>
