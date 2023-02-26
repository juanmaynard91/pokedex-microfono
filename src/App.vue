<template>
  <Suspense>
    <template #default>
      <buscarPokemon />
    </template>

    <template #fallback>
      <loading />
    </template>
  </Suspense>
</template>

<script setup>
import { defineAsyncComponent } from "vue";
import loading from "./components/loading.vue";

const buscarPokemon = defineAsyncComponent(() =>
  import("./components/buscarPokemon.vue")
);
</script>

<style scoped>
@import "./assets/estilosSass.css";
</style>
