<template>
  <section class="images">
    <h2>fade in order</h2>
    <div class="images-wrapper">
      <ImgComp
        class="img-order img-order-1 fade-0"
        src="/images/img.webp"
        :width="510"
        :height="676"
      />
      <ImgComp
        class="img-order img-order-2 fade-0"
        src="/images/img.webp"
        :width="510 / 2"
        :height="676 / 2"
      />
      <ImgComp
        class="img-order img-order-3 fade-0"
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

useIntersectionObserver(
  [".img-order"],
  () => {
    const tl = gsap.timeline({ defaults: { duration: 1 } });

    tl.to(".img-order-1", { opacity: 1 })
      .to(".img-order-2", { opacity: 1 })
      .to(".img-order-3", { opacity: 1 });
  },
  { threshold: 0.2 }
);
</script>
