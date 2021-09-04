import { createRouter, createWebHistory } from 'vue-router'
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
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
