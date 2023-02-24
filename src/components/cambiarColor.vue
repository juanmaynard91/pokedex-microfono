<template>
    <button id="theme" @click="changeDarkMode">
      <span class="button_top">Dark / Light</span>
    </button>
  </template>
  
  <script setup>
  import { ref } from "vue";
  
  //inicializo variable y le digo que el body tenga la clase dark por defecto
  const toggleDarkMode = ref(document.body.className === "dark");
  
  const changeDarkMode = () => {
    toggleDarkMode.value = document.body.classList.toggle("dark");
    toggleDarkMode.value ? (localStorage.theme = "dark") : (localStorage.theme = "light");
  };
  
  if (localStorage.theme === "dark") {
    document.body.classList.add("dark");
  } else {
    document.body.classList.remove("dark");
  }
  </script>
  
  <style lang="scss">
  /* npm sass porque al final tuve que agregar color con scss el npm con Tailwind no funciona*/  
  $color-letra-card: #fff;
  
  body {
    /*background: #0575e6;*/
    background-size: 200% 200%;
    background-image: linear-gradient(to right, #00c6ff, #0072ff);
    animation: bg-animado 5s linear infinite alternate;
  
    .card {
      background: #e0e0e0;
    }
  }
  
  body[theme="dark"] {
    filter: invert(1);
  }
  
  .dark {
    /*background-color: #03001e !important;*/
    background-image: linear-gradient(to right, #1e3c72, #2a5298) !important;
    .card {
      background: #757f9a;
      p, span, .color-letra {
        color: $color-letra-card;
      }
    }
  }
  
  @keyframes bg-animado {
    from {
      background-position: 0, 0;
    }
    to {
      background-position: 100% 100%;
    }
  }
  
  button {
    --button_radius: 0.75em;
    --button_color: #0575e6;
    --button_outline_color: #000000;
    font-size: 12px;
    font-weight: bold;
    border: none;
    border-radius: var(--button_radius);
    background: var(--button_outline_color);
  }
  
  .button_top {
    display: block;
    box-sizing: border-box;
    border: 2px solid var(--button_outline_color);
    border-radius: var(--button_radius);
    padding: 0.75em 1.5em;
    background: var(--button_color);
    color: #fff;
    transform: translateY(-0.2em);
    transition: transform 0.1s ease;
  }
  
  button:hover .button_top {
    transform: translateY(-0.33em);
  }
  
  button:active .button_top {
    transform: translateY(0);
  }
  
  @media (max-width: 360px){
    button {
    font-size: 10px;
    }
  }
  </style>