<template>
  <div>
    <router-link :to="{ name: 'chapitre', params: { number: currentChapitre }}">
      <CrossButtonSvg />
    </router-link>
    <Quizz
      :question="data.quiz1.question"
      :questionNumber=1
      :responseA="data.quiz1.answer1Text"
      :responseAState="data.quiz1.answer1State"
      :responseB="data.quiz1.answer2Text"
      :responseBState="data.quiz1.answer2State"
      :responseC="data.quiz1.answer3Text"
      :responseCState="data.quiz1.answer3State"
      :responseD="data.quiz1.answer4Text"
      :responseDState="data.quiz1.answer4State"
      :responseInfoTrue="data.quiz1.quizAnswerTrueText"
      :responseInfoFalse="data.quiz1.quizAnswerFalseText"
    />
    <VraiFaux state="Vrai" answer="lorem ipsum dolor si amhet" />
  </div>
</template>

<script>
import CrossButtonSvg from "@/components/CrossButtonSvg.vue";
import Quizz from "@/components/Quizz.vue";
import VraiFaux from "@/components/VraiFaux.vue";
import axios from "axios";
export default {
  components: {
    CrossButtonSvg,
    Quizz,
    VraiFaux
  },
  data() {
    return {
      currentChapitre: this.$route.params.number,
      data: null
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

<style>
</style>
