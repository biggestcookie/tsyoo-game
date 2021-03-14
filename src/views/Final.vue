<template>
  <section class="hero is-fullheight">
    <div class="hero-body">
      <div class="container">
        <div class="columns is-centered has-text-centered">
          <div class="column is-half">
            <h1 class="is-size-1 has-text-success">YOU ARE WINNER!</h1>
            <audio autoplay id="audio">
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
                    >
                      and
                    </span>
                    <span v-if="state.hintUsed[index]">used a hint </span>
                    on question {{ index }}.
                  </span>
                </div>
              </div>
              <p class="has-text-info">
                You completed this in
                {{ formatMsToTime(new Date().getTime() - startTime) }}
              </p>
              <h1 class="has-text-warning">CONGRATULATIONS!!</h1>
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
.drip {
  height: 40vh;
}
</style>

<script lang="ts">
import { Vue } from "vue-class-component";
import { Store } from "../store";

class Final extends Vue {
  private readonly state = Store.state;
  startTime: number;

  beforeMount() {
    this.startTime = Number(localStorage.getItem("startTime"));
  }

  mounted() {
    if (this.state.reachedPage < 6) {
      this.$router.push("/");
    }

    const audio = document.getElementById("audio") as HTMLAudioElement;
    audio.volume = 0.2;
  }

  formatMsToTime(timeInMiliseconds: number) {
    let h, m, s;
    h = Math.floor(timeInMiliseconds / 1000 / 60 / 60);
    m = Math.floor((timeInMiliseconds / 1000 / 60 / 60 - h) * 60);
    s = Math.floor(((timeInMiliseconds / 1000 / 60 / 60 - h) * 60 - m) * 60);

    return `${h} hours, ${m} minutes, and ${s} seconds`;
  }
}

export default Final;
</script>
