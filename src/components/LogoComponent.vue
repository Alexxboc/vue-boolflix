<template>
  <div class="logo" @click="callApi">
    <img width="150px" src="@/assets/logo-alexx.png" alt="logo" />
  </div>
  <!-- /.logo -->
</template>

<script>
import axios from "axios";
import state from "@/state.js"
export default {
  name: "HeaderLogo",
  data() {
    return {
      API_MOVIE:
        "https://api.themoviedb.org/3/search/movie?api_key=c08439fe63fd73db5098990b644bc2a5&language=it-IT&page=1&include_adult=false&query=",
      API_SERIE:
        "https://api.themoviedb.org/3/search/tv?api_key=c08439fe63fd73db5098990b644bc2a5&language=it-IT&page=1&include_adult=false&query=",
      response: null,
      search: "marvel",
    };
  },
  methods: {
    callApi() {
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
          console.log(responseOne, responseTwo);
          // console.log(responses.data.results);
          state.movies = [...responseOne, ...responseTwo];
          // console.log(state.movies);
        })
        .catch((errors) => {
          console.error(errors);
        });
      this.search = "";
    },
  },
};
</script>

<style lang="scss" scoped>
.logo {
  cursor: pointer;
}
</style>