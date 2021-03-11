<template>
  <form @submit="checkAnswer()" v-on:submit.prevent.self class="is-flex">
    <input
      class="input has-text-primary mr-4"
      type="text"
      v-model="answer"
      :placeholder="placeholder"
    />
    <input type="submit" value="enter" />
  </form>
  <span v-if="isWrong" class="has-text-warning">Try again.</span>
</template>

<style lang="scss">
.input {
  background: none !important;
  &::placeholder {
    color: $grey-light !important;
  }
}
</style>

<script lang="ts">
import { answers } from "../use/answers";
import { defineComponent } from "vue";
import { Store } from "../store";

export default defineComponent({
  data: () => ({
    answer: "",
    isWrong: false,
  }),
  props: {
    pageNumber: Number,
    placeholder: String,
  },
  methods: {
    checkAnswer() {
      if (this.answer.toLowerCase() === answers[this.pageNumber!]) {
        Store.setPageReached(this.pageNumber! + 1);
        this.$router.push({
          name: "Puzzle",
          params: {
            pageNumber: Store.state.reachedPage,
          },
        });
      } else {
        this.isWrong = true;
        Store.addWrongGuess(this.pageNumber!);
      }
    },
  },
});
</script>
