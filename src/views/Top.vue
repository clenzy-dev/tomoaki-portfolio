<template>
  <div>
    <HeaderItem />
    <main>
      <video class="sm:pt-0 pt-16" :src="mainVideo" autoplay muted></video>
      <div class="sm:px-16 pl-16">
        <h2 class="text-4xl text-left py-5">WORKS</h2>
        <div>
          <div class="grid sm:grid-cols-4 sm:grid-lows-2 gap-8">
            <a :class="item.class" class=" transition duration-250 ease-in-out bg-gray-100 transform hover:scale-105" :href="item.href" v-for="item in items" :key="item.id">
              <div class="p-2">
                <img :src="item.img" :alt="item.id" />
              </div>
              <div class="flex items-center">
                <p class="pt-2 w-3/4">
                  {{ item.title }}
                </p>
                <i class="fab fa-youtube color w-1/4"></i>
              </div>
            </a>
          </div>
        </div>
        <div class="mt-8 mr-0 mb-0 ml-auto w-40 ">
          <a class="bg-black text-white p-2 transition duration-250 ease-in-out hover:opacity-80" href="#">more 15 movies →</a>
        </div>
      </div>
      <div class="sm:px-16 pl-16 pb-32">
        <h2 class="text-4xl text-left py-5">PROFILE</h2>
        <div class="sm:flex content-center">
          <div class="sm:w-2/4">
            <img :src="profileImg" alt="profile" />
          </div>
          <div class="w-2/4 text-center content-center">
            <p class="sm:text-6xl sm:mt-48 sm:mb-40 text-2xl mt-10 mb-10 ">Tomoaki Sato</p>
            <div class="">
              <a class="bg-black text-white p-2 transition duration-250 ease-in-out hover:opacity-80" href="#">video creator →</a>
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
      profileImg: require("../assets/img/tomoaki-plofile.jpg"),
      items: [
        {
          id: 1,
          img: require("../assets/img/MakeYouHappy-Kevin.png"),
          href: "#",
          title:
            "【アメリカ人が歌う】Make you happy / NiziU‐Feat.ケビン【アカペラ】",
          class: "sm:col-span-2",
        },
        {
          id: 2,
          img: require("../assets/img/citrus-daice.png"),
          href: "#",
          title:
            "【コラボ】CITRUS / Da-iCE【ハイスクール・バンバンの女性陣とアカペラ】",
          class: "sm:col-span-2",
        },
        {
          id: 3,
          img: require("../assets/img/PaleBlue-yonezu.png"),
          href: "#",
          title: "【女性が歌う】Pale Blue / 米津玄師【アカペラ】",
          class: "",
        },
        {
          id: 4,
          img: require("../assets/img/MGA-medley.png"),
          href: "#",
          title: "【ハモネプ出場者が歌う】Mrs. GREEN APPLE ベス…",
          class: "",
        },
        {
          id: 5,
          img: require("../assets/img/Kevin-taik1.jpg"),
          href: "#",
          title:
            "【10分で上手くなる！】ネイティブに英語の発音レッスンお願いしてみた…",
          class: "",
        },
        {
          id: 6,
          img: require("../assets/img/cleaning.jpg"),
          href: "#",
          title:
            "【エアコン】誰でもできる！掃除のプロが教えるエアコンクリーニング",
          class: "",
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
</style>
