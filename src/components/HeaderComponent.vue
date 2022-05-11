<template>
  <header class="bg_dark_transparent py-1 px-5 fixed-top" :class="scrollPosition > 60 ? 'change_color' : '' ">
    <div class="container-fluid">
      <HeaderNavbar />
    </div>
    <!-- /.container -->
  </header>
</template>

<script>
import HeaderNavbar from "@/components/HeaderNavbarComponent.vue"


export default {
  name: "SiteHeader",
  components: {
    HeaderNavbar
  },
  data() {
    return {
      scrollPosition: null,
    }
  },
  methods: {
    updateScroll() {
      this.scrollPosition = window.scrollY;
    }
  },
  mounted() {
    window.addEventListener('scroll', this.updateScroll);
  }
 
};
</script>

<style lang="scss" scoped>
.change_color {
  background-color: $netflix-bg-dark;
}


</style>