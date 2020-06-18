<template>
  <div>
    <router-link :to="{ name: 'chapitre', params: { number: currentChapitre }}">
      <CrossButtonSvg />
    </router-link>
    <Quizz
      :question="data.quiz1.question"
      :responseA="data.quiz1.answer1Text"
      :responseB="data.quiz1.answer2Text"
      :responseC="data.quiz1.answer3Text"
      :responseD="data.quiz1.answer4Text"
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
