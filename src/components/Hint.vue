<template>
  <div>
    <span class="has-text-info" v-if="showHint"> {{ hints[pageNumber] }}</span>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { store } from "../store";
import { hints } from "../use/answers";

export default defineComponent({
  props: {
    showHint: { type: Boolean, required: true },
    pageNumber: { type: Number, required: true },
  },
  data: () => ({
    hints: hints,
  }),
  watch: {
    showHint(value: boolean) {
      if (value) {
        store.addHintUsed(this.pageNumber);
      }
    },
  },
});
</script>
