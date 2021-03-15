<template>
  <div class="mb-6">
    <div>
      <p>&ldquo;{{ text }}&rdquo;</p>
    </div>
    <figure class="image">
      <!-- <img class="frame" src="/assets/images/frame.png" /> -->
      <div class="overlay">
        <img
          :src="'/assets/images/' + imageSrc + '.png'"
          draggable="false"
          v-on:contextmenu.prevent.self
          @contextmenu="alerting()"
        />
      </div>
      <div>
        <img
          :src="'/assets/images/' + imageSrc + '.jpg'"
          v-on:contextmenu.prevent.self
        />
      </div>
    </figure>
  </div>
</template>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Libre+Baskerville&display=swap");
::-moz-selection {
  background: $blue;
}
::selection {
  background: $blue;
}

.image {
  margin-top: 4em !important;
  width: 240px;
  height: 240px;
  .frame {
    width: 348px;
    max-width: 400px;
    height: 348px;
    position: absolute;
    left: -53px;
    top: -53px;
    user-drag: none;
    -webkit-user-drag: none;
    position: absolute;
  }
  .overlay {
    user-select: none;
    user-drag: none;
    -moz-user-select: none;
    -webkit-user-drag: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    position: absolute;
    top: 0;
    left: 0;
  }
}
p {
  font-family: "Libre Baskerville", serif;
}
</style>

<script lang="ts">
import { defineComponent } from "vue";
import { Store } from "../store";

export default defineComponent({
  data: () => ({
    str: "/assets/images/0.jpg",
  }),
  props: {
    imageSrc: String,
    text: String,
  },
  watch: {
    showHint(value: boolean) {
      if (value) {
        Store.addHintUsed(this.pageNumber!);
      }
    },
  },
  methods: {
    alerting() {
      alert("No saving.");
    },
  },
});
</script>
