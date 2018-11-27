import Vue from "vue";
import Router from "vue-router";
// import HelloWorld from "@/components/HelloWorld";

import "@/assets/css/reset.css"; // css样式后缀文件没有配置  所以这里需要添加 .css
import "@/assets/css/header.css";

Vue.use(Router);
import Shop from "@/views/shop";
import Item from "@/views/item";
import Cart from "@/views/cart";
import CheckOut from "@/views/Checkout";
export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "Shop",
      component: Shop
    },
    {
      path: "/item",
      name: "Item",
      component: Item
    },
    {
      path: "/cart",
      name: "Cart",
      component: Cart
    },
    {
      path: "/Checkout",
      name: "CheckOut",
      component: CheckOut
    }
  ]
});
