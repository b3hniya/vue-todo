<template>
  <div class="important-tasks-wrapper">
    <component-title> Important todos </component-title>
    <div class="important-tasks">
      <card v-for="(todo, index) in importantTodo" :key="index">
        <card-item space_between>
          <card-title>
            {{ todo.name }}
          </card-title>
          <tag :color="todo.tag.color" />
        </card-item>
        <card-text>
          {{ todo.description }}
        </card-text>
      </card>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: mapGetters({ importantTodo: "getImportantTodos" }),
};
</script>

<style lang="sass" scoped>
@mixin important-tasks-cards
  .card
    @extend .ma-2
    @extend .pa-2
    max-width: 256 + 128px
    max-height: 256 + 128px
    .card-text
      margin-top: 4px
      text-align: justify
    @media only screen and (max-width: $md)
      max-width: 100%


.important-tasks-wrapper
  margin-top: 128 + 64px



.important-tasks
  display: flex
  flex-wrap: wrap
  justify-content: space-around
  @include important-tasks-cards
  @media only screen and (max-width: $md)
    justify-content: center
</style>
