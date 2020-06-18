<template>
  <router-link to="/Intro">
    <button class="start">{{ msg }}</button>
  </router-link>
</template>

<script>
export default {
  name: "StartButton",
  props: {
    msg: String,
  },
};
</script>

<style scoped lang="scss">
.start {
  padding: 16px 24px;
  border-radius: 40px;
  background-color: $white;
  border: 1px solid $blue;
  color: $blue;
  font-size: $mobileP;
  font-family: $montserrat;
  font-weight: bold;
  &:hover {
    cursor: pointer;
    background-color: $blue;
    color: $white;
    border: 1px solid $white;
  }
}
</style>
