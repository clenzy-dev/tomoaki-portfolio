<template>
  <div>
    <div class="md:hidden fixed bottom-0 z-40">
      <button
        type="button"
        class="menu-btn p-4 relative"
        v-on:click="open = !open"
      >
        <span
          :class="{ activetop: open }"
          class="inline-block absolute bottom-10 w-full h-1 bg-black transition duration-250 ease-in-out"
        ></span>
        <span
          :class="{ activebottom: open }"
          class="inline-block absolute bottom-6 w-full h-1 bg-black transition duration-250 ease-in-out"
        ></span>
      </button>
    </div>
    <div
      class="burger-menu fixed w-full h-full z-20 md:hidden"
      :class="{ 'is-active': open }"
    >
      <div
        class="flex flex-col bg-white w-full h-screen pt-40 text-3xl space-y-10 text-center"
      >
        <router-link id="top" to="/">
          <span>TOP</span>
        </router-link>
        <hr width="15%" noshade="" class="mx-auto" />
        <router-link id="works" to="/works">
          <span>WORKS</span>
        </router-link>
        <hr width="15%" noshade="" class="mx-auto" />
        <router-link id="profile" to="/profile">
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
  transition: all 0.05s linear;
}
.is-active {
  transform: translateX(0);
}
.activetop {
  transform: translateY(5px) rotate(-45deg);
}
.activebottom {
  transform: translateY(-11px) rotate(45deg);
}
</style>

