<template>
  <HeaderItem />
  <main class="pl-20 md:pr-0 pr-2">
    <div class="md:px-28 px-0 md:pb-36">
      <h1
        class="md:text-4xl text-2xl text-center md:pt-64 pt-32 md:pb-44 pb-10"
      >
        PROFILE
      </h1>
      <h2 class="text-4xl text-center font-bold pb-24 md:block hidden">
        感動を、もっと近くに。
      </h2>
      <div class="md:flex content-start">
        <div class="md:w-2/4  md:pr-2">
          <img :src="profileImg" alt="profile" />
        </div>
        <div class="md:w-1/2 md:pl-2 md:block hidden">
          <p class="lg:text-lg md:text-sm">
            私はさまざまな種類の動画を創ることで、視聴者のみなさまに感動をお届けすることを理念に活動しています。<br /><br />
            私自身もYouTubeが大好きで、動画制作を始める前は、YouTubeクリエイターのファンのうちの1人でした。たくさんのYouTuberさんの動画を見ることで元気をもらったり、感動したりといった経験を何度もしました。<br /><br />
            そんな私が制作した動画を見ていただくことで「感動した」「楽しい」「おもしろい」「役に立つ」など、たくさんの視聴者のみなさまに想いを届けられる動画を制作することを目標にしています。<br /><br />
            みなさまの日常に彩りを加える動画を数多く制作できるよう、努力していきます。
          </p>
        </div>
      </div>
    </div>
    <div class="md:block hidden">
      <img class="mx-auto w-24" src="../assets/img/200-200.png" alt="logo" />
    </div>
    <div class="md:hidden block">
      <div class="text-3xl md:pt-0 pt-2">Tomoaki Sato</div>
      <div class="text-right">video creator</div>
    </div>
    <div class="md:px-28 px-0 py-10">
      <h3 class="text-2xl pb-5 md:block hidden">CAREER</h3>
      <dl
        v-for="item in careerItems"
        :key="item.year"
        class="flex md:text-base text-sm pb-2"
      >
        <dt class="md:text-red sm:text-xl text-xs lg:w-1/6 w-1/4">
          {{ item.year }}
        </dt>
        <dd class="sm:text-xl text-xs w-3/5">{{ item.contents }}</dd>
      </dl>
    </div>
    <div class="md:px-28 px-0 md:py-10">
      <h3 class="text-2xl pb-5 md:block hidden">SKILLS</h3>
      <p class="md:text-xl text-sm">
        Adobe Premiere Pro / Adobe Photoshop / Wondershare Filmora 9
      </p>
    </div>
    <div class="md:pl-28 pl-0 py-10">
      <h3 class="catch md:text-2xl text-xl md:pb-5 pb-2">RECOMMENDATIONS</h3>
      <div class="md:flex md:flex-wrap">
        <a
          class="md:w-5/12 flex items-center bg-bgGray relative p-2 m-2 md:mx-2 mx-0 shadow-lg"
          :class="item.class"
          :href="item.href"
          target="_blank"
          rel="norefferrer noopener"
          v-for="item in recoItems"
          :key="item.name"
        >
          <div class="w-1/6">
            <img :class="item.imgclass" :src="item.img" alt="icon" />
          </div>
          <div class="w-9/12">
            <p class="p-2 md:text-base text-xs">{{ item.name }}</p>
          </div>
          <div class="sm:w-7 w-6 absolute right-3 sm:bottom-3 bottom-2">
            <img src="../assets/img/youtube-logo.png" alt="" />
          </div>
        </a>
      </div>
    </div>
    <div class="md:hidden block pb-6">
      <h3 class="catch md:text-3xl text-xl pb-5">GREETING</h3>
      <p class="text-xs bg-bgGray p-1">
        感動を、もっと近くに。<br /><br />
        私はさまざまな種類の動画を創ることで、視聴者のみなさまに感動をお届けすることを理念に活動しています。<br /><br />
        私自身もYouTubeが大好きで、動画制作を始める前は、YouTubeクリエイターのファンのうちの1人でした。たくさんのYouTuberさんの動画を見ることで元気をもらったり、感動したりといった経験を何度もしました。<br /><br />
        そんな私が制作した動画を見ていただくことで「感動した」「楽しい」「おもしろい」「役に立つ」など、たくさんの視聴者のみなさまに想いを届けられる動画を制作することを目標にしています。<br /><br />
        みなさまの日常に彩りを加える動画を数多く制作できるよう、努力していきます。
      </p>
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
      profileImg: require("../assets/img/tomoaki-plofile.jpg"),
      careerItems: [
        { year: "2018年4月", contents: "千葉大学入学" },
        { year: "2020年2月", contents: "動画編集を始める" },
        {
          year: "2020年9月",
          contents: "（株）桃太郎不動産にて空室紹介動画の制作を始める",
        },
        {
          year: "2020年11月",
          contents:
            "とおるすアカペラチャンネルスタッフになる サブチャンネルの編集を担当",
        },
        {
          year: "2021年1月",
          contents: " メインチャンネルの編集を担当し始める",
        },
      ],
      recoItems: [
        {
          img: require("../assets/img/torusu-icon.png"),
          name: "とおるすアカペラ / TORUS ACAPELLA",
          href: "https://www.youtube.com/user/subetani",
          class: "ml-0",
        },
        {
          img: require("../assets/img/torusu-sub-icon.png"),
          name: "とおるすアカペラ制作中",
          href: "https://www.youtube.com/channel/UCmcjgVVMtUczKv0VQVlQG5w",
          imgclass: "w-11/12",
          class: "md:ml-2 ml-0",
        },
        {
          img: require("../assets/img/momotaro-icon.png"),
          name: "桃太郎不動産チャンネル",
          href: "https://www.youtube.com/channel/UCB9qvO2yaD1sVCpiFMQLsEg",
          class: "ml-0",
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
.pt-full {
  padding-top: 100%;
}

.catch {
  display: flex;
  align-items: center;
}
.catch:before {
  border-bottom: 3px solid #c40f14;
  content: "";
  width: 1em;
}
.catch:before {
  margin-right: 0.2em;
}

@media screen and (min-width: 768px) {
  .catch:before {
    display: none;
  }
}
</style>
