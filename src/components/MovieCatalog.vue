<template>
    <div class="movie-catalog">
        <Movie v-for="item in movies" :key="item.imdbID" :item="item" />
    </div>
</template>
<script setup>
import { useMovieStore } from "../stores/movies_store";
import Movie from './Movie.vue';

const movieStore = useMovieStore();
const movies = movieStore.searchResult;
</script>
<style scoped>
.movie-catalog {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
    gap: 1rem;
}
</style>