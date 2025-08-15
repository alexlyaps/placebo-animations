<template>
  <!-- <TopBar /> -->
  <Hero />
  <HeroNext />
  <FadeScale />
  <ImagesFromLeft />
  <ImagesFromRight />
  <ImagesInOrder />
  <Text />
  <WordsAnim />
  <TextFade />
  <TextScrable />
</template>

<script setup lang="ts">
import "modern-normalize";
import { gsap } from "gsap";

import { useIntersectionObserver } from "~/composables/useIntersectionObserver";
import WordsAnim from "~/components/words-anim.vue";
useIntersectionObserver([".fade-item"], (el) => {
  gsap.to(el, { opacity: 1, y: 0 });
});
</script>

<style lang="scss">
@use "~/assets/scss/main.scss" as *;
</style>
