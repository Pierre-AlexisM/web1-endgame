<template>
  <section class="container__background">
    <div class="container quizz">
      <p class="quizz__question">{{ question }}</p>
      <button
        id="resA"
        @click="isFalse = !isFalse, isTrue = false"
        class="quizz__response"
      >{{ responseA }}</button>
      <button
        id="resB"
        @click="isTrue = !isTrue, isFalse = false"
        class="quizz__response"
      >{{ responseB }}</button>
      <button
        id="resC"
        @click="isFalse = !isFalse, isTrue = false"
        class="quizz__response"
      >{{ responseC }}</button>
      <button
        id="resD"
        @click="isFalse = !isFalse, isTrue = false"
        class="quizz__response"
      >{{ responseD }}</button>
    </div>
    <VraiFaux
      :state="data.quiz1.answer2State"
      :answer="data.quiz1.quizAnswerTrueText"
      :class="{ isVisible : isTrue }"
    />
    <VraiFaux state="Faux" answer="lorem ipsum dolor si amhet" :class="{ isVisible : isFalse }" />
  </section>
</template>

<script>
import VraiFaux from "@/components/VraiFaux.vue";
import axios from "axios";

export default {
  name: "Quizz",
  components: {
    VraiFaux
  },
  props: {
    question: String,
    responseA: String,
    responseB: String,
    responseC: String,
    responseD: String
  },
  data() {
    return {
      data: false,
      isTrue: false,
      isFalse: false,
      // state: false,
      currentChapitre: 0
    };
  },
  mounted() {
    axios
      .get(
        "https://api.savethecorals.fr/api/page/" + (this.currentChapitre + 3)
      )
      .then(response => (this.data = response.data.data));
  }
};
</script>

<style scoped lang="scss">
.container__background {
  margin-top: 7.7vh;
  width: 100vw;
  height: 92.3vh;
  position: absolute;
  top: 0;
  right: 0;
  z-index: 999;
  @include background-boxes;
  border-radius: 0;

  @include tablet-up {
    margin-top: 5.75vh;
    height: 94.3vh;
  }
  @include desktop-large {
    width: 50vw;
  }
}
.container {
  margin: 16vh auto;
  width: 70vw;
  height: 350px;
  max-width: 475px;
  max-height: 475px;
  @include flexbox(column, space-evenly, center);

  @include tablet-up {
    height: 475px;
  }

  @include desktop-up {
    margin: 12vh auto;
    width: 40vw;
    max-width: 515px;
    height: 615px;
    max-height: 615px;
  }
}

.quizz {
  &__question {
    margin: 24px 0 24px 0;
    width: 100%;
    font-size: rem(16px);
    font-family: $montserrat;
    font-weight: 600;
    line-height: 1.5;
    color: $yellow;

    @include tablet-up {
      font-size: rem(28px);
    }
  }

  &__response {
    width: 100%;
    height: 48px;
    padding: 8px 16px;
    color: $white;
    font-size: rem(12px);
    font-weight: 400;
    line-height: 1.25;
    border: none;
    @include background-boxes;

    &:focus {
      border: 1px solid $yellow;
      transition: 250ms;
      color: $yellow;
    }

    @include tablet-up {
      font-size: rem(20px);
      height: 70px;
    }
    @include desktop-up {
      font-size: rem(20px);
      height: 85px;
    }
  }
}
</style>