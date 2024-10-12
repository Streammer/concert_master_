import { ref, computed } from "vue";
import { useMovieStore } from "../stores/movies_store";

export default function handlePagination() {
    const movieStore = useMovieStore();
    const total = computed(() => movieStore.total);

    let page = ref(1);

    const data = Array.from({ length: +total.value }, (_, i) => {
        return { index: i + 1, value: i + 1 };
    });

    const perPage = 10;

    // const paginatedData = computed(() =>
    //     data.slice((page.value - 1) * perPage, page.value * perPage)
    // );

    const nextPage = () => {
        if (page.value !== Math.ceil(data.length / perPage)) {
            page.value += 1;
        }
    };
    const backPage = () => {
        if (page.value !== 1) {
            page.value -= 1;
        }
    };
    const goToPage = (numPage) => {
        page.value = numPage;
    };

    return { data, perPage, page, nextPage, backPage, goToPage };
}
