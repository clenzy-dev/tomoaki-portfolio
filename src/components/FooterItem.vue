<template>
  <footer class="sm:bg-gray-100">
    <div class="sm:px-32 pr-4">
      <div class="sm:text-right sm:pl-0 pl-16 pt-4 space-y-4">
        <div><a class="text-2xl" href="#">TOP</a></div>
        <div><a class="text-2xl" href="#">WORKS</a></div>
        <div><a class="text-2xl" href="#">PROFILE</a></div>
      </div>
      <div
        class="flex pt-10 pl-16 sm:pl-0 sm:justify-end justify-start space-x-6"
      >
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