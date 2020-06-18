<template>
  <progress max="100" value="80"></progress>
</template>

<script>
export default {
  name: "ProgressBar"
};
</script>

<style scoped lang="scss">
progress {
  height: 0.7vh;
  position: absolute;
  left: 0;
}
progress[value] {
  -webkit-appearance: none;
  appearance: none;
  width: 100vw;
}
progress[value]::-webkit-progress-bar {
  background-color: $white;
  border-radius: 0px;
}
progress[value]::-webkit-progress-value {
  background-color: $yellow;
  border-radius: 0px;
}
</style>
