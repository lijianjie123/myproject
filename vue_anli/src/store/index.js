import Vue from "vue";
import Vuex from "vuex";
// 作为插件使用
Vue.use(Vuex);
// 定义一个容器
let store = new Vuex.Store({
  //这里的Store s要大写
  state: {
    count: 100
  },
  // mutations 唯一修改状态的事件回调函数
  mutations: {
    addIncrement(state, payload) {
      state.count += payload.n;
    },
    deIncrement(state, payload) {
      state.count -= payload.de;
    }
  },
  //
  actions: {
    addAction(context) {
      setTimeout(() => {
        //改变状态，提交mutstions
        context.commit("addIncrement", { n: 5 });
      }, 1000);
    }
  }
});
export default store; //导出store
