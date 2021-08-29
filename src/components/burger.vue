<template>
  <div>
    <div class="md:hidden fixed bottom-0 z-40">
      <button type="button" class="menu-btn p-4" v-on:click="open = !open">
        <i class="fa fa-bars fa-2x" aria-hidden="true"></i>
      </button>
    </div>
    <div
      class="burger-menu fixed w-full h-full z-20 md:hidden"
      :class="{ 'is-active': open }"
    >
      <div class="flex flex-col bg-white w-full h-screen pl-36 pt-40 text-3xl space-y-14">
        <router-link id="top" to="/" class="">
          <span>TOP</span>
        </router-link>
        <router-link id="works" to="/works" class="">
          <span>WORKS</span>
        </router-link>
        <router-link id="profile" to="/profile" class="">
          <span>PROFILE</span>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      open: false,
    };
  },
};
</script>

<style scoped>
.burger-menu {
  transform: translateX(-110vw);
  transition: all 0.2s linear;
  
}
.is-active {
  transform: translateX(0);
}
</style>
