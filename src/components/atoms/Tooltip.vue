<template>
  <div class="tooltip">
    <slot name="activator"></slot>
    <slot></slot>
  </div>
</template>

<script>
export default {};
</script>

<style lang="sass" scoped>
.tooltip
  display: flex
  align-items: center
  span
        z-index: 1
        opacity: 0
        padding: 8px
        @extend .ma-6
        min-width: 64px
        @extend .text-xs
        text-align: center
        border-radius: 8px
        visibility: hidden
        position: absolute
        color: $secondary-light
        transition: all 0.3s linear
        background-color: $secondary-dark

  &:hover
    span
        opacity: 1
        visibility: visible
</style>
