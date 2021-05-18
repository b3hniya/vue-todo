<template>
  <p class="card-text">
    <slot></slot>
  </p>
</template>

<script>
export default {};
</script>

<style lang="sass" scoped>
.card-text
    @extend .text-md
</style>
