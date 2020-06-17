<template>
  <div>
    <router-link :to="{ name: 'chapitre', params: { number: currentChapitre }}">
      <CrossButtonSvg />
    </router-link>
    <Quizz
      question="Test"
      responseA="test1"
      responseB="test2"
      responseC="test3"
      responseD="test4'"
    />
  </div>
</template>

<script>
import CrossButtonSvg from "@/components/CrossButtonSvg.vue";
import Quizz from "@/components/Quizz.vue";
export default {
  components: {
    CrossButtonSvg,
    Quizz
  }
};
</script>

<style>
</style>