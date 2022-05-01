import { createApp } from 'vue'
import App from './App.vue'
import './index.scss'
import { router } from './router'

const app = createApp(App)
console.log('创造了')
app.use(router)
app.mount('#app')
