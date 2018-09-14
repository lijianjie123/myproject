import Vue from "vue";
import Vuex from "vuex"; // 引入vuex模块

// 作为插件
Vue.use(Vuex);
//定义一个容器
let store = new Vuex.Store({
  state: {
    count: 100
  },
  mutations: {
    addIncrement(state) {
      state.count += 1;
    }
  }
});

export default store; // 导出store
