import Vue from "vue";
import App from "./App";

import router from "@/router"; //会自动找src下 的router下的index.js文件

//import "@/assets/app"; //引入样式表 app.css  这里用了简写  应为已经给配置过.css后缀名

//起动应用;
new Vue({
  el: "#app",
  router, //router：router 的缩写，  把 router注入到跟实例中
  template: "<App/>", // 写入模板  所以上边要引入App.vue
  components: {
    // 注册组件 这里引入了跟组件App.vue
    App
  }
});
