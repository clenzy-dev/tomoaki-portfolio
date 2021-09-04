<template>
  <HeaderItem />
  <main>
    <div class="md:px-32 md:pb-56 pl-20">
      <h2 class="catch text-4xl text-center pt-80 pb-40">WORKS</h2>
      <div>
        <div class="md:grid md:grid-cols-4 md:grid-lows-2 gap-4 md:pr-0 pr-4">
          <a
            :class="item.class"
            class=" transition duration-250 ease-in-out bg-bgGray transform hover:opacity-40"
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

<style></style>
