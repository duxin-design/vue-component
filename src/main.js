/*
 * @Author: yongyuan253015@gmail.com
 * @Date: 2021-10-12 00:17:52
 * @LastEditors: 
 * @LastEditTime: 2021-10-13 23:37:44
 * @Description: vue应用的入口文件
 */
import { createApp } from 'vue'
import App from './App.vue'
import  router  from './router'

const app = createApp(App);

app.use(router)
app.mount('#app')
