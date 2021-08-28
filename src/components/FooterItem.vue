<template>
  <footer class="bg-gray-200">
    <div
      class="burger-menu flex flex-col bg-gray-600 fixed"
      v-bind:class="{ 'is-active': open }"
    >
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
    <div class="sm:px-32 pr-4">
      <div class="menu text-right pt-4 space-y-4">
        <div><a class="text-2xl" href="#">TOP</a></div>
        <div><a class="text-2xl" href="#">WORKS</a></div>
        <div><a class="text-2xl" href="#">PROFILE</a></div>
      </div>
      <div class="flex pt-10 justify-end">
        <div class="link sm:pb-0 pb-4" v-for="item in items" :key="item.title">
          <div :class="item.class">
            <a class="w-auto" href="#"
              ><img class="w-full" :src="item.src" :alt="item.title"
            /></a>
          </div>
        </div>
      </div>
      <div>
        <a class="w-4 sm:inline hidden" href="#"
          ><img class="w-20" :src="FooterLogo" alt="logo"
        /></a>

        <div class="sm:hidden sm:static fixed bottom-0">
          <button type="button" class="menu-btn p-4" v-on:click="open = !open">
            <i class="fa fa-bars fa-2x" aria-hidden="true"></i>
          </button>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "FooterItem",
  data() {
    return {
      open: false,
      FooterLogo: require("../assets/img/tomoaki-logo-wletter-op.png"),
      items: [
        {
          title: "instagram",
          href: "#",
          class: "w-10",
          src: require("../assets/img/instagram-logo.png"),
        },
        {
          title: "twitter",
          href: "#",
          class: "w-10 ml-4 pt-1",
          src: require("../assets/img/twitter-logo.png"),
        },
        {
          title: "facebook",
          href: "#",
          class: "w-10 ml-4",
          src: require("../assets/img/facebook-logo.png"),
        },
        {
          title: "email",
          href: "#",
          class: "w-10 ml-4",
          src: require("../assets/img/email-logo.png"),
        },
      ],
    };
  },
};
</script>

<style scoped>
/* アニメーション前のメニューの状態 */
.burger-menu {
  transform: translateX(-9999px);
  transition: all 0.3s linear;
}
/* アニメーション後のメニューの状態 */
.is-active {
  transform: translateX(0);
}
</style>
