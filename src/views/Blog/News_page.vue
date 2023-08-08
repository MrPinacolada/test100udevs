<template>
  <section class="one_news_page" v-for="item in currentNews" :key="item.id">
    <div class="creator_box">
      <RouterLink :to="{ name: 'creator', params: { id: item.creatorUID } }">
        <div
          class="creator_image"
          :style="{
            backgroundImage: `url(src/assets/user/user_avatar/deeb8f5d8ac8b3780b8ad0d1791ed9e6.jpeg)`
          }"
        ></div
      ></RouterLink>
      <p class="creator_name">{{ item.creator }}</p>
      <div class="follow_info">
        <button class="add_to_bookmarks">Follow</button>
        <span class="bookmark"><img src="../../assets/stuff/Bookmark.svg" alt="" /></span>
      </div>
    </div>
    <div class="news_data">
      <img :src="item.img" alt="" />
      <p class="p_creator">Фото: {{ item.creator }}</p>
      <span class="card_info">
        <p class="p_card">{{ item.date_time }}</p>
        <p class="p_card">{{ item.date_day }}</p>
        <p class="p_card">|</p>
        <span class="card_views">
          <img src="../../assets/stuff/Vector.svg" alt="views" />
          <p class="p_card">{{ item.views }}</p>
        </span>
      </span>
      <div class="writting">
        <h2>{{ item.title }}</h2>
        <p v-html="item.writting"></p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { Store } from '@/stores/store'

const store = Store()
const route = useRoute()
const currentNews = ref()
const newsId = computed(() => {
  const id = route.params.id
  return typeof id === 'string' ? parseInt(id) : id
})
onMounted(() => {
  currentNews.value = store.$state.db_allnews.filter((item) => item.id === newsId.value) || null
  console.log('currentNews.value: ', currentNews.value)
})
</script>

<style scoped>
.one_news_page {
  display: grid;
  grid-template-columns: 0.3fr 1fr;
  margin: 50px 0px 50px 0px;
}
.news_data {
  display: grid;
  justify-items: left;
  gap: 16px;
}
.p_creator {
  color: #2d2d2d;
  font-feature-settings:
    'clig' off,
    'liga' off;
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  font-style: italic;
  font-weight: 300;
  line-height: 24px;
}
.news_data > img {
  border-radius: 8px;
}
.writting > h2 {
  color: #2d2d2d;
  font-family: 'Roboto', sans-serif;
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}
.writting > p {
  margin-top: 32px;
  color: #2d2d2d;
  font-family: 'Roboto', sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 300;
  line-height: 140%;
}
.creator_box {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
  text-align: center;
  align-self: self-start;
  margin-top: 400px;
}

.creator_image {
  border-radius: 50%;
  width: 99px;
  height: 99px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.creator_name {
  color: #2d2d2d;
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  font-weight: 300;
}

.add_to_bookmarks {
  background-color: #1b5bf7;
  color: #ffffff;
  border: none;
  border-radius: 35px;
  cursor: pointer;
  display: flex;
  width: 128px;
  padding: 8px;
  justify-content: center;
  align-items: center;
  gap: 10px;
}

.add_to_bookmarks:hover {
  background-color: #555555;
}
.follow_info {
  display: flex;
  align-items: center;
  gap: 18px;
}
.bookmark {
  display: flex;
  padding: 4px;
  align-items: center;
  gap: 10px;
  border-radius: 8px;
  border: 1px solid #1b5bf7;
  cursor: pointer;
}
</style>
