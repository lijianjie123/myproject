// 引入vue 框架
import Vue from "vue";
// 引入路由依赖
import VueRouter from "vue-router";

//要把VueRouter作为Vue的插件  不然不能正常解析<router-view></router-view>
Vue.use(VueRouter);

import home from "@/components/home";
import about from "@/components/about";
import document from "@/components/document";
import user from "@/components/user";

import study from "@/views/study";
import work from "@/views/work";
import hobby from "@/views/hobby";

import slider from "@/views/slider";

let router = new VueRouter({
  mode: "history", // 这里选择了history 模式，  不写mode 默认是哈希模式   //App.vue页面中 用<router-link  to="/home" > 标签代替a 标签 来跳转连接
  linkActiveClass: "is-active", //全局设置 当前激活状态
  //记录滚动行为
  scrollBehavior(to, from, savePosition) {
    //点击浏览器的前进后退或切换导航触发
    console.log(to); //要进入的目标路由对象，要去向哪里
    console.log(from); // 离开的路由对象，从哪里来
    //console.log(savePosition); //会记录滚动条的坐标  点击前进后退的时候记录值
    // if (savePosition) {
    //   return savePosition;
    // } else {
    //   return { x: 0, y: 0 };
    // }

    //另一种记录切换方式  利用哈希

    if (to.hash) {
      return {
        selector: to.hash
      };
    }
  },

  routes: [
    {
      //跟路径
      path: "/",
      component: home
    },
    {
      path: "/user/:tip?/:userId?", //动态匹配id  ?问号代表有或没有  // /user/tip/1 /user/tip/2 /user/
      component: user,
      // 设置路由元信息  meta   就是设置下标 索引
      meta: {
        index: 2,
        title: "user"
      }
    },
    {
      path: "/home",
      name: "home",
      //在单独的路由里设置钩子函数
      beforeEnter(to, from, next) {
        console.log("beforeEnter");
        next();
      },
      meta: {
        index: 0,
        title: "home"
      },
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

          component: study,
          //设置在默认的子路由上
          meta: {
            index: 1,
            title: "about",
            login: true
          }
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

      meta: {
        index: 3,
        title: "document"
      },
      //视图命名  一个url对应多个组件
      components: {
        default: document,
        slider: slider //slider 组件  使用的组件  记住要引入组件进来
      }
    }
    //重定向
    // {
    //   path: "*",
    //   //component: notFound  要么渲染到一个组件去
    //   //重定向
    //   //redirect:  "/home"
    //   //redirect: { path: "/home" }  对象的方式
    //   //redirect: { name: "home" }  指向路由的name：值
    //   redirect: to => {
    //     //箭头函数  动态设置重定向的目标
    //     //to 是目标路由对象， 就是访问的路径的路由信息
    //     if (to.path === "/123") {
    //       return "/home";
    //     } else if (to.path === "/456") {
    //       return { path: "/about" };
    //     } else {
    //       return { name: "document" };
    //     }

    //     // console.log(to);
    //     // return "/home";
    //   }
    // }
  ]
});

// 以下两个为全局钩子函数
// 进入导航执行钩子函数
/*router.beforeEach((to, from, next) => {
  console.log("beforeEach");
  // to目标导航
  // from要离开的导航
  // next  执行的函数  进入导航
  //next(false); //取消导航
  // next();  执行导航
  // 重定向到哪
  if (to.meta.login) {
    next("/login"); //重定向到login
  } else {
    next();
  }
});
// 进入导航之后
router.afterEach((to, from, next) => {
  if (to.meta.title) {
    window.document.title = to.meta.title;
  } else {
  }
});*/
export default router; // 导出路由
