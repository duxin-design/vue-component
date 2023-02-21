/*
 * @Author: duxinyues yongyuan253015@gmail.com
 * @Date: 2023-02-20 16:36:15
 * @LastEditors: duxinyues yongyuan253015@gmail.com
 * @LastEditTime: 2023-02-21 14:55:06
 * @FilePath: \vue-admin\src\router\modules\about.ts
 * @Description: 
 * Copyright (c) 2023 by ${duxinyues} email: ${yongyuan253015@gmail.com}, All Rights Reserved.
 */
import { about } from "@/router/enums";

export default {
  path: "/about",
  redirect: "/about/index",
  component: () => import("@/layout/index.vue"),
  meta: {
    title: "关于",
    rank: about
  },
  children: [
    {
      path: "/about/index",
      name: "About",
      component: () => import("@/views/about/index.vue"),
      meta: {
        title:"关于"
      }
    }
  ]
  
};
