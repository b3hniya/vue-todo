<template>
  <div class="page" v-on:scroll="updateScroll">
    <appbar :scrollPosition="scrollPosition">Tags</appbar>

    <div class="tags row">
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
  flex-wrap: wrap
  margin-top: 128 + 64px
  @include response-to-size
  .big-tag
    @extend .mx-2
</style>
