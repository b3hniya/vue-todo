<template>
  <p class="text-lg big-tag">
    <slot />
    <mdicon name="close" v-if="close" />
    <mdicon name="plus" v-else />
  </p>
</template>

<script>
export default {
  props: {
    close: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="sass">
.big-tag
    @extend .px-2
    @extend .py-1
    @extend .row
    border-radius: 50px
    @extend .justify-between
    background-color: $primary
    color: $main-light !important
    span
      margin-left: 16px
      @include main-hover-anim
</style>
