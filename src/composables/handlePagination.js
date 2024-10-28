export default function handlePagination(total, page, changePage) {

    const data = Array.from({ length: +total }, (_, i) => {
        return { index: i + 1, value: i + 1 };
    });

    const perPage = 10;

    const nextPage = () => {
        if (page !== Math.ceil(data.length / perPage)) {
            changePage(page + 1);
        }
    };
    const backPage = () => {
        if (page !== 1) {
            changePage(page - 1);
        }
    };
    const goToPage = (numPage) => {
        changePage(numPage);
    };

    return { data, perPage, nextPage, backPage, goToPage };
}
