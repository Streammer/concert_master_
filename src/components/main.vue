<template>
    <main class="main">
        <Container>
            <div class="main__wrapper">
                <div class="main__title" v-if="searchValue && total">
                    <h2>Your are searched for: {{ searchValue }}, {{ total }} results found.</h2>
                </div>
                <div class="main__title" v-else-if="notFound && notFound.length">
                    <h2>{{notFound}}</h2>
                </div>
                <div class="main__title" v-else>
                    <h2>Enter the movie title in the input field to get a list of movies.</h2>
                </div>
                <Loader v-if="loader" />
                <MovieCatalog v-else />
            </div>
        </Container>
    </main>
</template>
<script setup>
import Container from './elements/Container.vue';
import MovieCatalog from './MovieCatalog.vue';
import Loader from './elements/Loader.vue';

import { useMovieStore } from "../stores/movies_store";
import { computed } from "vue";

const movieStore = useMovieStore();
const searchValue = computed(() => movieStore.searchValue);
const total = computed(() => movieStore.total);
const loader = computed(() => movieStore.loader);
const notFound = computed(() => movieStore.notFound);

</script>
<style lang="scss" scoped>
.main {
    height: 100%;
    &__wrapper {
        padding: 2.5rem 3rem;
        display: flex;
        flex-direction: column;
        gap: 3rem;
    }

    &__title {
        font-size: 1.8rem;
        font-weight: 700;
    }
}
</style>