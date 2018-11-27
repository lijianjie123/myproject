import Vue from "vue";
import Router from "vue-router";
import HelloWorld from "@/components/HelloWorld";
import computer from "@/components/computer";
import select from "@/components/select";

Vue.use(Router);

export default new Router({
  routes: [
    // {
    //   path: "/",
    //   name: "HelloWorld",
    //   component: HelloWorld
    // },
    // {
    //   path: "/",
    //   name: "computer",
    //   component: computer
    // }
    {
      path: "/",
      name: "select",
      component: select
    }
  ]
});
