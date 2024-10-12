<template>
    <div class="search">
        <input type="text" class="search__input">
    </div>
</template>
<script setup>
</script>
<style lang="scss" scoped>
    .search {
        width: 50%;
        &__input {
            width: 100%;
            height: 100%;
            border: none;
            outline: none;
            border-radius: .5rem;
            padding: .5rem 1rem;
            font-size: 1.6rem;
            min-height: 3rem;
        }
    }
</style>