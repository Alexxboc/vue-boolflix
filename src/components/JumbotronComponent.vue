<template>
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
</template>

<script>
export default {
    name: 'MainJumbotron',
}
</script>

<style lang="scss" scoped>
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
</style>