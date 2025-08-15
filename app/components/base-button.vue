<template>
  <button
    :class="['btn', variantClass]"
    @mouseover="onHover"
    @mouseleave="mouseIsOver = false"
  >
    <span ref="span">{{ variant === "big" ? textRef : text }}</span>
  </button>
</template>

<script setup lang="ts">
import { gsap } from "gsap";
import { ScrambleTextPlugin } from "gsap/ScrambleTextPlugin";

gsap.registerPlugin(ScrambleTextPlugin);

const props = defineProps<{
  variant?: "big" | "store" | "mobile-store" | "rounded" | "text" | "small";
  text: string;
}>();

const textRef = ref(props.text);
const spanRef = useTemplateRef("span");
const mouseIsOver = ref(false);

const onHover = () => {
  if (props.variant !== "big") return;
  if (spanRef.value && !mouseIsOver.value) {
    mouseIsOver.value = true;

    const tl = gsap.timeline();
    tl.to(spanRef.value, {
      duration: 0.35,
      scrambleText: {
        text: props.text,
        chars: "xoXO+",
        revealDelay: 0.1,
        speed: 0.5,
        newClass: "scramble",
        oldClass: "scramble",
        rightToLeft: true,
      },
    });
    tl.to(spanRef.value, {
      duration: 0.1,
      scrambleText: {
        text: props.text,
        chars: "xoXO+",
        revealDelay: 0.02,
        speed: 5,
        newClass: "scramble",
        oldClass: "scramble",
        rightToLeft: true,
      },
    });
  }
};

const variantClass = `btn--${props.variant || "small"}`;
</script>

<style scoped lang="scss">
@use "~/assets/scss/variables.scss" as *;
// базовый стиль

.scramble {
  opacity: 0;
}

.btn {
  padding: 0;
  border-radius: 9px;
  font-weight: 600;
  transition: 0.2s all ease-in-out, 0.02s border ease-in-out;
  height: 32px;
  border: none;
  cursor: pointer;
}

// варианты
.btn--big {
  background-color: #ffffff;
  color: #000000;
  height: 58px;
  width: 200px;
  // padding: 18px 57px;
  border: 1px solid #000;
  border-radius: 15px;
  font-size: 16px;

  &:hover {
    background-color: $light-gray;
  }

  &:active {
    background-color: #676d70;
  }

  &:disabled {
    color: #888;
  }
}

.btn--store {
  height: 36px;
  border-radius: 9px;
  background-color: rgba(255, 255, 255, 0.15);
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 14px;
  font-weight: 500;
  color: #fff;

  &:hover {
    background-color: rgba(255, 255, 255, 0.45);
    color: #000;
  }
}

.btn--mobile-store {
  height: 36px;
  border-radius: 12px;
  background-color: rgba(255, 255, 255, 0.15);
  display: flex;
  align-items: center;
  gap: 14px;
  font-size: 15px;
  font-weight: 500;
  color: #fff;
  width: 162px;
  height: 51px;
  background-color: rgba(60, 60, 60, 0.49);
  backdrop-filter: blur(10px);

  &:hover {
    background-color: rgba(255, 255, 255, 0.45);
    color: #000;
  }
}

.btn--small {
  background-color: #ffffff;
  color: #000000;
  height: 40px;
  padding: 7px 20px;
  border: 1px solid #000;
  border-radius: 12px;
  font-size: 16px;
  font-weight: 600;

  &:hover {
    background-color: $light-gray;
  }

  &:active {
    background-color: #676d70;
  }
}

.btn--rounded {
  height: 36px;
  border-radius: 18px;
  background-color: rgba(255, 255, 255, 0.06);
  display: flex;
  align-items: center;
  padding: 0 10px;
  gap: 6px;
  font-size: 13px;
  letter-spacing: 0.13px;
  font-weight: 600;
  color: #fff;

  &:hover {
    background-color: rgba(255, 255, 255, 0.15);
  }
}

.btn--text {
  color: #fff;
  border: none;
  background-color: transparent;
  font-size: 13px;
  font-weight: 500;
  padding: 0;
  transition: all 0.3s ease-in-out;

  &:hover {
    color: $light-gray;
  }
}
</style>
