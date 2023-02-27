<template>
  <nav class="navbar navbar-dark">
    <div class="container-fluid">
      <h1 class="navbar-brand">
        <img class="altura-logo" src="../assets/pokedex-logo.png" alt="logo de pokedex" loading="lazy" />
      </h1>
      <cambiarTema />
    </div>
  </nav>
</template>

<script setup>
import cambiarTema from "./cambiarColor.vue";
</script>

<style>
@import "../assets/estilosSass.css";

.navbar-brand {
  margin: 0;
}
.altura-logo {
  height: 2rem;
}
</style>
