<template>
  <div class="app-container">
    <Container>
      <Header/>
    </Container>
      <Main/>
  </div>
</template>

<script setup>
import axios from 'axios';
import { useMovieStore } from "./stores/movies_store";
import { ref, onMounted } from 'vue';
import Container from './components/elements/Container.vue';
import Header from './components/Header.vue';
import Main from './components/Main.vue';

const baseUrl = import.meta.env.VITE_PUBLIC_BASE_API_URL;
const movieStore = useMovieStore();

const getMovies = async () => {
  await axios.get(baseUrl)
    .then(response => {
      console.log(response.data);
      movieStore.movies = response.data;
    })
    .catch(error => {
      console.error('Error fetching movies:', error);
    });
};

onMounted(() => {
  getMovies();
});
</script>

<style scoped>
.app-container {
  height: 100vh;
  display: flex;
  flex-direction: column;
}
</style>
