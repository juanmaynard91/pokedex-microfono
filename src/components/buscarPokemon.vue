<template>
  <header>
    <navbar />
  </header>

  <main class="container">
    <form @submit.prevent="buscarPokemon">
      <div class="input-group mt-3 mb-3">
        <input type="text" class="form-control input border_black" placeholder="ingrese el nombre del pokemon.." aria-label="Recipient's username" aria-describedby="button-addon2" v-model.trim="buscarConInput" />
      </div>
    </form>

    <transition name="list">
      <card :pokemones="pokemones" :stats="stats" />
    </transition>
  </main>

  <footer>
    <piePagina />
  </footer>
</template>

<script setup>
// instalar con npm para que la app funcione sin internet en vez de usar link o script en html
import piePagina from "../components/piePagina.vue";
import card from "../components/card.vue";
import navbar from "../components/navbar.vue";
import { ref, watchEffect } from "vue";
import Swal from "sweetalert2"; // alert

const pokemones = ref({});
const pokeApi = "https://pokeapi.co/api/v2/pokemon";
const buscarConInput = ref("");
const stats = ref([]);

//la solucion para que la pagina tarde en cargar
await new Promise((res) => setTimeout(res, 1000));

const cargarPokemonesInput = async () => {
  try {
    //muestra la imagen hasta el 897
    const res = await fetch(`${pokeApi}/${buscarConInput.value}`);
    const data = await res.json();
    pokemones.value = data;
    //console.log(data)

    stats.value = data.stats.map((stat) => ({
      name: stat.stat.name,
      value: stat.base_stat,
    }));
  } catch (e) {
    Swal.fire({
      title: "Error!",
      text: "escribi bien el nombre pa",
      icon: "error",
    });
    console.log(e);
  }
};

const buscarPokemon = () => {
  if (buscarConInput.value !== "") {
    //por si el usuario ingresa la primera letra en mayuscula haga la busqueda igual
    buscarConInput.value = buscarConInput.value.toLocaleLowerCase();
    cargarPokemonesInput();
    buscarConInput.value = "";
  } else {
    pokemones.value = [];
  }
};

//guardo el pokemon en el localstorage
if (localStorage.getItem("pokemon")) {
  // si existe lo parseo a array(en este caso ya que taras es un array)
  pokemones.value = JSON.parse(localStorage.getItem("pokemon"));
  stats.value = JSON.parse(localStorage.getItem("stats_pokemon"));
}

watchEffect(() => {
  // para vigilar lo reactivo y usar el localstorage hay que usar watcheffect
  localStorage.setItem("pokemon", JSON.stringify(pokemones.value)); // primero lo creo y lo guardo como string
  localStorage.setItem("stats_pokemon", JSON.stringify(stats.value));
});
</script>

<style>
/* importo los colores de los tipos desde estilosSass.css */
@import "../assets/estilosSass.css";

</style>
