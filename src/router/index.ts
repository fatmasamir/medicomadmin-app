import { createRouter, createWebHistory } from "vue-router";
import type { RouteRecordRaw } from "vue-router";

//Hompage
import HomePage from "../views/Homepage/Main.vue";
//LoginDoctor
import LoginDoctor from "../views/LoginDoctor/Main.vue";

//LoginMedical
import LoginMedical from "../views/LoginMedical/Main.vue";
const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: HomePage,
    beforeEnter(to, from) {
      document.title = "Home page - Medicom";
    },
  },
  {
    path: "/doctor/login",
    name: "LoginDoctor",
    component: LoginDoctor,
    beforeEnter(to, from) {
      document.title = "Login Doctor page - Medicom";
    },
  },
  {
    path: "/medical/login",
    name: "LoginMedical",
    component: LoginMedical,
    beforeEnter(to, from) {
      document.title = "Login Medical page - Medicom";
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
