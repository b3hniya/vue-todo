<template>
  <p class="card-title"><slot></slot></p>
</template>

<script>
export default {};
</script>

<style lang="sass" scoped>
.card-title
    @extend h6
    font-weight: 400
    text-transform: capitalize
</style>
