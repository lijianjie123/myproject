// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// import Vue from "vue";
// import App from "./App";
// import router from "./router";

// 引入vue 框架
import Vue from "vue";
// 引入路由依赖
import VueRouter from "vue-router";

//要把VueRouter作为Vue的插件  不然不能正常解析<router-view></router-view>
Vue.use(VueRouter);

import MintUI from "mint-ui"; //引入插件
import "mint-ui/lib/style.css";
Vue.use(MintUI); //作为vue的插件

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  components: { App },
  template: "<App/>"
});
