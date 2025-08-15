<template>
  <section class="images">
    <h2>Fade From Left</h2>
    <div class="images-wrapper">
      <ImgComp
        class="img fade-0 translate-x-neg-100"
        src="/images/img.webp"
        :width="510"
        :height="676"
      />
      <ImgComp
        class="img fade-0 translate-x-neg-50"
        src="/images/img.webp"
        :width="510 / 2"
        :height="676 / 2"
      />
      <ImgComp
        class="img fade-0 translate-x-neg-25"
        src="/images/img.webp"
        :width="510 / 2"
        :height="676 / 2"
      />
    </div>
  </section>
</template>

<style scoped lang="scss">
.images {
  margin-top: 20vw;
  padding: 0 20vw;

  h2 {
    margin-bottom: 2vw;
  }
}

.images-wrapper {
  display: flex;
  gap: 2.5vw;
}
</style>

<script setup lang="ts">
import { gsap } from "gsap";
import { useIntersectionObserver } from "~/composables/useIntersectionObserver";

useIntersectionObserver([".img"], () => {
  gsap.to(".img", { opacity: 1, x: 0 });
});
</script>
