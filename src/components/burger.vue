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
      class="burger-menu fixed w-full h-full z-20 md:hidden"
      :class="{ 'is-active': open }"
    >
      <div
        class="fixed top-0 left-0 flex flex-col bg-white w-full h-full text-3xl space-y-10 text-center pt-40 z-50"
      >
        <router-link id="top" to="/">
          <span>TOP</span>
        </router-link>
        <hr width="10%" noshade="" class="mx-auto" />
        <router-link id="works" to="/works">
          <span>WORKS</span>
        </router-link>
        <hr width="10%" noshade="" class="mx-auto" />
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
