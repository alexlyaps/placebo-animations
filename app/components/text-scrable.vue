<template>
  <section class="text">
    <span class="subtitle_scramble subtitle_scramble_1"></span>
    <span class="subtitle_scramble subtitle_scramble_2"></span>
  </section>
</template>

<script setup lang="ts">
import { gsap } from "gsap";
import { ScrambleTextPlugin } from "gsap/ScrambleTextPlugin";
gsap.registerPlugin(ScrambleTextPlugin);
import { useIntersectionObserver } from "~/composables/useIntersectionObserver";

const text_1 =
  "TEXT SCRAMBLE Продюсерское подразделение Placebo/25, практикующее визионерский подход к ";
const text_2 =
  "архитектуре крупных концертных событий и перформанс-выступлений.";

useIntersectionObserver(
  [".subtitle_scramble_1", ".subtitle_scramble_2"],
  (el) => {
    const tl = gsap.timeline({ defaults: { ease: "none" } });
    tl.to(".subtitle_scramble_1", {
      duration: 2,
      scrambleText: {
        text: text_1,
        chars: "lowerCase",
        revealDelay: 0.01,
        speed: 0.2,
        // newClass: "scramble",
        // oldClass: "scramble",
        // rightToLeft: true,
      },
    }).to(".subtitle_scramble_2", {
      duration: 2,
      scrambleText: {
        text: text_2,
        chars: "xoXO+",
        revealDelay: 0.1,
        speed: 0.2,
        // newClass: "scramble",
        // oldClass: "scramble",
        // rightToLeft: true,
      },
    });
  }
);
</script>

<style scoped lang="scss">
.text {
  margin-top: 20vw;
  padding: 0 20vw;
}

.subtitle_scramble {
  text-transform: none;
  font-size: 2.5vw;
  // opacity: 0;
  will-change: opacity;
}
</style>
