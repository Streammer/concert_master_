import { defineStore, acceptHMRUpdate } from "pinia";
import { ref, computed } from "vue";
import axios from 'axios';

export const useMovieStore = defineStore("movieStore", () => {
  const movies = ref([]);
  const loader = ref(false);
  const total = ref(0)

  const baseUrl = import.meta.env.VITE_PUBLIC_BASE_API_URL;
  const apiKey = import.meta.env.VITE_PRIVATE_API_KEY;

  const getMovies = async (searchString) => {
    loader.value = true;
    console.log(searchString);
    await axios.get(baseUrl, {
      params: {
        apikey: apiKey,
        page: 1,
        s:searchString
      }
    })
      .then(response => {
        console.log(response.data);
        total.value = response.data.totalResults;
        movies.value = response.data;
        loader.value = false;
      })
      .catch(error => {
        loader.value = false;
        console.error('Error fetching movies:', error);
      });
  };

  const searchResult = computed(() => {
    return movies.value.Search
  })

  const setMovies = (data) => {
    movies.value = data;
  }
  return {
    movies,
    setMovies,
    searchResult,
    getMovies,
  };

});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useMovieStore, import.meta.hot))
}