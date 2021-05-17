<template>
  <div class="new-todo-wrapper">
    <card>
      <card-item class="card-item-todo">
        <btn icon active class="ma-2"><mdicon name="plus"/></btn>
        <input type="text" class="input-text" placeholder="Add new todo"/>
      </card-item>
    </card>
  </div>
</template>

<script>
export default {};
</script>

<style lang="sass" scoped>
.card-item-todo
    height: 100%
    align-items: center

.new-todo-wrapper
  .card
    width: 256px


.input-text
  width: 32 + 128px
  height: 32px
  border: none
  background: transparent
  transition: all 1s ease
  border-bottom: 1px solid gray
  &:focus
    outline: none
    border-bottom: 1px solid $primary
</style>
