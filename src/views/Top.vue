<template>
  <div>
    <HeaderItem />
    <main>
      <div class="relative">
        <div
          class="loader-wrap absolute flex items-center justify-center w-full h-full bg-white"
        >
          <div class="loader">Loading...</div>
        </div>
        <video
          class="hidden md:block"
          :src="mainVideo"
          autoplay
          muted
          playsinline
          disablePictureInPicture
        ></video>
        <video
          class="md:hidden mt-20 w-full z-0"
          :src="mainVideoSp"
          autoplay
          muted
          playsinline
          disablePictureInPicture
        ></video>
      </div>
      <div class="md:px-24 pl-24 pt-4 fade opacity-0">
        <h2
          class="catch md:text-4xl text-2xl text-left md:pt-20 pt-20 md:pb-10 pb-2 md:pr-0 pr-2"
        >
          WORKS
        </h2>
        <div class="">
          <div class="md:grid md:grid-cols-4 md:grid-lows-2 gap-2 md:pr-0 pr-2">
            <div
              :class="item.class"
              class="transition duration-250 ease-in-out hover:opacity-40 bg-bgGray col-span-2 shadow-xl"
              v-for="item in items"
              :key="item.id"
            >
              <a :href="item.href" target="_blank" rel="norefferrer noopener">
                <div>
                  <img class="" :src="item.img" :alt="item.id" />
                </div>
                <div class="p-1 m-1 md:relative flex justify-between">
                  <div class="md:w-9/12 w-10/12">
                    <p class="lg:text-xl sm:text-base text-xs">
                      {{ item.title }}
                    </p>
                  </div>
                  <div>
                    <img
                      class="md:absolute md:right-2 md:top-2 md:w-9 sm:w-6 w-5"
                      :class="item.logoclass"
                      src="../assets/img/youtube-logo.png"
                      alt="youtube-logo"
                    />
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div class="text-center w-32 ml-auto mt-6 md:mr-0 mr-1">
          <div class="relative">
            <router-link
              id="works"
              to="/works"
              class="absolute right-0 bg-black text-white py-2 px-4 transition duration-250 ease-in-out hover:bg-white hover:text-black italic border"
            >
              View more
            </router-link>
          </div>
        </div>
      </div>
      <div class="md:px-24 pl-20 md:pb-36 pb-20 fade opacity-0">
        <h2
          class="catch md:text-4xl text-2xl text-left md:mt-48 mt-32 md:pb-8 pb-5 md:pr-0 pr-2"
        >
          PROFILE
        </h2>
        <div class="md:flex content-center items-center relative">
          <div class="md:w-2/4 md:mr-0 mr-2">
            <img :src="profileImg" alt="profile" />
          </div>
          <div
            class="flex justify-between flex-col md:w-2/4 text-center content-center"
          >
            <p
              class="lg:text-5xl md:text-4xl text-2xl md:text-center text-left md:py-0 py-1"
            >
              Tomoaki Sato
            </p>
            <router-link
              id="profile"
              to="/profile"
              class="md:bottom-0.5 md:right-0 -bottom-10 right-2 absolute bg-black text-white px-4 py-2 transition duration-250 ease-in-out hover:bg-white hover:text-black italic border"
            >
              View more
            </router-link>
          </div>
        </div>
      </div>
    </main>
    <FooterItem />
    <div class="start bg-white fixed top-0 left-0 h-full w-full z-50">
      <p class="fixed left-1/2 top-1/2 z-50 hidden w-20">
        <img src="../assets/img/200-200.png" alt="" />
      </p>
    </div>
  </div>
</template>

<script>
import HeaderItem from "@/components/HeaderItem.vue";
import FooterItem from "@/components/FooterItem.vue";
import ScrollFadeUp from "../hooks/ScrollFadeUp.js";
import FirstLoading from "../hooks/FirstLoading.js";
export default {
  data() {
    return {
      mainVideo: require("../assets/img/LogoMovieWideScreen01.mp4"),
      mainVideoSp: require("../assets/img/LogoMovieSquare02.mp4"),
      profileImg: require("../assets/img/tomoaki-plofile.jpg"),
      items: [
        {
          id: 1,
          img: require("../assets/img/MakeYouHappy-Kevin.jpg"),
          href: "https://www.youtube.com/watch?v=siFt7m8S8OY",
          title:
            "【アメリカ人が歌う】Make you happy / NiziU ‐ Feat.ケビン【アカペラ】",
          class: "sm:text-base",
          logoclass: "lg:w-12 md:w-9",
        },
        {
          id: 2,
          img: require("../assets/img/tentaikansoku3.png"),
          href: "https://www.youtube.com/watch?v=j99P45Egu88",
          title: "【男性が歌う】 天体観測／BUMP OF CHICKEN【アカペラ】",
          class: "sm:text-base",
          logoclass: "lg:w-12 md:w-9",
        },
        {
          id: 3,
          img: require("../assets/img/citrus-daice.jpg"),
          href: "https://www.youtube.com/watch?v=ojLVyEszPpM",
          title:
            "【コラボ】CITRUS / Da-iCEハイスクール・バンバンの女性陣とアカペラ】",
          class: "lg:col-span-1 sm:text-base",
          logoclass: "",
        },
        {
          id: 4,
          img: require("../assets/img/PaleBlue-yonezu.jpg"),
          href: "https://www.youtube.com/watch?v=rCrlCyQizEM",
          title: "【女性が歌う】Pale Blue / 米津玄師【アカペラ】",
          class: "lg:col-span-1 sm:text-base",
          logoclass: "top-2",
        },
        {
          id: 5,
          img: require("../assets/img/MGA-medley.jpg"),
          href: "https://www.youtube.com/watch?v=jgDJv06fgnU",
          title: "【ハモネプ出場者が歌う】インフェルノから始まるMrs. GREEN ...",
          class: "lg:col-span-1 sm:text-base",
          logoclass: "",
        },
        {
          id: 6,
          img: require("../assets/img/Kevin-english-16-9.jpg"),
          href: "https://www.youtube.com/watch?v=yvFQfudHAdU",
          title:
            "#Shorts【英語歌ったら即終了】Make you happy - NiziU【アカペラ】...",
          class: "lg:col-span-1 sm:text-base",
          logoclass: "",
        },
      ],
    };
  },
  mounted() {
    FirstLoading();
    ScrollFadeUp();
  },
  components: {
    HeaderItem,
    FooterItem,
  },
};
</script>

<style scoped>
.size {
  font-size: 2em;
}
.catch {
  display: flex;
  align-items: center;
}
.catch:before,
.catch:after {
  border-bottom: 2px solid #c40f14;
  content: "";
  width: 0.4em;
}
.catch:after {
  border-bottom: 2px solid #c40f14;
  content: "";
  width: 100%;
}
.catch:before {
  margin-right: 0.2em;
}
.catch:after {
  margin-left: 0.2em;
}
.start p {
  transform: translate(-50%, -50%);
}

.loader,
.loader:before,
.loader:after {
  background: #000000;
  -webkit-animation: load1 1s infinite ease-in-out;
  animation: load1 1s infinite ease-in-out;
  width: 1em;
  height: 4em;
}
.loader {
  color: #000000;
  text-indent: -9999em;
  margin: 88px auto;
  position: relative;
  font-size: 11px;
  -webkit-transform: translateZ(0);
  -ms-transform: translateZ(0);
  transform: translateZ(0);
  -webkit-animation-delay: -0.16s;
  animation-delay: -0.16s;
}
.loader:before,
.loader:after {
  position: absolute;
  top: 0;
  content: "";
}
.loader:before {
  left: -1.5em;
  -webkit-animation-delay: -0.32s;
  animation-delay: -0.32s;
}
.loader:after {
  left: 1.5em;
}
@-webkit-keyframes load1 {
  0%,
  80%,
  100% {
    box-shadow: 0 0;
    height: 4em;
  }
  40% {
    box-shadow: 0 -2em;
    height: 5em;
  }
}
@keyframes load1 {
  0%,
  80%,
  100% {
    box-shadow: 0 0;
    height: 4em;
  }
  40% {
    box-shadow: 0 -2em;
    height: 5em;
  }
}

@media screen and (min-width: 768px) {
  .catch:before,
  .catch:after {
    display: none;
  }
}
</style>

<style>
.fadeUp {
  animation-name: fadeUpAnime;
  animation-duration: 1s;
  animation-fill-mode: forwards;
  opacity: 0;
}
@keyframes fadeUpAnime {
  from {
    opacity: 0;
    transform: translateY(100px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
