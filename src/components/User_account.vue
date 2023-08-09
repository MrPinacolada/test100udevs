<template>
  <div
    class="user_acc_photo"
    @click="toggleOpenMenu"
    :style="`background-image: url(${
      store.$state.userAvatar || 'assets/user/user_avatar/deeb8f5d8ac8b3780b8ad0d1791ed9e6.jpeg'
    })`"
    aria-haspopup="true"
    aria-controls="overlay_menu"
  ></div>
  <Menu
    style="width: 207px; margin-top: 20px"
    ref="menu"
    id="overlay_menu"
    :model="items"
    :popup="true"
  />
</template>

<script setup lang="ts">
import { Store } from '@/stores/store'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const store = Store()
const router = useRouter()
const menu = ref()

const items = ref([
  {
    items: [
      {
        label: 'Написать публикацию',
        command: () => {
          router.push('/editor')
        }
      },
      {
        label: 'Избранное',
        command: () => {}
      },
      {
        label: 'Редактировать профиль',
        command: () => {
          store.$state.setts_popup = true
        }
      },
      {
        label: 'Выйти',
        command: () => {
          localStorage.clear()
          location.reload()
        }
      }
    ]
  }
])

const toggleOpenMenu = (event: any) => {
  menu.value.toggle(event)
}
</script>

<style scoped>
.user_acc_photo {
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background-size: cover;
}

:deep(.p-submenu-header) {
  padding: 0 !important;
}
</style>
