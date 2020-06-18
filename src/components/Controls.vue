<template>
  <div class="container__controlIcon">
    <img
      src="../assets/ux-kit/desktop/scroll_icon.svg"
      alt="scroll"
      class="controlIcon scroll_icon"
    />
    <img
      src="../assets/ux-kit/desktop/arrow-key-left_icon.svg"
      alt="left arrow key"
      class="controlIcon keyLeft_icon"
    />
    <img
      src="../assets/ux-kit/desktop/arrow-key-right_icon.svg"
      alt="right arrow key"
      class="controlIcon"
    />
  </div>
</template>

<script>
export default {
  name: "Controls"
};
</script>

<style scoped lang="scss">
.container__controlIcon {
  display: none;
  @include tablet-up {
    position: relative;
    z-index: 999;
    padding: 8px 12px 8px 8px;
    width: fit-content;
    max-width: 155px;
    border: 0.5px solid $white;
    @include flexbox(row, center, center);
    @include background-boxes;
    border-radius: 4px;
  }
}
.controlIcon {
  width: 35px;
  height: 35px;
}
.scroll_icon {
  margin-right: 12px;
}
.keyLeft_icon {
  margin-right: 8px;
}
</style>