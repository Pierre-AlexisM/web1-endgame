<template>
  <div class="main">
    <Header />
    <ProgressBar value="5" />
    <NextChapterButton @click.native="$router.push({ path : 'chapitre/0' })" msg="PASSER L'INTRODUCTION"  />
    <!-- Pour tester il faut mettre un fichier "video.mp4" dans le dossier public -->
    <video :src="video" autoplay loop>
      Votre navigateur ne supporte pas la vidéo.
    </video>
  </div>
</template>

<script>
import Header from "@/components/partials/Header.vue";
import ProgressBar from "@/components/ProgressBar.vue";
import NextChapterButton from "@/components/next-chapter_button.vue";
import axios from "axios";

export default {
  components: {
    Header,
    ProgressBar,
    NextChapterButton,
  },
  data() {
    return {
      video: null,
    };
  },
  mounted() {
    axios
      .get("https://api.savethecorals.fr/api/page/2")
      .then((response) => (this.video = response.data.data.video));
    document.querySelector('video').play();
  },
};
</script>

<style scoped lang="scss">
.main {
  max-width: 100vw;
  max-height: 100vh;
}
header {
  display: flex;
}
video {
  object-fit: cover;
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: -1;
}
</style>
