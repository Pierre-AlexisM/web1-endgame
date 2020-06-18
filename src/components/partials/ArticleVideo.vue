<template>
  <section class="articleVideo articleVideo__container" v-if="isClose">
    <div class="articleVideo__buttonsTop">
    </div>
    <div class="articleVideo__content">
      <article class="articleVideo__text">
        <h3 class="title">{{ title }}</h3>
        <div class="separator"></div>
        <p class="paragraph">{{ text }}</p>
        <div class="quizz__container">
          <StartButton class="quizzButton" msg="RÉPONDRE AU QUIZZ" />
        </div>
      </article>
      <div class="articleVideo__video">
        <video :src="data.video" controls></video>
      </div>
    </div>
  </section>
</template>

<script>
import StartButton from "@/components/start_button.vue";
import axios from "axios";

export default {
  name: "ArticleVideo",
  components: {
    StartButton,
  },
  props: {
    title: String,
    text: String,
    video: null,
  },
  data() {
    return {
      data: null,
      isClose: true,
    };
  },
  mounted() {
    axios
      .get("http://167.71.55.113/api/page/4")
      .then((response) => (this.data = response.data.data));
  },
};
</script>

<style scoped lang="scss">
.articleVideo__container {
  position: relative;
  z-index: 1;
  @include background-boxes;
  border-radius: 0;
  color: $white;
  text-align: left;
  font-family: $montserrat;
  padding: 24px;
  @include flexbox(column, space-between, inherit);
  @include tablet-up {
    height: 100%;
  }
  @include desktop-up {
    height: 95vh;
  }
}
.close {
  display: none;
}
svg {
  cursor: pointer;
}
.articleVideo {
  &__buttonsTop {
    margin: 0 0 24px 0;
    @include flexbox(row, space-between, center);
  }
  &__content {
    padding: 24px 0 0 0;
    height: 100%;
    min-height: 450px;
    @include flexbox(column, space-evenly, center);
    @include tablet-up {
      margin: 0 24px;
    }
    @include desktop-up {
      height: 100vh;
      @include flexbox(row, space-between, center);
    }
    .articleVideo__text {
      height: 100%;
      min-height: 500px;
      @include flexbox(column, center, flex-start);
      @include tablet-up {
        @include flexbox(column, center, flex-start);
      }
      @include desktop-up {
        height: 70vh;
        max-width: 40vw;
      }
      .title {
        margin: 0 0 24px 0;
        font: bold 5vw $montserrat;
        color: $yellow;
        @include tablet-up {
          font-size: rem(32px);
          margin: 0 0 32px 0;
        }
      }
      .paragraph {
        margin: 0 0 24px 0;
        font: normal 3.7vw / 1.5 $montserrat;
        @include tablet-up {
          font-size: rem(22px);
        }
        @include desktop-up {
          margin: 0 0 80px 0;
        }
      }
      .separator {
        margin: 0 0 24px 0;
        width: 50vw;
        max-width: 150px;
        height: 1px;
        background-color: $white;
        @include tablet-up {
          margin: 0 0 32px 0;
        }
      }
      .quizz__container {
        padding: 16px;
        width: 100%;
        @include flexbox(row, center, center);
        .quizzButton {
          margin: 0;
        }
      }
    }
    .articleVideo__video video {
      width: 100%;
      margin: 24px 0 24px 0;

      @include desktop-up {
        width: 45vw;
      }
    }
  }
}
</style>
