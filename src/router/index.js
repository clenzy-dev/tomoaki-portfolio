import { createRouter, createWebHistory } from "vue-router";
import Top from "../views/Top.vue";
import Works from "../views/Works.vue";
import Profile from "../views/Profile.vue";

const routes = [
  {
    path: "/",
    name: "Top",
    component: Top,
  },
  {
    path: "/works",
    name: "works",
    component: Works,
  },
  {
    path: "/profile",
    name: "profile",
    component: Profile,
  },
];

const scrollBehavior = (to, from, savedPosition) => {
  if (savedPosition) {
    return savedPosition;
  } else {
    return { top: 0 }
  }
};

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior
});
export default router;
