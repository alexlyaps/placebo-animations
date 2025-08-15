<template>
  <section class="text">
    <div class="subtitle">
      LINES ANIMATION <br />
      Продюсерское подразделение Placebo/25, практикующее визионерский подход к
      архитектуре крупных концертных событий и перформанс-выступлений.
    </div>
    <div class="subtitle">
      LINES ANIMATION <br />Продюсерское подразделение Placebo/25, практикующее
      визионерский подход к архитектуре крупных концертных событий и
      перформанс-выступлений.
    </div>
  </section>
</template>

<script setup lang="ts">
import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";
import { useIntersectionObserver } from "~/composables/useIntersectionObserver";

gsap.registerPlugin(SplitText);

useIntersectionObserver([".subtitle"], (el) => {
  const split = SplitText.create(el, {
    type: "words,lines",
    linesClass: "line",
    autoSplit: true,
    mask: "lines",
  });

  gsap.from(split.lines, {
    duration: 1,
    yPercent: 100,
    opacity: 0,
    stagger: 0.1,
    ease: "expo.out",
  });
});
</script>

<style scoped lang="scss">
.text {
  margin-top: 20vw;
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 0 20vw;
}

.subtitle {
  text-transform: none;
  font-size: 2.5vw;
  // opacity: 0;
  will-change: opacity;
}
</style>
