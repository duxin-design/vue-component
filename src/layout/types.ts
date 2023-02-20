/*
 * @Author: duxinyues yongyuan253015@gmail.com
 * @Date: 2023-02-20 17:15:53
 * @LastEditors: duxinyues yongyuan253015@gmail.com
 * @LastEditTime: 2023-02-20 17:16:04
 * @FilePath: \vue-admin\src\layout\types.ts
 * @Description: 
 * Copyright (c) 2023 by ${duxinyues} email: ${yongyuan253015@gmail.com}, All Rights Reserved.
 */
import type { IconifyIcon } from "@iconify/vue";

export const routerArrays: Array<RouteConfigs> = [
  {
    path: "/welcome",
    parentPath: "/",
    meta: {
      title: "menus.hshome",
      icon: "homeFilled"
    }
  }
];

export type routeMetaType = {
  title?: string;
  icon?: string | IconifyIcon;
  showLink?: boolean;
  savedPosition?: boolean;
  auths?: Array<string>;
};

export type RouteConfigs = {
  path?: string;
  parentPath?: string;
  query?: object;
  params?: object;
  meta?: routeMetaType;
  children?: RouteConfigs[];
  name?: string;
};

export type multiTagsType = {
  tags: Array<RouteConfigs>;
};

export type tagsViewsType = {
  icon: string | IconifyIcon;
  text: string;
  divided: boolean;
  disabled: boolean;
  show: boolean;
};

export interface setType {
  sidebar: {
    opened: boolean;
    withoutAnimation: boolean;
    isClickCollapse: boolean;
  };
  device: string;
  fixedHeader: boolean;
  classes: {
    hideSidebar: boolean;
    openSidebar: boolean;
    withoutAnimation: boolean;
    mobile: boolean;
  };
  hideTabs: boolean;
}

export type childrenType = {
  path?: string;
  noShowingChildren?: boolean;
  children?: childrenType[];
  value: unknown;
  meta?: {
    icon?: string;
    title?: string;
    showParent?: boolean;
    extraIcon?: string;
  };
  showTooltip?: boolean;
  parentId?: number;
  pathList?: number[];
};

export type themeColorsType = {
  color: string;
  themeColor: string;
};

export interface scrollbarDomType extends HTMLElement {
  wrap?: {
    offsetWidth: number;
  };
}
