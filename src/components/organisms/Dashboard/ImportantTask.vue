<template>
  <div class="important-tasks-wrapper">
    <component-title> Important task </component-title>
    <div class="important-tasks">
      <card v-for="(i, index) in 3" :key="index">
        <card-item space_between>
          <card-title>
            test1
          </card-title>
          <tag />
        </card-item>
        <card-text>
          Lorem ipsum dolor sit amet consectetur adipi sicing elit. Sed eos
          fugit mollitia digni ssimos prov ident volu ptates facilis inventore
          beatae a,
        </card-text>
      </card>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="sass" scoped>
@mixin important-tasks-cards
  .card
    @extend .ma-2
    @extend .pa-2
    max-width: 256 + 128px
    max-height: 256 + 128px
    .card-text
      margin-top: 4px
      text-align: justify
    @media only screen and (max-width: $md)
      max-width: 100%


.important-tasks-wrapper
  margin-top: 128 + 64px



.important-tasks
  display: flex
  flex-wrap: wrap
  justify-content: space-around
  @include important-tasks-cards
  @media only screen and (max-width: $md)
    justify-content: center
</style>
