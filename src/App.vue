<template>
  <div class="app-container">
    <Container>
      <Header/>
    </Container>
      <Main/>
  </div>
</template>

<script setup>
import { useMovieStore } from "./stores/movies_store";
import { ref, onMounted } from 'vue';
import Container from './components/elements/Container.vue';
import Header from './components/Header.vue';
import Main from './components/Main.vue';


</script>

<style scoped>
.app-container {
  height: 100vh;
  display: flex;
  flex-direction: column;
}
</style>
