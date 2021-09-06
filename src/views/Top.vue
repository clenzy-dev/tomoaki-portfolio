<template>
  <div>
    <HeaderItem />
    <main>
      <div class="relative">
        <div
          id="loaderWrap"
          class="absolute top-0 left-0 w-full h-full z-50 flex items-center content-center bg-white"
        >
          <div class="loader"></div>
        </div>
        <video class="hidden md:block" :src="mainVideo" autoplay muted></video>
        <video
          class="md:hidden pt-20 w-full"
          :src="mainVideoSp"
          autoplay
          muted
        ></video>
      </div>
      <div class="md:px-24 pl-20">
        <h2 class="catch text-4xl text-left pt-20 md:pb-10 pb-5 md:pr-0 pr-2">
          WORKS
        </h2>
        <div>
          <div class="md:grid md:grid-cols-4 md:grid-lows-2 gap-2 md:pr-0 pr-2">
            <a
              :class="item.class"
              class="bg-bgGray transition duration-250 ease-in-out hover:opacity-40"
              :href="item.href"
              v-for="item in items"
              :key="item.id"
            >
              <div class="md:p-2">
                <img class="" :src="item.img" :alt="item.id" />
              </div>
              <div class="md:p-2 p-4">
                <div class="flex items-center justify-between">
                  <p class=" w-3/4 md:float-none float-left md:text-base sm:text-xl">
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
        <div class="text-center w-32 ml-auto mt-4 md:mr-0 mr-1">
          <div class="block">
            <router-link
              id="works"
              to="/works"
              class="bg-black text-white py-2 px-2 transition duration-250 ease-in-out hover:bg-white hover:text-black"
            >
              View more
            </router-link>
          </div>
        </div>
      </div>
      <div class="md:px-24 pl-20 pb-40">
        <h2
          class="catch text-4xl text-left md:pt-32 md:pb-10 pt-20 pb-5 md:pr-0 pr-2"
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
            <p class="md:text-4xl text-2xl md:text-center text-left">
              Tomoaki Sato
            </p>
            <div class="absolute md:bottom-0.5 md:right-0 -bottom-10 right-2">
              <router-link
                id="profile"
                to="/profile"
                class="bg-black text-white px-4 py-2 transition duration-250 ease-in-out hover:bg-white hover:text-black italic border"
              >
                View more
              </router-link>
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
  methods: {
    window: (onload = function() {
      const spinner = document.getElementById("loaderWrap");
      spinner.classList.add("loaded");
    }),
  },
  components: {
    HeaderItem,
    FooterItem,
  },
};
</script>

<style scoped>
/*↓アイコンに戻さなかったら消去*/
.color {
  color: red;
}
/*↑アイコンに戻さなかったら消去*/
/*↓ロード画面制御*/
.loader {
  color: #000;
  font-size: 90px;
  text-indent: -9999em;
  overflow: hidden;
  width: 1em;
  height: 1em;
  border-radius: 50%;
  margin: 72px auto;
  position: relative;
  -webkit-transform: translateZ(0);
  -ms-transform: translateZ(0);
  transform: translateZ(0);
  -webkit-animation: load6 1.7s infinite ease, round 1.7s infinite ease;
  animation: load6 1.7s infinite ease, round 1.7s infinite ease;
}
@-webkit-keyframes load6 {
  0% {
    box-shadow: 0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em, 0 -0.83em 0 -0.44em,
      0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em;
  }
  5%,
  95% {
    box-shadow: 0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em, 0 -0.83em 0 -0.44em,
      0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em;
  }
  10%,
  59% {
    box-shadow: 0 -0.83em 0 -0.4em, -0.087em -0.825em 0 -0.42em,
      -0.173em -0.812em 0 -0.44em, -0.256em -0.789em 0 -0.46em,
      -0.297em -0.775em 0 -0.477em;
  }
  20% {
    box-shadow: 0 -0.83em 0 -0.4em, -0.338em -0.758em 0 -0.42em,
      -0.555em -0.617em 0 -0.44em, -0.671em -0.488em 0 -0.46em,
      -0.749em -0.34em 0 -0.477em;
  }
  38% {
    box-shadow: 0 -0.83em 0 -0.4em, -0.377em -0.74em 0 -0.42em,
      -0.645em -0.522em 0 -0.44em, -0.775em -0.297em 0 -0.46em,
      -0.82em -0.09em 0 -0.477em;
  }
  100% {
    box-shadow: 0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em, 0 -0.83em 0 -0.44em,
      0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em;
  }
}
@keyframes load6 {
  0% {
    box-shadow: 0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em, 0 -0.83em 0 -0.44em,
      0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em;
  }
  5%,
  95% {
    box-shadow: 0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em, 0 -0.83em 0 -0.44em,
      0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em;
  }
  10%,
  59% {
    box-shadow: 0 -0.83em 0 -0.4em, -0.087em -0.825em 0 -0.42em,
      -0.173em -0.812em 0 -0.44em, -0.256em -0.789em 0 -0.46em,
      -0.297em -0.775em 0 -0.477em;
  }
  20% {
    box-shadow: 0 -0.83em 0 -0.4em, -0.338em -0.758em 0 -0.42em,
      -0.555em -0.617em 0 -0.44em, -0.671em -0.488em 0 -0.46em,
      -0.749em -0.34em 0 -0.477em;
  }
  38% {
    box-shadow: 0 -0.83em 0 -0.4em, -0.377em -0.74em 0 -0.42em,
      -0.645em -0.522em 0 -0.44em, -0.775em -0.297em 0 -0.46em,
      -0.82em -0.09em 0 -0.477em;
  }
  100% {
    box-shadow: 0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em, 0 -0.83em 0 -0.44em,
      0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em;
  }
}
@-webkit-keyframes round {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
@keyframes round {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
.loaded {
  opacity: 0;
  visibility: hidden;
  transition: 0.3s linear;
}
/*↑ロード画面制御*/
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
  width: 0.2em;
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
@media screen and (min-width: 768px) {
  .catch:before,
  .catch:after {
    display: none;
  }
}
</style>
