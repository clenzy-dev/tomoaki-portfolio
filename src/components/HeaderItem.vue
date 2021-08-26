<template>
  <header class="px-8 flex justify-between items-center">
    <div class="header-logo flex ">
      <img class="w-24" :src="headerLogo" alt="logo" />
      <img class="w-24" :src="headerLetter" alt="letter" />
    </div>
    <nav>
      <div class="header-menu">
        <router-link id="works" to="/works" class="pr-8">
          <span>WORKS</span>
        </router-link>
        <router-link id="profile" to="/profile">
          <span>PROFILE</span>
        </router-link>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  data() {
    return {
      headerLogo: "tomoaki-logo.png",
      headerLetter: "tomoaki-letter.png",
    };
  },
  name: "HeaderItem",
};
</script>
