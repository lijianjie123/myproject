import Vue from "vue";
import VueRouter from "vue-router";

//vueRouter 其实是个构造函数
//要把VueRouter作为Vue的插件  不然不能正常解析<router-view></router-view>
Vue.use(VueRouter);

import App from "./App";
import home from "@/components/home"; // @是src 的别名
// 配置路由（构造函数的配置）
var router = new VueRouter({
  routes: [
    // 路由属性
    {
      path: "/",
      component: home //跟路径的时候  渲染的是home.vue 组件  所有上边需要引入 对应的组件home.vue
    }
  ]
});
//起动应用;
new Vue({
  el: "#app",
  router, //router：router 的缩写，  把 router注入到跟实例中
  template: "<App/>", // 写入模板  所以上边要引入App.vue
  components: {
    // 注册组件 这里引入了跟组件App.vue
    App
  }
});
