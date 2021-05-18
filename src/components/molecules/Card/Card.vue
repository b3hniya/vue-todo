<template>
  <div class="card">
    <slot> </slot>
  </div>
</template>

<script>
export default {};
</script>

<style lang="sass" scoped>
.card
    min-width: 128px
    max-width: 512px
    min-height: 64px
    max-height: 512px
    border-radius: 8px
    box-shadow: 2px 2px 4px gray
    background-color: $secondary-light
</style>
