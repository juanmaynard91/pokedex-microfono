<template>
    <nav class="navbar navbar-dark bg-dark">
      <div class="container-fluid">
        <a class="navbar-brand">
          <!--<img class="img_navbar" src="../assets/logo-pokemon.png" alt="logo pokemon" loading="lazy" />-->
          Pokedex
        </a>
        <cambiarTema />
      </div>
    </nav>
  </template>
  
  <script setup>
  import cambiarTema from "./cambiarColor.vue";
  </script>
  
  <style scoped>
  .container-fluid {
    height: 3rem;
  }
  a {
    margin: 0;
  }

  </style>
  