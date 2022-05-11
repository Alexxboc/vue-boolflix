<template>
  <header class="bg_dark py-1 px-5 fixed-top">
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
 
};
</script>

<style lang="scss" scoped>
.change_color {
  background-color: $netflix-bg-dark;
}


</style>