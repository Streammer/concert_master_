<template>
    <div class="profile">
        <img class="profile__image"  src="../../assets/images/profile.png" alt="">
        <p class="profile__name">John Doe</p>
    </div>
</template>
<script setup>
</script>
<style lang="scss" scoped>
.profile {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    font-size: 1.5rem;
    width: max-content;
    &__image {
        max-width: 3rem;
        max-height: 3rem;
    }
    &__name {
        width: max-content;
        white-space: nowrap;
        font-weight: 700;
        margin-left: 1rem;
    }
} 
</style>