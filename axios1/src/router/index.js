import Vue from "vue";
import Router from "vue-router";
import HelloWorld from "@/components/HelloWorld";
import Hello from "@/components/hello";
import zidingyi from "@/components/zidingyi";
import zidingyi1 from "@/components/zidingyi1";
import zidingyi2 from "@/components/zidingyi2";
import zidingyi3 from "@/components/zidingyi3";
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "Hello",
      component: Hello
    },
    {
      path: "/zidingyi",
      name: "zidingyi",
      component: zidingyi
    },
    {
      path: "/zidingyi1",
      name: "zidingyi1",
      component: zidingyi1
    },
    {
      path: "/zidingyi2",
      name: "zidingyi2",
      component: zidingyi2
    },
    {
      path: "/zidingyi3",
      name: "zidingyi3",
      component: zidingyi3
    }
  ]
});
