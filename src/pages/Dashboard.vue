<template>
  <div class="page" v-on:scroll="updateScroll">
    <appbar :scrollPosition="scrollPosition">Dashboard</appbar>

    <div class="dashboard">
      <important-task />

      <recently-task />
    </div>
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

<style lang="sass" scoped>
.dashboard
  @include response-to-size
</style>
