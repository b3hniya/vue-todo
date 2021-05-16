<template>
  <div class="dashboard" v-on:scroll="updateScroll">
    <appbar :scrollPosition="scrollPosition">Dashboard</appbar>

    <important-task class="response-to-side" />

    <recently-task class="response-to-side" />
  </div>
</template>

<script>
export default {
  data: () => ({
    scrollPosition: 0,
  }),

  methods: {
    updateScroll(e) {
      this.scrollPosition = e.srcElement.scrollTop;
    },
  },
};
</script>

<style lang="sass">
.response-to-side
  @include response-to-size

.dashboard
  height: 100vh
  width: 100vw
  @extend .column
  overflow-x: hidden
</style>
