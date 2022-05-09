<template>
  <div id="app">
    <header>
      <nav class="navbar p-3 bg-light">
        <div class="logo">BOOLFLIX</div>
        <!-- /.logo -->
        <div class="search">
          <input type="text" />
          <button>Search</button>
        </div>
        <!-- /.search -->
      </nav>
      <!-- /.navbar -->
    </header>
    <main>
      <div class="movie" v-for="movie in movies" :key="movie.id">
        <ul>
          <li>Titolo: {{movie.title}}</li>
          <li>Titolo originale: {{movie.original_title}}</li>
          <li>Lingua: {{movie.original_language}}</li>
          <li>Voto: {{movie.vote_average}}</li>
        </ul>
      </div>
      <!-- /.movie -->
    </main>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "App",
  components: {},
  data() {
    return {
      API_URL:
        "https://api.themoviedb.org/3/search/movie?api_key=c08439fe63fd73db5098990b644bc2a5&language=it-IT&page=1&include_adult=false&query=marvel",
      response: null,
      movies: null,
    };
  },
  methods: {
    callApi() {
      axios
        .get(this.API_URL)
        .then((response) => {
          //   console.log(response);
          this.movies = response.data.results;
          console.log(this.movies);
          this.loading = false;
        })
        .catch((error) => {
          console.log(error);
          this.error = `  OPS! ${error.message}`;
        });
    },
  },
  mounted() {
    this.callApi();
  },
};
</script>

<style lang="scss">
@import "@/assets/scss/style.scss";
</style>
