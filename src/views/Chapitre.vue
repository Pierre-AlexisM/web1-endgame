<template>
  <div class="chapitre">
    <div class="audio">
      <iframe :src="music" allow="autoplay" id="audio" style="display: none"></iframe>
      <audio id="player" autoplay loop>
        <source :src="music" type="audio/mp3" />
      </audio>
    </div>
    <section class="container__top">
      <Header />
      <ProgressBar :value="chapitres[currentChapitre].value" />
      <div><Caroussel /></div>
      <router-link :to="{ name: 'article', params: { number: currentChapitre }}">
        <ButtonSvg class="coralButton" />
      </router-link>
      <router-link
        class="previousChapter"
        :to="{ name: 'chapitre', params: { number: currentChapitre - 1 }}"
      >
        <ChapterTitleAndReturn
          :currentChapter="chapitres[currentChapitre].currentChapter"
          :chapter="chapitres[currentChapitre].chapter"
          :title="chapitres[currentChapitre].title"
          reviewChapter="revoir le chapitre précédent"
        />
      </router-link>
    </section>
    <section class="container__bottom">
      <router-link :to="{ name: 'chapitre', params: { number: currentChapitre + 1 }}">
        <NextChapterButton msg="PASSER AU CHAPITRE SUIVANT" />
      </router-link>
    </section>

    <div class="container__map-video">
      <iframe
        class="iframe-map"
        v-if="chapitres[currentChapitre].iframe"
        :src="chapitres[currentChapitre].iframe"
        width="600"
        height="450"
        frameborder="0"
        style="border:0;"
        allowfullscreen
        aria-hidden="false"
        tabindex="0"
      ></iframe>

      <video v-else :src="linkVideo" autoplay loop>Votre navigateur ne supporte pas la vidéo.</video>
    </div>
    <div id="app">
      <transition name="transition" mode="out-in">
        <router-view></router-view>
      </transition>
    </div>
  </div>
</template>

<script>
import Header from "@/components/partials/Header.vue";
import ProgressBar from "@/components/ProgressBar.vue";
import ChapterTitleAndReturn from "@/components/ChapterTitleAndReturn.vue";
import NextChapterButton from "@/components/next-chapter_button.vue";
import ButtonSvg from "@/components/ButtonSvg";
import axios from "axios";
// import Carousel from "@/components/Carousel.vue";
export default {
  name: "Chapitre",
  components: {
    Header,
    ProgressBar,
    ChapterTitleAndReturn,
    NextChapterButton,
    ButtonSvg,
    // Carousel,
  },
  data() {
    return {
      linkVideo: null,
      music: null,
      currentChapitre: 0,
      chapitres: {
        "0": {
          currentChapter: "00",
          chapter: "07",
          value: 10,
          title: "Bienvenue dans la mer de Corail",
          reviewChapter: "Revoir l'introduction",
          redirectionPageTo: "/intro",
          nextChapter: "Passer au chapitre suivant",
          iframe:
            "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d156449.32414891524!2d152.61685865575492!3d-22.309161340170448!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6be685c1eee86d69%3A0x6ceefcee6bc6dead!2sDicks%20Reef!5e1!3m2!1sfr!2sfr!4v1591974235777!5m2!1sfr!2sfr"
        },
        "1": {
          currentChapter: "01",
          chapter: "07",
          value: 25,
          title: null,
          reviewChapter: "Revoir le chapitre précédent",
          redirectionPageTo: "/chap0",
          nextChapter: "Passer au chapitre suivant",
          pathNextChapter: "/chap2"
        },
        "2": {
          currentChapter: "02",
          chapter: "07",
          value: 35,
          title: null,
          reviewChapter: "Revoir le chapitre précédent",
          redirectionPageTo: "/chap1",
          nextChapter: "Passer au chapitre suivant",
          pathNextChapter: "/chap3"
        },
        "3": {
          currentChapter: "03",
          chapter: "07",
          value: 50,
          title: null,
          reviewChapter: "Revoir le chapitre précédent",
          redirectionPageTo: "/chap2",
          nextChapter: "Passer au chapitre suivant",
          pathNextChapter: "/chap4"
        },
        "4": {
          currentChapter: "04",
          chapter: "07",
          value: 60,
          title: null,
          reviewChapter: "Revoir le chapitre précédent",
          redirectionPageTo: "/chap3",
          nextChapter: "Passer au chapitre suivant",
          pathNextChapter: "/chap5"
        },
        "5": {
          currentChapter: "05",
          chapter: "07",
          value: 75,
          title: null,
          reviewChapter: "Revoir le chapitre précédent",
          redirectionPageTo: "/chap4",
          nextChapter: "Passer au chapitre suivant",
          pathNextChapter: "/chap6"
        },
        "6": {
          currentChapter: "06",
          chapter: "07",
          value: 90,
          title: null,
          reviewChapter: "Revoir le chapitre précédent",
          redirectionPageTo: "/chap5",
          nextChapter: "Passer au chapitre suivant",
          pathNextChapter: "/assos"
        },
        "7": {
          currentChapitre:"07",
          chapter:"07",
          value: 100,
          title: null,
          reviewChapter: "Revoie le chapitre précédent",
          redirectionPageTo:"/chap6",
          nextChapter:"Passer au chapitre suivant",
          pathNextChapter:"/intro",
          // carousel:true,
        }
      }
    };
  },
  watch: {
    $route() {
      this.currentChapitre = Number(this.$router.currentRoute.params.number);
    },
    currentChapitre: function() {
      if (this.currentChapitre >= 0) {
        axios
          .get("https://api.savethecorals.fr/api/page/" + (this.currentChapitre + 3))
          .then(response => {
            this.linkVideo = response.data.data.video;
            this.music = response.data.data.music;
            this.chapitres[0].title = response.data.data.title;
            this.chapitres[1].title = response.data.data.title;
            this.chapitres[2].title = response.data.data.title;
            this.chapitres[3].title = response.data.data.title;
            this.chapitres[4].title = response.data.data.title;
            this.chapitres[5].title = response.data.data.title;
            this.chapitres[6].title = response.data.data.title;
            this.chapitres[7].title = response.data.data.title;
          });
        //  console.log(this.$el.querySelector("video"))
        //  .play();
      }
    }
  },
  mounted() {
    this.currentChapitre = Number(this.$router.currentRoute.params.number);
  }
};
</script>
<style scoped lang="scss">
header {
  display: flex;
}
.iframe-map {
  width: 100vw;
  height: 140vh;
  transform: translateY(-115px);
}
video {
  object-fit: cover;
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 0;
}
.chapitre {
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

.container_currentChapter {
  position: fixed;
  z-index: 1;
}
progress[value][data-v-c55e1cb4] {
  z-index: 1;
}

.coralButton {
  position: fixed;
  right: 5vw;
  top: 10vh;
  z-index: 1;
}

.container__top {
  position: absolute;
  z-index: 999;
}
</style>