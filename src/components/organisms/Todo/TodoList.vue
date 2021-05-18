<template>
  <div class="todo-list-wrapper">
    <component-title> Todos </component-title>

    <div class="todo-list">
      <card class="my-2 row" v-for="(todo, index) in todos" :key="index">
        <card-item space_between class="mx-2">
          <card-title>
            {{ todo.name }}
          </card-title>
          <tag />
        </card-item>
      </card>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState(["todos"]),
  },
};
</script>

<style lang="sass" scoped>
.todo-list-wrapper
  margin-top: 64px


.card
  max-width: 100%
  min-width: 128px
  .card-title
    margin: 0
    font-size: 18px
  .card-item
    width: 100%
    align-items: center
</style>
