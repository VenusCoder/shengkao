<template>
  <nav-sub />
  <swipper-picture />
 
   
  <router-view />
  <footer-page />
</template>

<script setup lang="ts">
import NavSub from '@/views/home/navsub/Navsub.vue'
import SwipperPicture from '@/component/swipper/SwipperPicture.vue'
// import Home from '@/views/home/Home.vue';
import FooterPage from '@/component/footer/FooterPage.vue'



</script>
<style scoped></style>
