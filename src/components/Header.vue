<template>
    <header class="header">
        <div class="header__content">
            <h1 class="header__title">Movie catalog</h1>
            <Search />
            <Profile />
        </div>
    </header>
</template>

<script setup>
import Search from './elements/Search.vue';
import Profile from './elements/Profile.vue';
</script>
<style lang="scss" scoped>
 .header {
     width: 100%;
     background-color: lightblue;
     padding: 1rem 3rem;
     &__content {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    &__title {
        font-size: 2rem;
        width: max-content;
    }
 }
</style>