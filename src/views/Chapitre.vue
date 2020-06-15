<template>
<div class="chapitre">
  <section class="container__top">
    <Header />
    <ProgressBar value="15" />
    <router-link class="previousChapter" to="/chap0">
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

  <ButtonSvg />

  <div>
 <iframe
      v-if="chapitres[currentChapitre].iframe"
      :src="chapitres[currentChapitre].iframe"
      width="600"
      height="450"
      frameborder="0"
      style="border:0;"
      allowfullscreen=""
      aria-hidden="false"
      tabindex="0"
     >
 </iframe>

  <video v-else :src="linkVideo" autoplay loop>
      Votre navigateur ne supporte pas la vidéo.
  </video>
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

export default {
  name: "Chapitre",
  components: {
    Header,
    ProgressBar,
    ChapterTitleAndReturn,
    NextChapterButton,
    ButtonSvg
  },
  data() {
    return {
      linkVideo : null,
      currentChapitre : 0,
      chapitres : {
      "0": {
        currentChapter: "00",
        chapter: "07",
        value: 10,
        title: "Bienvenue dans la mer de Corail",
        reviewChapter: "Revoir l'introduction",
        redirectionPageTo: "/intro",
        nextChapter: "Passer au chapitre suivant",
        iframe : "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d156449.32414891524!2d152.61685865575492!3d-22.309161340170448!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6be685c1eee86d69%3A0x6ceefcee6bc6dead!2sDicks%20Reef!5e1!3m2!1sfr!2sfr!4v1591974235777!5m2!1sfr!2sfr"
      },
      "1": {
        currentChapter: "01",
        chapter: "07",
        value: 25,
        title: "Qu'est-ce qu'un corail?",
        reviewChapter: "Revoir le chapitre précédent",
        redirectionPageTo: "/chap0",
        nextChapter: "Passer au chapitre suivant",
        pathNextChapter: "/chap2"
      },
      "2": {
        currentChapter: "02",
        chapter: "07",
        value: 35,
        title: "Quel est leur rôle?",
        reviewChapter: "Revoir le chapitre précédent",
        redirectionPageTo: "/chap1",
        nextChapter: "Passer au chapitre suivant",
        pathNextChapter: "/chap3"
      },
      "3": {
        currentChapter: "03",
        chapter: "07",
        value: 50,
        title: "Mais que se passe t-il ?",
        reviewChapter: "Revoir le chapitre précédent",
        redirectionPageTo: "/chap2",
        nextChapter: "Passer au chapitre suivant",
        pathNextChapter: "/chap4"
      },
      "4": {
        currentChapter: "04",
        chapter: "07",
        value: 60,
        title: "Le blanchissement devient régulier",
        reviewChapter: "Revoir le chapitre précédent",
        redirectionPageTo: "/chap3",
        nextChapter: "Passer au chapitre suivant",
        pathNextChapter: "/chap5"
      },
      "5": {
        currentChapter: "05",
        chapter: "07",
        value: 75,
        title: "Aujourd’hui, 50% sont déjà morts",
        reviewChapter: "Revoir le chapitre précédent",
        redirectionPageTo: "/chap4",
        nextChapter: "Passer au chapitre suivant",
        pathNextChapter: "/chap6"
      },
      "6": {
        currentChapter: "06",
        chapter: "07",
        value: 90,
        title: "Il est encore temps d'agir",
        reviewChapter: "Revoir le chapitre précédent",
        redirectionPageTo: "/chap5",
        nextChapter: "Passer au chapitre suivant",
        pathNextChapter: "/assos"
      } 
      }
    };
  },
  watch: {
    $route () {
      this.currentChapitre = Number(this.$router.currentRoute.params.number)
    },
    currentChapitre : function () {
      if (this.currentChapitre  >= 1 ) {
        axios
         .get("http://167.71.55.113/api/page/" + (  this.currentChapitre + 3 ))
         .then( (response) => {
           this.linkVideo = response.data.data.video
         });
        //  console.log(this.$el.querySelector("video"))
        //  .play();
       }
    }
  },
  mounted() {
    this.currentChapitre = Number(this.$router.currentRoute.params.number)
  },
};
</script>
<style scoped lang="scss">

header {
  display: flex;
}


iframe {
  width: 100vw;
  height: 140vh;
  transform: translateY(-150px);
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