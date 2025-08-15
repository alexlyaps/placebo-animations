<template>
  <section class="hero">
    <h2 class="gradient-anim">anim gradient colors</h2>
    <div class="hero__text">
      Проектная компания, <br />которая создаёт и воплощает <br />прогрессивные
    </div>

    <BaseButton variant="big" text="КНОПКА" />
  </section>
</template>

<style scoped lang="scss">
.hero {
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

.gradient-anim {
  --c1: #ffeede;
  --c2: #d8d8d8;
  --c3: #e18057;

  background: linear-gradient(233deg, var(--c1) 0%, var(--c2) 100%);
  -webkit-text-fill-color: transparent;
  -webkit-backdrop-clip: text;
  background-clip: text;
}

.hero__text {
  margin: 2vw 0;
}
</style>

<script setup lang="ts">
import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";
gsap.registerPlugin(SplitText);

onMounted(() => {
  // gsap.to(".hero", { opacity: 1, y: 0 });
  const tl = gsap.timeline({ defaults: { duration: 1 } });
  tl.fromTo(
    ".gradient-anim",
    {
      "--c1": "#6957e1",
      "--c2": "#e18057",
      duration: 2,
    },
    {
      "--c1": "#e18057",
      "--c2": "#6957e1",
      duration: 2,
    }
  ).from(".gradient-anim", {
    "--c1": "#e18057",
    "--c2": "#6957e1",
    duration: 2,
  });
  SplitText.create(".hero__text", {
    type: "words,lines",
    linesClass: "line",
    autoSplit: true,
    mask: "lines",
    onSplit: (self) => {
      gsap.from(self.lines, {
        duration: 1,
        yPercent: 100,
        opacity: 0,
        stagger: 0.1,
        ease: "expo.out",
      });
    },
  });
});
</script>
