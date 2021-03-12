<template>
  <div class="column is-one-third puzzle-1">
    <div class="content">
      <h1 class="is-bold has-text-primary">game two</h1>
      <div class="block my-6">
        <p class="is-family-secondary has-text-primary">
          what is found on water's surface, but is never wet?
        </p>
      </div>
      <password :pageNumber="2" placeholder="enter answer" />
    </div>
    <div class="is-overlay"></div>
  </div>
</template>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Libre+Baskerville&display=swap");

.is-overlay {
  background: #075e5e;
}

p {
  font-family: "Libre Baskerville", serif;
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
