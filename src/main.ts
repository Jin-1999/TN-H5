import { createApp } from 'vue'
import { createPinia } from 'pinia'
import piniaPluginPersist from 'pinia-plugin-persist'
import App from './App.vue'
import router from './router'

import './assets/main.css'

const app = createApp(App)
// * 在store实例处使用persist: {enabled: true}开启持久化
const pinia = createPinia().use(piniaPluginPersist)

app
.use(router)
.use(pinia)

app.mount('#app')
