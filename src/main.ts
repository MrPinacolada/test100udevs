/* eslint-disable vue/no-reserved-component-names */
/* eslint-disable vue/multi-word-component-names */
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import Envelop_page from '@/views/Cover/Envelop_page.vue'
import Major_pageVue from './views/Blog/Major_page.vue'
import Header_c from '@/components/Header_c.vue'
import Footer_c from '@/components/Footer_c.vue'
import Nav_bar from '@/components/Nav_bar.vue'
import User_account from '@/components/User_account.vue'
import login_form from '@/components/login_form.vue'
import News_page from '@/views/Blog/News_page.vue'
import Create_publication from '@/views/Blog/Create_publication.vue'
import User_news_page from '@/views/Blog/User_news_page.vue'
import Circled_news from '@/components/Circled_news.vue'
import User_setts_form from '@/components/User_setts_form.vue'

import Card from 'primevue/card'
import Paginator from 'primevue/paginator'
import Avatar from 'primevue/avatar'
import Menu from 'primevue/menu'
import InputText from 'primevue/inputtext'
import Textarea from 'primevue/textarea'
import Badge from 'primevue/badge'
import BadgeDirective from 'primevue/badgedirective'
import Dialog from 'primevue/dialog'
import Calendar from 'primevue/calendar'
import Dropdown from 'primevue/dropdown'
import InputNumber from 'primevue/inputnumber'
import Password from 'primevue/password'
import MultiSelect from 'primevue/multiselect'
import Chips from 'primevue/chips'

import App from './App.vue'
import router from './router'
import PrimeVue from 'primevue/config'

import 'primevue/resources/primevue.min.css'
import 'primevue/resources/themes/lara-light-indigo/theme.css'
import 'primeicons/primeicons.css'

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
app.component('User_account', User_account)
app.component('Create_publication', Create_publication)
app.component('login_form', login_form)
app.component('User_setts_form', User_setts_form)

app.component('InputText', InputText)
app.component('Card', Card)
app.component('Paginator', Paginator)
app.component('Avatar', Avatar)
app.component('Menu', Menu)
app.component('Textarea', Textarea)
app.component('Badge', Badge)
app.component('Dialog', Dialog)
app.component('Calendar', Calendar)
app.component('Dropdown', Dropdown)
app.component('InputNumber', InputNumber)
app.component('Password', Password)
app.component('MultiSelect', MultiSelect)
app.component('Chips', Chips)

app.directive('badge', BadgeDirective)

app.mount('#app')
