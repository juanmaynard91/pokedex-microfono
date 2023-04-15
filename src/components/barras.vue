<template>
  <div class="acomodar-progress" v-for="stat in stats" :key="stat.name">
    <div class="color-letra primer-letra">{{ stat.name }}</div>
    <div class="progress" role="progressbar" aria-label="Animated striped example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
      <div class="progress-bar progress-bar-striped progress-bar-animated" :style="{ width: `${stat.value}%` }">
        {{ stat.value }}
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  stats: { type: Array, required: true },
});
</script>

<style scoped>
@import "../assets/estilosSass.css";

.progress {
  border: 1px solid black;
  height: 1.2rem;
  width: 50%;
}

.progress-bar {
  align-items: end;
  display: flex;
  padding: 0 2px 0 0;
}

.acomodar-progress {
  align-items: center;
  display: flex;
  justify-content: space-between;
}
</style>