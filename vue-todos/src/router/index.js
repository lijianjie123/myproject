import Vue from "vue"; // 导入Vue
import Router from "vue-router"; //导入vue-router库
import Layouts from "@/components/Layouts"; // 导入layouts.vue组件
import todo from "@/components/Layouts"; // 导入layouts.vue组件
Vue.use(Router); //全局注册router 组件， 它会绑定到vue 实例里面
export default new Router({
  //创建router 实例， 然后传‘routes’配置
  routes: [
    {
      path: "/", //访问路径
      name: "layouts", //路径名
      component: Layouts, //访问的组件， 即访问‘/’, 他会加载layouts组件所有的内容
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
