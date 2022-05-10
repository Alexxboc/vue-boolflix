<template>
  <div id="app">
    <header
      class="bg_dark_transparent py-1 px-5 fixed-top"
      :class="{ change_color: scrollPosition > 50 }"
      @mouseleave="isClickedFalse"
    >
      <div class="container-fluid">
        <nav class="navbar">
          <div class="navbar_left d-flex align-items-center">
            <div class="logo" @click="homeCallApi">
              <img width="150px" src="@/assets/logo-alexx.png" alt="logo" />
            </div>
            <!-- /.logo -->
            <div class="nav_menu">
              <ul class="unstyled d-flex m-0">
                <li>
                  <a href="#" class="decor_none text_light active">Home</a>
                </li>
                <li class="ms-2">
                  <a href="#" class="decor_none text_light">Serie TV</a>
                </li>
                <li class="ms-2">
                  <a href="#" class="decor_none text_light">Film</a>
                </li>
                <li class="ms-2">
                  <a href="#" class="decor_none text_light">Nuovi e popolari</a>
                </li>
                <li class="ms-2">
                  <a href="#" class="decor_none text_light">La mia lista</a>
                </li>
                <li class="ms-2">
                  <a href="#" class="decor_none text_light"
                    >Audio e sottotitoli</a
                  >
                </li>
              </ul>
            </div>
            <!-- /.nav_menu -->
          </div>
          <!-- /.navbar_left -->
          <div class="navbar_right">
            <div class="search d-flex align-items-center">
              <div
                class="text-white"
                :class="click === true ? 'search_glass' : ''"
              >
                <a
                  @mouseover="isClickedTrue"
                  @click="callApi"
                  class="btn_search decor_none text_white"
                  ><font-awesome-icon icon="fa-solid fa-magnifying-glass" />
                </a>
              </div>

              <input
                class="input_search text-left d-none"
                :class="click === true ? 'd_block' : ''"
                type="text"
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
        </nav>
        <!-- /.navbar -->
      </div>
      <!-- /.container -->
    </header>
    <main class="p_relative">
      <section class="jumbotron d-flex flex-column justify-content-center p-5">
        <div class="jumbotron_info">
          <div class="jumbototron_img mb-5">
            <img width="800" src="@/assets/netflix-serie.png" alt="logo" />
          </div>
          <!-- /.jumbototron_img -->
          <div class="movie_description text_white">
            <h2 class="fs-2 text_shadow">Oggi al n 1 tra i film</h2>
            <p class="w_40 fs-3 text_shadow">
              La scomparsa di un ragazzino in una cittadina porta alla luce un
              mistero in cui si mescolano esperimenti segreti, spaventose forze
              soprannaturali e una strana bambina.
            </p>
          </div>
          <!-- /.movie_description -->
        </div>
        <!-- /.jumbotron_info -->
        <div class="jumbotron_player d-flex justify-content-between">
          <div class="player_left">
            <button
              type="button"
              class="btn bg_white px-4 d-inline-flex align-items-center"
            >
              <font-awesome-icon
                class="jumbo_icon"
                icon="fa-solid fa-play"
              /><span class="ms-2 fs-3">Riproduci</span>
            </button>
            <button
              type="button"
              class="
                btn
                px-4
                bg_btn_transp
                text_white
                ms-3
                d-inline-flex
                align-items-center
              "
            >
              <font-awesome-icon
                class="jumbo_icon"
                icon="fa-solid fa-circle-info"
              /><span class="ms-2 fs-3">Altre info</span>
            </button>
          </div>
          <!-- /.player_left -->
          <div
            class="age text_white d-flex align-items-center ps-3 py-1 pe-5 fs-4"
          >
            VM14
          </div>
          <!-- /.player_right -->
        </div>
        <!-- /.jumbotron_player -->
      </section>
      <!-- /.jumbotron -->
      <section class="movies px-5 pb-3">
        <div class="container-fluid">
          <div class="row row-cols-5 gy-5 gx-3">
            <!-- /.co-movie-wrapper -->
            <div class="col" v-for="movie in filterMovies" :key="movie.id">
              <div class="movie_card position-relative">
                <img
                  :src="'https://image.tmdb.org/t/p/w500' + movie.poster_path"
                  alt="movie poster"
                  class="w-100"
                />
                <div class="overview p-3">
                  <div class="movie_title" v-if="movie.title">
                    <span class="fw-bold">Titolo:</span> {{ movie.title }}
                  </div>
                  <div class="movie_title" v-else>
                    <span class="fw-bold">Titolo:</span> {{ movie.name }}
                  </div>
                  <div class="original_title" v-if="movie.original_title">
                    <span class="fw-bold">Titolo originale:</span>
                    {{ movie.original_title }}
                  </div>
                  <div class="original_title" v-else>
                    <span class="fw-bold">Titolo originale:</span>
                    {{ movie.original_name }}
                  </div>
                  <div class="language" v-if="movie.original_language === ''">
                    <span class="fw-bold">Lingua:</span>
                    {{ movie.original_language }}
                  </div>
                  <div
                    class="language"
                    v-else-if="movie.original_language === 'en'"
                  >
                    <span class="p_1_imp fw-bold">Lingua Originale:</span
                    ><country-flag :country="'gb'" size="small" />
                  </div>
                  <div class="language" v-else>
                    <span class="p_1_imp fw-bold">Lingua Originale:</span>
                    <country-flag
                      :country="movie.original_language"
                      size="small"
                    />
                  </div>
                  <div class="vote_average d-flex align-items-center">
                    <span class="me-2 fw-bold">Voto:</span>
                    <Rate
                      :length="5"
                      :value="Math.round(Number(movie.vote_average) / 2)"
                      :readonly="true"
                    ></Rate>
                  </div>
                  <!-- /.vote_average -->
                  <p class="fs_10">{{ movie.overview }}</p>
                </div>
                <!-- /.overview -->
              </div>
              <!-- /.movie_card -->
            </div>
            <!-- /.col movie -->
          </div>
          <!-- /.row -->
        </div>
        <!-- /.container-fluid -->
      </section>
    </main>
  </div>
</template>

<script>
import axios from "axios";
import Rate from "../node_modules/vue-rate/src/Rate.vue";
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
      click: false,
      scrollPosition: null,
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

        this.search = "";
      }
    },

    homeCallApi() {
      this.search = "marvel";
      this.callApi();
    },

    isClickedTrue() {
      // console.log('click');
      if (this.click === false) {
        this.click = true;
      }
      console.log(this.click);
    },

    isClickedFalse() {
      // console.log('click');
      if (this.click === true) {
        this.click = false;
      }
      console.log(this.click);
    },
  },
  updateScroll() {
    this.scrollPosition = window.scrollY;
  },

  mounted() {
    this.search = "marvel";
    this.callApi();
    window.addEventListener("scroll", this.updateScroll);
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

<style lang="scss">
@import "@/assets/scss/style.scss";

/* Header */

.change_color {
  background-color: $netflix-bg-dark;
}

.navbar_left {
  .logo {
    cursor: pointer;
  }
  .nav_menu {
    a:hover {
      color: $netflix-white;
      cursor: pointer;
    }
  }
}

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

/* Jumbotron */
.jumbotron {
  background-image: url(https://images3.alphacoders.com/882/thumb-1920-882548.jpg);
  height: 900px;
  background-size: cover;
  background-position: bottom;
  border-radius: 1.5rem;
  p {
    line-height: 2rem;
  }
  .jumbo_icon {
    font-size: 35px !important;
  }
  .age {
    border-left: 4px solid $netflix-white;
    position: absolute;
    right: 0;
    background-color: #222628c2;
  }

  .player_left {
    button:hover {
      filter: brightness(0.8);
    }
  }
}

/* Movies */

.movies {
  position: absolute;
  top: 94%;
  left: 0;
}

.movie_card {
  cursor: pointer;
  img {
    aspect-ratio: 1 / 1;
    object-fit: cover;
    object-position: top;
    border-radius: 1rem;
  }
  .overview {
    width: 100%;
    height: 100%;
    border-radius: 1rem;
    background-color: #000000cc;
    z-index: 1;
    flex-direction: column;
    color: white;
    justify-content: center;
    align-items: flex-start;
    position: absolute;
    top: 0;
    left: 0;
    display: none;
    transition: all 2s;
  }

  &:hover .overview {
    display: flex;
  }
  &:hover {
    transform: scale(1.2);
    transition: all 2s;
    z-index: 1;
  }

  p {
    overflow-y: scroll;
  }
}
</style>