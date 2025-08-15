<template>
  <section class="text">
    <div class="subtitle_fade">
      TEXT FADE <br />
      Продюсерское подразделение Placebo/25, практикующее визионерский подход к
      архитектуре крупных концертных событий и перформанс-выступлений.
      Продюсерское подразделение Placebo/25, практикующее визионерский подход к
      архитектуре крупных концертных событий и перформанс-выступлений.
    </div>
  </section>
</template>

<script setup lang="ts">
import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";
import { useIntersectionObserver } from "~/composables/useIntersectionObserver";

gsap.registerPlugin(SplitText);

useIntersectionObserver([".subtitle_fade"], (el) => {
  const split = SplitText.create(el, {
    type: "words,lines",
    linesClass: "line",
    autoSplit: true,
    mask: "lines",
  });

  gsap.from(split.words, {
    opacity: 0,
    duration: 2,
    ease: "sine.out",
    stagger: 0.1,
  });
});
</script>

<style scoped lang="scss">
.text {
  margin-top: 20vw;
  padding: 0 20vw;
}

.subtitle_fade {
  text-transform: none;
  font-size: 2.5vw;
  // opacity: 0;
  will-change: opacity;
}
</style>
