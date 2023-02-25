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

<style>
@import url("https://fonts.googleapis.com/css2?family=Ubuntu&display=swap");

* {
  margin: 0;
  padding: 0;
  list-style: none;
  text-decoration: none;
  border: none;
  outline: none;
  box-sizing: border-box;
}

#app {
  text-align: center;
  font-family: "Ubuntu", sans-serif;
  /*border: 10px solid red;*/
  height: 100vh;
}
</style>
