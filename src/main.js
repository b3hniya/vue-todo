import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import mdiVue from "mdi-vue/v2";
import * as mdijs from "@mdi/js";
const files = require.context("./components", true, /\.vue$/i);

files.keys().map((key) => {
  Vue.component(
    files(key).default.name ??
      key
        .split("/")
        .pop()
        .split(".")[0],
    files(key).default
  );
});

Vue.config.productionTip = false;

Vue.use(mdiVue, {
  icons: mdijs,
});

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
