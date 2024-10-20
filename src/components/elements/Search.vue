<template>
    <div class="search">
        <form @submit.prevent="searchMovie" :class="{ 'error': isError }" class="search__form">
            <input type="text" class="search__input" v-model="searchString" @input="clearError"
                :class="{ 'error': isError }">
            <span v-if="isError" class="search__error">{{ error }}</span>
        </form>
        <button @click="clear" class="search__button">Clear</button>
    </div>
</template>
<script setup>
import { ref } from "vue";
import { useMovieStore } from "../../stores/movies_store";

const movieStore = useMovieStore();
const clear = ()=> {
    movieStore.clearMovies();
    movieStore.changePage(1);
    searchString.value = "";
}

const searchString = ref('')
const error = ref('')
const isError = ref(false)

const searchMovie = () => {
    if (searchString.value.length <= 0 || searchString.value.trim() === '') {
        isError.value = true;
        error.value = ('Please enter a movie name');
        return;
    }
    movieStore.clearMovies();
    movieStore.changePage(1);
    movieStore.getMovies(searchString.value);
}
const clearError = () => {
    isError.value = false;
    error.value = '';
}
</script>
<style lang="scss" scoped>
.search {
    width: 50%;
    display: flex;
    justify-content: space-between;
    &__input {
        width: 100%;
        height: 100%;
        border: none;
        outline: none;
        border-radius: .5rem;
        padding: .5rem 1rem .5rem 3rem;
        font-size: 1.6rem;
        min-height: 3rem;
        background-image: url('../../assets/images/icons/icon-search.svg');
        background-position: 1rem center;
        background-repeat: no-repeat;
        background-size: 2rem;

        &.error {
            border: 1px solid red;
        }

        &:focus {
            background-image: none;
        }
    }

    &__form {
        position: relative;
        flex-grow: 1;
    }

    &__error {
        position: absolute;
        top: 109%;
        left: 2%;
        color: red;
        font-size: 1.5rem;
        font-weight: 700;
    }
    &__button {
        border: none;
        outline: none;
        border-radius: .5rem;
        padding: .5rem 1rem;
        font-size: 1.6rem;
        font-weight: 700;
        min-height: 3rem;
        margin-left: 2rem;
    }
}
@media (max-width: 576px) {
    .search {
        width: max-content;
        &__error {
            font-size: 1.2rem;
        }
    }
}
</style>