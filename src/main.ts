import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import VueAMap from '@vuemap/vue-amap'
import '@vuemap/vue-amap/dist/style.css'

const app = createApp(App)

app.use(createPinia())
app.use(VueAMap)

app.mount('#app')
