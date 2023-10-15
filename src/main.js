import { createApp } from 'vue'

import './style.css'
import App from './App.vue'
import router from '@/config/router'
// import store from './config/store'


createApp(App).use(router).mount('#app')

