import Vue from "vue";
import VueRouter from "vue-router";
import Dashboard from "../pages/Dashboard.vue";
import Todos from "../pages/Todos.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Dashboard",
    component: Dashboard,
  },
  {
    path: "/todos",
    name: "Todos",
    component: Todos,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
