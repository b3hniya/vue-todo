<template>
  <input type="text" class="input-text" :placeholder="placeholder" />
</template>

<script>
export default {
  props: {
    placeholder: {
      type: String,
      default: "put text here",
    },
  },
};
</script>

<style lang="sass" scoped>
.input-text
  width: 100%
  height: 32px
  border: none
  background: transparent
  transition: all 1s ease
  border-bottom: 1px solid gray
  &:focus
    outline: none
    border-bottom: 1px solid $primary
</style>
