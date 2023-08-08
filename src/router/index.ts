import Envelop_pageVue from '@/views/Cover/Envelop_page.vue'
import Major_page from '@/views/Blog/Major_page.vue'
import News_page from '@/views/Blog/News_page.vue'
import User_news_page from '@/views/Blog/User_news_page.vue'
import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Envelop_pageVue
    },
    {
      path: '/major_page',
      name: 'major_page',
      component: Major_page
    },
    {
      path: '/major_page/news:id',
      name: 'news',
      component: News_page
    },
    {
      path: '/major_page/creator:id',
      name: 'creator',
      component: User_news_page
    }
  ]
})

export default router
