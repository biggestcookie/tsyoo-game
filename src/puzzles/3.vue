<template>
  <div class="column is-three-quarters puzzle-1">
    <div class="content">
      <h1 class="is-bold has-text-success my-5">game three</h1>
      <div class="block">
        <div
          class="clocks has-text-success is-flex is-justify-content-space-between is-justify-content-space-between my-6"
        >
          <div class="is-size-4">
            {{
              currentDate.toLocaleTimeString("en-US", {
                timeZone: "America/Los_Angeles",
              })
            }}
          </div>
          <div class="is-size-4">
            {{
              currentDate.toLocaleTimeString("en-US", {
                timeZone: "America/Anchorage",
              })
            }}
          </div>
          <div class="is-size-4">
            {{
              currentDate.toLocaleTimeString("en-US", {
                timeZone: "America/Chicago",
              })
            }}
          </div>
          <div class="is-size-4">
            {{
              currentDate.toLocaleTimeString("en-US", {
                timeZone: "America/New_York",
              })
            }}
          </div>
        </div>
        <password :pageNumber="3" placeholder="enter keyword" />
      </div>
    </div>
    <div class="is-overlay background"></div>
  </div>
</template>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Libre+Baskerville&display=swap");

.background {
  background: #09061f;
}
</style>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Password from "../components/Password.vue";

@Options({
  components: { Password },
})
class Three extends Vue {
  currentDate = new Date();

  mounted() {
    setInterval(() => (this.currentDate = new Date()), 1000);
  }
}
export default Three;
</script>
