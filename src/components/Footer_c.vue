<template>
  <footer>
    <section class="footer_box">
      <div class="info_footer">
        <img style="width: 103px; height: 34px" src="../assets/LOGO/Group_1.svg" alt="" />
        <p>
          Помощник в публикации статей, журналов. Список популярных международных конференций. Всё
          для студентов и преподавателей.
        </p>
      </div>
      <nav class="footer_nav">
        <div class="nav_links">
          <p class="nav_head">Ресурсы</p>
          <br>
          <p class="nav_link">Статьи</p>
          <p class="nav_link">Газеты</p>
          <p class="nav_link">Журналы</p>
          <p class="nav_link">Диплом</p>
        </div>
        <div class="nav_links">
          <p class="nav_head">О нас</p>
          <br>
          <p class="nav_link">Контакты</p>
          <p class="nav_link">Помощь</p>
          <p class="nav_link">Заявки</p>
          <p class="nav_link">Политика</p>
        </div>
        <div class="nav_links">
          <p class="nav_head">Помощь</p>
          <p class="nav_link">Часто задаваемые вопросы</p>
        </div>
      </nav>
    </section>
  </footer>
</template>

<script setup lang="ts"></script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=DM+Sans:opsz@9..40&family=Inter:wght@500&display=swap');
footer {
  position: relative;
  bottom: 0;
  background: #fafafc;
  height: auto;
  /* width: 100vw; */
  padding: 40px 0px 40px 0px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.footer_box {
  display: grid;
  width: 80%;
  grid-template-columns: 1fr 1fr;
}
.info_footer {
  display: grid;
  width: 395.598px;
  gap: 24px;
}
p {
  color: #1e2833;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.205px;
  font-family: 'DM Sans', sans-serif;
}
.footer_nav {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}
.nav_links {
  display: grid;
}
.nav_link {
  font-size: 14px;
  margin-bottom: 20px;cursor: pointer;
}
.nav_head {
  color: #000;
  font-size: 16px;
  font-weight: 700;
  letter-spacing: -0.232px;
  cursor:pointer;
}
</style>
