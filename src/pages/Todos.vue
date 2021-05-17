<template>
  <div class="page" v-on:scroll="updateScroll">
    <appbar :scrollPosition="scrollPosition">To-Do</appbar>

    <new-todo class="new-todo-card" />

    <todo-list class="response-to-side" />
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
.new-todo-card
    margin-top: 64 + 128px
    @include response-to-size
</style>
