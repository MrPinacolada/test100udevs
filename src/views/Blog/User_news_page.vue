<template>
  <section class="user_info" v-if="currentCreator">
    <div class="user_image" :style="`background-image: url(${currentCreator.user_avatar})`"></div>
    <div class="user_data">
      <h2>{{ currentCreator.user_name }}</h2>
      <table>
        <tr>
          <td>Карьера</td>
          <td>{{ currentCreator.user_career }}</td>
        </tr>
        <tr>
          <td>Дата рождения</td>
          <td>{{ currentCreator.user_birth }}</td>
        </tr>
        <tr>
          <td>Место рождения</td>
          <td>{{ currentCreator.birth_place }}</td>
        </tr>
      </table>
    </div>
  </section>
  <section class="user_publics" v-if="dbCreator">
    <h2 class="h_title">ПУБЛИКАЦИИ</h2>
    <div class="user_publics_wrapper" v-for="item in dbCreator" :key="item.id">
      <div class="public_box_img">
        <div class="imgbox" :style="`background-image: url(${item.img})`"></div>
        <div class="public_box_info">
          <h3>{{ item.shortTitle }}</h3>
          <span class="card_info">
            <p class="p_card">{{ item.date_time }}</p>
            <p class="p_card">{{ item.date_day }}</p>
            <p class="p_card">|</p>
            <span class="card_views">
              <img src="../../assets/stuff/Vector.svg" alt="views" />
              <p class="p_card">{{ item.views }}</p>
              <p class="p_tag">{{ item.tag }}</p>
            </span>
          </span>
          <p class="p_titile">{{ item.title }}</p>
          <button>Читать</button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Store } from '@/stores/store'
import { ref, computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'

const store = Store()
const route = useRoute()

const currentCreator = ref()
const dbCreator = ref()
const userUID = computed(() => {
  const id = route.params.id
  return typeof id === 'string' ? parseInt(id) : id
})

onMounted(() => {
  currentCreator.value = store.$state.db_users.find((item) => item.userUID === userUID.value)
  dbCreator.value = currentCreator.value?.user_publics
})
</script>

<style scoped>
.user_info {
  display: grid;
  grid-template-columns: 0.1fr 1fr;
  gap: 40px;
  width: 640px;
  margin-top: 100px;
}

.user_image {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  background-size: cover;
}
.imgbox {
  width: 600px;
  height: 100%;
  border-radius: 8px;
  background-size: cover;
}

.user_data {
  display: flex;
  flex-direction: column;
}

table tr:nth-child(odd) {
  background-color: #f6f8f9;
}
table {
  width: 100%;
  table-layout: fixed;
  border-collapse: collapse;
}
td {
  vertical-align: middle;
  text-align: left;
  padding: 8px 12px;
  border-radius: 4px;
}
.user_data > h2 {
  color: #222;
  font-family: Roboto;
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
  line-height: 48px;
  margin-bottom: 50px;
}
.user_publics {
  margin-top: 100px;
  display: grid;
  gap: 40px;
  grid-template-columns: 1fr;
  margin-bottom: 100px;
}
.user_publics_wrapper {
  display: grid;
  grid-template-columns: 1fr;
}
.public_box_img {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
}
.public_box_img > img {
  border-radius: 8px;
}
.public_box_info {
  display: grid;
  gap: 24px;
}

.public_box_info > h3 {
  color: #222;
  font-feature-settings:
    'clig' off,
    'liga' off;
  font-family: 'Roboto', sans-serif;
  font-size: 30px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
}
button {
  margin-top: 24px;
  display: flex;
  width: 153.624px;
  padding: 12px 32px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 8px;
  color: #fff;
  font-feature-settings:
    'clig' off,
    'liga' off;
  font-family: 'Roboto', sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  border: 1px solid var(--udevs-blue, #1b5bf7);
  background: var(--udevs-blue, #1b5bf7);
  cursor: pointer;
}
</style>
