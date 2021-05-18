<template>
  <div class="add-tags" :class="acti ? 'activate' : ''">
    <card class="pa-2 column">
      <card-item space_between>
        <card-title> Tag name </card-title>
        <div @click="close()" class="close-btn">
          <mdicon name="close" />
        </div>
      </card-item>
      <input placeholder="Tag name" v-model="name" class="input-text" />

      <card-title class="tag-color-title"> pick tag color </card-title>
      <div class="colors">
        <tag class="mx-2" color="blue" size="md" @click="active = 'blue'">
          <mdicon name="check" v-if="active === 'blue'" />
        </tag>
        <tag class="mx-2" color="primary" size="md" @click="active = 'primary'">
          <mdicon name="check" v-if="active === 'primary'" />
        </tag>
        <tag class="mx-2" color="orange" size="md" @click="active = 'orange'">
          <mdicon name="check" v-if="active === 'orange'" />
        </tag>
        <tag class="mx-2" color="purple" size="md" @click="active = 'purple'">
          <mdicon name="check" v-if="active === 'purple'" />
        </tag>
      </div>
      <btn class="submit-btn" ghost @click="submit()"> Submit </btn>
    </card>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  props: ["acti"],

  data: () => ({
    active: "blue",
    name: "",
  }),
  methods: {
    submit() {
      this.addTagsToStore({
        name: this.name,
        color: this.active,
      });

      this.close();
    },

    close() {
      this.$emit("close");
    },

    ...mapActions({ addTagsToStore: "DISPATCH_ADDING_NEW_TAG" }),
  },
};
</script>

<style lang="sass" scoped>
.add-tags
    top: 0
    left: 0
    z-index: 2
    width: 100vw
    height: 100vh
    display: flex
    position: fixed
    align-items: center
    justify-content: center
    background: rgba(0, 0, 0, 0.3)
    visibility: hidden
    .card
      transition: all 0.1s linear
      transform: translateY(200%)
    h1
        color: $main-light

.activate
  visibility: visible
  .card
        transform: translateY(0%)
        transition: all 0.1s linear

.submit-btn
    margin-bottom: 4px

.text-btn
    font-weight: 400

.tag-color-title
    margin-top: 32px


.colors
    margin-bottom: 32px
    @extend .row
    .tag
      @include main-hover-anim
      span
        color: $main-light

.close-btn
    span
      @include main-hover-anim
</style>
