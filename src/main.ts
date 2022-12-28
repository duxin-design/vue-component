import { createApp } from 'vue'
import ElementPlus from "element-plus";
import App from './App.vue'
import './assets/main.css'
const app = createApp(App)
app.provide("data","duxin")
app.mount('#app')
app.use(ElementPlus)
