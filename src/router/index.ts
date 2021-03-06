import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/Home.vue";
import Puzzle from "../views/Puzzle.vue";
import Final from "../views/Final.vue";

export const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      title: "start",
    },
  },
  {
    path: "/:pageNumber",
    name: "Puzzle",
    component: Puzzle,
    meta: {
      title: "puzzle",
    },
  },
  {
    path: "/final",
    name: "Final",
    component: Final,
    meta: {
      title: "YOU WIN",
    },
  },
  {
    path: "/404",
    component: () => import("../views/404.vue"),
    meta: {
      title: "404 not found",
    },
  },
  { path: "/:pathMatch(.*)*", redirect: "/404" },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior: (to) => (to?.hash ? { el: to.hash } : { top: 0, left: 0 }),
});

router.beforeEach((to, _, next) => {
  document.title = to.meta.title as string;
  next();
});

export default router;
