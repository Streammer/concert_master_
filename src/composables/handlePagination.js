import { computed } from "vue";
import { useMovieStore } from "../stores/movies_store";

export default function handlePagination() {
    const movieStore = useMovieStore();
    const total = computed(() => movieStore.total);
    const page = computed(() => movieStore.page);
    const changePage = (data) => {
        movieStore.changePage(data);
    };

    const data = Array.from({ length: +total.value }, (_, i) => {
        return { index: i + 1, value: i + 1 };
    });

    const perPage = 10;

    const nextPage = () => {
        if (page.value !== Math.ceil(data.length / perPage)) {
            changePage(page.value + 1);
        }
    };
    const backPage = () => {
        if (page.value !== 1) {
            changePage(page.value - 1);
        }
    };
    const goToPage = (numPage) => {
        changePage(numPage);
    };

    return { data, perPage, nextPage, backPage, goToPage };
}
