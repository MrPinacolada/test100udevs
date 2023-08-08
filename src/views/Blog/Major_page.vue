<template>
  <Nav_bar v-if="!store.$state.Nav_bar_position" />
  <Circled_news />
  <section class="grid_box">
    <Card
      style="width: fit-content; cursor: pointer"
      v-for="item in paginatedNews"
      :key="item.id"
    >
      <template #header>
        <RouterLink :to="{ name: 'news', params: { id: item.id } }">
          <img
            style="max-width: 300px; max-height: 240px; border-radius: 8px"
            alt="user header"
            :src="item.img"
          />
        </RouterLink>
      </template>
      <template #subtitle>
        <span class="card_info">
          <p class="p_card">{{ item.date_time }}</p>
          <p class="p_card">{{ item.date_day }}</p>
          <p class="p_card">|</p>
          <span class="card_views">
            <img src="../../assets/stuff/Vector.svg" alt="views" />
            <p class="p_card">{{ item.views }}</p>
          </span>
        </span>
      </template>
      <template #content>
        <p>
          {{ item.prewiev }}
        </p>
      </template>
    </Card>
    <div class="paginator_box">
      <Paginator
        @page="currentPage = $event.page + 1"
        :rows="12"
        :totalRecords="store.$state.db_allnews.length"
      ></Paginator>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Store } from '@/stores/store'
import { ref, computed } from 'vue'

const store = Store()

let currentPage = ref(1)
const paginatedNews = computed(() => {
  const startIndex = (currentPage.value - 1) * 12
  const endIndex = startIndex + 12
  return store.$state.db_allnews.slice(startIndex, endIndex)
})

</script>

<style scoped>
.grid_box {
  margin-top: 40px;
  margin-bottom: 40px;
  display: grid;
  gap: 23px;
  grid-template-columns: repeat(4, 1fr);
}



.paginator_box {
  grid-column: span 4;
  align-self: end;
  justify-self: end;
}
:deep(.p-card) {
  box-shadow: none;
}
:deep(.p-card-body) {
  padding: 5px !important;
}
:deep(.p-card-content) {
  padding: 0.25rem 0 !important;
}
:deep(.p-paginator-page) {
  border-radius: 11.4px !important;
}
:deep(.p-paginator-first) {
  display: none !important;
}
:deep(.p-paginator-last) {
  display: none !important;
}
</style>
