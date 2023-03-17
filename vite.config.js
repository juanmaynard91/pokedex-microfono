import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import compression from 'vite-plugin-compression'; //npm install vite-plugin-compression --save-dev (para comprimir los archivos)
import cssnano from 'cssnano'; //npm install cssnano --save-dev (comprime css)
import { terser } from 'rollup-plugin-terser'; //npm install terser --save-dev - (SOLUCION: npm install rollup-plugin-terser --save-dev) - (comprime js)

export default defineConfig({
  plugins: [vue(), terser(), cssnano(),
  compression({
    ext: '.br, .js, .css, .html, .svg', // Utiliza el algoritmo de compresión Brotli
    threshold: 10240,
    gzip: {
      flush: require('zlib').constants.Z_SYNC_FLUSH
    },
    deflate: {
      flush: require('zlib').constants.Z_SYNC_FLUSH,
    },
    brotli: {
      quality: 11,
    },
  }),],
  base: "/pokedex-microfono/"
})
