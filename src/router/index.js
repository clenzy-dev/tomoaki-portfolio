import { createRouter, createWebHistory } from 'vue-router'
import Top from "../views/Top.vue";
import Works from "../views/Works.vue";
import Plofile from "../views/Plofile.vue";

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
    path: "/plofile",
    name: "plofile",
    component: Plofile,
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
