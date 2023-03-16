<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <img class="altura-logo" src="../assets/pokedex-logo.webp" alt="logo de pokedex" loading="lazy" />

      <label for="burger" class="burger navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <input id="burger" type="checkbox" />
        <span class="navbar-toggler-icon"></span>
        <span class="navbar-toggler-icon"></span>
        <span class="navbar-toggler-icon"></span>
      </label>

      <div class="collapse navbar-collapse" id="navbarNavDropdown">
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
  padding-top: 0.6rem;
}
.nav-link {
  padding: 0;
}
@media screen and (min-width: 992px) {
  .navbar-expand-lg .navbar-collapse {
    display: flex;
    justify-content: end;
  }
}

.burger {
  position: relative;
  width: 40px;
  height: 30px;
  background: transparent;
  cursor: pointer;
}
.burger input {
  display: none;
}
.burger span {
  display: block;
  position: absolute;
  height: 4px;
  width: 100%;
  background: black;
  border-radius: 9px;
  opacity: 1;
  left: 0;
  transform: rotate(0deg);
  transition: 0.25s ease-in-out;
}
.burger span:nth-of-type(1) {
  top: 0px;
  transform-origin: left center;
}
.burger span:nth-of-type(2) {
  top: 50%;
  transform: translateY(-50%);
  transform-origin: left center;
}
.burger span:nth-of-type(3) {
  top: 100%;
  transform-origin: left center;
  transform: translateY(-100%);
}
.burger input:checked ~ span:nth-of-type(1) {
  transform: rotate(45deg);
  top: 0px;
  left: 5px;
}
.burger input:checked ~ span:nth-of-type(2) {
  width: 0%;
  opacity: 0;
}
.burger input:checked ~ span:nth-of-type(3) {
  transform: rotate(-45deg);
  top: 28px;
  left: 5px;
}
</style>
