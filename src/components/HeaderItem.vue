<template>
  <header
    class="md:px-8 md:py-10 md:flex md:justify-between md:items-center"
  >
    <div class="header-logo md:flex hidden">
      <img class="w-36" :src="headerLogo" alt="logo" />
    </div>
    <div class="md:hidden w-full md:static fixed top-2 left-2">
      <img class="w-16" :src="headerLogoSp" alt="logo-sp" />
    </div>
    <BurgerMenu/>
    <nav>
      <div class="space-x-8">
        <router-link id="works" to="/works" class="md:inline hidden text-gray hover:text-black">
          <span>WORKS</span>
        </router-link>
        <router-link id="profile" to="/profile" class="md:inline hidden text-gray hover:text-black">
          <span>PROFILE</span>
        </router-link>
      </div>
    </nav>
  </header>
</template>

<script>
import BurgerMenu from "./burger.vue";
export default {
  data() {
    return {
      headerLogo: require("../assets/img/tomoaki-logo-side.png"),
      headerLogoSp: require("../assets/img/200-200.png"),
    };
  },
  components: {
    BurgerMenu
  },
  name: "HeaderItem",
};
</script>
