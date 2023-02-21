/*
 * @Author: duxinyues yongyuan253015@gmail.com
 * @Date: 2023-02-20 21:52:52
 * @LastEditors: duxinyues yongyuan253015@gmail.com
 * @LastEditTime: 2023-02-21 13:58:29
 * @FilePath: \vue-admin\src\store\modules\app.ts
 * @Description: app
 * Copyright (c) 2023 by ${duxinyues} email: ${yongyuan253015@gmail.com}, All Rights Reserved.
 */

import { store } from "@/store";
import type { appType } from "./types";
import { defineStore } from "pinia";
import { getConfig } from "@/config";
import { deviceDetection, storageLocal } from "@pureadmin/utils";
import type { StorageConfigs } from "@/types/global";

export const useAppStore = defineStore({
  id: "admin-app",
  state: (): appType => ({
    sidebar: {
      opened:
        storageLocal().getItem<StorageConfigs>("responsive-layout")
          ?.sidebarStatus ?? getConfig().SidebarStatus,
      withoutAnimation: false,
      isClickCollapse: false,
    },
    layout:
      storageLocal().getItem<StorageConfigs>("responsive-layout")?.layout ??
      getConfig().Layout,
    device: deviceDetection() ? "mobile" : "desktop",
    sortSwap: false,
  }),
  getters: {
    getSidebarStatus(): any {
      return this.sidebar.opened;
    },
    getDevice(): any {
      return this.device;
    },
  },
  actions: {
    TOGGLE_SIDEBAR(opened?: boolean, resize?: string) {
      const layout =
        storageLocal().getItem<StorageConfigs>("responsive-layout");
      if (opened && resize) {
        this.sidebar.withoutAnimation = true;
        this.sidebar.opened = true;
        layout.sidebarStatus = true;
      } else if (!opened && resize) {
        this.sidebar.withoutAnimation = true;
        this.sidebar.opened = false;
        layout.sidebarStatus = false;
      } else if (!opened && !resize) {
        this.sidebar.withoutAnimation = false;
        this.sidebar.opened = !this.sidebar.opened;
        this.sidebar.isClickCollapse = !this.sidebar.opened;
        layout.sidebarStatus = this.sidebar.opened;
      }
      storageLocal().setItem("responsive-layout", layout);
    },
    async toggleSideBar(opened?: boolean, resize?: string) {
      await this.TOGGLE_SIDEBAR(opened, resize);
    },
    toggleDevice(device: string) {
      this.device = device;
    },
    setLayout(layout: string) {
      this.layout = layout;
    },
    setSortSwap(val: boolean) {
      this.sortSwap = val;
    }
  }
});

export function useAppStoreHook() {
  return useAppStore(store);
}