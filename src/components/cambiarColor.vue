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
  $color-letra-blanco: #fff;
  
  body {
    .card {
      background: #e0e0e0;
    }
    nav {
      background-color: #e0e0e0;
    }
    footer {
      background-color: #e0e0e0;
      a {
        color: #000;
      }
      a:hover {
        color: #000;
      }
    }
    .form-control {
      background: #fff;
      color : #000;
    }
  }
  
  body[theme="dark"] {
    filter: invert(1);
  }
  
  .dark {
    .card {
      background: #202020;
      p, span, .color-letra {
        color: $color-letra-blanco;
      }
    }
    nav {
      background-color: #202020;
    }
    .burger span {
      background : $color-letra-blanco;
    }
    footer {
      background-color: #202020;
      h3, p , a {
        color : $color-letra-blanco;
      }
      a:hover {
        color: $color-letra-blanco;
      }
    }
    .form-control {
      background: #202020;
      color : $color-letra-blanco;
    }
  }
  
  button {
    --button_color: #0575e6;
    --button_outline_color: #000000;
    --button_radius: 0.75em;
    background: var(--button_outline_color);
    border-radius: var(--button_radius);
    border: none;
    font-size: 12px;
    font-weight: bold;
  }
  
  .button_top {
    background: var(--button_color);
    border-radius: var(--button_radius);
    border: 2px solid var(--button_outline_color);
    box-sizing: border-box;
    color: #fff;
    display: block;
    padding: 0.75em 1.5em;
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