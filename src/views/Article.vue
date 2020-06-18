<template>
  <div class="background">
    <div class="buttons">
      <router-link :to="{ name: 'chapitre', params: { number: currentChapitre }}">
        <CrossButtonSvg />
      </router-link>
      <infoSvg />
    </div>
    <div class="content">
      <div class="textContent">
        <ArticleText :title="data.article1.title" :text="data.article1.text" />
        <router-link :to="{ name: 'quizz', params: { number: currentChapitre }}">
          <StartButton class="quizzButton" msg="répondre au quizz" v-if="isClose" />
        </router-link>
      </div>
      <div class="mediaContent">
        <img v-if="!!data.article1.picture1" :src="data.article1.picture1" />
        <img v-if="!!data.article1.picture2" :src="data.article1.picture2" />
        <video
          v-if="!!data.article1.video"
          :src="data.article1.video"
          autoplay
          loop
        >Votre navigateur ne supporte pas la vidéo.</video>
      </div>
    </div>
  </div>
</template>

<script>
import StartButton from "@/components/start_button.vue";
import CrossButtonSvg from "@/components/CrossButtonSvg.vue";
import InfoSvg from "@/components/InfoSvg.vue";
import ArticleText from "@/components/partials/ArticleText.vue";
import axios from "axios";

export default {
  name: "article",
  components: {
    StartButton,
    CrossButtonSvg,
    InfoSvg,
    ArticleText
  },
  data() {
    return {
      linkVideo: null,
      currentChapitre: this.$route.params.number,
      isClose: true,
      data: null,
      article: {}
    };
  },
  mounted() {
    axios
      .get(
        "https://api.savethecorals.fr/api/page/" + (this.currentChapitre + 3)
      )
      .then(response => {
        this.data = response.data.data;
      });
  }
};
</script>

<style scoped lang="scss">
.quizzButton {
  text-transform: uppercase;
  margin-bottom: 24px;
}

.buttons {
  display: flex;
  justify-content: space-between;
  padding: 16px 16px 0px 16px;
}

.background {
  min-height: 92.3%;
  width: 100vw;
  backdrop-filter: blur(8px);
  background: $backgroundBoxes;
  position: fixed;
  top: 0;
  bottom: 0;
  z-index: 2;
  overflow: scroll;

  @include tablet-up {
    min-height: 94.3%;
  }
}
.content {
  padding: 32px;

  .textContent {
    margin: 0 0 32px 0;
    @include flexbox(column, center, center);

    .articleText {
      text-align: left;
    }
  }

  video {
    width: 100%;
  }
}
@include tablet-up {
  .content {
    padding: 48px 10vw 48px 10vw;
  }

  .quizzButton {
    margin-bottom: 48px;
  }
}
@include desktop-large {
  .quizzButton {
    margin: 48px 0;
  }
  .content {
    padding: 24px 5vw;
    height: 90%;
    @include flexbox(row, space-between, center);

    .textContent {
      margin: 0 32px 0 0;
      max-width: 40vw;
      @include flexbox(column, center, center);

      .articleText {
        text-align: left;
      }
    }
    .mediaContent {
      margin: 0 0 0 32px;

      video {
        height: 90%;
        max-width: 45vw;
      }

      img {
        margin: 0 40px 32px;
        height: 350px;
        width: 35vw;
      }
    }
  }
}
@include desktop-Xlarge {
  .buttons {
    padding: 24px 32px 0px 24px;
  }
}
</style>
