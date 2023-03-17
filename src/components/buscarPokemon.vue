<template>
  <div class="acomodar-app">
    <header>
      <navbar />
    </header>

    <main class="container">
      <div class="centrar-buscadores">
        <form @submit.prevent="buscarPokemon">
          <div class="input-group mt-3 mb-3">
            <input type="text" class="form-control input border_black" placeholder="Ingrese el nombre del pokemon.." aria-label="Recipient's username" aria-describedby="button-addon2" v-model.trim="buscarConInput" />
          </div>
        </form>

        <button class="btn btn-primary btn-mic" v-if="mostrarMic" @click="activandoMicrofono" aria-label="microfono">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-mic-fill" viewBox="0 0 16 16"><path d="M5 3a3 3 0 0 1 6 0v5a3 3 0 0 1-6 0V3z" /><path d="M3.5 6.5A.5.5 0 0 1 4 7v1a4 4 0 0 0 8 0V7a.5.5 0 0 1 1 0v1a5 5 0 0 1-4.5 4.975V15h3a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1h3v-2.025A5 5 0 0 1 3 8V7a.5.5 0 0 1 .5-.5z" /></svg>
        </button>
      </div>

      <transition name="list">
        <card :pokemones="pokemones" :stats="stats" />
      </transition>
    </main>

    <footer>
      <piePagina />
    </footer>
  </div>
</template>

<script setup>
// instalar con npm para que la app funcione sin internet en vez de usar link o script en html
import piePagina from "../components/piePagina.vue";
import card from "../components/card.vue";
import navbar from "../components/navbar.vue";
import { ref, watchEffect, onMounted } from "vue";
import Swal from "sweetalert2"; // alert

const pokemones = ref({});
const pokeApi = "https://pokeapi.co/api/v2/pokemon";
const buscarConInput = ref("");
const stats = ref([]);
const microfono = ref("");
const mostrarMic = ref(true);

//la solucion para que la pagina tarde en cargar
await new Promise((res) => setTimeout(res, 1000));

const cargarPokemonesInput = async () => {
  try {
    const res = await fetch(`${pokeApi}/${buscarConInput.value}`);
    const data = await res.json();
    pokemones.value = data;

    stats.value = data.stats.map((stat) => ({
      name: stat.stat.name,
      value: stat.base_stat,
    }));
  } catch (e) {
    Swal.fire({
      title: "Error!",
      text: "Escribi bien el nombre pa",
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

const activandoMicrofono = async () => {
  try {
    const recognition = new window.webkitSpeechRecognition();
    recognition.lang = "es-ES";
    recognition.start();
    recognition.onresult = (event) => {
      microfono.value = event.results[0][0].transcript;
      cargarPokemonesMicrofono();
    };
  } catch (e) {
    console.error(e);
  }
};

const cargarPokemonesMicrofono = async () => {
  microfono.value = microfono.value.toLocaleLowerCase();
  try {
    const res = await fetch(`${pokeApi}/${microfono.value}`);
    const data = await res.json();
    pokemones.value = data;

    stats.value = data.stats.map((stat) => ({
      name: stat.stat.name,
      value: stat.base_stat,
    }));
  } catch (e) {
    console.log("habla bien pa", e);
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

onMounted(() => {
  //por si el microfono no es compatible con el navegador
  if (!("webkitSpeechRecognition" in window)) {
    mostrarMic.value = false;
  }
});
</script>

<style>
/* importo los colores de los tipos desde estilosSass.css */
@import "../assets/estilosSass.css";
</style>
