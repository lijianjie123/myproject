// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import router from "./router/";

import store from "./store/index1";

Vue.config.productionTip = false;
import "@/assets/css/select.css";

/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  store, //注入到实例中
  components: { App }, //
  template: "<App/>"
});
