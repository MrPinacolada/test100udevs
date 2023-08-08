<template>
  <nav class="nav_bar">
    <span
      v-for="link in links"
      :key="link.id"
      class="nav_link"
      :class="{ nav_active: link.id === activeLink }"
      @click="setActiveLink(link.id)"
      >{{ link.name }}</span
    >
  </nav>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const links = ref([
  { id: 1, name: 'Все потоки' },
  { id: 2, name: 'Разработка' },
  { id: 3, name: 'Администрирование' },
  { id: 4, name: 'Дизайн' },
  { id: 5, name: 'Менеджмент' },
  { id: 6, name: 'Маркетинг' },
  { id: 7, name: 'Научпоп' }
])
const activeLink = ref(1)

const setActiveLink = (linkId: number) => {
  activeLink.value = linkId
}
</script>

<style scoped>
.nav_bar {
  margin-top: 34px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 30px;
}
.nav_link {
  color: #000;
  font-feature-settings:
    'clig' off,
    'liga' off;
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  padding: 8px;
  cursor: pointer;
  border-radius: 8px;
  white-space: nowrap; 
}
.nav_active {
  color: #fff;
  background: #1b5bf7;
}

.nav_link,
.nav_active {
  transition: background 0.3s ease;
}
</style>
