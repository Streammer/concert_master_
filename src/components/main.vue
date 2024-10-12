<template>
    <main class="main">
        <Container>
            <div class="main__wrapper">
                <div class="main__title">
                    <h2>Your are searched for:</h2>
                </div>
                <MovieCatalog />
            </div>
        </Container>
    </main>
</template>
<script setup>
import Container from './elements/Container.vue';
import MovieCatalog from './MovieCatalog.vue';
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