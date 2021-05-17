<template>
  <div class="page" v-on:scroll="updateScroll">
    <appbar :scrollPosition="scrollPosition">Tags</appbar>

    <div class="tags">
      <big-tag v-for="(i, index) in 10" :key="index" close> test-tag </big-tag>
      <big-tag> add new tag </big-tag>
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
.tags
  @extend .row
  flex-wrap: wrap
  @include response-to-size
  margin-top: 128 + 64px
  .big-tag
    @extend .mx-2
</style>
