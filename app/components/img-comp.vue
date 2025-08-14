<template>
  <div
    class="img-wrapper"
    :style="`width: clamp(${width / 3}px, ${
      width / 19.2
    }vw, ${width}px); aspect-ratio: ${width / height}`"
  >
    <img :src="src" :alt="alt" />
  </div>
</template>

<script setup lang="ts">
defineProps<{
  src: string;
  alt?: string;
  width: number;
  height: number;
}>();
</script>

<style scoped lang="scss">
// базовый стиль

img {
  display: block;
  width: 100%;
  height: auto;
}
</style>
