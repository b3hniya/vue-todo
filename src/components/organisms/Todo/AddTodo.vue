<template>
  <div class="new-todo-wrapper">
    <btn class="ma-2 add-btn" ghost @click="openPopup()">
      ADD TODO
    </btn>

    <popup :show="open">
      <card class="pa-2 column">
        <card-item space_between>
          <card-title> Todo name </card-title>

          <btn @click="close()" icon> <mdicon name="close" /> </btn>
        </card-item>

        <input placeholder="Todo name" v-model="name" class="input-text" />

        <card-title class="my-2"> add a Description </card-title>

        <textarea
          class="input-text"
          cols="30"
          rows="10"
          v-model="description"
        ></textarea>

        <card-title class="my-2"> pick a tag </card-title>

        <select class="select-tags" v-model="selected_tag">
          <option value="-1"> select </option>
          <option v-for="(tag, index) in tags" :key="index" :value="index">
            {{ tag.name }}
          </option>
        </select>

        <card-item space_between class="my-3 align-center">
          <card-text> Important: </card-text>

          <switch-btn @clicked="getSwitchVal" />
        </card-item>

        <btn class="submit-btn" ghost @click="submit()"> Submit </btn>
      </card>
    </popup>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  data: () => ({
    open: false,
    name: "",
    imporant: false,
    description: ``,
    selected_tag: "-1",
  }),

  methods: {
    openPopup() {
      this.open = !this.open;
    },
    close() {
      this.open = false;
    },
    submit() {
      this.addNewTodo({
        name: this.name,
        important: this.imporant,
        description: this.description,
        tag: this.tags[this.selected_tag],
      });
      this.close();
    },

    getSwitchVal(val) {
      this.imporant = val;
      console.log(this.imporant);
    },

    ...mapActions({ addNewTodo: "DISPATCH_ADDING_NEW_TODO" }),
  },

  computed: {
    ...mapState(["tags"]),
  },
};
</script>

<style lang="sass" scoped>
.select-tags
  width: 100%
  margin-bottom: 20px

.card-item-todo
    height: 100%
    align-items: center

.new-todo-wrapper
  .add-btn
    border: 1px solid $primary
  .card
    width: 256px


.input-text
  width: 100%
  height: 32px
  border: none
  background: transparent
  transition: all 1s ease
  border-bottom: 1px solid gray
  &:focus
    outline: none
    border-bottom: 1px solid $primary
</style>
