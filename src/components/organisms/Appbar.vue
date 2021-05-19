<template>
  <h1
    class="page-title"
    :class="scrollPosition > 80 ? ' scroll-page-title' : ''"
  >
    <slot />
  </h1>
</template>

<script>
export default {
  props: ["scrollPosition"],
};
</script>

<style lang="sass" scoped>
.page-title
  z-index: 1
  width: 100%
  position: fixed
  font-weight: 900
  box-shadow: none
  padding-top: 64px
  @extend .px-4
  background-color: #f0f0f0
  transition: all 0.2s ease

.scroll-page-title
  padding-bottom: 32px
  box-shadow: 0 1px 5px gray
  transform: translate(0px, -32px)
</style>
