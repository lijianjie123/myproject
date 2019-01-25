import Vue from "vue"; //引入 vue   from后边的"vue" 要小写
// import Vuex, { Store } from "vuex";
import Vuex from "vuex";
// 作为插件
Vue.use(Vuex);

// 使用到vuex  后  需要在 main.js中引入
let store = new Vuex.Store({
  //状态数据管理
  state: {
    author:'lijj',
    isLogin:'',
  },
  getters: {
    
  },
  mutations: {
    newAuthor(state,msg){
      state.author = msg;
    },
    isLogin(state,msg){
      state.isLogin = msg;
      localStorage.setItem('isLogin',msg);
    }
    
  }
});

export default store; //把store暴露出去，让我们能够拿到它
