import Vue from "vue"; // 引入vue 模块

import Router from "vue-router"; //引入路由配置文件
import Layouts from "@/components/layouts";
import todo from "@/components/todo";
import Hello from "@/components/hello";
import HelloWorld from "@/components/HelloWorld";
//将router 作为vue 的插件使用
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/", //访问根路径
      name: "Layouts",
      component: Layouts,
      children: [
        {
          path: "/todo/:id",
          name: "todo",
          component: todo
        }
      ]
    }
  ]
});
