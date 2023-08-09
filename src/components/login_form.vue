<template>
  <Dialog v-model:visible="store.$state.login_popup" modal header="Как вас зовут?">
    <template #default>
      <InputText
        v-model="userName"
        :class="{ 'p-invalid': showError && !isNameValid }"
        @input="handleInput"
        style="width: 346px"
        type="text"
        placeholder="Введите имя"
      />
      <br />
      <small v-if="showError && !isNameValid" class="p-error">invalid input</small>
      <div class="pick_avatar">
        <label for="">Выберете аватар</label>
        <div class="avatars_example">
          <Avatar
            :image="item"
            v-for="item in avatarsExample"
            :key="item"
            class="mr-2 avatar"
            :size="selectedAvatar === item ? 'xlarge' : 'large'"
            shape="circle"
            @click="handlePickAvatar(item)"
          />
        </div>
        <small v-if="showError && !selectedAvatar" class="p-error">Выберите аватар</small>
      </div>
    </template>
    <template #footer>
      <button style="width: 100%" @click="handleLogin" class="login_butt p-all">Войти</button>
    </template>
  </Dialog>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { Store } from '@/stores/store'

const store = Store()
const avatarsExample = [
  'assets/user/example_avatars/bear.png',
  'assets/user/example_avatars/gamer.png',
  'assets/user/example_avatars/dude.png',
  'assets/user/example_avatars/man.png',
  'assets/user/example_avatars/woman.png'
]
const selectedAvatar = ref('')
const userName = ref('')
const showError = ref(false)

const isNameValid = computed(() => {
  const nameRegex = /^[^\d\s]{1,10}$/
  return nameRegex.test(userName.value)
})

const handlePickAvatar = (item: string) => {
  selectedAvatar.value = item
}
const handleInput = () => {
  showError.value = true
}
const handleLogin = () => {
  if (showError.value && isNameValid.value && selectedAvatar.value) {
    localStorage.setItem('avatar', selectedAvatar.value)
    localStorage.setItem('username', userName.value)
    location.reload()
  }
}
</script>

<style scoped>
.pick_avatar {
  display: grid;
  margin-top: 25px;
}
label {
  color: #222;
  font-family: Roboto;
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: -0.12px;
}
.avatars_example {
  display: flex;
  gap: 5px;
}
.login_butt {
  height: 48px;
  padding: 10px;
  border-radius: 6px;
  border: none;
  color: #fff;
  font-size: 14px;
  font-weight: 700;
  line-height: 16px;
  letter-spacing: -0.096px;
  background: #1b5bf7;
  cursor: pointer;
}
.avatar {
  cursor: pointer;
  transition: all 0.3s ease;
}
</style>
