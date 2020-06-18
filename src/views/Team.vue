<template>
  <div class="team">
    <div class="audio">
      <iframe :src="data.music" allow="autoplay" id="audio" style="display: none"></iframe>
      <audio id="player" autoplay loop>
        <source :src="data.music" type="audio/mp3" />
      </audio>
    </div>
    <Header />
    <h1>Voici la team qui a participé à ce joli projet passionnant</h1>
    <section class="teams">
      <TeamCard
        nameAR="Anthony Roux"
        descriptionAR="Étudiant Héticien de 27 ans, Développeur front-end possédant une subtile sensibilité pour le design UX et UI le jour , et dresseur de chats noir le soir."
        roleAR="Développeur front-end et Designer"
        skillsAR="HTML-CSS | Pug | JS | SASS | Vue.js | Design UX et UI"
        networkAR="Anthony Roux"
        portfolioAR="anthony-roux.netlify.app"
      />
      <TeamCard
        nameSPS="Sentiany Priska Sumampow"
        descriptionSPS="Étudiant Héticien de 27 ans, Développeur front-end possédant une subtile sensibilité pour le design  UI le jour , et dresseur de chats noir le soir."
        roleSPS="Développeur front-end et Designer"
        skillsSPS="HTML-CSS | Pug | JS | SASS | Vue.js | Design UX et UI"
        networkSPS="Anthony Roux"
        portfolioSPS="anthony-roux.netlify.app"
      />
      <TeamCard
        namePAM="P.A Maerten"
        descriptionPAM="Étudiant Héticien de 27 ans, Développeur front-end possédant une subtile sensibilité pour le design UX et UI le jour , et dresseur de chats noir le soir."
        rolePAM="Développeur front-end et Designer"
        skillsPAM="HTML-CSS | Pug | JS | SASS | Vue.js | Design UX et UI"
        networkPAM="Anthony Roux"
        portfolioPAM="anthony-roux.netlify.app"
      />
      <TeamCard
        nameAT="Annie Tran"
        descriptionAT="Étudiant Héticien de 27 ans, Développeur front-end possédant une subtile sensibilité pour le design UX et UI le jour , et dresseur de chats noir le soir."
        roleAT="Développeur front-end et Designer"
        skillsAT="HTML-CSS | Pug | JS | SASS | Vue.js | Design UX et UI"
        networkAT="Anthony Roux"
        portfolioAT="anthony-roux.netlify.app"
      />
      <TeamCard
        nameNJ="Nicolas Jesenberger"
        descriptionNJ="Étudiant Héticien de 27 ans, Développeur front-end possédant une subtile sensibilité pour le design UX et UI le jour , et dresseur de chats noir le soir."
        roleNJ="Développeur front-end et Designer"
        skillsNJ="HTML-CSS | Pug | JS | SASS | Vue.js | Design UX et UI"
        networkNJ="Anthony Roux"
        portfolioNJ="anthony-roux.netlify.app"
      />
      <TeamCard
        nameAC="Axel Charel"
        descriptionAC="Étudiant Héticien de 27 ans, Développeur front-end possédant une subtile sensibilité pour le design UX et UI le jour , et dresseur de chats noir le soir."
        roleAC="Développeur front-end et Designer"
        skillsAC="HTML-CSS | Pug | JS | SASS | Vue.js | Design UX et UI"
        networkAC="Anthony Roux"
        portfolioAC="anthony-roux.netlify.app"
      />
    </section>
  </div>
</template>

<script>
import TeamCard from "@/components/partials/TeamCard.vue";
import Header from "@/components/partials/Header.vue";
import axios from "axios";

export default {
  data() {
    return {
      data: null,
      music: null,
      members: ["PA", "Annie", "Priska", "Anthony", "Nicoraux", "Axel"]
    };
  },
  components: {
    Header,
    TeamCard
  },
  mounted() {
    axios
      .get("https://api.savethecorals.fr/api/page/3")
      .then(response => (this.data = response.data.data));
  }
};
</script>

<style scoped lang="scss">
header {
  display: flex;
}
.team {
  width: 100vw;
  height: auto;
  background-image: url(../assets/img/team-background.jpg);
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  object-fit: cover;

  h1 {
    margin: 24px auto;
    padding: 0 16px;
    color: $yellow;
    text-transform: uppercase;
    font: bold rem(18px) / 1.5 $montserrat;

    @include tablet-up {
      padding: 30px 80px;
      font: bold rem(28px) / 1.5 $montserrat;
    }
  }

  .teams {
    max-width: 1660px;
    margin: 0 auto;
    padding-bottom: 150px;
    flex-wrap: wrap;
    @include flexbox(row, space-evenly, center);
  }
}
</style>
