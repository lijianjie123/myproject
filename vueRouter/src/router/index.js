import Vue from "vue";
import Router from "vue-router";

import home from "@/components/home";
import about from "@/components/about";
import document from "@/components/document";

import study from "@/views/study";
import work from "@/views/work";
import hobby from "@/views/hobby";

import slider from "@/views/slider";
import user from "@/components/user";
Vue.use(Router);

let router = new Router({
  mode: "history",

  linkActiveClass: "active",
  //滚动行为
  scrollBehavior(to, from, savePosition) {
    //点击浏览器的前进后退的时候， 或者切换导航的时候
    //console.log(to); //要进入的目标路由对象 要去向哪里
    //console.log(from); //离开的路由对象 从哪来
    //console.log(savePosition); //记录滚动条的坐标  在点击前进后退的时候 记录值

    // if (savePosition) {
    //   return savePosition;
    // } else {
    //   return { x: 0, y: 0 }; //滚动的xy 轴的距离
    // }

    // 利用哈希  定位到某个位置
    if (to.hash) {
      return {
        selector: to.hash
      };
    }
  },
  routes: [
    {
      path: "/",
      component: home,
      meta: {
        //由元信息meta
        index: 0,
        title: "home"
      }
    },
    {
      path: "/user/:tip?/:id?", //:动态匹配路径  :id代表匹配参数  /user/1  /user/2  /user   ?代表匹配0 1  2 。。。
      component: user,
      meta: {
        index: 3,
        title: "user"
      }
    },
    {
      path: "/home",
      name: "home",
      component: home,
      alias: "/index" // 路由别名  在地址栏输入指定的参数   如参数是index
    },
    {
      path: "/about",
      //name: "about", // 因为设置了子路由， 这里就不需要写name了   写到了默认子路由上
      component: about,

      children: [
        {
          path: "", //不写代表设置为默认的子路由 /about
          name: "about",
          component: study,
          meta: {
            // 把路由元信息meta 设置到子路由
            index: 2,
            title: "about"
          }
        },
        {
          path: "work",
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
      //这里的是路由钩子函数  给某一个路由设置导航钩子函数
      beforeEnter: (to, from, next) => {
        console.log("beforeEnter");
        next(); // 代表执行函数  进入到document导航  显示对应的组件
      },

      // 视图命名 一个页面  对应多个组件
      components: {
        //组件为复数的，
        default: document, // 默认组件
        slider: slider // 根据 <router-view name = "slider"></router-view>  name 的名字  渲染对应组件
      },
      meta: {
        index: 1,
        login: true,
        title: "document"
      }
    }
    //重定向
    // {
    //   path: "*",
    //   //component: home,//直接写重定向到哪个路由
    //   // redirect: { path: "/home" }, //直接写重定向到哪个路由， 用对象的方式{path：''}
    //   // redirect: { name: "about" }/直接写重定向到哪个路由的名称
    //   redirect: to => {
    //     //用箭头函数的方式  动态设置重定向的目标
    //     // console.log(to); // 目标路由对象， 就是访问的路径的路由信息
    //     //return "/home";
    //     if (to.path === "/123") {
    //       return "/home";
    //     } else if (to.path === "/456") {
    //       return { path: "/document" };
    //     } else {
    //       return { name: "about" };
    //     }
    //   }
    // }
  ]
});
//导航钩子函数
// 导航发生变化时，导航钩子主要用来拦截导航，让它完成跳转活取消
// 执行钩子函数的位置
// router全局
// 单个路由
// 组件中

// 钩子函数
// router实例上：beforeEach,afterEach
// 单个路由中：beforeEnter
// 组件内的钩子：beforeRouteEnter ， beforeRouteUpdate， beforeRouteLeave

// 钩子函数接收的参数
// to: 要进入的目标路由对象， 到哪里去
// from： 正要离开的导航路由对象，从哪里来
// next： 用来决定跳转或取消导航

// 这两个是全局钩子函数
//进入导航之前的导航钩子函数
// router.beforeEach((to, from, next) => {
//   console.log("beforeEach");
//   next(false); //取消导航
//   next(); //执行导航
//   // 重定向到哪
//   if (to.meta.login) {
//     // 这里判断是否登录， 如果没有登录 就重定向到 登录页面上去
//     next("/login"); // 括号里 是重定向到的地址   //这里代表需要登录 //添加这块内容  得把上边的路由重定向注释掉一下
//   } else {
//     next();
//   }
// });
// // 进入导航之后
// router.afterEach((to, from) => {
//   if (to.meta.title) {
//     window.document.title = to.meta.title; //document 这里是访问不到的 所以前边添加了window
//   } else {
//     window.document.title = "miaov";
//   }
// });

export default router;
