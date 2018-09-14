import Vue from "vue";
import Router from "vue-router";
// import HelloWorld from "@/components/HelloWorld";

import "@/assets/css/reset.css"; // css样式后缀文件没有配置  所以这里需要添加 .css
import "@/assets/css/header.css";

Vue.use(Router);
import Shop from "@/views/shop";
export default new Router({
  routes: [
    {
      path: "/",
      name: "Shop",
      component: Shop
    }
  ]
});
