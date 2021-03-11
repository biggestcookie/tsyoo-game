<template>
  <div>
    <span class="has-text-info" v-if="showHint"> {{ hints[pageNumber] }}</span>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Store } from "../store";
import { hints } from "../use/answers";

export default defineComponent({
  props: {
    showHint: Boolean,
    pageNumber: Number,
  },
  data: () => ({
    hints: hints,
  }),
  watch: {
    showHint(value: boolean) {
      if (value) {
        Store.addHintUsed(this.pageNumber!);
      }
    },
  },
});
</script>
