/*
 * @Author: duxinyues yongyuan253015@gmail.com
 * @Date: 2023-02-20 11:53:45
 * @LastEditors: duxinyues yongyuan253015@gmail.com
 * @LastEditTime: 2023-02-21 11:53:17
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
import { getHistoryMode } from "./utils";
// 所有的静态路由
const modules: Record<string, any> = import.meta.glob(
  ["./modules/**/*.ts", "!./modules/**/remaining.ts"],
  { eager: true }
);
const routers: any = [];

Object.keys(modules).forEach((key) => {
  routers.push(modules[key].default);
});
// 首页
routers.push({
  path: "/:pathMatch(.*)*",
  name: "NotFound",
  component: ()=>import("@/views/empty/404.vue"),
});
console.log("路由", routers);

const router = createRouter({
  history: getHistoryMode(import.meta.env.VITE_ROUTER_HISTORY),
  routes: routers,
  strict: true,
  scrollBehavior: () => ({ left: 0, top: 0 }),
});

export default router;
