export default [
  { path: "/", redirect: "/redirect" },
  {
    path: "/login",
    name: "Login",
    components: () => import("@/views/login/index.vue"),
  },
  {
    path: "/redirect",
    component: () => import("@/layout/index.vue"),
    meta: {
      icon: "homeFiled",
      title: "首页",
      showLink: false,
      rank: 102,
    },
    children: [
      {
        path: "/redirect/:path(.*)",
        name: "Redirect",
        component: () => import("@/layout/redirect.vue"),
        meta: {
          title: "非Layout页面",
          showLink: false,
          rank: 103,
        },
      },
    ],
  },
];
