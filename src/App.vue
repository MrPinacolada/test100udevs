<template>
  <Header_c />
  <main><RouterView /></main>
  <login_form />
  <User_setts_form/>
  <Footer_c />
</template>

<script setup lang="ts">
import { onMounted, watch, watchEffect } from 'vue'
import { RouterLink, RouterView } from 'vue-router'
import { useRoute } from 'vue-router'
import { Store } from '@/stores/store'

const route = useRoute()
const store = Store()

watchEffect(() => {
  if (route.path != '/major_page') {
    store.$state.Nav_bar_position = true
  } else store.$state.Nav_bar_position = false
})
onMounted(() => {
  let userName = localStorage.getItem('username')
  let userAvatar = localStorage.getItem('avatar')
  if (userName && userAvatar) {
    store.$state.userAvatar = userAvatar
    store.$state.isUser = true
  }
})
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@500&display=swap');
body {
  padding: 0;
  border: none;
  text-decoration: none;
  margin: 0;
}
h1,
h2,
h3,
a,
p,
span {
  margin: 0;
  padding: 0;
  text-decoration: 0;
}
main {
  /* margin-top: 87px; */
  width: 80%;
  margin: auto;
}
.card_info {
  display: flex;
  height: fit-content;
  align-items: center;
  justify-content: left;
  gap: 10px;
}
.card_views {
  display: flex;
  gap: 3px;
  align-items: center;
}

.p_card {
  color: #aebec9;
  font-feature-settings:
    'clig' off,
    'liga' off;
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
}
.p_tag {
  margin-left: 20px;
  color: var(--udevs-blue, #1b5bf7);
  font-feature-settings:
    'clig' off,
    'liga' off;
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 24px;
  cursor: pointer;
}
.p_titile {
  color: #555;
  font-feature-settings:
    'clig' off,
    'liga' off;
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 32px;
}
.h_title {
  color: #000;
  font-feature-settings:
    'clig' off,
    'liga' off;
  font-family: 'Roboto', sans-serif;
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: 49px;
}
.user_acc_photo {
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background-size: cover;
}
</style>
