<template>
  <form @submit="checkAnswer()" v-on:submit.prevent.self class="is-flex">
    <input
      class="input has-text-primary mr-4"
      type="text"
      v-model="answer"
      :placeholder="placeholder"
    />
    <input type="submit" value="enter" :class="{ 'is-loading': loading }" />
  </form>
  <div class="my-4">
    <span v-if="isWrong" class="wrong has-text-danger">
      {{ wrongMessages[messageIndex] }}
    </span>
    <a
      :class="isWrong ? 'has-text-warning' : 'has-text-primary'"
      v-if="!showHint"
      @click="showHint = true"
    >
      Need a hint?
    </a>
    <hint :pageNumber="pageNumber" :showHint="showHint" />
  </div>
</template>

<style lang="scss">
.input {
  background: none !important;
  &::placeholder {
    color: $grey-light !important;
  }
}
a:hover {
  text-decoration: underline;
}
</style>

<script lang="ts">
import { defineComponent } from "vue";
import Hint from "../components/Hint.vue";
import { store } from "../store";
import { answers } from "../use/answers";

export default defineComponent({
  components: {
    Hint,
  },
  data: () => ({
    answer: "",
    isWrong: false,
    showHint: false,
    wrongMessages: ["Try again.", "No, try again."],
    loading: false,
  }),
  props: {
    pageNumber: { type: Number, required: true },
    placeholder: { type: String, required: true },
  },
  computed: {
    messageIndex(): number {
      return store.state.wrongGuesses[this.pageNumber!.toString()] % 2;
    },
  },
  methods: {
    checkAnswer() {
      this.loading = true;
      if (this.answer.toLowerCase() === answers[this.pageNumber!]) {
        store.setPageReached(this.pageNumber! + 1);
        this.$router.push(
          store.state.reachedPage > 5
            ? "/final"
            : {
                name: "Puzzle",
                params: {
                  pageNumber: store.state.reachedPage,
                },
              }
        );
      } else {
        this.isWrong = true;
        store.addWrongGuess(this.pageNumber!);
      }
      this.loading = false;
    },
  },
});
</script>
