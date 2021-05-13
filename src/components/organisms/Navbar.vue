<template>
  <div class="navbar">
    <list-item>
      <item class="py-4">
        <mdicon name="vuejs" />
      </item>

      <button-group vertical>
        <btn icon class="my-1">
          <mdicon name="vuejs" />
        </btn>
        <btn icon class="my-1">
          <mdicon name="vuejs" />
        </btn>
        <btn icon class="my-1">
          <mdicon name="vuejs" />
        </btn>
      </button-group>

      <item class="my-4">
        <btn icon>
          <mdicon name="vuejs" />
        </btn>
      </item>
    </list-item>
  </div>
</template>

<script>
export default {};
</script>

<style lang="sass">
.navbar
    width: 64px
    height: 100vh
    background-color: $secondary-light
    .list-item
        height: 100vh
        @extend .column
        @extend .justify-between
        align-items: center
</style>
