<template>
  <div class="badge fade-item" :style="`top: ${top}px; left: ${left}px`">
    <div class="img-wrapper">
      <img :src="img" width="67" height="45" />
    </div>
    <span class="text">{{ text }}</span>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  img: string;
  text: string;
  top: number;
  left: number;
}>();
</script>

<style scoped lang="scss">
// базовый стиль
.badge {
  position: absolute;
  height: 63px;
  display: flex;
  gap: 18px;
  align-items: center;
  padding: 0 12px;
  border-radius: 32px;
  background-color: rgba(47, 47, 47, 0.55);
  backdrop-filter: blur(9px);
}

.text {
  font-size: 17px;
}

@media (max-width: 500px) {
  .badge {
    height: 52px;
    padding: 0 9px;
    gap: 19px;
  }

  .img-wrapper {
    height: 30px;
    width: 44px;

    & img {
      width: 100% !important;
      height: 100% !important;
    }
  }

  .text {
    font-size: 14px;
  }
}
</style>
