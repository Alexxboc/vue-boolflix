<template>
  <div class="col">
    <div class="movie_card position-relative" @mouseover="toggleCastTrue">
      <img
        :src="'https://image.tmdb.org/t/p/w500' + movie.poster_path"
        alt="movie poster"
        class="w-100"
      />
      <div class="overview p-3" @mouseleave="toggleCastFalse">
        <div class="more_info">
          <font-awesome-icon
            icon="fa-solid fa-plus text_white"
          />
        </div>
        <!-- /.more_info -->
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
        <div class="language" v-else-if="movie.original_language === 'en'">
          <span class="p_1_imp fw-bold">Lingua Originale:</span
          ><country-flag :country="'gb'" size="small" />
        </div>
        <div class="language" v-else>
          <span class="p_1_imp fw-bold">Lingua Originale:</span>
          <country-flag :country="movie.original_language" size="small" />
        </div>
        <div class="cast_info d-flex mt-3">
          <span class="fw-bold">Actors:</span> 
            <ul class="unstyled d-flex ps-1">
              <li class="fs_10" v-for="(actor, index) in castList" :key="index">
               {{actor.name}},
              </li>
            </ul>
        </div>
        <!-- /.cast_info -->
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
</template>

<script>
import axios from "axios";
import Rate from "../../node_modules/vue-rate/src/Rate.vue";
export default {
  name: "MovieComponent",
  components: {
    Rate,
  },
  props: {
    movie: Object,
  },
  data() {
    return {
      togglePlus: false,
      movie_id: "",
      castList: [],
      // API_URL: `https://api.themoviedb.org/3/movie/${this.movie_id}/credits?api_key=c08439fe63fd73db5098990b644bc2a5&language=it-IT`,
    };
  },
  methods: {
    toggleCastTrue() {
      // console.log("toggle");
      if(this.togglePlus === false){
        this.togglePlus = true;
        this.movie_id = this.movie.id;
        this.callApi();
        console.log(this.togglePlus);
        // console.log(this.movie_id);
      }
      
      
      
      
    },

    toggleCastFalse() {
      if(this.togglePlus === true) {
        this.togglePlus = false;
        console.log(this.togglePlus);
      }
    },

    callApi() {
      axios
        .get(
          `https://api.themoviedb.org/3/movie/${this.movie_id}/credits?api_key=c08439fe63fd73db5098990b644bc2a5&language=it-IT`
        )
        .then((response) => {
          const castResponse = response.data.cast;
          // console.log(castResponse);
          castResponse.forEach((castName) => {
            if (this.castList.length < 5) {
              this.castList.push(castName);
            }
          });
          
        }).catch(error => {
          console.error(error)
        })
    },
  },
};
</script>

<style lang="scss" scoped>
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
    justify-content: start;
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

  .more_info {
    position: absolute;
    top: 5px;
    right: 10px;
  }
}
</style>
