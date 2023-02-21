/*
 * @Author: duxinyues yongyuan253015@gmail.com
 * @Date: 2023-02-20 15:59:57
 * @LastEditors: duxinyues yongyuan253015@gmail.com
 * @LastEditTime: 2023-02-21 14:22:06
 * @FilePath: \vue-admin\src\router\utils.ts
 * @Description:
 * Copyright (c) 2023 by ${duxinyues} email: ${yongyuan253015@gmail.com}, All Rights Reserved.
 */
import { isProxy, toRaw } from "vue";
import {
  createWebHashHistory,
  createWebHistory,
  type RouterHistory,
  type RouteRecordRaw,
  type RouteRecordNormalized,
  type RouteComponent,
} from "vue-router";
import router from "./index";
import { useTimeoutFn } from "@vueuse/core";
import type { RouteConfigs } from "@/layout/types";
import {
  isString,
  cloneDeep,
  isAllEmpty,
  intersection,
  storageSession,
  isIncludeAllChildren,
} from "@pureadmin/utils";

const modulesRoutes = import.meta.glob("@/views/**/*.{vue,tsx}");
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

// 查找父级路径
export const getParentPaths = (path: string, routes: RouteRecordRaw[]) => {
  function dfs(routes: RouteRecordRaw[], path: string, parents: string[]) {
    for (let i = 0; i < routes.length; i++) {
      const item = routes[i];
      // 找到path则返回父级path
      if (item.path === path) return parents;
      // children不存在或为空则不递归
      if (!item.children || !item.children.length) continue;
      // 往下查找时将当前path入栈
      parents.push(item.path);

      if (dfs(item.children, path, parents).length) return parents;
      // 深度遍历查找未找到时当前path 出栈
      parents.pop();
    }
    // 未找到时返回空数组
    return [];
  }

  return dfs(routes, path, []);
};
/** 查找对应path的路由信息 */
export const findRouteByPath = (path: string, routes: any) => {
  let res = routes.find((item: { path: string }) => item.path == path);
  if (res) {
    return isProxy(res) ? toRaw(res) : res;
  } else {
    for (let i = 0; i < routes.length; i++) {
      if (
        routes[i].children instanceof Array &&
        routes[i].children.length > 0
      ) {
        res = findRouteByPath(path, routes[i].children);
        if (res) {
          return isProxy(res) ? toRaw(res) : res;
        }
      }
    }
    return null;
  }
};
function handRank(routeInfo: any) {
  const { name, path, parentId, meta } = routeInfo;
  return isAllEmpty(parentId)
    ? isAllEmpty(meta?.rank) ||
      (meta?.rank === 0 && name !== "Home" && path !== "/")
      ? true
      : false
    : false;
}
// 根据rank参数来排序
export const ascending = (arr: any[]) => {
  arr.forEach((v, index) => {
    if (handRank(v)) v.meta.rank = index + 2;
  });

  return arr.sort(
    (a: { meta: { rank: number } }, b: { meta: { rank: number } }) => {
      return a?.meta.rank - b?.meta.rank;
    }
  );
};

// 筛选showLink为false的菜单
function filterTree(data: RouteComponent[]) {
  const newTree = cloneDeep(data).filter(
    (v: { meta: { showLink: boolean } }) => v.meta?.showLink !== false
  );

  newTree.forEach(
    (v: { children: any }) =>
      v.children && (v.children = filterTree(v.children))
  );

  return newTree;
}
/** 过滤children长度为0的的目录，当目录下没有菜单时，会过滤此目录，目录没有赋予roles权限，当目录下只要有一个菜单有显示权限，那么此目录就会显示 */
function filterChildrenTree(data: RouteComponent[]) {
  const newTree = cloneDeep(data).filter((v: any) => v?.children?.length !== 0);
  newTree.forEach(
    (v: { children:any }) => v.children && (v.children = filterTree(v.children))
  );
  return newTree;
}

/** 判断两个数组彼此是否存在相同值 */
function isOneOfArray(a: Array<string>, b: Array<string>) {
  return Array.isArray(a) && Array.isArray(b)
    ? intersection(a, b).length > 0
      ? true
      : false
    : true;
}

