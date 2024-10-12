<template>
    <div class="pagination">
        {{ total }}
    </div>
</template>
<script setup>
const props = defineProps({
    total: { type: Number, required: true }
})

</script>
<style lang="scss" scoped>
.pagination {
    width: max-content;
    font-size: 1.6rem;
    font-weight: 700;
    margin: 0 auto;
}
</style>