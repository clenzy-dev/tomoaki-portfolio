<template>
  <header
    class="md:px-16 md:pt-8 md:pb-6 md:flex md:justify-between md:items-center"
  >
    <router-link id="top" to="/" class="header-logo md:flex hidden">
      <img class="w-36" :src="headerLogo" alt="logo" />
    </router-link>
    <router-link id="top" to="/" v-on:click="logoClick">
      <img
        class="headerLogoSp w-12 mt-4 md:hidden md:static fixed top-0 left-2 z-10"
        :src="headerLogoSp"
        alt="logo-sp"
      />
    </router-link>
    <BurgerMenu />
    <nav>
      <div class="space-x-8">
        <router-link
          id="works"
          to="/works"
          class="md:inline hidden text-gray hover:text-black md:text-xl"
        >
          <span>WORKS</span>
        </router-link>
        <router-link
          id="profile"
          to="/profile"
          class="md:inline hidden text-gray hover:text-black md:text-xl"
        >
          <span>PROFILE</span>
        </router-link>
      </div>
    </nav>
  </header>
</template>

<script>
import BurgerMenu from "./burger.vue";
import $ from "jquery";
export default {
  data() {
    return {
      headerLogo: require("../assets/img/tomoaki-logo-side.png"),
      headerLogoSp: require("../assets/img/200-200.png"),
    };
  },
  methods: {
    logoClick: function() {
      $(".headerLogoSp").on("click", function() {
        $(".start")
          .fadeIn(2000)
          .fadeOut(800);
      });
    },
  },
  components: {
    BurgerMenu,
  },
  name: "HeaderItem",
};
</script>
