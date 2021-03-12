<template>
  <section class="hero is-fullheight">
    <div class="hero-body">
      <div class="container">
        <div class="columns is-centered has-text-centered">
          <div class="column is-one-third">
            <p class="title has-text-primary is-uppercase is-1">tsyoo game</p>
            <h2 class="has-text-grey-light is-size-5 my-4">Rules</h2>
            <div class="content has-text-left has-text-grey-light">
              <p>1. Google is allowed.</p>
              <p>2. Developer tools / inspecting code is not.</p>
              <p>3. You must send proof upon completion.</p>
            </div>
            <div class="is-flex is-justify-content-space-evenly">
              <button
                v-if="!hasProgress"
                @click="start()"
                :class="{ 'is-loading': loading }"
                class="appear button has-text-primary"
              >
                Start
              </button>
              <router-link
                v-else
                :class="{ 'is-loading': loading }"
                class="button is-primary"
                :to="{
                  name: 'Puzzle',
                  params: { pageNumber: state.reachedPage },
                }"
              >
                Continue
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-if="!hasProgress" class="is-overlay fader"></div>
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
.fader {
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
  readonly state = Store.state;
  loading = false;
  hasProgress = this.state.reachedPage > 0;

  progress = setup(() => useProgress());

  start() {
    this.loading = true;
    if (!this.progress.hasReachedPage) {
      Store.setPageReached(1);
      localStorage.setItem("startTime", new Date().getTime().toString());
    }
    this.$router.push({
      name: "Puzzle",
      params: {
        pageNumber: Store.state.reachedPage,
      },
    });
  }
}

export default Home;
</script>
