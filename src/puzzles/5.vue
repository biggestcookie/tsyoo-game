<template>
  <div class="column is-one-third puzzle-1">
    <div class="content">
      <h1 class="is-bold has-text-primary">game five</h1>
      <p class="has-text-primary">You have all the answers you need.</p>
      <password :pageNumber="5" placeholder="enter keyword" />
    </div>
    <div class="is-overlay background"></div>
  </div>
</template>

<style lang="scss" scoped>
.background {
  background: $black;
}
</style>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Password from "../components/Password.vue";

@Options({
  components: { Password },
})
class Two extends Vue {}
export default Two;
</script>
