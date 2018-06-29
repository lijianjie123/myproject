// 引入vue 框架
import Vue from "vue";
// 引入路由依赖
import VueRouter from "vue-router";

//要把VueRouter作为Vue的插件  不然不能正常解析<router-view></router-view>
Vue.use(VueRouter);

import home from "@/components/home";
import about from "@/components/about";
import document from "@/components/document";

import study from "@/views/study";
import work from "@/views/work";
import hobby from "@/views/hobby";

import slider from "@/views/slider";

let router = new VueRouter({
  mode: "history", // 这里选择了history 模式，  不写mode 默认是哈希模式   //App.vue页面中 用<router-link  to="/home" > 标签代替a 标签 来跳转连接
  linkActiveClass: "is-active", //全局设置 当前激活状态
  routes: [
    {
      path: "/",
      component: home
    }, //跟路径
    {
      path: "/home",
      name: "home",
      component: home, //跟路径的时候  渲染的是home.vue 组件  所以上边需要引入 对应的组件home.vue
      alias: "/index" //这相当于路由的别名 （当地址栏  写入指定的值  比如 index）
    },
    {
      path: "/about",
      // name: "about", // 有子路由，就不需要写路由name了  而是写到子路由上
      component: about,
      //子路由 路由嵌套路由
      children: [
        {
          path: "", // /about  path: " "定为默认子路由  渲染study 组件
          name: "about", //父路由就不需要写路由name了  而是写到子路由上
          component: study
        },
        {
          path: "/work", //  /work就等于根路径 /about/work
          name: "work",
          component: work
        },
        {
          path: "hobby",
          name: "hobby",
          component: hobby
        }
      ]
    },
    {
      path: "/document",
      name: "document",
      //视图命名  一个url对应多个组件
      components: {
        default: document,
        slider: slider //slider 组件  使用的组件  记住要引入组件进来
      }
    },
    //重定向
    {
      path: "*",
      //component: notFound  要么渲染到一个组件去
      //重定向
      //redirect:  "/home"
      //redirect: { path: "/home" }  对象的方式
      //redirect: { name: "home" }  指向路由的name：值
      redirect: to => {
        //箭头函数  动态设置重定向的目标
        //to 是目标路由对象， 就是访问的路径的路由信息
        if (to.path === "/123") {
          return "/home";
        } else if (to.path === "/456") {
          return { path: "/about" };
        } else {
          return { name: "document" };
        }

        // console.log(to);
        // return "/home";
      }
    }
  ]
});
export default router; // 导出路由
