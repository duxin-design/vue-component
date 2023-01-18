import { createApp } from 'vue'
import ElementPlus from "element-plus";
import App from './App.vue'
import './assets/main.css'
import router from './router';

const app = createApp(App)
app.provide("data","duxin");
app.use(router);
app.mount('#app')
app.use(ElementPlus)
