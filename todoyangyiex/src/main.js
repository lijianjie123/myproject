// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue"; //引入vue模块
import App from "./App"; //引入vue组件
import router from "./router"; //引入路由配置文件

// 引入echarts
import echarts from "echarts";

Vue.prototype.$echarts = echarts;

Vue.config.productionTip = false;
import Mock from "./mock"; // 引入mock模块
Mock.start(); //并且执行初始化函数
/* eslint-disable no-new */
new Vue({
  //创建跟实例
  el: "#app",
  router,
  components: { App }, //注入组件
  template: "<App/>" //配置根模板 ，即打开页面显示那个组件
});
