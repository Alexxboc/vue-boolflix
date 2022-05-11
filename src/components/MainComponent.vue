<template>
  <main class="p_relative">
    <MainJumbotron />
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
</template>

<script>
import Rate from "../../node_modules/vue-rate/src/Rate.vue";
import MainJumbotron from "@/components/JumbotronComponent.vue";

export default {
  name: "SiteMain",
  components: {
    Rate,
    MainJumbotron,
  },
  data() {
    return {
      movies: null,
    };
  },
props: {
    filterMovies: Array,
},
  methods: {},
};
</script>

<style lang="scss" scoped>
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