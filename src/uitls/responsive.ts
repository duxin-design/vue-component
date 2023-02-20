/*
 * @Author: duxinyues yongyuan253015@gmail.com
 * @Date: 2023-02-20 20:58:15
 * @LastEditors: duxinyues yongyuan253015@gmail.com
 * @LastEditTime: 2023-02-20 21:12:33
 * @FilePath: \vue-admin\src\uitls\responsive.ts
 * @Description: 响应式持久化
 * Copyright (c) 2023 by ${duxinyues} email: ${yongyuan253015@gmail.com}, All Rights Reserved.
 */
import type { App } from "vue";
import Storage from "responsive-storage";
import { routerArrays } from "@/layout/types";

const nameSpace = "responsive-";

export const injectResponsiveStorage = (app: App, config: any) => {
  const configObj = Object.assign(
    {
      locale: Storage.getData("locale", nameSpace) ?? {
        locale: config.Locale ?? "zh",
      },
      layout: Storage.getData("layout", nameSpace) ?? {
        layout: config.Layout ?? "vertical",
        theme: config.Theme ?? "default",
        darkMode: config.DarkMode ?? false,
        sidebarStatus: config.SidebarStatus ?? true,
        epThemeColor: config.EpThemeColor ?? "#409EFF",
      },
      configure: Storage.getData("configure", nameSpace) ?? {
        grey: config.Grey ?? false,
        weak: config.Weak ?? false,
        hideTabs: config.HideTabs ?? false,
        showLogo: config.ShowLogo ?? true,
        showModel: config.ShowModel ?? "smart",
        multiTagsCache: config.MultiTagsCache ?? false,
      },
    },
    config.MultiTagsCache
      ? {
          // 默认显示首页tag
          tags: Storage.getData("tags", nameSpace) ?? routerArrays,
        }
      : {}
  );

  app.use(Storage, { nameSpace, memory: configObj });
};
