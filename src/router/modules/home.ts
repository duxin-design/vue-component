/*
 * @Author: duxinyues yongyuan253015@gmail.com
 * @Date: 2023-02-20 17:02:53
 * @LastEditors: duxinyues yongyuan253015@gmail.com
 * @LastEditTime: 2023-02-20 17:07:43
 * @FilePath: \vue-admin\src\router\modules\home.ts
 * @Description:
 * Copyright (c) 2023 by ${duxinyues} email: ${yongyuan253015@gmail.com}, All Rights Reserved.
 */

import { home } from "@/router/enums";
const Layout = () => import("@/layout/index.vue");

export default {
  path: "/",
  name: "Home",
  component: Layout,
  redirect: "/welcome",
  meta: {
    icon: "homeFilled",
    title: "首页",
    rank: home,
  },
  children: [
    {
      path: "/welcome",
      name: "Welcome",
      component: () => import("@/views/welcome/index.vue"),
      meta: {
        title: "欢迎",
      },
    },
  ],
};
