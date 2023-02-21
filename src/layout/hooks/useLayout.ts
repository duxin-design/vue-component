/*
 * @Author: duxinyues yongyuan253015@gmail.com
 * @Date: 2023-02-21 15:43:38
 * @LastEditors: duxinyues yongyuan253015@gmail.com
 * @LastEditTime: 2023-02-21 15:49:20
 * @FilePath: \vue-admin\src\layout\hooks\useLayout.ts
 * @Description:
 * Copyright (c) 2023 by ${duxinyues} email: ${yongyuan253015@gmail.com}, All Rights Reserved.
 */
import { computed } from "vue";
import { routerArrays } from "../types";
import { useGlobal } from "@pureadmin/utils";
import { useMultiTagsStore } from "@/store/modules/multiTags";
import type { GlobalPropertiesApi } from "@/types/global";

export function useLayout() {
  const { $config, $storage } = useGlobal<GlobalPropertiesApi>();
  const initStorage = () => {
    // 路由
    if (
      useMultiTagsStore().multiTags &&
      (!$storage.tags || $storage.tags.length === 0)
    ) {
      $storage.tags = routerArrays;
    }

    // 导航
    if (!$storage.layout) {
      $storage.layout = {
        layout: $config?.Layout ?? "vertical",
        theme: $config?.Theme ?? "default",
        darkMode: $config?.DarkMode ?? false,
        sidebarStatus: $config?.SidebarStatus ?? true,
        epThemeColor: $config?.EpThemeColor ?? "#409EFF",
      };
    }
    /** 灰色模式、色弱模式、隐藏标签页 */
    if (!$storage.configure) {
      $storage.configure = {
        grey: $config?.Grey ?? false,
        weak: $config?.Weak ?? false,
        hideTabs: $config?.HideTabs ?? false,
        showLogo: $config?.ShowLogo ?? true,
        showModel: $config?.ShowModel ?? "smart",
        multiTagsCache: $config?.MultiTagsCache ?? false,
      };
    }
  };
  /** 清空缓存后从serverConfig.json读取默认配置并赋值到storage中 */
  const layout = computed(() => {
    return $storage?.layout.layout;
  });

  const layoutTheme = computed(() => {
    return $storage.layout;
  });

  return {
    layout,
    layoutTheme,
    initStorage,
  };
}
