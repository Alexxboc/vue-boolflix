<template>
  <div class="navbar_right">
    <div class="search d-flex align-items-center">
      <div class="text-white search_glass">
        <a @click="callApi" class="btn_search decor_none text_white"
          ><font-awesome-icon icon="fa-solid fa-magnifying-glass" />
        </a>
      </div>

      <input
        class="input_search text-left"
        type="search"
        v-model="search"
        @keyup.enter="callApi"
        placeholder="Titoli, persone, generi"
      />

      <a href="#" class="text_white fs-5 ms-3"
        ><font-awesome-icon icon="fa-solid fa-bell"
      /></a>
      <div class="avatar ms-3">
        <img src="@/assets/avatar.jpeg" alt="avatar" />
      </div>
      <!-- /.avatar -->
    </div>
    <!-- /.search -->
  </div>
  <!-- /.navbar_right -->
</template>

<script>
import state from "@/state.js";
import axios from "axios";
export default {
  name: "HeaderNavRight",
  data() {
    return {
      API_MOVIE:
        "https://api.themoviedb.org/3/search/movie?api_key=c08439fe63fd73db5098990b644bc2a5&language=it-IT&page=1&include_adult=false&query=",
      API_SERIE:
        "https://api.themoviedb.org/3/search/tv?api_key=c08439fe63fd73db5098990b644bc2a5&language=it-IT&page=1&include_adult=false&query=",
      response: null,
      search: "",
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
            console.log(responseOne, responseTwo);
            // console.log(responses.data.results);
            state.movies = [...responseOne, ...responseTwo];
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
};
</script>

<style lang="scss" scoped>
.navbar_right {
  .avatar {
    img {
      height: 50px;
      aspect-ratio: 1 / 1;
      object-fit: cover;
      border-radius: 50%;
      border: 1px solid white;
    }
  }
  input {
    border-radius: 0 1rem 1rem 0;
  }
  .search_glass {
    cursor: pointer;
    height: 42px;
    border-bottom: 1px solid $netflix-white;
    border-left: 1px solid $netflix-white;
    border-top: 1px solid $netflix-white;
    border-radius: 1rem 0 0 1rem;
    padding: 0 1rem;
    background-color: rgb(81 81 81 / 19%);
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .btn_search {
    cursor: pointer;
  }
}
</style>