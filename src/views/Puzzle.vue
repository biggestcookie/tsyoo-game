<template>
  <section class="hero is-fullheight">
    <div class="hero-body">
      <div class="container">
        <div class="columns is-centered has-text-centered">
          <transition v-if="progress.hasReachedPage" name="fade">
            <component :is="puzzles[progress.pageNumber]" />
          </transition>
          <div class="column is-half" v-else>
            <div class="content">
              <h2 class="has-text-primary">Nice try.</h2>
              <router-link
                class="button is-primary"
                :to="{
                  name: 'Puzzle',
                  params: { pageNumber: state.reachedPage },
                }"
              >
                Pick up where you left off.
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
.background {
  pointer-events: none !important;
  z-index: -1 !important;
  position: fixed !important;
  width: 100vw !important;
  height: 100vh !important;
  top: 0 !important;
  left: 0 !important;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.7s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-leave-active {
  position: absolute;
}
</style>

<script lang="ts">
import { Component } from "@vue/runtime-core";
import { Options, setup, Vue } from "vue-class-component";
import Password from "../components/Password.vue";
import One from "../puzzles/1.vue";
import Two from "../puzzles/2.vue";
import Three from "../puzzles/3.vue";
import Four from "../puzzles/4.vue";
import Five from "../puzzles/5.vue";
import { store } from "../store";
import { useProgress } from "../use/progress";

Options({
  components: { Password },
});
class Puzzle extends Vue {
  readonly state = store.state;
  puzzles: Record<number, Component> = {
    1: One,
    2: Two,
    3: Three,
    4: Four,
    5: Five,
  };
  progress = setup(() => useProgress());
}

export default Puzzle;
</script>
