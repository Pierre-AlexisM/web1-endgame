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
        :photoAR="data[2].picture"
        :nameAR="data[2].name"
        :descriptionAR="data[2].description"
        roleAR="Développeur front-end et Designer"
        skillsAR="HTML-CSS | Pug | JS | SASS | Vue.js | Design UX et UI"
        networkAR="Anthony Roux"
        portfolioAR="anthony-roux.netlify.app"
      />
      <TeamCard
        :nameSPS="data[0].name"
        :descriptionSPS="data[0].description"
        roleSPS="Développeur front-end et back-end"
        skillsSPS="HTML-CSS | PHP | JS | React.js | Vue.js | ELM | Design UX et UI "
        networkSPS="Sentiany Sumampow"
        portfolioSPS="sentiany.fr"
      />
      <TeamCard
        :namePAM="data[3].name"
        :descriptionPAM="data[3].description"
        rolePAM="Développeur front-end et Designer"
        skillsPAM="HTML-CSS | Pug | JS | SASS | Vue.js | Design UX et UI"
        networkPAM="Anthony Roux"
        portfolioPAM="anthony-roux.netlify.app"
      />
      <TeamCard
        :nameAT="data[1].name"
        :descriptionAT="data[1].description"
        skillsAT="HTML-CSS | Pug | JS | SASS | Vue.js | Design UX et UI"
        networkAT="Anthony Roux"
        portfolioAT="anthony-roux.netlify.app"
      />
      <TeamCard
        :nameNJ="data[6].name"
        :descriptionNJ="data[6].description"
        roleNJ="Développeur front-end"
        skillsNJ="HTML-CSS | Pug | JS | SASS | Vue.js | Design UX et UI"
        networkNJ="Anthony Roux"
        portfolioNJ="anthony-roux.netlify.app"
      />
      <TeamCard
        :nameAC="data[5].name"
        :descriptionAC="data[5].description"
        roleAC="Designer"
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
      .get("https://api.savethecorals.fr/api/team")
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
