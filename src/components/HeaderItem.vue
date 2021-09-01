<template>
  <header
    class="md:px-8 md:flex md:justify-between md:items-center"
  >
    <div class="header-logo md:flex hidden">
      <img class="w-24" :src="headerLogo" alt="logo" />
      <img class="w-24" :src="headerLetter" alt="letter" />
    </div>
    <div class="md:hidden w-full md:static fixed top-2 left-2">
      <img class="w-16" :src="headerLogoSp" alt="logo-sp" />
    </div>
    <BurgerMenu/>
    <nav>
      <div class="space-x-8">
        <router-link id="works" to="/works" class="md:inline hidden">
          <span>WORKS</span>
        </router-link>
        <router-link id="profile" to="/profile" class="md:inline hidden">
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
      headerLogo: require("../assets/img/tomoaki-logo.png"),
      headerLetter: require("../assets/img/tomoaki-letter.png"),
      headerLogoSp: require("../assets/img/200-200.png"),
    };
  },
  components: {
    BurgerMenu
  },
  name: "HeaderItem",
};
</script>
