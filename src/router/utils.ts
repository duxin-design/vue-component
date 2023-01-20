import type {RouterHistory } from "vue-router"
import {
  createWebHashHistory,
  createWebHistory,
} from "vue-router";

export function getHistoryMode():RouterHistory {
  const routerHistory = import.meta.env.VITE_ROUTER_HISTORY;

  const historyMode = routerHistory.split(",");

  if (historyMode.length === 1) {
    if (historyMode[0] === "hash") {
      return createWebHashHistory("");
    }
    if (historyMode[0] === "h5") {
      return createWebHistory("");
    }
  }
  if (historyMode.length === 2) {
    if (historyMode[0] === "hash") {
      return createWebHashHistory(historyMode[1]);
    }
    if(historyMode[0]==='h5'){
        return createWebHistory(historyMode[1]);
    }
  }

  return createWebHashHistory(""); 
}
