import { defineStore, acceptHMRUpdate } from "pinia";
import { ref, computed } from "vue";
import axios from 'axios';

export const useMovieStore = defineStore("movieStore", () => {
  const movies = ref([]);
  const loader = ref(false);
  const total = ref(0);
  const searchValue = ref('');
  const notFound = ref('');

  const baseUrl = import.meta.env.VITE_PUBLIC_BASE_API_URL;
  const apiKey = import.meta.env.VITE_PRIVATE_API_KEY;

  const getMovies = async (searchString) => {
    loader.value = true;
    await axios.get(baseUrl, {
      params: {
        apikey: apiKey,
        page: 1,
        s:searchString
      }
    })
      .then(response => {
        loader.value = false;
        console.log(response.data)
        if(response.data && response.data.Error && response.data.Response === 'False') {
          notFound.value = response.data.Error
        }
        searchValue.value = searchString
        total.value = response.data.totalResults;
        movies.value = response.data;
        
      })
      .catch(error => {
        loader.value = false;
        console.error('Error fetching movies:', error);
      });
  };

  const searchResult = computed(() => {
    return movies.value.Search
  })

  const clearMovies = () => {
    movies.value = [];
    total.value = 0;
    searchValue.value = '';
    notFound.value = '';
  }

  const setMovies = (data) => {
    movies.value = data;
  }
  return {
    movies,
    setMovies,
    searchResult,
    getMovies,
    searchValue,
    total,
    loader,
    clearMovies,
    notFound
  };

});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useMovieStore, import.meta.hot))
}