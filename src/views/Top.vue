<template>
  <div>
    <HeaderItem />
    <main>
      <video class="hidden md:block" :src="mainVideo" autoplay muted></video>
      <video
        class="md:hidden pt-20 w-full"
        :src="mainVideoSp"
        autoplay
        muted
      ></video>
      <div class="md:px-24 pl-20">
        <h2 class="catch text-4xl text-left pt-20 md:pb-10 pb-5">WORKS</h2>
        <div>
          <div class="md:grid md:grid-cols-4 md:grid-lows-2 gap-4 md:pr-0 pr-4">
            <a
              :class="item.class"
              class=" transition duration-250 ease-in-out bg-gray-100 transform hover:scale-105"
              :href="item.href"
              v-for="item in items"
              :key="item.id"
            >
              <div class="md:p-2">
                <img class="" :src="item.img" :alt="item.id" />
              </div>
              <div class="p-2">
                <div class="flex items-center justify-between">
                  <p class=" w-3/4 md:float-none float-left">
                    {{ item.title }}
                  </p>
                  <div class="w-1/12">
                    <img
                      class=""
                      src="../assets/img/youtube-logo.png"
                      alt="youtube-logo"
                    />
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
        <div class="text-center w-32 ml-auto mt-4 md:mr-0 mr-4">
            <a
              class="bg-color block text-white p-2 transition duration-250 ease-in-out hover:opacity-80"
              href="#"
              >more movies→</a
            >
        </div>
      </div>
      <div class="md:px-24 pl-20 pb-40">
        <h2 class="catch text-4xl text-left md:pt-32 md:pb-10 pt-20 pb-5">PROFILE</h2>
        <div class="md:flex content-center items-center relative">
          <div class="md:w-2/4 md:mr-0 mr-4">
            <img :src="profileImg" alt="profile" />
          </div>
          <div
            class="flex justify-between flex-col md:w-2/4 text-center content-center"
          >
            <p class="md:text-4xl text-2xl md:text-center text-left">
              Tomoaki Sato
            </p>
            <div class="absolute md:bottom-0.5 md:right-0 -bottom-10 right-4">
              <a
                class="bg-black text-white px-4 py-2 transition duration-250 ease-in-out hover:opacity-80"
                href="#"
                >view more →</a
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
          href: "https://www.youtube.com/watch?v=siFt7m8S8OY",
          title:
            "【アメリカ人が歌う】Make you happy / NiziU ‐ Feat.ケビン【アカペラ】",
          class: "sm:col-span-2 sm:text-base text-xs",
          icon:
            "fab fa-youtube color w-1/4 md:float-none float-left md:py-0 py-4",
        },
        {
          id: 2,
          img: require("../assets/img/citrus-daice.png"),
          href: "https://www.youtube.com/watch?v=ojLVyEszPpM",
          title:
            "【コラボ】CITRUS / Da-iCE【ハイスクール・バンバンの女性陣とアカペラ】",
          class: "md:col-span-2 md:text-base text-xs",
          icon:
            "fab fa-youtube color w-1/4 md:float-none float-left md:py-0 py-4",
        },
        {
          id: 3,
          img: require("../assets/img/PaleBlue-yonezu.png"),
          href: "https://www.youtube.com/watch?v=rCrlCyQizEM",
          title: "【女性が歌う】Pale Blue / 米津玄師【アカペラ】",
          class: "text-xs",
          icon:
            "fab fa-youtube color w-1/4 md:float-none float-left md:py-0 py-4",
        },
        {
          id: 4,
          img: require("../assets/img/MGA-medley.png"),
          href: "https://www.youtube.com/watch?v=jgDJv06fgnU",
          title: "【ハモネプ出場者が歌う】Mrs. GREEN APPLE…",
          class: "text-xs",
          icon:
            "fab fa-youtube color w-1/4 md:float-none float-left md:py-0 py-4",
        },
        {
          id: 5,
          img: require("../assets/img/Kevin-taik1.jpg"),
          href: "https://www.youtube.com/watch?v=bhGjP32JyL8",
          title: "【10分で上手くなる！】ネイティブに英語の発音…",
          class: "text-xs",
          icon:
            "fab fa-youtube color w-1/4 md:float-none float-left md:py-0 py-4",
        },
        {
          id: 6,
          img: require("../assets/img/cleaning.jpg"),
          href: "https://www.youtube.com/watch?v=KhudW2ePa10",
          title: "【エアコン】誰でもできる！掃除のプロが教える…",
          class: "text-xs",
          icon:
            "fab fa-youtube color w-1/4 md:float-none float-left md:py-0 py-4",
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
.bg-color {
  background-color: #332f2e;
}
.color {
  color: red;
}
.size {
  font-size: 2em;
}
.catch {
  display: flex;
  align-items: center;
}
.catch:before, .catch:after {
  border-top: 2px solid #C40F14;
  content: "";
  width: .2em; 
}
.catch:after {
  border-top: 2px solid #C40F14;
;
  content: "";
  width: 3.5em; 
}
.catch:before {
  margin-right: .2em; 
}
.catch:after {
  margin-left: .2em;
}
@media screen and (min-width: 768px) { 
.catch:before, .catch:after {
  display: none;
}
 }
</style>
