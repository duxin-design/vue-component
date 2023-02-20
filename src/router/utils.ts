/*
 * @Author: duxinyues yongyuan253015@gmail.com
 * @Date: 2023-02-20 15:59:57
 * @LastEditors: duxinyues yongyuan253015@gmail.com
 * @LastEditTime: 2023-02-20 16:07:01
 * @FilePath: \vue-admin\src\router\utils.ts
 * @Description:
 * Copyright (c) 2023 by ${duxinyues} email: ${yongyuan253015@gmail.com}, All Rights Reserved.
 */

import {
  createWebHashHistory, createWebHistory, type RouterHistory,
} from "vue-router";
export const getHistoryMode = (routerHistory: any): RouterHistory => {
  const historyMode = routerHistory.split(",");
  const leftMode = historyMode[0];
  const rightMode = historyMode[1];
  if (historyMode.length === 1) {
    if (leftMode === "hash") {
      return createWebHashHistory("");
    } else if (leftMode === "h5") {
      return createWebHistory("");
    }
  } //has param
  else if (historyMode.length === 2) {
    if (leftMode === "hash") {
      return createWebHashHistory(rightMode);
    } else if (leftMode === "h5") {
      return createWebHistory(rightMode);
    }
  }

  return createWebHistory(rightMode);
};
