<template>
  <footer class="md:bg-bgGray">
    <div class="md:pl-8 md:pr-32 pr-4">
      <div
        class="md:text-right md:pl-0 pl-20 pt-4 space-y-4"
        v-for="item in routerItems"
        :key="item.title"
      >
        <router-link :id="item.id" :to="item.to" class="text-2xl text-gray hover:text-black">
          {{ item.title }}
        </router-link>
      </div>
      <div class="md:flex text-center justify-between pt-10">
        <div class="">
          <a class="w-20 md:inline hidden" href="#"
            ><img class="w-20" src="../assets/img/200-200.png" alt="logo"
          /></a>
        </div>
        <div
          class="flex md:pl-0 md:justify-end justify-around space-x-2 md:ml-0 ml-20"
        >
          <div
            class="link md:pb-0 pb-4 flex content-center items-center"
            v-for="item in snsItems"
            :key="item.title"
          >
            <div :class="item.class">
              <a class="w-auto" :href="item.href"
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
      FooterLogo: require("../assets/img/200-200.png"),
      routerItems: [
        { title: "TOP", id: "top", to: "/works" },
        { title: "WORKS", id: "works", to: "/works" },
        { title: "PROFILE", id: "profile", to: "/plofile" },
      ],
      snsItems: [
        {
          title: "instagram",
          href: "https://www.instagram.com/tomoakiii0323/",
          class: "w-10",
          src: require("../assets/img/instagram-logo.png"),
        },
        {
          title: "twitter",
          href: "https://twitter.com/tomoakiii0323",
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
          href: "mailto:tomoaki0323video@gmail.com",
          class: "w-10 ml-4",
          src: require("../assets/img/email-logo.png"),
        },
      ],
    };
  },
};
</script>
