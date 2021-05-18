import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    todos: [
      {
        name: "test1",
        important: true,
        description: `Lorem ipsum dolor sit amet consectetur adipi sicing elit. Sed eos
        fugit mollitia digni ssimos prov ident volu ptates facilis inventore
        beatae a,`,
        tag: {
          name: "test-tag4",
          color: "purple",
        },
      },
      {
        name: "test2",
        important: false,
        description: `Lorem ipsum dolor sit amet consectetur adipi sicing elit. Sed eos
        fugit mollitia digni ssimos prov ident volu ptates facilis inventore
        beatae a,`,
        tag: {
          name: "test-tag3",
          color: "primary",
        },
      },
      {
        name: "test3",
        important: true,
        description: `Lorem ipsum dolor sit amet consectetur adipi sicing elit. Sed eos
        fugit mollitia digni ssimos prov ident volu ptates facilis inventore
        beatae a,`,
        tag: {
          name: "test-tag5",
          color: "primary",
        },
      },
      {
        name: "test4",
        important: false,
        description: `Lorem ipsum dolor sit amet consectetur adipi sicing elit. Sed eos
        fugit mollitia digni ssimos prov ident volu ptates facilis inventore
        beatae a,`,
        tag: {
          name: "test-tag4",
          color: "blue",
        },
      },
      {
        name: "test5",
        important: true,
        description: `Lorem ipsum dolor sit amet consectetur adipi sicing elit. Sed eos
        fugit mollitia digni ssimos prov ident volu ptates facilis inventore
        beatae a,`,
        tag: {
          name: "test-tag2",
          color: "orange",
        },
      },
      {
        name: "test6",
        important: false,
        description: `Lorem ipsum dolor sit amet consectetur adipi sicing elit. Sed eos
        fugit mollitia digni ssimos prov ident volu ptates facilis inventore
        beatae a,`,
        tag: {
          name: "test-tag1",
          color: "blue",
        },
      },
    ],

    tags: [
      {
        name: "test-tag1",
        color: "blue",
      },
      {
        name: "test-tag2",
        color: "orange",
      },
      {
        name: "test-tag3",
        color: "primary",
      },
      {
        name: "test-tag4",
        color: "blue",
      },
      {
        name: "test-tag5",
        color: "primary",
      },
    ],
  },
  getters: {
    getImportantTodos: (state) => {
      return state.todos.filter((todo) => todo.important);
    },

    getRecentlyTodos: (state) => {
      return state.todos.filter((el, index) => index < 5);
    },
  },

  mutations: {
    ADD_NEW_TAG(state, tag) {
      state.tags.splice(0, 0, tag);
    },
  },

  actions: {
    DISPATCH_ADDING_NEW_TAG({ commit }, tag) {
      commit("ADD_NEW_TAG", tag);
    },
  },
  modules: {},
});
