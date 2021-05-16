<template>
  <div class="important-tasks-wrapper">
    <component-title> Important task </component-title>
    <div class="important-tasks">
      <card class="pa-2 mx-2 my-2" v-for="(i, index) in 3" :key="index">
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
    max-width: 256 + 128px
    max-height: 256 + 128px
    .card-title
      font-weight: 400
    .card-text
      margin-top: 4px
      text-align: justify
    @media only screen and (max-width: $md)
      max-width: 100%


.important-tasks-wrapper
  margin-top: 128 + 64px
  @include response-to-size


.important-tasks
  display: flex
  flex-wrap: wrap
  @include response-to-size
  justify-content: space-around
  @include important-tasks-cards
  @media only screen and (max-width: $md)
    justify-content: center
</style>
