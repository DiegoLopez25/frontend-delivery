import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import Content from './components/Content.vue'
import axios from 'axios'

axios.defaults.baseURL = "http://tesina-backend.test"

const app = createApp(App)



app.use(createPinia())
app.use(router)

app.mount('#app')
app.component('content',Content)

