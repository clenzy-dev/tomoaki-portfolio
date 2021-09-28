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
          class="inline-block absolute bottom-11 w-full h-px bg-black transition duration-250 ease-in-out"
        ></span>
        <span
          :class="{ activemiddle: open }"
          class="inline-block absolute bottom-8 w-full h-px bg-black transition duration-250 ease-in-out"
        ></span>
        <span
          :class="{ activebottom: open }"
          class="inline-block absolute bottom-5 w-full h-px bg-black transition duration-250 ease-in-out"
        ></span>
      </button>
    </div>
    <div
      class="burger-menu fixed top-0 w-full h-screen z-20 md:hidden"
      :class="{ 'is-active': open }"
    >
      <div
        class="h-screen bg-white w-full text-3xl space-y-10 text-center z-50 pt-40"
      >
        <router-link id="top" to="/">
          <span>TOP</span>
          <hr width="10%" noshade="" class="mx-auto my-8" />
        </router-link>
        <router-link id="works" to="/works">
          <span>WORKS</span>
          <hr width="10%" noshade="" class="mx-auto my-8" />
        </router-link>
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
  transform: translateY(12px) rotate(-45deg);
}
.activemiddle {
  display: none;
}
.activebottom {
  transform: translateY(-11px) rotate(45deg);
}
</style>
