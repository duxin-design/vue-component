/*
 * @Author: duxinyues yongyuan253015@gmail.com
 * @Date: 2023-02-20 11:53:45
 * @LastEditors: duxinyues yongyuan253015@gmail.com
 * @LastEditTime: 2023-02-20 16:54:05
 * @FilePath: \vue-admin\src\router\index.ts
 * @Description: 
 * Copyright (c) 2023 by ${duxinyues} email: ${yongyuan253015@gmail.com}, All Rights Reserved.
 */
import {
  createRouter,
  createWebHistory,
  // Router,
  // RouteRecordRaw,
  // RouteComponent,
} from "vue-router";
import { isUrl, openLink, storageSession } from "@pureadmin/utils";
import {getHistoryMode}  from "./utils"
import HomeView from '../views/HomeView.vue'
// 所有的静态路由
const modules: Record<string, any> = import.meta.glob(
  ["./modules/**/*.ts", "!./modules/**/remaining.ts"],
  { eager: true }
);
const routers:any = [];

Object.keys(modules).forEach(key=>{
  routers.push(modules[key].default)
})

console.log("路由",routers)
// export const router:Router = createRouter({
//   history:getHistoryMode(import.meta.env.VITE_ROUTER_HISTORY),
// })
const router = createRouter({
  history: getHistoryMode(import.meta.env.VITE_ROUTER_HISTORY),
  routes: routers,
});

export default router;
