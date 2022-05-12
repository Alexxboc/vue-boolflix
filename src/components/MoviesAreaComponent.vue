<template>
  <section class="movies px-5 pb-3">
    <div class="container-fluid">
      <div class="row row-cols-5 gy-5 gx-3">
        <!-- /.co-movie-wrapper -->
        <MovieComponent
          :movie="movie"
          v-for="movie in filterMovies"
          :key="movie.index"
        />
      </div>
      <!-- /.row -->
    </div>
    <!-- /.container-fluid -->
  </section>
</template>

<script>
// import axios from "axios"
import MovieComponent from "@/components/MovieComponent.vue";
import state from "@/state";
export default {
  name: "MainMoviesArea",
  components: {
    MovieComponent,
  },
  data() {
    return {
      movies: [],
      click: false,
    };
  },
  methods: {
    getQuerySearch() {
      this.movies = state.movies;
      console.log(state);
    },
    
  },

  computed: {
    filterMovies() {
      this.getQuerySearch();
      return this.movies.filter((movie) => {
        if (movie.poster_path !== null) {
          return movie;
        }
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.movies {
  width: 100%;
  position: absolute;
  top: 94%;
  left: 0;
}
</style>