<template>
  <div id="app">
    <transition name="transition" mode="out-in">
      <router-view />
    </transition>
  </div>
</template>

<script>
export default {
  components: {}
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: #333;
  font-family: $montserrat;
}
body {
  background-color: #333;
}
header {
  display: flex;
}
.transition-enter,
.transition-leave-to {
  opacity: 0;
  transform: translateX(2em);
}
.transition-enter-active,
.transition-leave-active {
  transition: all 250ms ease;
}
</style>
