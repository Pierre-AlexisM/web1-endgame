<template>
  <div class="container_currentChapter">
    <div class="container_chapterAndTitle">
      <div class="container_chapters">
        <p class="currentChapter">{{ currentChapter }}</p>
        <p class="chapter">|{{ chapter }}</p>
      </div>
      <p class="title">{{ title }}</p>
    </div>
    <div class="container_reviewChapter">
      <img src="../assets/ux-kit/control/return_icon.svg" alt="return" />
      <p class="reviewChapter">{{ reviewChapter }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "ChapterTitleAndReturn",
  props: {
    currentChapter: String,
    chapter: String,
    title: String,
    reviewChapter: String,
  },
};
</script>

<style scoped lang="scss">
.container_currentChapter {
  max-width: 370px;
  padding: 8px;
  margin-left: 15px;
  font-family: $montserrat;
  position: fixed;
  @include tablet-up {
    max-width: 850px;
    margin-left: 60px;
    padding: 8px 0;
  }
  @include desktop-up {
    position: absolute;
    margin-left: 0;
    left: 60px;
    bottom: 30px;
  }
}
.container_chapterAndTitle {
  @include flexbox(row, flex-start, center);
}
.container_chapters {
  margin: 8px 8px 8px 0;
  color: $yellow;
  @include flexbox(row, flex-start, baseline);
}
.currentChapter {
  font: 600 rem(18px) $montserrat;

  @include tablet-up {
    font-size: rem(32px);
  }

  @include desktop-up {
    font-size: rem(40px);
  }
}
.chapter {
  font: 600 rem(10px) $montserrat;
  @include tablet-up {
    font-size: rem(16px);
  }
}
.title {
  color: $white;
  font-size: rem(15px);
  font-weight: bold;
  @include tablet-up {
    font-size: rem(32px);
  }
  @include desktop-up {
    font-size: rem(40px);
  }
}

.container_reviewChapter {
  @include flexbox(row, flex-start, center);
  cursor: pointer;
  img {
    margin-right: 8px;
  }
  p {
    color: $white;
    font-size: rem(10px);
    &:hover {
      font-weight: 600;
    }
    @include tablet-up {
      font-size: rem(16px);
    }
  }
}
</style>
