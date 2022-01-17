import {createApp} from 'vue'
import App from './App.vue'

const app = createApp(App)
import axios from '@/utils/axios.js'
app.config.globalProperties.$axios = axios
app.mount('#app')
