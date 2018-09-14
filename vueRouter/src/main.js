// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import router from "./router"; //router  就是路由实例
//import "@/assets/css/app.css"; 引入css文件的方式

/* eslint-disable no-new */
new Vue({
  el: "#app",
  router, //路由注入到跟实例中  router：router
  components: { App },
  template: "<App/>"
});
