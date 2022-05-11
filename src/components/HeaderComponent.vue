<template>
  <header
    class="bg_dark_transparent py-1 px-5 fixed-top"
  >
    <div class="container-fluid">
      <nav class="navbar">
        <div class="navbar_left d-flex align-items-center">
          <div class="logo" @click="$emit('homePageQuery')">
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
              class="text-white search_glass"
            >
              <a
                @click="$emit('apiRequest')"
                
                class="btn_search decor_none text_white"
                ><font-awesome-icon icon="fa-solid fa-magnifying-glass" />
              </a>
            </div>

            <input
              class="input_search text-left"
              type="search"
              @keyup.enter="$emit('searchValue')"
              @input="$emit('input', $event.target.value)"
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
</template>

<script>
export default {
  name: "SiteHeader",
};
</script>

<style lang="scss" scoped>
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
</style>