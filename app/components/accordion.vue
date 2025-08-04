<template>
  <div class="accordion">
    <slot />
  </div>
</template>

<script setup lang="ts">
const expanded = ref<symbol | null>(null);

provide("accordion-register", () => {
  const id = Symbol();

  return {
    expanded: computed(() => expanded.value === id),

    toggle() {
      expanded.value = expanded.value === id ? null : id;
    },

    unregister: () => {
      if (expanded.value === id) {
        expanded.value = null;
      }
    },
  };
});
</script>

<style scoped>
.accordion {
  display: flex;
  flex-direction: column;
  max-width: 990px;
  width: 100%;
  margin: 0 auto;
}
</style>
