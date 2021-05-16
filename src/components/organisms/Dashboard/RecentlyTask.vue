<template>
  <div class="recently-wrapper">
    <component-title> Recently added </component-title>

    <div class="recently-tasks">
      <card class="" v-for="(i, index) in 5" :key="index">
        <card-item space_between>
          <card-title>
            test1
          </card-title>
          <tag />
        </card-item>
      </card>
    </div>
    
  </div>
</template>

<script>
export default {};
</script>

<style lang="sass">
.recently-wrapper
  margin-top: 64px
  @include response-to-size



.recently-tasks
  @include response-to-size
  .card
    min-width: 128px
    max-width: 100%
    padding-bottom: 0
    @extend .pa-2
    @extend .my-3
    .card-title
      font-size: 20px
      font-weight: 400
    .card-item
      align-items: center
</style>
