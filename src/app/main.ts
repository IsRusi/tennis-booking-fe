import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index.ts'
import '../assets/styles/main.css'
import { i18n } from '../i18n'

const app = createApp(App)

app.use(i18n)
app.use(router)

app.mount('#app')
