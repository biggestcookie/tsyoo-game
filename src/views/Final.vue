<template>
  <section class="hero is-fullheight">
    <div class="hero-body">
      <div class="container">
        <div class="columns is-centered has-text-centered">
          <div class="column is-half">
            <h1 class="is-size-1 has-text-success">YOU ARE WINNER!</h1>
            <img src="/assets/images/drip.png" />
            <audio id="audio">
              <source src="/assets/scrubs.mp3" type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
            <div class="content">
              <div class="block justified">
                <div v-for="index in 5" :key="index">
                  <span
                    v-if="state.wrongGuesses[index] || state.hintUsed[index]"
                    class="has-text-primary"
                  >
                    You
                    <span v-if="state.wrongGuesses[index]">
                      had {{ state.wrongGuesses[index] }} wrong guesses</span
                    >
                    <span
                      v-if="state.wrongGuesses[index] && state.hintUsed[index]"
                      >and</span
                    >
                    <span v-if="state.hintUsed[index]"> used a hint </span>
                    on question {{ index }}.
                  </span>
                </div>
              </div>
              <h1 class="has-text-warning">CONGRATULATIONS!!</h1>
              <p class="has-text-info">
                Send this page to bigcookie to collect your prize :^)
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.hero {
  background-image: url("https://www.zingerbug.com/Backgrounds/background_images/starry_sky_glitter_background_seamless.gif");
  background-repeat: repeat;
}
</style>

<script lang="ts">
import { Vue } from "vue-class-component";
import { Store } from "../store";

class Final extends Vue {
  private readonly state = Store.state;

  mounted() {
    const audio = document.getElementById("audio") as HTMLAudioElement;
    audio.volume = 0.2;
  }
}

export default Final;
</script>
