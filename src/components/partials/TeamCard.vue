<template>
  <article class="teamCard teamCard__container">
    <div class="teamCard__content">
      <div class="teamCard__namePhotoContainer">
        <p
          class="name"
        >{{ nameAR }} {{ nameSPS }} {{ namePAM }} {{ nameAT }} {{ nameNJ }} {{ nameAC }}</p>
        <div src alt class="photo" />
        {{ photonAR }} {{ photoSPS }} {{ photoPAM }} {{ photoAT }} {{ photonNJ }} {{ photoAC }}
      </div>
      <div class="teamCard__separator"></div>
      <div class="teamCard__text">
        <p
          class="description"
        >{{ descriptionAR }} {{ descriptionSPS }} {{ descriptionPAM }} {{ descriptionAT }} {{ descriptionNJ }} {{ descriptionAC }}</p>
        <p class="role">
          <span>Rôle:</span>
          : {{ roleAR }} {{ roleSPS }} {{ rolePAM }} {{ roleAT }} {{ roleNJ }} {{ roleAC }}
        </p>
        <p class="skills">
          <span>Skills:</span>
          {{ skillsAR }} {{ skillsSPS }} {{ skillsPAM }} {{ skillsAT }} {{ skillsNJ }} {{ skillsAC }}
        </p>
        <p class="network">
          <span>LinkedIn:</span>
          {{ networkAR }} {{ networkSPS }} {{ networkPAM }} {{ networkAT }} {{ networkNJ }} {{ networkAC }}
        </p>
        <p class="portfolio">
          <span>Portfolio:</span>
          {{ portfolioAR }} {{ portfolioSPS }} {{ portfolioPAM }} {{ portfolioAT }} {{ portfolioNJ }} {{ portfolioAC }}
        </p>
      </div>
    </div>
  </article>
</template>

<script>
export default {
  name: "TeamCard",
  props: {
    photoAR: String,
    photoSPS: String,
    photoPAM: String,
    photoAT: String,
    photoNJ: String,
    photoAC: String,
    nameAR: String,
    nameSPS: String,
    namePAM: String,
    nameAT: String,
    nameNJ: String,
    nameAC: String,
    descriptionAR: String,
    descriptionSPS: String,
    descriptionPAM: String,
    descriptionAT: String,
    descriptionNJ: String,
    descriptionAC: String,
    roleAR: String,
    roleSPS: String,
    rolePAM: String,
    undefined,
    roleAT: String,
    roleNJ: String,
    roleAC: String,
    skillsAR: String,
    skillsSPS: String,
    skillsPAM: String,
    skillsAT: String,
    skillsNJ: String,
    skillsAC: String,
    networkAR: String,
    networkSPS: String,
    networkPAM: String,
    networkAT: String,
    networkNJ: String,
    networkAC: String,
    portfolioAR: String,
    portfolioSPS: String,
    portfolioPAM: String,
    portfolioAT: String,
    portfolioNJ: String,
    portfolioAC: String
  }
};
</script>

<style scoped lang="scss">
.teamCard {
  color: $white;
  text-align: left;
  padding: 24px;
  position: relative;
  @include scale-animation-light;

  &__container {
    max-width: 450px;
    height: auto;
    min-height: 440px;
    margin: 24px;
    @include background-boxes;
    @include tablet-up {
      width: 450px;
      height: 480px;
    }
  }
  &__content {
    .teamCard__namePhotoContainer {
      @include flexbox(column, space-between, center);
      .name {
        margin: 16px 0 0 0;
        order: 1;
        color: $yellow;
        font: bold rem(20px) $montserrat;
        text-align: center;
      }
      .photo {
        width: 90px;
        height: 90px;
        background: lightcoral;
        border-radius: 100%;
      }
    }

    .teamCard__separator {
      display: none;
      @include tablet-up {
        margin: 16px 0;
        width: 100vw;
        max-width: 150px;
        height: 1px;
        background-color: $white;
      }
    }
    .teamCard__text {
      margin: 24px 0 0 0;
      @include flexbox(column, space-evenly, flex-start);
      .description,
      .role,
      .skills,
      .network,
      .portfolio {
        margin: 6px 0 6px 0;
        font: normal rem(16px) / 1.5 $montserrat;
      }
      span {
        color: $yellow;
        font-weight: 600;
      }
    }
  }
}
</style>