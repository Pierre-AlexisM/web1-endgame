<template>
<body>
  <section class="container_top">
    <Header />
    <ProgressBar />
  </section>
  <div class="display_button">
    <ChapterTitleAndReturn />
    <NextChapterButton />
  </div>
</body>
</template>

<script>
import Header from "@/components/partials/Chapitre.vue";
export default {
  name: "Chapter",
  components: {
    Header
  },
  data() {
    return {

    };
  }
};
</script>

<style>
</style>