<template>
  <section class="hero-from-bottom fade-0 translate-y-100">
    <div class="hero-from-bottom__wrarpper">
      <h2>Fade from bottom</h2>
      <div class="split-lines">
        Проектная компания, <br />которая создаёт и воплощает
        <br />прогрессивные
      </div>

      <BaseButton variant="big" text="BUTTON" />
    </div>
  </section>
</template>

<script setup lang="ts">
import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";
import { useIntersectionObserver } from "~/composables/useIntersectionObserver";

gsap.registerPlugin(SplitText);

useIntersectionObserver([".split-lines"], (el) => {
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

useIntersectionObserver([".hero-from-bottom"], (el) => {
  gsap.to(".hero-from-bottom", { opacity: 1, y: 0 });
});
</script>

<style scoped lang="scss">
.hero-from-bottom__wrarpper {
  margin-top: 20vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

h2,
div {
  text-align: center;
}

h2 {
  background: linear-gradient(233deg, #ffeede 0%, #d8d8d8 100%);
  -webkit-text-fill-color: transparent;
  -webkit-backdrop-clip: text;
  background-clip: text;
}

.split-lines {
  margin: 2vw 0;
}
</style>
