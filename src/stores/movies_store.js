import { defineStore } from "pinia";
import { ref, computed, watch } from "vue";

export const useMovieStore = defineStore("movieStore", () => {
  const movies = ref([]);

  const searchResult = computed(()=> {
    return movies.value.Search
  })

  const setMovies = (data) => {
    movies.value = data;
  }  

  return {
    movies,
    setMovies,
    searchResult
  };
  
});