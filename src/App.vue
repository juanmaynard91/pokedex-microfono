<template>
  <div :class="{ 'no-rotate': isPortrait }">
    <Suspense>
      <template #default>
        <buscarPokemon />
      </template>

      <template #fallback>
        <loading />
      </template>
    </Suspense>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";
import { defineAsyncComponent } from "vue";
import loading from "./components/loading.vue";

const buscarPokemon = defineAsyncComponent(() =>
  import("./components/buscarPokemon.vue")
);

const isPortrait = ref(window.orientation == 0 || window.orientation == 180);

// Detectar cambios en la orientación
watch(
  () => window.orientation,
  (newVal) => {
    isPortrait.value = newVal == 0 || newVal == 180;
  }
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

.no-rotate {
  /* bloquea la rotación */
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 9999;
}
</style>
