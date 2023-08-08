<template>
  <section class="lastnews_container">
    <div class="title">
      <h1>История последних новостей</h1>
    </div>
    <div class="circle_news">
      <div class="img-wrapper" v-for="item in store.$state.db_circlednews" :key="item.id">
        <div class="rounded_img_container">
          <img id="rounded_img" :src="item.src" alt="" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Store } from '@/stores/store'

const store = Store()
</script>

<style scoped>
.lastnews_container {
  display: grid;
  grid-template-rows: 1fr 1fr;
  /* gap: 32px; */
}
.title {
  margin-top: 51px;
  color: #222;
  font-size: 22px;
  font-style: normal;
  font-weight: 700;
  line-height: 40px;
  letter-spacing: 0.25px;
  font-family: 'Roboto', sans-serif;
}
.circle_news {
  display: flex;
  justify-content: left;
  align-items: center;
  gap: 24px;
}
.img-wrapper {
  width: 130px;
  height: 130px;
  display: flex;
}
.rounded_img_container {
  width: 85%;
  height: 85%;
  border-radius: 50%;
  overflow: hidden;
  margin: auto;
}
#rounded_img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.img-wrapper::before {
  content: '';
  width: 130px;
  height: 130px;
  background-image: url(../assets/stuff/Ellipse_159.svg);
  background-size: cover;
  background-position: center;
  position: absolute;
  border-radius: 50%;
  animation: spin 4s linear infinite paused;
  pointer-events: none;
}

.img-wrapper:hover::before {
  animation-play-state: running;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
