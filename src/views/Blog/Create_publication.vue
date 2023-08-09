<template>
  <div class="editor_wrapper">
    <section class="creator_box">
      <h3 class="h_title p-all">Настройки публикации</h3>
      <div class="editor_title">
        <label class="p-all">Название</label>
        <InputText type="text" placeholder="Text input" />
      </div>
      <div class="editor_body">
        <label class="p-all" for="">Описание</label>
        <Textarea v-model="writting" autoResize rows="7" cols="30" />
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

let writting = ref(
  'Текст — зафиксированная на каком-либо материальном носителе человеческая мысль; в общем плане связная и полная последовательность символов. Существуют две основные трактовки понятия «текст»: имманентная (расширенная, философски нагруженная) и репрезентативная (более частная). Имманентный подход подразумевает отношение к тексту как к автономной реальности, нацеленность на выявление его внутренней структуры. Репрезентативный — рассмотрение текста как особой формы представления знаний о внешней тексту действительности.'
)
</script>

<style scoped>
.editor_wrapper {
  width: 100%;
  height: 2000px;
}
.creator_box {
  display: grid;
  width: 684px;
  grid-template-columns: 1fr;
  gap: 50px;
}
.editor_title {
  display: grid;
}
.editor_body {
  display: grid;
}
label {
  color: #48535b;
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
  margin-bottom: 16px;
}
</style>
