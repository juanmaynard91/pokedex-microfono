<template>
  <div class="container centrar-loader">
    <div class="wrapper">
      <div class="circle"></div>
      <div class="circle"></div>
      <div class="circle"></div>
      <div class="shadow"></div>
      <div class="shadow"></div>
      <div class="shadow"></div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
@import "../assets/estilosSass.css";
.container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.centrar-loader {
  display: flex;
  justify-content: center;
  align-items: center;
  
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
