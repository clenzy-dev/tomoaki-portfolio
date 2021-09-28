<template>
  <HeaderItem />
  <main>
    <div class="md:px-32 md:pb-56 pl-20">
      <h2
        class="catch md:text-4xl text-2xl text-center md:pt-40 pt-28 md:pb-20 pb-14 fade opacity-0"
      >
        WORKS
      </h2>
      <div class="fade opacity-0">
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
              <div class="p-1 m-1 relative">
                <div class="md:w-9/12 w-10/12">
                  <p class="lg:text-xl sm:text-base text-xs">
                    {{ item.title }}
                  </p>
                </div>
                <div>
                  <img
                    class="absolute right-2 md:top-3 top-1 md:w-9 sm:w-6 w-5"
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
    </div>
  </main>
  <FooterItem />
</template>

<script>
import HeaderItem from "@/components/HeaderItem.vue";
import FooterItem from "@/components/FooterItem.vue";
import $ from "jquery";
export default {
  data() {
    return {
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
          href: "",
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
          title: "#Shorts【英語歌ったら即終了】Make you happy - NiziU【アカペラ】...",
          class: "lg:col-span-1 sm:text-base",
          logoclass: "",
        },
        {
          id: 7,
          img: require("../assets/img/10years-torus.jpg"),
          href: "https://www.youtube.com/watch?v=LZS8X0bvIqE",
          title: "【10周年】とおるすアカペラチャンネル 10年間の軌跡",
          class: "lg:col-span-1",
          logoclass: "",
        },
        {
          id: 8,
          img: require("../assets/img/Kevin-taik1.jpg"),
          href: "https://www.youtube.com/watch?v=bhGjP32JyL8",
          title:
            "【10分で上手くなる！】ネイティブに英語の発音レッスンをお願い…",
          class: "lg:col-span-1",
          logoclass: "",
        },
        {
          id: 9,
          img: require("../assets/img/cleaning.jpg"),
          href: "https://www.youtube.com/watch?v=KhudW2ePa10",
          title: "【エアコン】誰でもできる！掃除のプロが教えるエアコン...",
          class: "lg:col-span-1",
          logoclass: "",
        },
        {
          id: 10,
          img: require("../assets/img/Gas-IH-03.jpg"),
          href: "https://www.youtube.com/watch?v=VpvaZMpILtI",
          title: "【コンロ比較】ガスコンロとIHコンロ、火力が強いのは...",
          class: "lg:col-span-1",
          logoclass: "",
        },
      ],
    };
  },
  mounted: function() {
    $(function() {
      const wHeight = $(window).height();
      const scrollAmount = $(window).scrollTop();
      $(".fade").each(function() {
        const targetPosition = $(this).offset().top;
        if (scrollAmount > targetPosition - wHeight) {
          $(this).addClass("fadeUp");
        }
      });
    });
  },
  components: {
    HeaderItem,
    FooterItem,
  },
};
</script>
