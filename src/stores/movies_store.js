import { defineStore } from "pinia";
import { ref, computed, watch } from "vue";

export const useMovieStore = defineStore("movieStore", () => {
  const movies = ref([]);
  const setMovies = (data) => {
    movies.value = data;
  }  

  return {
    movies,
  };
});