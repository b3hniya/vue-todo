<template>
  <div class="navbar">
    <list-item>
      <item class="py-4">
        <mdicon name="check" class="logo-color" />
      </item>

      <button-group vertical>
        <btn
          icon
          class="my-1"
          v-for="(item, index) in items"
          :key="index"
          :route="item.route"
        >
          <mdicon :name="item.icon" />
        </btn>
      </button-group>

      <item class="my-4">
        <btn icon>
          <mdicon name="theme-light-dark" />
        </btn>
      </item>
    </list-item>
  </div>
</template>

<script>
export default {
  data: () => ({
    items: [
      { icon: "view-dashboard-outline", route: "/" },
      { icon: "checkbox-marked-circle-outline", route: "/todos" },
      { icon: "tag-multiple-outline", route: "tags" },
    ],
  }),
};
</script>

<style lang="sass">
.logo-color
  color: $primary

.navbar
    width: 64px
    height: 100vh
    background-color: $secondary-light
    .list-item
        height: 100vh
        @extend .column
        @extend .justify-between
        align-items: center
</style>
