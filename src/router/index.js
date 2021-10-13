/*
 * @Author: yongyuan253015@gmail.com
 * @Date: 2021-10-13 23:31:20
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-10-13 23:36:07
 * @Description: 文件描述 
 */
import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/home/index.vue"
const routes = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: "/",
            redirect: "/home"
        },
        {
            path: "/home",
            components: Home,
            name: "home",
            mate: {
                title: "首页"
            }
        }
    ]
})

export default routes