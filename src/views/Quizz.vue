<template>
    <Quizz :question="quizz[currentChapitre].question"
        :responseA="quizz[currentChapitre].responseA"
        :responseB="quizz[currentChapitre].responseB"
        :responseC="quizz[currentChapitre].responseC"
        :responseD="quizz[currentChapitre].responseD" />
</template>

<script>
import CrossButtonSvg from "@/components/CrossButtonSvg.vue";
import Quizz from "@/components/Quizz.vue";
export default {

    components: {
        Quizz
    },
    data() {
      return {
        currentChapitre: this.$route.params.number,
        isClose: true,
        quizz : {
          "0": {
            question:"Un centimètre carré de corail abrite combien de Zooxanthelles ?",
            responseA:"Une grosse poignée",
            responseB:"100 000",
            responseC:"1 million",
            responseD:"C’est quoi le Zooxanthelle "
          },
          "1": {
            question: "Le corail est animal, minéral ou un végétal?",
            responseA:"Végétal biensûr !",
            responseB:"Mineral vu comme c’est dur...",
            responseC:"Les 3 trois à la fois !",
            responseD:"Un animal marin"
          },
          "2": {
            question:"Dans quel zone du globe est situé le “Triangle de Corail”?",
            responseA:"Les Caraïbes",
            responseB:"L’Asie du Sud-Est",
            responseC:"En Inde",
            responseD:"En Amérique du Sud"
          },
          "4": {
            question:" Combien d’épisode de blanchissement mondiale des récifs coralien on eu lieu?",
            responseA:"0",
            responseB:"1",
            responseC:"2",
            responseD:"3"
          },
          "5": {
            question:"Parmis ces propositions, laquelle est vrais?",
            responseA:"Sans coraux, l’ovéan va s’acidifier",
            responseB:"Sans coraux, les failles tectoniques seront plus active",
            responseC:"Sans coraux, les côtes seront plus vulnérable aux tempêtes",
            responseD:"Sans coraux, les épisodes de canicule seont plus fréquent"
          }
        }
     };
  }
}
</script>

<style>
</style>