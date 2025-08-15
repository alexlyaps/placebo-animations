import { onMounted, onBeforeUnmount, ref } from "vue";

export function useIntersectionObserver(
  selectors: string[],
  onVisible: (el: HTMLElement) => void,
  options: IntersectionObserverInit = { threshold: 0.05 }
) {
  const observer = ref<IntersectionObserver | null>(null);

  const initObserver = () => {
    if (
      observer.value ||
      typeof window === "undefined" ||
      !("IntersectionObserver" in window)
    )
      return;

    observer.value = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          onVisible(entry.target as HTMLElement);

          observer.value!.unobserve(entry.target);
        }
      });
    }, options);

    selectors.forEach((selector) => {
      document.querySelectorAll<HTMLElement>(selector).forEach((el) => {
        observer.value!.observe(el);
      });
    });
  };

  onMounted(() => {
    if (window.scrollY === 0) {
      initObserver();
    } else {
      const onScroll = () => {
        if (window.scrollY === 0) {
          initObserver();
          window.removeEventListener("scroll", onScroll);
        }
      };
      window.addEventListener("scroll", onScroll);
    }
  });

  onBeforeUnmount(() => {
    observer.value?.disconnect();
  });
}
