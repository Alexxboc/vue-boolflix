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
      <div class="container-fluid">
        <div class="row row-cols-5">
          <!-- /.co-movie-wrapper -->
          <div
            v-show="movie.poster_path !== null"
            class="col"
            v-for="movie in movies"
            :key="movie.id"
          >
            <img
              :src="'https://image.tmdb.org/t/p/w300' + movie.poster_path"
              alt=""
            />
            <ul>
              <li v-if="movie.title">Titolo: {{ movie.title }}</li>
              <li v-else>Titolo: {{ movie.name }}</li>
              <li v-if="movie.original_title">
                Titolo originale: {{ movie.original_title }}
              </li>
              <li v-else>Titolo originale: {{ movie.original_name }}</li>
              <li v-if="movie.original_language === ''">
                Lingua: {{ movie.original_language }}
              </li>
              <li v-else-if="movie.original_language === 'en'">
                <country-flag :country="'gb'" size="small" />
              </li>
              <li v-else>
                <country-flag :country="movie.original_language" size="small" />
              </li>

              <li>Voto:{{ Math.round(Number(movie.vote_average) / 2) }}</li>
              <Rate :length="5" :value="Math.round(Number(movie.vote_average) / 2)" :readonly="true"></Rate>
            </ul>
          </div>
          <!-- /.col movie -->
        </div>
        <!-- /.row -->
      </div>
      <!-- /.container-fluid -->
    </main>
  </div>
</template>

<script>
import axios from "axios";
import Rate from "../node_modules/vue-rate/src/Rate.vue"
export default {
  name: "App",
  components: {
    Rate,
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
    };
  },
  methods: {
    callApi() {
      if(this.search !== '') {
        let apiOne = `${this.API_MOVIE}${this.search.toLowerCase()}`;
      let apiTwo = `${this.API_SERIE}${this.search.toLowerCase()}`;
      const requestOne = axios.get(apiOne);
      const requestTwo = axios.get(apiTwo);
      
        axios
        .all([requestOne, requestTwo])
        .then((responses) => {
          console.log(responses);
          const responseOne = responses[0].data.results;
          const responseTwo = responses[1].data.results;
          console.log(responseOne, responseTwo);
          // console.log(responses.data.results);
          this.movies = [...responseOne, ...responseTwo];
        })

        .catch((errors) => {
          console.error(errors);
        });

        this.search = '';
      }
      
    },
  },
  mounted() {},
  computed: {},
};
</script>

<style lang="scss">
@import "@/assets/scss/style.scss";

</style>