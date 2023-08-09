<template>
  <Dialog header="User settings" v-model:visible="store.$state.setts_popup" modal>
    <template #default>
      <form v-on:submit.prevent="" action="" class="form-container">
        <div class="change_photo">
          <div
            class="user_acc_photo xlarge_img"
            :style="`background-image: url(${
              store.$state.userAvatar ||
              'assets/user/user_avatar/deeb8f5d8ac8b3780b8ad0d1791ed9e6.jpeg'
            })`"
          ></div>
          <p style="white-space: nowrap; color: blue; cursor: pointer" class="p_card">
            Изменить фото
          </p>
        </div>
        <div class="data_rows">
          <div class="input-row">
            <label for="firstname" class="label">Firstname</label>
            <InputText
              v-model="user.firstname"
              class="input-field"
              type="text"
              placeholder="Enter firstname"
              style="width: 200px"
            />
          </div>
          <div class="input-row">
            <label for="surname" class="label">Surname</label>
            <InputText
              v-model="user.surname"
              class="input-field"
              type="text"
              placeholder="Enter surname"
            />
          </div>
          <div class="input-row">
            <label for="birthday" class="label">Birthday</label>
            <Calendar class="input-field" v-model="user.birthday" placeholder="Enter birthday" />
          </div>
          <div class="input-row">
            <label for="birthday" class="label">Gender</label>
            <Dropdown
              v-model="user.gender"
              :options="genderOp"
              optionLabel="name"
              placeholder="Select gender"
            />
          </div>
          <div class="input-row">
            <label for="birthday" class="label">Contact number</label>
            <InputNumber class="input-field" placeholder="Enter number" v-model="user.number" />
          </div>
          <div class="input-row">
            <label for="birthday" class="label">Email</label>
            <InputText
              v-model="user.email"
              class="input-field"
              type="email"
              placeholder="Enter email"
            />
          </div>
          <div class="input-row">
            <label for="birthday" class="label">Password</label>
            <Password v-model="user.password" toggleMask />
          </div>
          <div class="input-row">
            <label for="birthday" class="label">Repeat password</label>

            <Password v-model="user.repeatPassword" :feedback="false" />
          </div>
          <div class="input-row">
            <label for="birthday" class="label">Passport Series</label>
            <InputNumber
              class="input-field"
              placeholder="Enter passport series"
              v-model="user.passport"
            />
          </div>
          <div class="input-row">
            <label for="birthday" class="label">Skill set</label>
            <MultiSelect
              v-model="user.skills"
              display="chip"
              :options="skillsOp"
              optionLabel="name"
              placeholder="Enter skills"
              :maxSelectedLabels="3"
              class="w-full md:w-20rem"
            />
          </div>
          <div class="input-row">
            <label for="birthday" class="label">Role</label>
            <Dropdown
              v-model="user.role"
              :options="roleOp"
              optionLabel="name"
              placeholder="Select role"
            />
          </div>
          <div class="input-row">
            <label for="birthday" class="label">Number of cars</label>
            <Chips placeholder="Tap enter to add" v-model="user.cars" separator="," />
          </div>
          <div class="input-row">
            <label for="birthday" class="label">About info</label>
            <Textarea v-model="user.about" autoResize rows="7" cols="30" />
          </div>
          <div class="butt_container">
            <button class="butt_reset p_butt" @click="handleReset">Reset</button>
            <button class="p_butt" @click="handleSubmit">Save</button>
          </div>
        </div>
      </form>
    </template>
  </Dialog>
</template>

<script setup lang="ts">
import { Store } from '@/stores/store'
import { ref } from 'vue'

const store = Store()

interface UserSetts {
  firstname: string | null
  surname: string | null
  birthday: string | null
  gender: string | null
  password: string | null
  repeatPassword: string | null
  number: number | null
  email: string | null
  passport: number | null
  skills: Array<[]> | null
  role: number | null
  cars: Array<[]>
  about: string | undefined
}
let user = ref<UserSetts>({
  firstname: null,
  surname: null,
  birthday: null,
  gender: null,
  number: null,
  email: null,
  passport: null,
  skills: [],
  role: null,
  cars: [],
  about: undefined,
  password: null,
  repeatPassword: null
})

const genderOp = ref([
  { name: 'Male', code: '1' },
  { name: 'Female', code: '0' },
  { name: 'not gonna say', code: '0' }
])
const skillsOp = ref([
  { name: 'HTML', code: '1' },
  { name: 'CSS', code: '0' },
  { name: 'Vue', code: '0' }
])
const roleOp = ref([
  { name: 'Boss', code: '1' },
  { name: 'not Boss', code: '0' }
])
const handleSubmit = () => {
  console.log(user.value)
}
const handleReset = () => {
  user.value = {
    firstname: null,
    surname: null,
    birthday: null,
    gender: null,
    number: null,
    email: null,
    passport: null,
    skills: [],
    role: null,
    cars: [],
    about: undefined,
    password: null,
    repeatPassword: null
  }
}
</script>

<style scoped>
.form-container {
  display: grid;
  width: 100%;
  grid-template-columns: 0.1fr 1fr;
  gap: 80px;
}

.input-row {
  display: flex;
  align-items: center;
  margin-top: 16px;
  gap: 40px;
}

.label {
  flex: 1;
  text-align: left;
  padding-right: 8px;
  max-width: 400px;
}

.xlarge_img {
  width: 100px;
  height: 100px;
}
.change_photo {
  display: grid;
  align-items: start;
  justify-items: center;
  height: fit-content;
  gap: 30px;
}
.butt_container {
  display: flex;
  gap: 20px;
  justify-content: flex-end;
  margin-top: 16px;
}
.p_butt {
  display: flex;
  width: 144px;
  padding: 8px 16px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 6px;
  border: none;
  background: #0067f4;
  color: #fff;
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: -0.084px;
  cursor: pointer;
}
.butt_reset {
  color: #0067f4;
  background: #fff;
  border: 1px solid #0067f4;
}

:deep(.p-dropdown, ) {
  width: 600px !important;
}
:deep(.p-multiselect, ) {
  width: 600px !important;
}
:deep(.p-chips, ) {
  width: 600px !important;
}
:deep(.p-inputtextarea-resizable, ) {
  width: 600px !important;
}
:deep(.p-inputtext, ) {
  width: 600px !important;
}
:deep(.p-password-input) {
  width: 600px !important;
}
:deep(.p-dialog-header) {
  padding: 10px !important;
}
</style>
