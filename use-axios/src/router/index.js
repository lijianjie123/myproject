import Vue from "vue";
import Router from "vue-router";
import HelloWorld from "@/components/HelloWorld";
import Hello from "@/components/hello";
import zidingyi from "@/components/zidingyi";
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "Hello",
      component: Hello
    },
    {
      path: "/",
      name: "HelloWorld",
      component: HelloWorld
    }
  ]
});
