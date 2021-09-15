<template>
  <HeaderItem />
  <main class="md:px-28 px-0 pl-20 md;pr-0 pr-2">
    <div class="md:pb-36">
      <h1 class="md:text-4xl text-2xl text-center md:pt-64 pt-32 md:pb-44 pb-10">PROFILE</h1>
      <h2 class="text-4xl text-center font-bold pb-24 md:block hidden">
        感動を、もっと近くに。
      </h2>
      <div class="md:flex content-start">
        <div class="md:w-2/4  md:pr-2">
          <img :src="profileImg" alt="profile" />
        </div>
        <div class="md:w-1/2 md:pl-2 md:block hidden">
          <p class="text-base">
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
    <div class="py-10">
      <h3 class="text-2xl pb-5 md:block hidden">CAREER</h3>
      <dl
        v-for="item in careerItems"
        :key="item.year"
        class="flex md:text-base text-sm pb-2"
      >
        <dt class="md:text-red sm:text-xl text-xs w-1/4">
          {{ item.year }}
        </dt>
        <dd class="sm:text-xl text-xs w-3/5">{{ item.contents }}</dd>
      </dl>
    </div>
    <div class="md:py-10">
      <h3 class="text-2xl pb-5 md:block hidden">SKILLS</h3>
      <p class="md:text-xl text-sm text-skillsColor">Adobe Premiere Pro / Adobe Photoshop / Wondershare Filmora 9</p>
    </div>
    <div class="py-10">
      <h3 class="md:text-2xl text-xl md:pb-5 pb-2">RECOMMENDATIONS</h3>
      <div class="md:flex flex-wrap">
        <div
          class="flex items-center md:w-5/12 p-5 m-2 bg-bgGray relative"
          v-for="item in recoItems"
          :key="item.name"
        >
          <div class="w-1/6">
            <img class="rounded-full" :src="item.img" alt="icon" />
          </div>
          <div>
            <p class="p-2">{{ item.name }}</p>
          </div>
          <div class="w-1/12 absolute right-3 bottom-3">
            <img src="../assets/img/youtube-logo.png" alt="" />
          </div>
        </div>
      </div>
    </div>
    <div class="md:hidden block pb-6">
      <h3 class="md:text-3xl text-xl pb-5">GREETING</h3>
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
          img: require("../assets/img/MakeYouHappy-Kevin.png"),
          name: "とおるすアカペラ / TORUS ACAPELLA",
        },
        {
          img: require("../assets/img/MakeYouHappy-Kevin.png"),
          name: "とおるすアカペラ制作中",
        },
        {
          img: require("../assets/img/MakeYouHappy-Kevin.png"),
          name: "桃太郎チャンネル",
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
</style>
