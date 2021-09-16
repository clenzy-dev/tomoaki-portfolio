<template>
  <HeaderItem />
  <main>
    <div class="md:px-32 md:pb-56 pl-20">
      <h2 class="catch text-4xl text-center pt-40 pb-20">WORKS</h2>
      <div>
        <div class="md:grid md:grid-cols-4 md:grid-lows-2 gap-2 md:pr-0 pr-2">
          <a
            :class="item.class"
            class="bg-bgGray transition duration-250 ease-in-out hover:opacity-40"
            :href="item.href"
            v-for="item in items"
            :key="item.id"
          >
            <div class="">
              <img class="" :src="item.img" :alt="item.id" />
            </div>
            <div class="md:p-2 p-4">
              <div class="flex md:block lg:flex items-center justify-between">
                <p
                  class="md:w-full lg:w-3/4 md:float-none float-left md:text-xs sm:text-xl"
                >
                  {{ item.title }}
                </p>
                <div class="w-1/12">
                  <img
                    :class="item.imgclass"
                    class="md:hidden lg:block md:ml-0 ml-2"
                    src="../assets/img/youtube-logo.png"
                    alt="youtube-logo"
                  />
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  </main>
  <FooterItem />
</template>

<script>
import HeaderItem from "@/components/HeaderItem.vue";
import FooterItem from "@/components/FooterItem.vue";
export default {
  data() {
    return {
      items: [
        {
          id: 1,
          img: require("../assets/img/MakeYouHappy-Kevin.png"),
          href: "https://www.youtube.com/watch?v=siFt7m8S8OY",
          title:
            "【アメリカ人が歌う】Make you happy / NiziU ‐ Feat.ケビン【アカペラ】",
          class: "sm:col-span-2 sm:text-base",
          imgclass: "md:w-12 w-10",
        },
        {
          id: 2,
          img: require("../assets/img/MakeYouHappy-Kevin.png"),
          href: "",
          title: "【男性が歌う】 天体観測／BUMP OF CHICKEN【アカペラ】",
          class: "sm:col-span-2 sm:text-base",
          imgclass: "md:w-12 w-10",
        },
        {
          id: 3,
          img: require("../assets/img/citrus-daice.png"),
          href: "https://www.youtube.com/watch?v=ojLVyEszPpM",
          title:
            "【コラボ】CITRUS / Da-iCE【ハイスクール・バンバンの女性陣とアカペラ】",
          class: "",
          imgclass: "md:w-12 w-10",
        },
        {
          id: 4,
          img: require("../assets/img/PaleBlue-yonezu.png"),
          href: "https://www.youtube.com/watch?v=rCrlCyQizEM",
          title: "【女性が歌う】Pale Blue / 米津玄師【アカペラ】",
          class: "",
          imgclass: "w-60px",
        },
        {
          id: 5,
          img: require("../assets/img/MGA-medley.png"),
          href: "https://www.youtube.com/watch?v=jgDJv06fgnU",
          title:
            "【ハモネプ出場者が歌う】インフェルノから始まるMrs. GREEN APPLE…",
          class: "",
          imgclass: "w-60px",
        },
        {
          id: 6,
          img: require("../assets/img/Kevin-english-16-9.png"),
          href: "https://www.youtube.com/watch?v=yvFQfudHAdU",
          title:
            "【英語歌ったら即終了】Make you happy - NiziU【アカペラ】feat. ケビン",
          class: "",
          imgclass: "w-60px",
        },
        {
          id: 7,
          img: require("../assets/img/Kevin-taik1.jpg"),
          href: "https://www.youtube.com/watch?v=bhGjP32JyL8",
          title:
            "【10分で上手くなる！】ネイティブに英語の発音レッスンをお願い…",
          class: "",
          imgclass: "w-60px",
        },
        {
          id: 8,
          img: require("../assets/img/10years-torus.jpg"),
          href: "https://www.youtube.com/watch?v=LZS8X0bvIqE",
          title: "【10周年】とおるすアカペラチャンネル 10年間の軌跡",
          class: "",
          imgclass: "w-60px",
        },
        {
          id: 9,
          img: require("../assets/img/cleaning.jpg"),
          href: "https://www.youtube.com/watch?v=KhudW2ePa10",
          title:
            "【エアコン】誰でもできる！掃除のプロが教えるエアコンクリーニング",
          class: "",
          imgclass: "w-60px",
        },
        {
          id: 10,
          img: require("../assets/img/Gas-IH-03.jpg"),
          href: "https://www.youtube.com/watch?v=VpvaZMpILtI",
          title: "【コンロ比較】ガスコンロとIHコンロ、火力が強いのはどっち？",
          class: "",
          imgclass: "w-60px",
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

<style></style>
