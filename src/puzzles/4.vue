<template>
  <div class="column is-half puzzle-1">
    <div class="content">
      <h1 class="is-bold has-text-primary my-5">game four</h1>
      <div class="block has-background-light p-6">
        <p class="has-text-justified">
          Thomas has been found dead in his apartment. <br /><br />
          The authorities rush over and quickly apprehend five suspects who had
          access to his abode.
          <br /><br />
          Below are the five suspects:
          <br /><br />
          Jarod: Thomas' landlord <br />
          Kevin: Thomas' barber <br />
          Ricky: Thomas' dealer <br />
          Daryl: Thomas' coworker <br />
          Ottis: Thomas' best friend <br />
          <br />
          A note is found near Thomas' body. On the note is the following:
        </p>
        <div class="note has-text-centered my-6 is-size-3">
          December 1st, January 2nd, March 3rd, July 4th, April 5th
        </div>
      </div>
    </div>
    <password :pageNumber="4" placeholder="who murdered thomas?" />
    <div class="is-overlay background"></div>
  </div>
</template>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Cardo&family=Reenie+Beanie&display=swap");

.background {
  background: #411616;
}

p {
  font-family: "Cardo", serif;
}
.note {
  font-family: "Reenie Beanie", serif;
}
</style>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Password from "../components/Password.vue";

@Options({
  components: { Password },
})
class Four extends Vue {}
export default Four;
</script>
