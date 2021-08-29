<template>
  <div>
    <HeaderItem />
    <main>
      <video class="hidden md:block" :src="mainVideo" autoplay muted></video>
      <video class="md:hidden pt-16 w-full" :src="mainVideoSp" autoplay muted></video>
      <div class="md:px-32 pl-20">
        <h2 class="text-4xl text-left md:py-10 py-5">WORKS</h2>
        <div>
          <div class="md:grid md:grid-cols-4 md:grid-lows-2 gap-4 z-0">
            <a
              :class="item.class"
              class=" transition duration-250 ease-in-out bg-gray-100 transform hover:scale-105 z-0"
              :href="item.href"
              v-for="item in items"
              :key="item.id"
            >
              <div class="md:p-2">
                <img class="z-0" :src="item.img" :alt="item.id" />
              </div>
              <div class="md:flex items-center">
                <p class="pt-2 w-3/4 md:float-none float-left">
                  {{ item.title }}
                </p>
                <i :class="item.icon" class="size"></i>
              </div>
            </a>
          </div>
        </div>
        <div class="md:mt-8 mt-20 mr-0 mb-0 ml-auto md:w-40 w-40">
          <a
            class="bg-black text-white p-2 transition duration-250 ease-in-out hover:opacity-80"
            href="#"
            >more15movies→</a
          >
        </div>
      </div>
      <div class="md:px-32 pl-20 pb-32">
        <h2 class="text-4xl text-left md:py-10 py-5">PROFILE</h2>
        <div class="md:flex content-center">
          <div class="md:w-2/4 md:mr-0 mr-4">
            <img :src="profileImg" alt="profile" />
          </div>
          <div class="md:w-2/4 text-center content-center">
            <p class="md:text-5xl md:mt-48 md:mb-40 text-2xl mt-2 mb-4 md:text-center text-left">
              Tomoaki Sato
            </p>
            <div class="flex justify-end pr-4">
              <a
                class="bg-black text-white p-2 transition duration-250 ease-in-out hover:opacity-80"
                href="#"
                >video creator →</a
              >
            </div>
          </div>
        </div>
      </div>
    </main>
    <FooterItem />
  </div>
</template>

<script>
import HeaderItem from "@/components/HeaderItem.vue";
import FooterItem from "@/components/FooterItem.vue";
export default {
  data() {
    return {
      mainVideo: require("../assets/img/LogoMovieWideScreen01.mp4"),
      mainVideoSp: require("../assets/img/LogoMovieSquare02.mp4"),
      profileImg: require("../assets/img/tomoaki-plofile.jpg"),
      items: [
        {
          id: 1,
          img: require("../assets/img/MakeYouHappy-Kevin.png"),
          href: "#",
          title:
            "【アメリカ人が歌う】Make you happy / NiziU‐Feat.ケビン【アカペラ】",
          class: "sm:col-span-2 sm:text-base text-xs",
          icon:"fab fa-youtube color w-1/4 md:float-none float-left md:py-0 py-4 md:pl-14 pl-8"
        },
        {
          id: 2,
          img: require("../assets/img/citrus-daice.png"),
          href: "#",
          title:
            "【コラボ】CITRUS / Da-iCE【ハイスクール・バンバンの女性陣とアカペラ】",
          class: "md:col-span-2 md:text-base text-xs",
          icon:"fab fa-youtube color w-1/4 md:float-none float-left md:py-0 py-4 md:pl-14 pl-8"
        },
        {
          id: 3,
          img: require("../assets/img/PaleBlue-yonezu.png"),
          href: "#",
          title: "【女性が歌う】Pale Blue / 米津玄師【アカペラ】",
          class: "text-xs",
          icon:"fab fa-youtube color w-1/4 md:float-none float-left md:py-0 py-4 md:pl-4 pl-8"
        },
        {
          id: 4,
          img: require("../assets/img/MGA-medley.png"),
          href: "#",
          title: "【ハモネプ出場者が歌う】Mrs. GREEN APPLE ベス…",
          class: "text-xs",
          icon:"fab fa-youtube color w-1/4 md:float-none float-left md:py-0 py-4 md:pl-4 pl-8"
        },
        {
          id: 5,
          img: require("../assets/img/Kevin-taik1.jpg"),
          href: "#",
          title:
            "【10分で上手くなる！】ネイティブに英語の発音レッスン…",
          class: "text-xs",
          icon:"fab fa-youtube color w-1/4 md:float-none float-left md:py-0 py-4 md:pl-4 pl-8"
        },
        {
          id: 6,
          img: require("../assets/img/cleaning.jpg"),
          href: "#",
          title:
            "【エアコン】誰でもできる！掃除のプロが教えるエアコン…",
          class: "text-xs",
          icon:"fab fa-youtube color w-1/4 md:float-none float-left md:py-0 py-4 md:pl-4 pl-8"
        },
      ],
    };
  },
  components: {
    HeaderItem,
    FooterItem,
  },
};
</script>

<style scoped>
.color {
  color: red;
}
.size {
  font-size: 2em;
}
</style>
