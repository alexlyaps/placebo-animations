<template>
  <div class="accordion-panel">
    <div class="vertical-line width-item"></div>
    <div class="accordion-panel__header" @click="toggle">
      <div class="header">{{ title }}</div>
      <div class="icon" :class="{ expanded: expanded }">
        <span class="bar horizontal"></span>
        <span class="bar vertical"></span>
      </div>
    </div>

    <div ref="contentRef" class="text" :style="contentStyle">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, nextTick, onUnmounted, computed, inject } from "vue";

defineProps<{ title: string }>();

type AccordionContext = () => {
  expanded: Ref<boolean>;
  toggle: () => void;
  unregister: () => void;
};

const register = inject<AccordionContext>("accordion-register");
if (!register) throw new Error("AccordionPanel must be used inside Accordion");

const { expanded, toggle, unregister } = register();
onUnmounted(unregister);

const contentRef = ref<HTMLElement | null>(null);
const contentStyle = ref({
  maxHeight: "0px",
  overflow: "hidden",
  transition: "max-height 0.5s ease-in-out",
});

watch(expanded, async (val) => {
  await nextTick();
  const el = contentRef.value;
  if (!el) return;

  if (val) {
    const scrollHeight = el.scrollHeight;
    contentStyle.value.maxHeight = scrollHeight + "px";
  } else {
    const currentHeight = el.scrollHeight;
    contentStyle.value.maxHeight = currentHeight + "px";
    requestAnimationFrame(() => {
      contentStyle.value.maxHeight = "0px";
    });
  }
});
</script>

<style scoped lang="scss">
@use "assets/scss/main.scss" as *;

.accordion-panel {
  cursor: pointer;
}

.accordion-panel__header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 63px;
  // border-top: 1px solid rgba(#fff, 0.15);
  padding-top: 9px;
}

.header {
  font-size: 16px;
  font-family: "Manrope", sans-serif;
  font-weight: 400;
}

.icon {
  position: relative;
  width: 1rem;
  height: 1rem;
}

.bar {
  position: absolute;
  background-color: currentColor;
  display: block;
}

.horizontal {
  top: 50%;
  left: 0;
  width: 100%;
  height: 2px;
  transform: translateY(-50%);
}

.vertical {
  top: 0;
  left: 50%;
  width: 2px;
  height: 100%;
  transform: translateX(-50%) rotate(0deg);
  transition: transform 0.3s ease;
}

.icon.expanded .vertical {
  transform: translateX(-50%) rotate(270deg);
}

.text {
  overflow: hidden;
  padding-bottom: 9px;
}
</style>
