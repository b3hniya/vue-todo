<template>
  <div class="recently-wrapper">
    <component-title> Recently added </component-title>

    <div class="recently-tasks">
      <card class="my-2 row" v-for="(todo, index) in recentlyTodos" :key="index">
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
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters({ recentlyTodos: "getRecentlyTodos" }),
  },
};
</script>

<style lang="sass" scoped>
.recently-wrapper
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
