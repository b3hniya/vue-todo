<template>
  <ul class="button-group" :class="classBinder()">
    <slot></slot>
  </ul>
</template>

<script>
export default {
  props: {
    vertical: {
      type: Boolean,
      default: false,
    },

    horizontal: {
      type: Boolean,
      default: true,
    },
  },

  methods: {
    classBinder() {
      let cls = "";

      cls += this.adjustOrder();

      return cls;
    },

    adjustOrder() {
      if (this.vertical) return " vertical";
      if (this.horizontal) return " horizontal";
    },
  },
};
</script>

<style lang="sass">
.button-group
  margin: 0
  padding: 0
  li
    list-style-type: none

.vertical
  @extend .column

.horizontal
  @extend .row
</style>
