<template>
  <section class="text">
    <div class="subtitle_words">
      WORDS ANIMATION <br />
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

useIntersectionObserver([".subtitle_words"], (el) => {
  const split = SplitText.create(el, {
    type: "words",
    linesClass: "line",
    autoSplit: true,
    mask: "words",
  });

  gsap.from(split.words, {
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

  padding: 0 20vw;
}

.subtitle_words {
  text-transform: none;
  font-size: 2.5vw;
  // opacity: 0;
  will-change: opacity;
}
</style>
