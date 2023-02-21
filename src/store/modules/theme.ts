/*
 * @Author: duxinyues yongyuan253015@gmail.com
 * @Date: 2023-02-20 23:17:15
 * @LastEditors: duxinyues yongyuan253015@gmail.com
 * @LastEditTime: 2023-02-20 23:24:03
 * @FilePath: \vue-admin\src\store\modules\theme.ts
 * @Description: 主題
 * Copyright (c) 2023 by ${duxinyues} email: ${yongyuan253015@gmail.com}, All Rights Reserved.
 */
import { store } from "@/store";
import { defineStore } from "pinia";
import { getConfig } from "@/config";
import { storageLocal } from "@pureadmin/utils";
import type { StorageConfigs } from "@/types/global";
export const useThemeStore = defineStore({
  id: "admin-theme",
  state: () => ({
    epThemeColor:
      storageLocal().getItem<StorageConfigs>("responsive-layout")
        ?.epThemeColor ?? getConfig().epThemeColor,
    theme:
      storageLocal().getItem<StorageConfigs>("responsive-layout")?.theme ??
      getConfig().theme,
  }),
  getters: {
    getEpThemeColor(): any {
      return this.epThemeColor;
    },
    /** 用于mix导航模式下hamburger-svg的fill属性 */
    fill() {
      if (this.theme === "light") {
        return "#409eff";
      } else if (this.theme === "yellow") {
        return "#d25f00";
      } else {
        return "#fff";
      }
    },
  },
  actions: {
    setEpThemeColor(newColor: string): void {
      const layout =
        storageLocal().getItem<StorageConfigs>("responsive-layout");
      this.theme = layout?.theme;
      this.epThemeColor = newColor;
      if (!layout) return;
      layout.epThemeColor = newColor;
      storageLocal().setItem("responsive-layout", layout);
    },
  },
});

export function useThemeStoreHook() {
  return useThemeStore(store);
}
