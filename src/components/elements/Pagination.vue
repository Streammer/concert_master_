<template>
    <div class="pagination">
        <div class="pagination__buttons">
            <button @click="handlePrevPage" :disabled="isFirstPage" class="pagination__button-prev">prev</button>
            <button 
                v-for="item in visiblePages" 
                :key="item" 
                @click="() => handlePageClick(item)"
                :class="['pagination__button', { active: item === page }]"
                :disabled="item === page"
            >
                {{ item }}
            </button>
            <button v-if="showDots" disabled class="pagination__button">...</button>
            <button @click="handleNextPage" :disabled="isLastPage" class="pagination__button-next">next</button>
        </div>
    </div>
</template>

<script setup>
import { computed } from "vue";
import handlePagination from "../../composables/handlePagination";
import { useMovieStore } from "../../stores/movies_store";

const movieStore = useMovieStore();
const page = computed(() => movieStore.page);

const { data, perPage, nextPage, backPage, goToPage } = handlePagination();

const totalPages = computed(() => Math.ceil(data.length / perPage));
const showDots = computed(() => totalPages.value > 10);

const isFirstPage = computed(() => page.value === 1);
const isLastPage = computed(() => page.value === totalPages.value);

const visiblePages = computed(() => {
    if (totalPages.value <= 10) {
        return Array.from({ length: totalPages.value }, (_, i) => i + 1);
    } else {
        const currentPage = page.value;
        if (currentPage <= 6) {
            return [...Array.from({ length: 7 }, (_, i) => i + 1), '...', totalPages.value];
        } else if (currentPage >= totalPages.value - 5) {
            return [1, '...', ...Array.from({ length: 7 }, (_, i) => totalPages.value - 6 + i)];
        } else {
            return [1, '...', currentPage - 1, currentPage, currentPage + 1, '...', totalPages.value];
        }
    }
});

const handlePageClick = (item) => {
    if (item !== '...') {
        goToPage(item);
    }
};

const handlePrevPage = () => {
    if (!isFirstPage.value) {
        backPage();
    }
};

const handleNextPage = () => {
    if (!isLastPage.value) {
        nextPage();
    }
};
</script>

<style lang="scss" scoped>
.pagination {
    &__buttons {
        margin: 0 auto;
        width: max-content;
        display: flex;
        gap: 1rem;
        font-size: 1.6rem;
    }
    &__items {
        margin: 0 auto;
        width: max-content;
        display: flex;
        gap: 1rem;
        font-size: 1.6rem;
        margin-bottom: 2rem;
    }
    &__button,
    &__button-prev,
    &__button-next {
        border: none;
        outline: none;
        background-color: transparent;
        padding: 0.5rem;
    }
    &__button.active {
        background-color: lightblue;
        color: white;
        border-radius: .3rem;
    }
    &__button-prev:disabled,
    &__button-next:disabled {
        opacity: 0.5;
        cursor: not-allowed;
    }
}
</style>
