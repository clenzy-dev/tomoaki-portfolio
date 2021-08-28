<template>
  <div >
    <div :class="{ 'is-active-bg': open }" class="fixed w-full h-full"></div>
    <div class="sm:hidden sm:static fixed bottom-0 z-40">
      <button type="button" class="menu-btn p-4" v-on:click="open = !open">
        <i class="fa fa-bars fa-2x" aria-hidden="true"></i>
      </button>
    </div>
    <div
      class="burger-menu fixed w-full h-full z-20"
      :class="{ 'is-active': open }"
    >
      <div class="flex flex-col bg-gray-600 w-1/2 h-full p-4 space-y-2">
        <router-link id="top" to="/" class="text-white">
          <span>TOP</span>
        </router-link>
        <router-link id="works" to="/works" class="text-white">
          <span>WORKS</span>
        </router-link>
        <router-link id="profile" to="/profile" class="text-white">
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
  transform: translateX(-600px);
  transition: all 0.3s linear;
  
}
.is-active {
  transform: translateX(0);
}
.is-active-bg {
  background-color: rgba(0, 0, 0, 0.4);
  transition: all 0.3s linear;
}
</style>
