<template>
  <nav class="navbar">
    <HeaderNavLeft />
    <HeaderNavRight />
  </nav>
  <!-- /.navbar -->
</template>

<script>
import HeaderNavRight from "@/components/NavbarRightComponent.vue";
import HeaderNavLeft from "@/components/NavbarLeftComponent.vue";
export default {
  name: "HeaderNavbar",
  components: {
    HeaderNavRight,
    HeaderNavLeft,
  },
};
</script>

<style lang="scss" scoped>

</style>