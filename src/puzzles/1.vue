<template>
  <div class="column is-two-thirds puzzle-1">
    <div class="content">
      <h1 class="is-bold has-text-primary">game one</h1>
      <div class="block my-6 pb-6 has-background-light">
        <h2 class="is-size-4 py-4">Give me color.</h2>
        <div
          class="is-flex is-justify-content-space-evenly is-align-items-center"
        >
          <div class="next">
            <button
              v-show="count > 0"
              @click="count--"
              class="button my-4 is-primary is-family-secondary"
            >
              &lt;
            </button>
          </div>
          <images :imageSrc="letters[count]" :text="texts[count]" />
          <div class="next">
            <button
              v-show="count < letters.length - 1"
              @click="count++"
              class="button my-4 is-primary is-family-secondary"
            >
              &gt;
            </button>
          </div>
        </div>
      </div>
      <password :pageNumber="1" placeholder="enter password" />
    </div>
    <div class="is-overlay background"></div>
  </div>
</template>

<style lang="scss" scoped>
.background {
  background: #2b2014;
}
.button {
  z-index: 2;
}
.next {
  width: 44px;
}
@include until($tablet) {
  .is-flex {
    flex-direction: column;
  }
}
</style>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Images from "../components/Image.vue";
import Password from "../components/Password.vue";

@Options({
  components: { Images, Password },
})
class Two extends Vue {
  letters = [
    "0",
    "00",
    "001",
    "0011",
    "00110",
    "001100",
    "0011000",
    "00110001",
  ];
  texts = [
    "Relaxing in Chair",
    "The Keyboard",
    "Caught by Surprise",
    "Cat in the Box",
    "The Decoy",
    "Looking Afar",
    "Something Missing",
    "Technology Guru",
  ];
  count = 0;
}
export default Two;
</script>
