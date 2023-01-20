import { components } from "@/router/enums";
export default {
  path: "/components",
  redirect: "/components/video",
  math: {
    icon: "menu",
    title: "组件",
    rank: components,
  },
  children: [
    {
      path: "/components/message",
      name: "Message",
      component: () => import("@/views/components/message/index.vue"),
    },
  ],
};
