<template>
  <main class="p_relative">
    <MainJumbotron />
   <MainMoviesArea />
  </main>
</template>

<script>

import MainJumbotron from "@/components/JumbotronComponent.vue";
import MainMoviesArea from "@/components/MoviesAreaComponent.vue"

export default {
  name: "SiteMain",
  components: {
    MainJumbotron,
    MainMoviesArea,
    
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


</style>