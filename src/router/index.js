import { createRouter, createWebHistory } from "vue-router";
import Top from "../views/Top.vue";
import Works from "../views/Works.vue";
import Profile from "../views/Profile.vue";
import $ from "jquery";

const routes = [
  {
    path: "/",
    name: "Top",
    component: Top,
    beforeEnter: function(to,from,next) {
      setTimeout(function() {
        $(".start p").fadeIn(2000);
      }, 500);
      setTimeout(function() {
        $(".start").fadeOut(800);
      }, 2500);
      next(); 
    },
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
    return { top: 0 };
  }
};

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior,
});
export default router;
