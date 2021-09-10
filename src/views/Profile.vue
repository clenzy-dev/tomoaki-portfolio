<template>
  <HeaderItem />
  <main class="md:px-28 px-0 pl-20 md;pr-0 pr-2">
    <div class="md:pb-20">
      <h1 class="text-4xl text-center py-40">PROFILE</h1>
      <h2 class="text-4xl text-center font-bold pb-36 md:block hidden">
        感動を、もっと近くに。
      </h2>
      <div class="md:flex content-center items-center">
        <div class="md:w-2/4  md:p-4">
          <img :src="profileImg" alt="profile" />
        </div>
        <div class="md:w-1/2 p-4 md:h-1/2 md:block hidden">
          <p class="w-full">
            私はさまざまな種類の動画を創ることで、視聴者のみなさまに感動をお届けすることを理念に活動しています。<br /><br />
            私自身もYouTubeが大好きで、動画制作を始める前は、YouTubeクリエイターのファンのうちの1人でした。たくさんのYouTuberさんの動画を見ることで元気をもらったり、感動したりといった経験を何度もしました。<br /><br />
            そんな私が制作した動画を見ていただくことで「感動した」「楽しい」「おもしろい」「役に立つ」など、たくさんの視聴者のみなさまに想いを届けられる動画を制作することを目標にしています。<br /><br />
            みなさまの日常に彩りを加える動画を数多く制作できるよう、努力していきます。
          </p>
        </div>
      </div>
    </div>
    <div class="md:block hidden">
      <img class="mx-auto w-1/12" src="../assets/img/200-200.png" alt="logo" />
    </div>
    <div class="md:hidden block">
      <div class="text-3xl">Tomoaki Sato</div>
      <div class="text-right">video creator</div>
    </div>
    <div class="py-10">
      <h3 class="text-3xl pb-5 md:block hidden">CAREER</h3>
      <dl v-for="item in careerItems" :key="item.year" class="flex md:text-base text-sm">
        <dt class="pr-10 md:text-red">{{ item.year }}</dt>
        <dd>{{ item.contents }}</dd>
      </dl>
    </div>
    <div class="py-10">
      <h3 class="text-3xl pb-5 md:block hidden">SKILLS</h3>
      <p>Adobe Premiere Pro / Adobe Phodoshop / Wondershare Filmora 9</p>
    </div>
    <div class="py-10">
      <h3 class="text-3xl pb-5">RECOMMENDATIONS</h3>
      <div class="md:flex flex-wrap">
        <div
          class="flex md:w-5/12 p-5 m-2 bg-bgGray"
          v-for="item in recoItems"
          :key="item.name"
        >
          <div class="w-1/6">
            <img class="rounded-full" :src="item.img" alt="icon" />
          </div>
          <div>
            <p class="p-2">{{ item.name }}</p>
            <div><img src="" alt="" /></div>
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
          name: "桃太郎不動産チャンネル",
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
