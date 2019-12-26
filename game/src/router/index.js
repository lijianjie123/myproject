import Vue from 'vue';
import Router from 'vue-router';

import "@/assets/css/official_common.css";
import "@/assets/css/common.css"; // css样式后缀文件没有配置  所以这里需要添加 .css
import "@/assets/css/index_right.css";
import "@/assets/css/sign.css";
import "@/assets/css/jquery-ui-1.10.4.custom.css";
import "@/assets/css/swiper.min.css";

Vue.use(Router);

import home from "@/components/home";
//import Main from "@/components/main";
import news from "@/components/news";
import guide from "@/components/guide";
import giftcode from "@/components/giftcode";

import fuwuqi from "@/components/fuwuqi";
import xiangqing from "@/components/xiangqing";

import rightbar from "@/components/center-right-box";
//import leftbar from "@/components/leftbar";
import screenshot from "@/components/screenshot";
import logbox from "@/components/logbox";
import peopleshow from "@/components/people-show";
//  二级路由
import hot from "@/components/news/hot";
import events from "@/components/news/events";
import all from "@/components/news/all";

import serverList from "@/components/serverList"

 let router = new Router({ //这的router 要注入到根组件中main.js 里
  mode:"hash",
  linkActiveClass:'active',
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
        selector: to.hash  //设置 selector 容器 ：为 当前哈希值
      };
    }
  },
  routes: [
    {
      path: "/",  
      // 视图命名 一个页面  对应多个组件
      components: {
        //组件为复数的，
        default: home, // 默认组件
        logbox:logbox,
        peopleshow:peopleshow,
        rightbar: rightbar ,// 根据 <router-view name = "slider"></router-view>  name 的名字  渲染对应组件
        bottom:screenshot
      },
    },

    {
      path: "/home",
      name: "home",
      // 视图命名 一个页面  对应多个组件
      components: {
        //组件为复数的，
        default: home, // 默认组件
        logbox:logbox,
        peopleshow:peopleshow,
        rightbar: rightbar ,// 根据 <router-view name = "slider"></router-view>  name 的名字  渲染对应组件
        bottom:screenshot
      },
    },
    {
      path: "/news",//:动态匹配路径  :id代表匹配参数  /user/1  /user/2  /user   ?代表是否匹配0 1  2 。。。
      //name: "news",
      components: {
        default: news,
        logbox:logbox,
        peopleshow:peopleshow,
        rightbar: rightbar ,
        bottom:screenshot
      },
      children: [
        {
          path: "", //不写代表设置为默认的子路由 /news 
          name: "news",
          component: all,
        },
        {
          path: "hot", 
          name: "hot",
          component: hot,
          
        },
        {
          path: "events", 
          name: "events",
          component: events,
        },
        {
          path: "xiangqing",
          name: "xiangqing",
          component:xiangqing
        }
      ]

    },
    // {
    //   path: "/news",
    //   name: "news",
    //   components: {
    //     default: news, 
    //     logbox:logbox,
    //     peopleshow:peopleshow,
    //     rightbar: rightbar ,
    //     bottom:screenshot
    //   },
    // },
    {
      path: "/guide",
      name: "guide",
      components: {
        default: guide, 
        logbox:logbox,
        peopleshow:peopleshow,
        rightbar: rightbar ,
        bottom:screenshot
      },
    },
    {
      path: "/giftcode",
      name: "giftcode",
      components: {
        default: giftcode, 
        logbox:logbox,
        peopleshow:peopleshow,
        rightbar: rightbar ,
        bottom:screenshot
      },
      // beforeEnter: (to, from, next) => {
      //   alert('非登录状态，请先登录！！')
      // }
    },
    {
      path: "/fuwuqi",
      //name: "fuwuqi",
      components: {
        default: fuwuqi, 
        logbox:logbox,
       // peopleshow:peopleshow,
        rightbar: rightbar ,
        bottom:screenshot
      },
      children:[
        {
          path:'*',
          redirect:serverList

        },
        {
          path:'',
          name: "fuwuqi",
          component:serverList

        },
        // {
        //   path:'serverList',
        //   name:'serverList',
        //   component:serverList

        // }
      ],
      meta:{
        index:0,
        login :true,
      }

    },

    //重定向
    // {
    //   path: "*",
    //   component: home,//直接写重定向到哪个路由
    //   redirect: { path: "/home" },
    // }
    

  ]
})

// 这两个是全局钩子函数
//进入导航之前的导航钩子函数
// router.beforeEach((to, from , next)=>{
//   alert('请先登录！')
//   // if(to.path == "/news"){
//   //    next()
//   // }else{
//   //   alert('请先登录！')
//   // }
 
// })


export default router