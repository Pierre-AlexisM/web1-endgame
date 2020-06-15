<template>
  <div class="next-button">
    <p>{{msg}}</p>
    <svg width="14" height="14" viewBox="0 0 14 14" fill="#FFFFFF" xmlns="http://www.w3.org/2000/svg"><path d="M8.95133 0.373004L13.7793 6.373C14.0783 6.744 14.0733 7.274 13.7683 7.64L8.76834 13.64C8.57034 13.877 8.28633 14 7.99934 14C7.77433 14 7.54734 13.924 7.36033 13.768C6.93534 13.415 6.87833 12.784 7.23234 12.36L11.7083 6.989L7.39233 1.627C7.04634 1.197 7.11434 0.567004 7.54533 0.221004C7.97534 -0.125996 8.60433 -0.0569958 8.95133 0.373004Z" fill="white"/><path d="M0.545235 0.221004C0.975235 -0.124996 1.60423 -0.0569958 1.95123 0.373004L6.77923 6.373C7.07723 6.744 7.07323 7.274 6.76823 7.64L1.76823 13.64C1.57023 13.877 1.28623 14 0.999235 14C0.774235 14 0.547235 13.924 0.360235 13.768C-0.0647651 13.415 -0.121765 12.784 0.232235 12.36L4.70723 6.989L0.392235 1.627C0.0462349 1.197 0.115235 0.567004 0.545235 0.221004Z" fill="white"/><path d="M13.7793 6.373L8.95133 0.373004C8.60433 -0.0569958 7.97534 -0.125996 7.54533 0.221004C7.11434 0.567004 7.04634 1.197 7.39233 1.627L11.7083 6.989L7.23234 12.36C6.87833 12.784 6.93534 13.415 7.36033 13.768C7.54734 13.924 7.77433 14 7.99934 14C8.28633 14 8.57034 13.877 8.76834 13.64L13.7683 7.64C14.0733 7.274 14.0783 6.744 13.7793 6.373Z" fill="white"/></svg>
  </div>
</template>

<script>
export default {
  name: "NextChapterButton",
  props: {
    msg: String
  }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

.next-button {
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 5vh;
  right: 0px;
  padding: 24px 36px;
  background-color: $backgroundBoxes;
  border: 1px solid white;
  border-right: none;
  z-index: 10;
  cursor: pointer;

  &:hover {
    border: 1px solid $yellow;
    border-right: none;

    p {
      color: $yellow;
    }

    svg > * {
      fill: $yellow;
    }
  }

  @media (max-width: 520px) {
    padding: 3vw 4vw;
    font-size: 3vw;
	}
}

p {
  font-weight: bold;
  color: $white;
  margin-right: 16px;
  white-space: nowrap;
}

</style>