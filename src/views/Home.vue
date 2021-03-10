<template>
  <section class="hero is-fullheight">
    <div class="hero-body">
      <div class="container">
        <div class="columns is-centered has-text-centered">
          <div class="column is-half">
            <p class="title has-text-primary is-uppercase is-1">tsyoo game</p>
            <div class="is-flex is-justify-content-space-evenly">
              <button
                @click="start()"
                class="button has-text-primary"
                :class="{ appear: !progress.hasProgress }"
              >
                Start
              </button>
              <router-link
                class="button is-primary"
                v-if="progress.hasProgress"
                :to="{
                  name: 'Puzzle',
                  params: { pageNumber: state.reachedPages },
                }"
              >
                Continue
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-if="!progress.hasProgress" class="is-overlay"></div>
  </section>
</template>

<style lang="scss" scoped>
.hero {
  background: rgb(16, 17, 20);
  background: linear-gradient(
    0deg,
    rgba(16, 17, 20, 1) 0%,
    rgba(10, 35, 57, 1) 100%
  );
}
</style>

<style lang="scss">
.is-overlay {
  z-index: 1;
  pointer-events: none;
  background: black;
  opacity: 0;
  animation: fadeInOpacity ease-out 3s;

  @keyframes fadeInOpacity {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }
}

.appear {
  animation: appear 0s 3s forwards;
  visibility: hidden;

  @keyframes appear {
    to {
      visibility: visible;
    }
  }
}
</style>

<script lang="ts">
import { setup, Vue } from "vue-class-component";
import { Store } from "../store";
import { useProgress } from "../use/progress";

class Home extends Vue {
  private readonly state = Store.state;

  progress = setup(() => useProgress());

  start() {
    if (!this.progress.hasProgress) {
      Store.setPageReached(1);
      localStorage.setItem("startTime", new Date().getTime().toString());
    }
    this.$router.push({
      name: "Puzzle",
      params: {
        pageNumber: Store.state.reachedPages,
      },
    });
  }
}

export default Home;
</script>
