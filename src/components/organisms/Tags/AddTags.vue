<template>
  <popup v-on="$listeners" v-bind="$attrs">
    <card class="pa-2 column">
      <card-item space_between>
        <card-title> Tag name </card-title>

        <btn @click="close()" icon> <mdicon name="close" /> </btn>
      </card-item>

      <input placeholder="Tag name" v-model="name" class="input-text" />

      <card-title class="my-2"> pick tag color </card-title>

      <div class="colors-row">
        <tag
          v-for="(color, index) in colors"
          :key="index"
          class="mx-2"
          :color="color"
          @click="selectedColor = color"
        >
          <mdicon name="check" v-if="selectedColor === color" />
        </tag>
      </div>
      <btn class="submit-btn" ghost @click="submit()"> Submit </btn>
    </card>
  </popup>
</template>

<script>
import { mapActions } from "vuex";

export default {
  data: () => ({
    name: "",
    selectedColor: "blue",

    colors: ["blue", "primary", "orange", "purple"],
  }),
  methods: {
    submit() {
      this.addTagsToStore({
        name: this.name,
        color: this.selectedColor,
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

.colors-row
    margin-bottom: 32px
    @extend .row
    .tag
      @include main-hover-anim
      span
        color: $main-light
</style>
