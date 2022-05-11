<template>
  <div class="navbar_left d-flex align-items-center">
    <HeaderLogo />
    <HeaderNavMenu/>
  </div>
  <!-- /.navbar_left -->
</template>

<script>
import HeaderNavMenu from "@/components/NavMenuComponent.vue";
import HeaderLogo from "@/components/LogoComponent.vue";
export default {
  name: "HeaderNavLeft",
  components: {
    HeaderNavMenu,
    HeaderLogo
  },
};
</script>

<style lang="scss" scoped>

</style>