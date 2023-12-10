import { createRouter, createWebHistory } from "vue-router";
import type { RouteRecordRaw } from "vue-router";

//Hompage
import HomePage from "../views/Homepage/Main.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: HomePage,
    beforeEnter(to, from) {
      if (localStorage.getItem("lang") == "ar") {
        document.title = ` الصفحه الرئيسيه - Medicom`;
      } else {
        document.title = "Home page - Medicom";
      }
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: "smooth",
      };
    } else {
      return { left: 0, top: 0 };
    }
  },
});

export default router;
