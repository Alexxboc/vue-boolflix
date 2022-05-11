<template>
  <div class="nav_menu">
    <ul class="unstyled d-flex m-0">
      <li class="ms-2" v-for="(menu, index) in menuList" :key="index">
        <a
          href="#"
          class="decor_none text_light"
          :class="menu.name === 'Home' ? 'active' : ''"
          >{{ menu.name }}</a
        >
      </li>
    </ul>
  </div>
  <!-- /.nav_menu -->
</template>

<script>
export default {
  name: "HeaderNavMenu",
  data() {
    return {
      menuList: [
        { name: "Home" },
        { name: "Serie TV" },
        { name: "Film" },
        { name: "Nuovi e popolari" },
        { name: "La mia lista" },
        { name: "Audio e sottotitoli" },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.nav_menu {
  a:hover {
    color: $netflix-white;
    cursor: pointer;
  }
}
</style>