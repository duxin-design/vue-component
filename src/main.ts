/*
 * @Author: duxinyues yongyuan253015@gmail.com
 * @Date: 2023-02-20 11:53:45
 * @LastEditors: duxinyues yongyuan253015@gmail.com
 * @LastEditTime: 2023-02-20 15:39:53
 * @FilePath: \vue-admin\src\main.ts
 * @Description: 
 * Copyright (c) 2023 by ${duxinyues} email: ${yongyuan253015@gmail.com}, All Rights Reserved.
 */
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import ElementPlus from "element-plus";
import './assets/main.css'
import "./style/tailwind.css"
import "element-plus/dist/index.css"
const app = createApp(App)

app.use(router)
app.use(ElementPlus)
app.mount('#app')
