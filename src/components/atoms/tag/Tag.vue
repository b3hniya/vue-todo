<template>
  <div class="tag" :class="classBinder()"></div>
</template>

<script>
export default {
  props: {
    size: {
      type: String,
      default: "md",
    },

    color: {
      type: String,
      default: "blue",
    },
  },
  methods: {
    classBinder() {
      let cls = "";

      cls += this.adjustSize();

      cls += this.adjustColor();

      return cls;
    },

    adjustSize() {
      if (this.size === "sm") return " tag-sm";
      if (this.size === "md") return " tag-md";
      if (this.size === "lg") return " tag-lg";

      return "";
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
.tag
    border-radius: 50%

.tag-sm
    width: 16px
    height: 16px

.tag-md
    width: 24px
    height: 24px

.tag-lg
    width: 32px
    height: 32px
</style>
