<template>
  <div>
    <HeaderItem />
    <main>
      <video class="main-video" :src="mainVideo" autoplay muted></video>
      <div class="works-wrap px-4">
        <h2 class="works-title text-4xl">WORKS</h2>
        <div class="grid grid-cols-4 grid-rows-2 gap-4">
          <div class="works-items" v-for="item in items" :key="item.id">
            <div :class="item.class">
              <div class="works-img">
                <img :src="item.img" :alt="item.id" />
              </div>
              <div class="works-explain flex">
                <p>
                  {{ item.title }}
                </p>
                <i class="fab fa-youtube color"></i>
              </div>
            </div>
          </div>
        </div>

        <div class="more-btn text-right">
          <a class="bg-black text-white p-2" href="#">more 15 movies →</a>
        </div>
      </div>
      <div class="profile-wrap px-4 pb-32">
        <h2 class="profile-title text-4xl py-5">PROFILE</h2>
        <div class="flex content-center">
          <div class="profile-img w-2/4">
            <img :src="profileImg" alt="profile" />
          </div>
          <div class="w-2/4 text-4xl text-center content-center">
            <p class="mt-48 mb-40">Tomoaki Sato</p>
            <div class="more-btn">
              <a class="bg-black text-white p-2" href="#">video creator →</a>
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
      mainVideo: "LogoMovieWideScreen01.mp4",
      profileImg: "tomoaki-plofile.jpg",
      items: [
        {
          id: 1,
          img: "MakeYouHappy-Kevin.png",
          title:
            "【アメリカ人が歌う】Make you happy / NiziU‐Feat.ケビン【アカペラ】",
          class: "col-start-1 col-end-3",
        },
        {
          id: 2,
          img: "citrus-daice.png",
          title:
            "【コラボ】CITRUS / Da-iCE【ハイスクール・バンバンの女性陣とアカペラ】",
          class: "col-start-3 col-end-5",
        },
        {
          id: 3,
          img: "PaleBlue-yonezu.png",
          title: "【女性が歌う】Pale Blue / 米津玄師【アカペラ】",
          class: "",
        },
        {
          id: 4,
          img: "MGA-medley.png",
          title: "【ハモネプ出場者が歌う】Mrs. GREEN APPLE ベス…",
          class: "",
        },
        {
          id: 5,
          img: "Kevin-taik1.jpg",
          title:
            "【10分で上手くなる！】ネイティブに英語の発音レッスンお願いしてみた…",
          class: "",
        },
        {
          id: 6,
          img: "cleaning.jpg",
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
