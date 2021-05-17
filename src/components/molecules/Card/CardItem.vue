<template>
  <div class="card-item" :class="classBinder()">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    space_between: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    classBinder() {
      let cls = "";
      if (this.space_between) cls += " justify-between";

      return cls;
    },
  },
};
</script>

<style lang="sass" scoped>
.card-item
    @extend .row
</style>
