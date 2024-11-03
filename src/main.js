import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import '../node_modules/element-plus/dist/index.css'

import './assets/style/common.css'

const app = createApp(App)

app.use(createPinia()).use(router).mount('#app')
