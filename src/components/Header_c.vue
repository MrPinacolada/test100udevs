<template>
  <header>
    <div class="header_filler">
      <img style="width: 146px; height: 49px" src="../assets/LOGO/Group_1.svg" alt="LOGO" />
      <Nav_bar style="margin-top: 0; scale: 0.9" v-if="store.$state.Nav_bar_position" />
      <div class="left_header">
        <img style="width: 32px; height: 32px" src="../assets/stuff/notifications.svg" alt="note" />
        <button>Войти</button>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { Store } from '@/stores/store'

const store = Store()
</script>

<style scoped>
header {
  background: #fafafc;
  height: auto;
  width: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  top: 0;
  padding: 10px 0px 10px 0px;
}
button {
  padding: 16px;
  border-radius: 8px;
  background: #1b5bf7;
  font-family: 'Inter', sans-serif;
  font-size: 16px;
  color: #fff;
  border: none;
}
.header_filler {
  align-items: center;
  gap: 20px;
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.left_header {
  display: flex;
  align-items: center;
  gap: 20px;
}
</style>
