<template>
  <footer class="md:bg-gray-100">
    <div class="md:pl-8 md:pr-32 pr-4">
      <div class="md:text-right md:pl-0 pl-20 pt-4 space-y-4">
        <div><a class="text-2xl" href="#">TOP</a></div>
        <div><a class="text-2xl" href="#">WORKS</a></div>
        <div><a class="text-2xl" href="#">PROFILE</a></div>
      </div>
      <div class="md:flex text-center justify-between pt-10">
        <div class="">
          <a class="w-20 md:inline hidden" href="#"
            ><img class="w-20" :src="FooterLogo" alt="logo"
          /></a>
        </div>
        <div class="flex md:pl-0 md:justify-end justify-start space-x-2 md:ml-0 ml-20">
          <div
            class="link md:pb-0 pb-4 flex content-center items-center"
            v-for="item in items"
            :key="item.title"
          >
            <div :class="item.class" class="">
              <a class="w-auto" href="#"
                ><img class="w-full" :src="item.src" :alt="item.title"
              /></a>
            </div>
          </div>
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
