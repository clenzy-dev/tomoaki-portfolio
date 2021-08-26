<template>
  <footer class="bg-gray-200">
    <div class="wrap px-32">
      <div class="menu text-right pt-4">
        <div><a class="text-2xl" href="#">TOP</a></div>
        <div><a class="text-2xl" href="#">WORKS</a></div>
        <div><a class="text-2xl" href="#">PROFILE</a></div>
      </div>
      <div class="flex pt-10 justify-end">
        <div class="link" v-for="item in items" :key="item.title">
          <div :class="item.class">
            <a class="w-auto" href="#"
              ><img class="w-full" :src="item.src" :alt="item.title"
            /></a>
          </div>
        </div>
      </div>
      <dev class="logo w-4"
        ><img class="w-20" :src="FooterLogo" alt="logo"
      /></dev>
    </div>
  </footer>
</template>

<script>
export default {
  name: "FooterItem",
  data() {
    return {
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

<style></style>
