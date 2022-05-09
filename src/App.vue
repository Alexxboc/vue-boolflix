<template>
  <div id="app">
    <header>
      <nav class="navbar p-3 bg-light">
        <div class="logo">BOOLFLIX</div>
        <!-- /.logo -->
        <div class="search">
          <input type="text" v-model="search" @keyup.enter="callApi" />
          <button @click="callApi">Search</button>
        </div>
        <!-- /.search -->
      </nav>
      <!-- /.navbar -->
    </header>
    <main>
      <div class="movie" v-for="movie in movies" :key="movie.id">
        <ul>
          <li>Titolo: {{ movie.title }}</li>
          <li>Titolo originale: {{ movie.original_title }}</li>
          <li v-if="movie.original_language === '' ">Lingua: {{ movie.original_language }}</li>
          <li v-else-if="movie.original_language === 'en'"><country-flag  :country="'gb'" size='small'/></li>
          <li v-else><country-flag :country='movie.original_language' size='small'/></li>
          

          <li>Voto: {{ movie.vote_average }}</li>
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
        "https://api.themoviedb.org/3/search/movie?api_key=c08439fe63fd73db5098990b644bc2a5&language=it-IT&page=1&include_adult=false&query=",
      response: null,
      movies: [],
      search: "",
    };
  },
  methods: {
    callApi() {
      axios
        .get(`${this.API_URL}${this.search.toLowerCase()}`)
        .then((response) => {
          // console.log(response);
          this.movies = response.data.results;
          // console.log(this.movies);
        })
        .catch((error) => {
          console.log(error);
          this.error = `OPS! ${error.message}`;
        });
    },
  },
  mounted() {},
  computed: {
    
  },
};
</script>

<style lang="scss">
@import "@/assets/scss/style.scss";
</style>