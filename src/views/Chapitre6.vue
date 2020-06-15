<template>
  <body>
    <section class="container__top">
      <Header />
      <ProgressBar value="85" />
      <router-link class="previousChapter" to="/chap/5">
        <ChapterTitleAndReturn
          currentChapter="06"
          chapter="07"
          title="Aujourd’hui, 50% sont déjà morts"
          reviewChapter="revoir le chapitre précédent"
        />
      </router-link>
    </section>
    <section class="container__bottom">
      <router-link class="nextChapter" to="/assos/0">
        <NextChapterButton msg="PASSER AU CHAPITRE SUIVANT" />
      </router-link>
    </section>
  </body>
</template>

<script>
import Header from "@/components/partials/Header.vue";
import ProgressBar from "@/components/ProgressBar.vue";
import ChapterTitleAndReturn from "@/components/ChapterTitleAndReturn.vue";
import NextChapterButton from "@/components/next-chapter_button.vue";

export default {
  name: "Chapitre6",
  components: {
    Header,
    ProgressBar,
    ChapterTitleAndReturn,
    NextChapterButton,
  },
};
</script>
<style scoped lang="scss">
body {
  position: relative;
  @include format_vw-vh;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  object-fit: cover;
  background-image: url(../assets/img/chapter6.png);
}

header {
  display: flex;
}
</style>
