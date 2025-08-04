// src/composables/useIntersectionVisibility.ts
import { onMounted, onBeforeUnmount, ref } from "vue";

export function useIntersectionVisibility(
  selectors: string[] = [".fade-item"],
  options: IntersectionObserverInit = { threshold: 0.1 }
) {
  const observer = ref<IntersectionObserver | null>(null);

  onMounted(() => {
    if (typeof window === "undefined" || !("IntersectionObserver" in window)) {
      return;
    }

    observer.value = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.value!.unobserve(entry.target); // 👈 отключаем наблюдение
        }
      });
    }, options);

    selectors.forEach((selector) => {
      document.querySelectorAll<HTMLElement>(selector).forEach((el) => {
        observer.value!.observe(el);
      });
    });
  });

  onBeforeUnmount(() => {
    if (!observer.value) return;
    selectors.forEach((selector) => {
      document.querySelectorAll<HTMLElement>(selector).forEach((el) => {
        observer.value!.unobserve(el);
      });
    });
    observer.value.disconnect();
  });
}
