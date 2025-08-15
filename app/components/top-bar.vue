<template>
  <div class="topbar">
    <BaseButton
      variant="rounded"
      :text="`REPEAT: ${repeatComp}`"
      @click="toggleRepeat"
    />
  </div>
</template>

<script setup lang="ts">
// Используем уникальный ключ, чтобы избежать конфликтов
const repeat = useState("repeat", () => false);

const toggleRepeat = () => {
  repeat.value = !repeat.value; // Важно: меняем через .value
  console.log("Repeat state:", repeat.value); // Меняется
};

const repeatComp = computed(() => (repeat.value ? "YES" : "NO")); //Не меняется
</script>

<style scoped lang="scss">
.topbar {
  position: fixed;
  top: 20px;
  right: 20px;
}
</style>
