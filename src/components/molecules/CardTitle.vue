<template>
  <p class="card-title"><slot></slot></p>
</template>

<script>
export default {};
</script>

<style lang="sass">
.card-title
    @extend h4
    margin: 0 0 8px 0
    text-transform: capitalize
</style>
