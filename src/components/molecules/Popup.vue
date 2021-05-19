<template>
  <div class="add-tags" :class="show ? 'showPanel' : ''">
    <slot />
  </div>
</template>

<script>
export default {
  props: ["show"],
};
</script>

<style lang="sass" scoped>
.add-tags
    top: 0
    left: 0
    z-index: 2
    width: 100vw
    height: 100vh
    position: fixed
    @include centerize
    background: rgba(0, 0, 0, 0.5)
    visibility: hidden
    .card
      transition: all 0.1s linear
      transform: translateY(200%)
      .card-title
        margin-top: 32px

.showPanel
  visibility: visible
  .card
        transform: translateY(0%)
        transition: all 0.1s linear
</style>
