<template>
    <div class="movie-catalog">
        <Movie v-for="item in moviesToShow" :key="item.imdbID" :item="item" />
    </div>
</template>
<script setup>
import { computed } from "vue";
import { useMovieStore } from "../stores/movies_store";
import Movie from './Movie.vue';

const movieStore = useMovieStore();
// const searchResult = movieStore.searchResult;
const searchResult = computed(() => movieStore.searchResult);
const moviesCatalog = JSON.parse(localStorage.getItem("movieStore"));

const moviesToShow = searchResult !== undefined ? searchResult : moviesCatalog;
</script>
<style scoped>
.movie-catalog {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
    gap: 1rem;
}
</style>