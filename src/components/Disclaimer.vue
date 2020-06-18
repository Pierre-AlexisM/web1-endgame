<template>
  <div class="container">
    <div class="innerContainer">
      <svg
        class="info"
        width="39"
        height="39"
        viewBox="0 0 39 39"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M17.875 13.0001C17.875 12.1031 18.603 11.3751 19.5 11.3751C20.397 11.3751 21.125 12.1031 21.125 13.0001C21.125 13.8971 20.397 14.6251 19.5 14.6251C18.603 14.6251 17.875 13.8971 17.875 13.0001ZM17.875 17.8751C17.875 16.9781 18.603 16.2501 19.5 16.2501C20.397 16.2501 21.125 16.9781 21.125 17.8751V26.0001C21.125 26.8971 20.397 27.6251 19.5 27.6251C18.603 27.6251 17.875 26.8971 17.875 26.0001V17.8751ZM19.4996 32.5002C12.3317 32.5002 6.49962 26.6681 6.49962 19.5002C6.49962 12.3323 12.3317 6.50022 19.4996 6.50022C26.6675 6.50022 32.4996 12.3323 32.4996 19.5002C32.4996 26.6681 26.6675 32.5002 19.4996 32.5002M19.4998 3.25012C10.5249 3.25012 3.24982 10.5252 3.24982 19.5001C3.24982 28.475 10.5249 35.7501 19.4998 35.7501C28.4731 35.7501 35.7498 28.475 35.7498 19.5001C35.7498 10.5252 28.4731 3.25012 19.4998 3.25012"
          fill="white"
        />
        <mask
          id="mask0"
          mask-type="alpha"
          maskUnits="userSpaceOnUse"
          x="3"
          y="3"
          width="33"
          height="33"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M17.875 13.0001C17.875 12.1031 18.603 11.3751 19.5 11.3751C20.397 11.3751 21.125 12.1031 21.125 13.0001C21.125 13.8971 20.397 14.6251 19.5 14.6251C18.603 14.6251 17.875 13.8971 17.875 13.0001ZM17.875 17.8751C17.875 16.9781 18.603 16.2501 19.5 16.2501C20.397 16.2501 21.125 16.9781 21.125 17.8751V26.0001C21.125 26.8971 20.397 27.6251 19.5 27.6251C18.603 27.6251 17.875 26.8971 17.875 26.0001V17.8751ZM19.4996 32.5002C12.3317 32.5002 6.49962 26.6681 6.49962 19.5002C6.49962 12.3323 12.3317 6.50022 19.4996 6.50022C26.6675 6.50022 32.4996 12.3323 32.4996 19.5002C32.4996 26.6681 26.6675 32.5002 19.4996 32.5002M19.4998 3.25012C10.5249 3.25012 3.24982 10.5252 3.24982 19.5001C3.24982 28.475 10.5249 35.7501 19.4998 35.7501C28.4731 35.7501 35.7498 28.475 35.7498 19.5001C35.7498 10.5252 28.4731 3.25012 19.4998 3.25012"
            fill="white"
          />
        </mask>
        <g mask="url(#mask0)"></g>
      </svg>
      <h1>Attention</h1>
      <p>
        Ce site a été réalisé à des fins pédagogiques dans le cadre du cursus
        Bachelor de l’école HETIC.
      </p>
      <p>
        Les contenus présentés n'ont pas fait l'objet d'une demande de droit
        d'utilisation.
      </p>
      <p>
        Ce site ne sera en aucun cas exploité à des fins commerciales et ne sera
        pas publié.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "DisclaimerArticle",
};
</script>

<style scoped lang="scss">
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
}
.innerContainer {
  width: 90%;
  max-width: 815px;
  padding: 20px;
  border: solid $yellow 2px;
  @include background-boxes;
}
h1 {
  font-size: rem($mobileH2);
  color: $yellow;
  font-weight: 600;
  padding: 20px 0px 20px 0px;
}
p {
  color: $white;
  line-height: 1.5;
}
</style>
