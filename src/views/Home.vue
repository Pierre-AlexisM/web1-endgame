<template>
  <div class="outer-wrapper">
    <div class="audio">
      <iframe v-if="data" :src="data.music" allow="autoplay" id="audio" style="display: none"></iframe>
      <audio id="player" autoplay loop>
        <source v-if="data" :src="data.music" type="audio/mp3" />
      </audio>
    </div>
    <div class="wrapper">
      <IntroductionTitle />
      <Disclaimer />
      <StartArticle use="Utilisez simplement votre doigt pour naviguer." />
    </div>
  </div>
</template>

<script>
import Disclaimer from "@/components/Disclaimer.vue";
import IntroductionTitle from "@/components/IntroductionTitle.vue";
import StartArticle from "@/components/StartArticle.vue";
import axios from "axios";

export default {
  name: "Home",
  components: {
    Disclaimer,
    IntroductionTitle,
    StartArticle
  },
  data() {
    return {
      data: null,
      music: null
    };
  },
  mounted() {
    axios
      .get("https://api.savethecorals.fr/api/page/03")
      .then(response => (this.data = response.data.data));
  }
};
</script>

<style scoped lang="scss">
.wrapper {
  display: flex;
  flex-direction: row;
  width: 300vw;
  transform: rotate(90deg) translateY(-100vh);
  transform-origin: top left;
  background-image: url("tmp-background.jpg");
  background-size: cover;
  background-position: center;
}
.outer-wrapper {
  width: 100vh;
  height: 100vw;
  transform: rotate(-90deg) translateX(-100vh);
  transform-origin: top left;
  overflow-y: scroll;
  overflow-x: hidden;
  position: absolute;
  scrollbar-width: none;
  -ms-overflow-style: none;
}
*::-webkit-scrollbar {
  display: none;
  -webkit-appearance: none;
  width: 0;
  height: 0;
}
</style>