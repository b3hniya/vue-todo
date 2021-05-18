<template>
  <div class="page" v-on:scroll="updateScroll">
    <appbar :scrollPosition="scrollPosition">Tags</appbar>

    <div class="tags row">
      <big-tag
        v-for="(tag, index) in tags"
        :key="index"
        close
        :color="tag.color"
        class="ma-2"
      >
        {{ tag.name }}
      </big-tag>
      <big-tag class="ma-2" @click="test()"> add new tag </big-tag>

      <add-tags @close="close()" :acti="clicked" />
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  data: () => ({
    scrollPosition: 0,
    clicked: false,
  }),

  methods: {
    updateScroll(e) {
      this.scrollPosition = e.srcElement.scrollTop;
    },
    test() {
      this.clicked = !this.clicked;
    },

    close() {
      this.clicked = false;
    },
  },

  computed: {
    ...mapState(["tags"]),
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
