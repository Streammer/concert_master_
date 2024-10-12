<template>
    <div class="movie">
        <img :src="item.Poster && item.Poster !== 'N/A' ? item.Poster : '/no-image.png'" alt="Movie Image" class="movie__image">
        <div class="movie__info">
            <p><span class="text-bold">Name:</span> {{ item.Title }}</p>
            <p><span class="text-bold">Year:</span> {{ item.Year }}</p>
            <p><span class="text-bold">imdbID</span>: {{ item.imdbID }}</p>
            <p><span class="text-bold">Type:</span> {{ item.Type }}</p>
        </div>

    </div>
</template>
<script setup>
const props = defineProps({
    item: { type: Object, required: true }
})
</script>
<style lang="scss">
.text-bold {
    font-weight: 700;
}
.movie {
    min-width: 20rem;
    width: 100%;
    min-height: 15rem;
    font-size: 1.6rem;
    border-radius: .5rem;

    &__image {
        object-fit: cover;
        border-radius: .5rem;
        margin-bottom: 1rem;
    }

    &__info {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        padding: 0 0.5rem;
    }
}
</style>