<template>
  <router-view v-slot="{ Component }">
    <transition name="wipe">
      <component :is="Component" />
    </transition>
  </router-view>
</template>

<style lang="scss">
body {
  display: block;
}
.wipe-enter-active,
.wipe-leave-active {
  transition: opacity 0.7s ease;
}

.wipe-enter-from,
.wipe-leave-to {
  opacity: 0;
}
</style>

<script lang="ts">
import { Vue } from "vue-class-component";

class App extends Vue {}

export default App;
</script>
