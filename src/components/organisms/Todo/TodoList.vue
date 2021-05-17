<template>
  <div class="todo-list-wrapper">
    <component-title> Todos </component-title>

    <div class="todo-list">
      <card class="my-2 row" v-for="(i, index) in 5" :key="index">
        <card-item space_between class="mx-2">
          <card-title>
            test1
          </card-title>
          <tag />
        </card-item>
      </card>
    </div>
  </div>
</template>

<script>
export default {};
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
