<template>
  <div class="big-tag" :class="classBinder()">
    <slot />
    <div v-on="$listeners" v-bind="$attrs">
      <mdicon name="close" v-if="close" />
      <mdicon name="plus" v-else />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    close: {
      type: Boolean,
      default: false,
    },

    color: {
      type: String,
      default: "primary",
    },
  },

  methods: {
    classBinder() {
      let cls = "";

      cls += this.adjustColor();

      return cls;
    },

    adjustColor() {
      if (this.color === "blue") return " background-blue";
      if (this.color === "purple") return " background-purple";
      if (this.color === "orange") return " background-orange";
      if (this.color === "primary") return " background-primary";

      return "";
    },
  },
};
</script>

<style lang="sass" scoped>
.big-tag
    @extend .row
    @extend .py-1
    @extend .px-2
    @extend .text-lg
    border-radius: 50px
    @extend .justify-between
    color: $main-light !important
    span
      margin-left: 16px
      @include main-hover-anim
</style>
