import Vue from "vue";
import Vuex from "vuex"; // 引入vuex模块
import axios from "axios";
// 作为插件
Vue.use(Vuex);

//定义一个容器
let store = new Vuex.Store({
  //state 页面状态管理容器对象，集中存储 组件中data 对象的零散数据
  state: {
    count: 100,
    title: "",
    list: [] //默认有一个list，用来存储请求回来的数据
  },
  //getter 对state对象读取方法
  getters: {
    filterNum(state) {
      return state.count >= 120 ? 120 : state.count;
    }
  },
  //修改state下数据 的唯一方法
  mutations: {
    //同步的
    addIncrement(state, payload) {
      state.count += payload.n;
    },
    dicIncrement(state, payload) {
      state.count -= payload.de;
    },
    changetitle(state, payload) {
      state.title = payload.title;
    },
    getList(state, list) {
      state.list = list;
    }
  },
  // 异步的
  actions: {
    //Action 提交的是 mutation，而不是直接变更状态。
    addAction(context) {
      //（context）解构赋值=》（{commit，dispatch}）

      setTimeout(() => {
        //改变状态。 提交mutations
        context.commit("addIncrement", { n: 5 });
        // dispatch 用来提交 action中的  函数   如 textAction
        context.dispatch("textAction", { test: "测试" });
      }, 1000);
    },

    textAction(context, obj) {
      console.log(obj);
    },
    // 因为ajax 请求是异步的  在vuex 中  action 中是异步的  所以  请求写在这
    getListAction({ commit }) {
      //action中提交mutation  要用 context   =》{commit,dispatch}
      // 发送请求  要用到vue 的axios 模块  所以需要引入axios模块
      axios
        .get(
          "https://www.easy-mock.com/mock/5b6173457b15677bbe18a279/example/test-axios"
        )
        .then(data => {
          // 请求成功 就能拿到data   然后需要触发 actions 中的  getListAction()      getListAction  是在created() 里触发的
          console.log(data.data);
          //取到的数据要在这里提交一个mutation   action中提交mutation  要用 context
          commit("getList", data.data); //拿到数据后， 提交一个mutation是 改变list 的状态
        })
        .catch(error => {
          //请求失败  监控下
          console.log(error);
        });
    }
  }
});

export default store; // 导出store
