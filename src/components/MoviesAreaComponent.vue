<template>
  <section class="movies px-5 pb-3">
    <div class="container-fluid">
      <div class="row row-cols-5 gy-5 gx-3">
        <!-- /.co-movie-wrapper -->
        <MovieComponent  :movie="movie" v-for="movie in filterMovies" :key="movie.index"/>
      </div>
      <!-- /.row -->
    </div>
    <!-- /.container-fluid -->
  </section>
</template>

<script>
import axios from "axios"
import MovieComponent from "@/components/MovieComponent.vue";
export default {
  name: "MainMoviesArea",
  components: {
    MovieComponent,
  },
  data() {
    return {
      API_MOVIE:
        "https://api.themoviedb.org/3/search/movie?api_key=c08439fe63fd73db5098990b644bc2a5&language=it-IT&page=1&include_adult=false&query=",
      API_SERIE:
        "https://api.themoviedb.org/3/search/tv?api_key=c08439fe63fd73db5098990b644bc2a5&language=it-IT&page=1&include_adult=false&query=",
      response: null,
      movies: [],
      search: "",
      click: false,
    };
  },
  methods: {
    callApi() {
      if (this.search !== "") {
        let apiOne = `${this.API_MOVIE}${this.search.toLowerCase()}`;
        let apiTwo = `${this.API_SERIE}${this.search.toLowerCase()}`;
        const requestOne = axios.get(apiOne);
        const requestTwo = axios.get(apiTwo);
        axios
          .all([requestOne, requestTwo])
          .then((responses) => {
            // console.log(responses);
            const responseOne = responses[0].data.results;
            const responseTwo = responses[1].data.results;
            // console.log(responseOne, responseTwo);
            // console.log(responses.data.results);
            this.movies = [...responseOne, ...responseTwo];
            // console.log(state.movies);
          })
          .catch((errors) => {
            console.error(errors);
          });
        this.search = "";
      }
    },
    homeCallApi() {
      this.search = "marvel";
      this.callApi();
      this.search = "";
    },
  },

  mounted() {
    this.search = "marvel";
    this.callApi();
  },
  computed: {
    filterMovies() {
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
  position: absolute;
  top: 94%;
  left: 0;
}
</style>