import { createRouter, createWebHistory } from "vue-router";
import Login from "../views/login/index.vue";
import Home from "../views/home/index.vue";
import NotFind from "../views/notFind/index.vue";

const routes = [
  { path: "/", redirect: "/home" },
  {
    path: "/home",
    name: "Home",
    component: Home,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/404",
    name: "NotFind",
    component: NotFind,
  },
  {
    path: "/:cathAll(.*)",
    component: NotFind,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
