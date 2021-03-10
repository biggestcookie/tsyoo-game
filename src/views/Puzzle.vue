<template>
  <section class="hero is-fullheight">
    <div class="hero-body">
      <div class="container">
        <div class="columns is-centered has-text-centered">
          <component
            v-if="progress.progressed"
            :is="puzzles[progress.pageNumber]"
          />
          <div v-else>
            You haven't made it here yet! Go back.
            <router-link
              class="button"
              :to="{
                name: 'Puzzle',
                params: { pageNumber: state.reachedPages },
              }"
            >
              Go back
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { Component } from "vue";
import { Options, setup, Vue } from "vue-class-component";
import One from "../puzzles/01.vue";
import { Store } from "../store";
import { useProgress } from "../use/progress";

const puzzleComponents: { [key: number]: Component } = {
  1: One,
};

Options({
  components: puzzleComponents,
});
class Puzzle extends Vue {
  readonly state = Store.state;
  puzzles = puzzleComponents;
  progress = setup(() => useProgress());
}

export default Puzzle;
</script>
