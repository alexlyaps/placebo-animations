<template>
  <div
    :class="[
      'card',
      {
        'fade-item': !url.includes('-1') && !url.includes('-4'),
      },
      {
        'card--height-225px': url.includes('-3') || url.includes('-5'),
      },
      {
        'card--height-475px':
          url.includes('-1') || url.includes('-2') || url.includes('-4'),
      },
    ]"
    :style="{
      height: `${height}px`,
    }"
  >
    <div class="bg" :style="{ backgroundImage: `url(${url})` }"></div>
    <slot />
  </div>
</template>

<style scoped lang="scss">
.card {
  width: 448px;
  max-width: 100%;
  border-radius: 30px;
  padding: 50px 45px;
  overflow: hidden;
  position: relative;
}

.bg {
  position: absolute;
  inset: 0;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-position: center;
  transition: transform 0.4s ease;
  z-index: -1;
}

.card:hover .bg {
  transform: scale(1.03);
}

@media (max-width: 500px) {
  .card {
    width: 100%;
    padding: 24px 27px;
    border-radius: 25px;
    box-sizing: border-box;
    height: 252px;
  }

  .card--height-225px {
    height: 198px !important;
  }

  .card--height-475px {
    height: 120vw !important;
  }

  .card:hover .bg {
    transform: scale(1);
  }
}
</style>

<script setup lang="ts">
const props = defineProps<{
  height: Number;
  url: String;
}>();
</script>
