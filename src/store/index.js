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
      },
      {
        name: "test2",
        important: false,
        description: `Lorem ipsum dolor sit amet consectetur adipi sicing elit. Sed eos
        fugit mollitia digni ssimos prov ident volu ptates facilis inventore
        beatae a,`,
      },
      {
        name: "test3",
        important: true,
        description: `Lorem ipsum dolor sit amet consectetur adipi sicing elit. Sed eos
        fugit mollitia digni ssimos prov ident volu ptates facilis inventore
        beatae a,`,
      },
      {
        name: "test4",
        important: false,
        description: `Lorem ipsum dolor sit amet consectetur adipi sicing elit. Sed eos
        fugit mollitia digni ssimos prov ident volu ptates facilis inventore
        beatae a,`,
      },
      {
        name: "test5",
        important: true,
        description: `Lorem ipsum dolor sit amet consectetur adipi sicing elit. Sed eos
        fugit mollitia digni ssimos prov ident volu ptates facilis inventore
        beatae a,`,
      },
      {
        name: "test6",
        important: false,
        description: `Lorem ipsum dolor sit amet consectetur adipi sicing elit. Sed eos
        fugit mollitia digni ssimos prov ident volu ptates facilis inventore
        beatae a,`,
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
  mutations: {},
  actions: {},
  modules: {},
});
