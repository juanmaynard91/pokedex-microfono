<template>
  <!-- Object.entries(pokemones).length > 0 : lo que hace es que solo muestra info cuando tiene algo que mostrar-->
  <div class="centrar" v-if="Object.entries(pokemones).length > 0" ref="target" :style="{ transform: cardTransform }">
    <div class="card fw-bold border_black ancho-card">
      <div class="row g-0">
        <div class="col-md-4 centrar-imagen">
          <img class="img-fluid rounded-start" :src="pokemones.sprites.front_default" :alt="pokemones.name" loading="lazy" />

        </div>
        <div class="col-md-8">
          <div class="card-body d-grid gap-1 padding-card">
            <p>#{{ pokemones.id }}</p>

            <p>{{ pokemones.name }}</p>

            <div class="d-flex justify-content-evenly align-items-center color-letra altura-type">
              <div class="badge" v-for="(type, index) in pokemones.types" :key="index">
                <!-- :class si el nombre en css coinside con type.name muestro el color -->
                <span :class="type.type.name"> {{ type.type.name }}</span>
              </div>
            </div>

            <!--<div class="color-letra centrar-habilidades">
              abilities 
              <div v-for="(ability, index) in pokemones.abilities" :key="index">
                <span>{{ ability.ability.name }}</span>
              </div>
            </div>-->

            <barras :stats="stats" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from "vue";
import { useMouseInElement } from "@vueuse/core"; // install npm animacion card con el mouse
import barras from "../components/barras.vue";

const target = ref(null);
const { elementX, elementY, isOutside, elementHeight, elementWidth } =
  useMouseInElement(target);

// animacion al card cuando paso el mouse
const cardTransform = computed(() => {
  const MAX_ROTATION = 6;
  const rX = ( MAX_ROTATION / 2 -(elementY.value / elementHeight.value) * MAX_ROTATION).toFixed(2);
  const rY = ((elementX.value / elementWidth.value) * MAX_ROTATION - MAX_ROTATION / 2).toFixed(2);
  return isOutside.value ? "" : `perspective(${elementWidth.value}px) rotateX(${rX}deg) rotateY(${rY}deg)`;
});

const props = defineProps({
  pokemones: { type: Object, required: true },
  stats: { type: Array, required: true },
});

//mostrar info del pokemon
// muestra un nuevo array por eso le agrega las "", hacer un v-for en template con li
/*const ataques = computed(() => {
   if (pokemones.value) {
     return pokemones.value.abilities.map((ataques) => ataques.ability.name);
   }
 });
 
 const tipo = computed(() => {
   if (pokemones.value) {
     return pokemones.value.types.map((tipo) => tipo.type.name);
   }
 });
 
 const estadisticas = computed(() => {
   if (pokemones.value) {
     return pokemones.value.stats.map((estadisticas) => estadisticas.base_stat);
   }
 });*/
</script>

<style scoped lang="scss">
@import "../assets/estilosSass.css";

@mixin centrarTodo {
  display: flex;
  align-items: center;
  justify-content: center;
}

.centrar-imagen {
  @include centrarTodo;
}
.centrar-habilidades {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}
.altura-type {
  height: 2rem;
}
</style>
