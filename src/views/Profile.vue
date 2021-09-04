<template>
  <HeaderItem />
  <main>
    <div class="md:px-28 md:pb-56 pl-20">
      <h1 class="text-4xl text-center pt-80 pb-40">PROFILE</h1>
      <h2 class="text-4xl text-center font-bold pb-36">
        感動を、もっと近くに。
      </h2>
      <div class="md:flex content-center items-center">
        <div class="md:w-2/4 md:mr-0 p-4">
          <img :src="profileImg" alt="profile" />
        </div>
        <div class="md:w-1/2 p-4 md:h-1/2">
          <p>
            私はさまざまな種類の動画を創ることで、視聴者のみなさまに感動をお届けすることを理念に活動しています。<br /><br />
            私自身もYouTubeが大好きで、動画制作を始める前は、YouTubeクリエイターのファンのうちの1人でした。たくさんのYouTuberさんの動画を見ることで元気をもらったり、感動したりといった経験を何度もしました。<br /><br />
            そんな私が制作した動画を見ていただくことで「感動した」「楽しい」「おもしろい」「役に立つ」など、たくさんの視聴者のみなさまに想いを届けられる動画を制作することを目標にしています。<br /><br />
            みなさまの日常に彩りを加える動画を数多く制作できるよう、努力していきます。
          </p>
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
    };
  },
  components: {
    HeaderItem,
    FooterItem,
  },
};
</script>

<style></style>
