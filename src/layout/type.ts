export type routeMetaType = {
  title?: string;
  icon?: string;
  showLink?: boolean;
  savedPosition?: boolean;
  auths?: Array<string>;
};
export type RouteConfig = {
  path?: string;
  parentPath?: string;
  query?: object;
  params?: object;
  meta?: routeMetaType;
  children?: RouteConfig[];
  name?: string;
};
export const routerArrays: Array<RouteConfig> = [
  {
    path: "/welcome",
    parentPath: "/",
    meta: {
      title: "menus.hshome",
      icon: "homeFilled",
    },
  },
];
export type multiTagsType = {
  tags: Array<RouteConfig>;
};

export type tagsViewsType = {
  icon: string;
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
    extraIcon?: {
      svg?: boolean;
      name?: string;
    };
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
