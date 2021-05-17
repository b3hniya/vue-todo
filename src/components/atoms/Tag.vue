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
  },
  methods: {
    classBinder() {
      if (this.size === "sm") return " tag-sm";
      if (this.size === "md") return " tag-md";
      if (this.size === "lg") return " tag-lg";
    },
  },
};
</script>

<style lang="sass" scoped>
.tag
    border-radius: 50%
    background-color: $primary

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
