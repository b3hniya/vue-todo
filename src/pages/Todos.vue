<template>
  <div class="page" v-on:scroll="updateScroll">
    <appbar :scrollPosition="scrollPosition">To-Do</appbar>

    <add-todo class="new-todo-card" />

    <todo-list class="" />
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

.todo-list-wrapper
  @include response-to-size
</style>
