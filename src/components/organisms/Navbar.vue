<template>
  <div class="navbar">
    <list-item>
      <item class="py-4">
        <mdicon name="check" class="logo-color" />
      </item>

      <button-group vertical>
        <tooltip v-for="(item, index) in items" :key="index">
          <template v-slot:activator>
            <btn
              icon
              class="my-1"
              :route="item.route"
              :active="isActive(item.route)"
            >
              <mdicon :name="item.icon" />
            </btn>
          </template>
          <span> {{ item.tooltip }} </span>
        </tooltip>
      </button-group>

      <item class="my-4">
        <tooltip>
          <template v-slot:activator>
            <btn icon>
              <mdicon name="theme-light-dark" />
            </btn>
            <span>Dark</span>
          </template>
        </tooltip>
      </item>
    </list-item>
  </div>
</template>

<script>
export default {
  data: () => ({
    items: [
      { icon: "view-dashboard-outline", route: "/", tooltip: "Dashboard" },
      {
        icon: "checkbox-marked-circle-outline",
        route: "/todos",
        tooltip: "Todos",
      },
      { icon: "tag-multiple-outline", route: "tags", tooltip: "Tags" },
    ],
  }),

  methods: {
    isActive(route) {
      return route === this.$route.path;
    },
  },
};
</script>

<style lang="sass">
.logo-color
  color: $primary

.navbar
    width: 64px
    z-index: 1
    height: 100vh
    background-color: $secondary-light
    .list-item
        height: 100vh
        @extend .column
        @extend .justify-between
        align-items: center
</style>
