<template>
<div id="slider">
  <transition-group tag="div" :name="transitionName" class="slides-group">
    <div v-if="show" :key="current" class="slide" :class="slides[current].className">
      <img :src="slides[current].img" alt=""> 
    </div>
  </transition-group>
  <div class="btn btn-prev" aria-label="Previous slide" @click="slide(-1)">
    &#10094;
  </div>
  <div class="btn btn-next" aria-label="Next slide" @click="slide(1)">
    &#10095;
  </div>
</div>
</template>

<script>
import CoralGuardian from "@/assets/img/coral-guardian.png";
import Ifrecor from "@/assets/img/ifrecor.png";
import ChasingCoral from "@/assets/img/chasing-coral_logo.png";

export default {
    name: "Carousel",
    data() {
        return {
            current: 0,
            direction: 1,
            transitionName: "fade",
            show: false,
            slides: [
            { img: CoralGuardian},
            { img: Ifrecor },
            { img: ChasingCoral}
            ]
        }
  },
    methods: {
    slide(dir) {
      this.direction = dir;
      dir === 1
        ? (this.transitionName = "slide-next")
        : (this.transitionName = "slide-prev");
      var len = this.slides.length;
      this.current = (this.current + dir % len + len) % len;
    }
  },
  mounted() {
    this.show = true;
  }
}
</script>

<style>
.fade-enter-active {
  transition: opacity 1s;
}
.fade-enter {
  opacity: 0;
}

/* GO TO NEXT SLIDE */
.slide-next-enter-active,
.slide-next-leave-active {
  transition: transform 0.5s ease-in-out;
}
.slide-next-enter {
  transform: translate(100%);
}
.slide-next-leave-to {
  transform: translate(-100%);
}

/* GO TO PREVIOUS SLIDE */
.slide-prev-enter-active,
.slide-prev-leave-active {
  transition: transform 0.5s ease-in-out;
}
.slide-prev-enter {
  transform: translate(-100%);
}
.slide-prev-leave-to {
  transform: translate(100%);
}

/* SLIDES CLASSES */

.blue {
  background: #4a69bd;
}

.red {
  background: #e55039;
}

.yellow {
  background: #f6b93b;
}

/* SLIDER STYLES */

#slider {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
}

.slide {
  width: 50vw;
}

.btn {
  z-index: 10;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 50px;
  color: white;
  width: 70px;
  height: 70px;
  position: absolute;
  top: calc(50% - 35px);
  left: 1%;
  transition: transform 0.3s ease-in-out;
  user-select: none;
}

.btn-next {
  left: auto;
  right: 1%;
}

.btn:hover {
  transform: scale(1.1);
}
</style>