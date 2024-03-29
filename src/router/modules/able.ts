/*
 * @Author: duxinyues yongyuan253015@gmail.com
 * @Date: 2023-02-21 16:05:34
 * @LastEditors: duxinyues yongyuan253015@gmail.com
 * @LastEditTime: 2023-02-21 17:10:03
 * @FilePath: \vue-admin\src\router\modules\able.ts
 * @Description: 
 * Copyright (c) 2023 by ${duxinyues} email: ${yongyuan253015@gmail.com}, All Rights Reserved.
 */
import { able } from "@/router/enums";

export default {
  path: "/able",
  redirect: "/able/watermark",
  component: () => import("@/layout/index.vue"),
  meta: {
    title: "功能",
    rank: able
  },
  children: [
    {
      path: "/able/watermark",
      name: "WaterMark",
      component: () => import("@/views/able/watermark.vue"),
      meta: {
        title: "水印"
      }
    },
    {
      path: "/able/print",
      name: "Print",
      component: () => import("@/views/able/print.vue"),
      meta: {
        title: "打印"
      }
    },
    // {
    //   path: "/able/download",
    //   name: "Download",
    //   component: () => import("@/views/able/download.vue"),
    //   meta: {
    //     title: $t("menus.hsDownload")
    //   }
    // },
    // {
    //   path: "/able/iconSelect",
    //   name: "IconSelect",
    //   component: () => import("@/views/able/icon-select.vue"),
    //   meta: {
    //     title: $t("menus.hsIconSelect")
    //   }
    // },
    // {
    //   path: "/able/timeline",
    //   name: "TimeLine",
    //   component: () => import("@/views/able/timeline.vue"),
    //   meta: {
    //     title: $t("menus.hsTimeline")
    //   }
    // },
    // {
    //   path: "/able/menuTree",
    //   name: "MenuTree",
    //   component: () => import("@/views/able/menu-tree.vue"),
    //   meta: {
    //     title: $t("menus.hsMenuTree")
    //   }
    // },
    // {
    //   path: "/able/lineTree",
    //   name: "LineTree",
    //   component: () => import("@/views/able/line-tree.vue"),
    //   meta: {
    //     title: $t("menus.hsLineTree")
    //   }
    // },
    // {
    //   path: "/able/debounce",
    //   name: "Debounce",
    //   component: () => import("@/views/able/debounce.vue"),
    //   meta: {
    //     title: $t("menus.hsDebounce")
    //   }
    // },
    // {
    //   path: "/able/barcode",
    //   name: "BarCode",
    //   component: () => import("@/views/able/barcode.vue"),
    //   meta: {
    //     title: $t("menus.hsBarcode")
    //   }
    // },
    // {
    //   path: "/able/qrcode",
    //   name: "QrCode",
    //   component: () => import("@/views/able/qrcode.vue"),
    //   meta: {
    //     title: $t("menus.hsQrcode")
    //   }
    // },
    // {
    //   path: "/able/cascader",
    //   name: "Cascader",
    //   component: () => import("@/views/able/cascader.vue"),
    //   meta: {
    //     title: $t("menus.hsCascader")
    //   }
    // },
    // {
    //   path: "/able/swiper",
    //   name: "Swiper",
    //   component: () => import("@/views/able/swiper.vue"),
    //   meta: {
    //     title: $t("menus.hsSwiper")
    //   }
    // },
    // {
    //   path: "/able/virtualList",
    //   name: "VirtualList",
    //   component: () => import("@/views/able/virtual-list/index.vue"),
    //   meta: {
    //     title: $t("menus.hsVirtualList")
    //   }
    // },
    // {
    //   path: "/able/pdf",
    //   name: "Pdf",
    //   component: () => import("@/views/able/pdf.vue"),
    //   meta: {
    //     title: $t("menus.hsPdf")
    //   }
    // },
    // {
    //   path: "/able/execl",
    //   name: "Execl",
    //   component: () => import("@/views/able/execl.vue"),
    //   meta: {
    //     title: $t("menus.hsExecl")
    //   }
    // },
    // {
    //   path: "/able/infiniteScroll",
    //   name: "InfiniteScroll",
    //   component: () => import("@/views/able/infinite-scroll.vue"),
    //   meta: {
    //     title: $t("menus.hsInfiniteScroll")
    //   }
    // }
  ]
};
