<template>
  <p class="component-title">
    <slot />
  </p>
</template>

<script>
export default {};
</script>

<style lang="sass" scoped>
.component-title
  @extend h3
  font-weight: 700
</style>