/* eslint-disable vue/multi-word-component-names */
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import Envelop_page from '@/views/Cover/Envelop_page.vue'
import Major_pageVue from './views/Blog/Major_page.vue'
import Header_c from '@/components/Header_c.vue'
import Footer_c from '@/components/Footer_c.vue'
import Nav_bar from '@/components/Nav_bar.vue'
import News_page from '@/views/Blog/News_page.vue'
import User_news_page from '@/views/Blog/User_news_page.vue'
import Circled_news from '@/components/Circled_news.vue'
import Card from 'primevue/card'
import Paginator from 'primevue/paginator'

import App from './App.vue'
import router from './router'
import PrimeVue from 'primevue/config'
import 'primevue/resources/primevue.min.css'
import 'primevue/resources/themes/lara-light-indigo/theme.css'
const app = createApp(App)
app.use(createPinia())
app.use(router)
app.use(PrimeVue, {
  ripple: true,
  inputStyle: 'filled',
  zIndex: {
    modal: 1100,
    overlay: 1000,
    menu: 1000,
    tooltip: 1100
  }
})

app.component('Envelop-page', Envelop_page)
app.component('Major_page', Major_pageVue)
app.component('Header_c', Header_c)
app.component('Footer_c', Footer_c)
app.component('Nav_bar', Nav_bar)
app.component('Circled_news', Circled_news)
app.component('News_page', News_page)
app.component('User_news_page', User_news_page)
app.component('Card', Card)
app.component('Paginator', Paginator)

app.mount('#app')
