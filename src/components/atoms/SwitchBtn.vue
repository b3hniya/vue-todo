<template>
  <label class="switch">
    <input
      type="checkbox"
      v-model="important"
      @click="sendClickedStateToParent"
    />
    <span class="slider round"></span>
  </label>
</template>

<script>
export default {
  data: () => ({
    important: false,
  }),

  methods: {
    sendClickedStateToParent() {
      this.$emit("clicked", !this.important);
    },
  },
  computed: {},
};
</script>

<style lang="sass" scoped>
.switch
    width: 64px
    height: 32px
    position: relative
    display: inline-block

input
  width: 0
  height: 0
  opacity: 0
  &:checked + .slider
          background-color: $primary
  &:focus + .slider
          box-shadow: 0 0 1px $primary
  &:checked + .slider:before
          transform: translateX(30px)
          -ms-transform: translateX(30px)
          -webkit-transform: translateX(30px)

.slider
    top: 0
    left: 0
    right: 0
    bottom: 0
    cursor: pointer
    transition: .4s
    position: absolute
    border-radius: 50px
    background-color: #ccc
    -webkit-transition: .4s
    &:before
        left: 4px
        width: 24px
        content: ""
        bottom: 4px
        height: 24px
        transition: .4s
        position: absolute
        background-color: white
        -webkit-transition: .4s

.round
    &:before
        border-radius: 50%
</style>
