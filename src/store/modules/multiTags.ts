/*
 * @Author: duxinyues yongyuan253015@gmail.com
 * @Date: 2023-02-20 21:26:57
 * @LastEditors: duxinyues yongyuan253015@gmail.com
 * @LastEditTime: 2023-02-20 21:48:39
 * @FilePath: \vue-admin\src\store\modules\multiTags.ts
 * @Description: 标签页信息
 * Copyright (c) 2023 by ${duxinyues} email: ${yongyuan253015@gmail.com}, All Rights Reserved.
 */

import { defineStore } from "pinia";
import { store } from "@/store";
import { isEqual } from "@pureadmin/utils";
import { routerArrays } from "@/layout/types";
import type { multiType, positionType } from "./types";
import { isUrl, storageLocal } from "@pureadmin/utils";
import type {StorageConfigs} from "@/types/global"

export const useMultiTagsStore = defineStore({
  id: "admin-multiTags",
  state: () => ({
    multiTags: storageLocal().getItem<StorageConfigs>("responsive-configure")?.multiTagsCache
      ? storageLocal().getItem("responsive-tags")
      : [...routerArrays],
  }),
});
