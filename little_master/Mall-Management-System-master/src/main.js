// 导入vue包
import Vue from "vue";
// 导入路由
import VueRouter from "vue-router";
// 在Vue中使用路由
Vue.use(VueRouter);

//若第三方框架只给Vue用，那么就一定需要用use进行绑定，主要参考官方文档，例如mint-ui，，，对比mui就不需要用到use



// 导入mint-ui
import "mint-ui/lib/style.min.css";


import  mintUI from 'mint-ui';
// 使用mint-ui
Vue.use(mintUI);


// 导入mui的图标和样式
import "../statics/mui/css/icons-extra.css";
import "../statics/mui/css/mui.css";


// 导入vueResource，请求
import vueResource from "vue-resource";
// 使用vueResource
Vue.use(vueResource);


// 导入实现日期格式话的第三方
import moment from "moment";


// // 导入第三方vue-preview缩略图

import VuePreview from "vue-preview";
Vue.use(VuePreview);


// 导入App.vue组件
import App from "./App.vue";
// 导入home.vue car.vue组件
import home from "./components/Home.vue";
import  car from  './components/shopcar/car.vue'


//导入新闻列表
import newslist from './components/news/newslist.vue';
import newsdetail from "./components/news/newsdetail.vue";


//导入图片列表
import photolist from "./components/photo/photolist.vue";
import photodetail from "./components/photo/photodetail.vue";


//导入货物列表
import goodslist from "./components/goods/goodslist.vue"
import goodsdetail from "./components/goods/goodsdetail.vue"
import goodsdesc from "./components/goods/goodsdesc.vue"
import goodscomment from "./components/goods/goodscomment.vue"




//导入整体的基本样式
import "../statics/css/site.less";


Vue.filter('dataformat',function (input,formatting) {
    return moment(input).format(formatting)
})

//创建路由
var router=new VueRouter({
    linkActiveClass:"mui-active",
    "routes":[
        {path:'/',redirect:'/home'},
        {path:'/home',component:home},
        {path:'/shopcar/car',component:car},
        {path:'/news/newslist',component:newslist},
        {path:'/news/newsdetail/:id',component:newsdetail},
        {path:'/photo/photolist',component:photolist},
        {path:'/photo/photodetail/:id',component:photodetail},
        {path:'/goods/goodslist',component:goodslist},
        {path:'/goods/goodsdetail/:id',component:goodsdetail},
        {path:'/goods/goodsdesc/:id',component:goodsdesc},
        {path:'/goods/goodscomment/:id',component:goodscomment}
    ]
});

//利用Vue对象解析
new Vue({
    //这里绑定到index1.html
    el: '#app',
    router:router,
    //开始传递给Vue底部解析
    render: c => c(App)

})


