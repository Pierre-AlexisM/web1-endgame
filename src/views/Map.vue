<template>
  <body>
    <section class="container__top">
      <Header />
      <ProgressBar value="5" />
      <router-link class="previousChapter" to="/intro">
        <ChapterTitleAndReturn
          currentChapter="00"
          chapter="07"
          title="Visitez les récifs"
          reviewChapter="revoir l'introduction"
        />
      </router-link>
    </section>
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d156449.32414891524!2d152.61685865575492!3d-22.309161340170448!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6be685c1eee86d69%3A0x6ceefcee6bc6dead!2sDicks%20Reef!5e1!3m2!1sfr!2sfr!4v1591974235777!5m2!1sfr!2sfr"
      width="600"
      height="450"
      frameborder="0"
      style="border:0;"
      allowfullscreen=""
      aria-hidden="false"
      tabindex="0"
    ></iframe>
    <section class="container__bottom">
      <router-link class="nextChapter" to="/chap/1">
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
  name: "Chapitre0",
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
  background-image: url(../assets/img/chapter0.png);
  overflow: hidden;
}

header {
  display: flex;
  position: relative;
  z-index: 1;
}

iframe {
  width: 100vw;
  height: 140vh;
  transform: translateY(-150px);
}

.container_currentChapter {
  position: fixed;
  z-index: 1;
}

progress[value][data-v-c55e1cb4] {
  z-index: 1;
}

.place-card,
.place-card-large {
  display: none;
}

.gm-style,
.place-card-large {
  padding: 9px 4px 9px 11px;
  display: none;
}
</style>
