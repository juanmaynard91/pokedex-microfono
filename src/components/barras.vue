<template>
  <div class="acomodar-progress" v-for="stat in stats" :key="stat.name">
    <div class="color-letra">{{ stat.name }}</div>
    <div class="progress" role="progressbar" aria-label="Example with label" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
      <div class="progress-bar progress-bar-striped" :style="{ width: `${stat.value}%` }">
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

<style>
.progress {
  border: 1px solid black;
  width: 50%;
}

.progress-bar {
  display: flex;
  align-items: end;
  padding: 0 2px 0 0;
}

.acomodar-progress {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

</style>
