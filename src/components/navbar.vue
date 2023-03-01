<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <img class="altura-logo" src="../assets/pokedex-logo.png" alt="logo de pokedex" loading="lazy" />
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page">
              <cambiarTema />
            </a>
          </li>
        </ul>
      </div>
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
.nav-item {
  display: flex;
  justify-content: flex-end;
  padding-top: 1rem;
}
.nav-link {
  padding: 0;
}

@media (min-width: 992px) {
  .navbar-expand-lg .navbar-collapse {
    display: flex !important;
    justify-content: end;
  }
}
</style>
