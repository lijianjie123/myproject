import Vue from "vue"; //引入 vue   from后边的"vue" 要小写
import Vuex from "Vuex";
Vue.use(Vuex);

let store = new Vuex.Store({
  state: {
    //创建一个数组 用来存储和判断 购物车中是否有商品数据
    carPanelData: []
  },
  mutations: {
    // 传参  state参数是上边的state.carPanelData 数组   data参数传的是 即将加入购物车的商品的数据
    addCarPanelData(state, data) {
      let bOff = true; //默认为无数据
      // 循环state.carPanelData 中的数据， 用goods作为参数传递（代表的是state.carPanelData 中的商品信息），data参数传的是 即将加入购物车的商品的数据
      state.carPanelData.forEach(goods => {
        if (goods.sku_id === data.sku_id) {
          //如果购物出中商品的id === 即将加入购物车中商品的id  那么就给商品数量+1
          goods.count++;
          bOff = false;
        }
      });
      if (bOff) {
        // 开关默认设置为true 表示 购物车无商品数据，  就会走这里  然后设置商品属性 count， 并把这信息添加到 carPanelData 里（购物车商品数组）
        let goodsData = data;
        Vue.set(goodsData, "count", 1);
        state.carPanelData.push(goodsData);
      }
      console.log(state.carPanelData);
    }
  }
});
export default store; //把store暴露出去，让我们能够拿到它
