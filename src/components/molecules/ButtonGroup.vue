<template>
  <ul id="button-group" :class="classBinder()">
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
.vertical
  @extend .column

.horizontal
  @extend .row
</style>
