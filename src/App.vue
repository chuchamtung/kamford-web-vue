<script setup>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
</script>

<template>
  <div class="header"><Header /></div>
  <router-view></router-view>
  <div class="footer"><Footer /></div>
</template>
