<template>
  <section v-if="isClose">
    <div class="content">
      <div class="articleContent">
        <article class="infos">
          <h1>{{ title }}</h1>
          <hr />
          <p>{{ text }}</p>
          <router-link :to="{ name: 'quizz', params: { number: currentChapitre }}">
            <StartButton class="quizzButton" msg="répondre au quizz" v-if="isClose" />
          </router-link>
        </article>
        <aside class="subContent">
          <img src="@/assets/img/background-temporaire-chap1.png" />
          <img src="@/assets/img/background-temporaire-chap1.png" />
        </aside>
      </div>
    </div>
  </section>
</template>

<script>
import StartButton from "@/components/StartButton.vue"
export default {
  name: "ArticlePicture",
  props: {
    title: String,
    text: String,
  },
  components: {
    StartButton,
  },
  data() {
    return {
      isClose: true,
    };
  },
};
</script>

<style scoped lang="scss">
section {
  backdrop-filter: blur(8px);
  background: $backgroundBoxes;
  min-height: 50vh;

  h1 {
    font-size: $mobileH1;
    font-weight: 600;
    color: $yellow;
  }

  p {
    font-size: $mobileP;
    color: $white;
    line-height: 1.5;
    margin: 24px 0px 8px 0px;
  }
}

.content {
  padding: 16px 16px 24px 16px;
}

.subContent {
  display: flex;
  flex-wrap: wrap;
  width: 80vw;
  margin: auto;
  margin-top: 24px;

  img {
    margin-bottom: 24px;
  }
}
.articleContent {
  width: 90vw;
  margin: auto;
}
@include tablet-up {
  p {
    font-size: 60px;
  }
  .articleContent {
    display: flex;
    justify-content: space-between;
    margin: 0px 96px 0px 96px;
    .subContent {
      width: 50%;
      margin-left: 10vw;
      margin-right: 96px;
      img {
        justify-content: center;
        min-width: 500px;
        max-width: 650px;
      }
    }
    .infos {
      width: 50%;
      h1 {
        font-size: rem(40px);
        text-align: left;
      }
      hr {
        width: 40%;
        display: block;
        margin: 16px 0 40px;
        text-align: left;
      }
      p {
        font-size: rem(18px);
        text-align: left;
        padding-bottom: 24px;
      }
    }
  }
}
</style>
