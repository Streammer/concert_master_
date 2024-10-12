<template>
    <div class="movie-catalog">
        <Movie v-for="item in searchResult" :key="item.imdbID" :item="item" />
    </div>
        <Pagination v-if="total" :total="Number(total)"/>
</template>
<script setup>
import { computed } from "vue";
import { useMovieStore } from "../stores/movies_store";
import Movie from './Movie.vue';
import Pagination from './elements/Pagination.vue';

const movieStore = useMovieStore();
const searchResult = computed(() => movieStore.searchResult);
const total = computed(() => movieStore.total);
</script>
<style scoped>
.movie-catalog {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
    gap: 1rem;
}
</style>