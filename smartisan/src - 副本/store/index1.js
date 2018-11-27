import Vue from "vue"; //引入 vue   from后边的"vue" 要小写
import Vuex from "vuex";
Vue.use(Vuex);

let store = new Vuex.Store({
  state: {
    //创建一个数组 用来存储和判断 购物车中是否有商品数据
    carPanelData: [],
    maxOff: false,
    carShow: false,
    carTimer: null,
    ball: {
      show: false,
      el: null,
      img: ""
    }
  },
  getters: {
    totleCount(state) {
      let count = 0;
      state.carPanelData.forEach(goods => {
        count += goods.count;
      });
      return count;
    },
    totlePrice(state) {
      let price = 0;
      state.carPanelData.forEach(goods => {
        price += goods.price * goods.count;
      });
      return price;
    },
    // 点击某一个商品的选中按钮
    allChecked(state) {
      let allChecked = true; // 假定给全选按钮一个 选中的状态
      state.carPanelData.forEach(goods => {
        if (!goods.checked) {
          // 循环所有商品  只要有一个商品的状态是没有选中
          allChecked = false; //那么 全选按钮就不选中
          return;
        }
      });
      return allChecked;
    },
    checkedCount(state) {
      let checkedGoodsNum = 0;
      state.carPanelData.forEach(goods => {
        if (goods.checked) {
          checkedGoodsNum += goods.count;
        }
      });
      return checkedGoodsNum;
    },
    checkedPrice(state) {
      let checkedGoodsPrice = 0;
      state.carPanelData.forEach(goods => {
        if (goods.checked) {
          checkedGoodsPrice += goods.count * goods.price;
        }
      });
      return checkedGoodsPrice;
    }
  },
  mutations: {
    // 传参  state参数是上边的state.carPanelData 数组   data参数传的是 即将加入购物车的商品的数据
    // 添加商品
    addCarPanelData(state, data) {
      let bOff = true; //默认为无数据
      // 循环state.carPanelData 中的数据， 用goods作为参数传递（代表的是state.carPanelData 中的商品信息），data参数传的是 即将加入购物车的商品的数据
      if (!state.ball.show) {
        state.carPanelData.forEach(goods => {
          if (goods.sku_id === data.info.sku_id) {
            //如果购物出中商品的id === 即将加入购物车中商品的id  那么就给商品数量+1
            goods.count += data.count;
            bOff = false;
            if (goods.count > goods.limit_num) {
              //商品数量>商品库存最大值
              goods.count -= data.count;
              state.maxOff = true;
              return;
            }
            state.carShow = true;
            state.ball.show = true;
            state.ball.img = data.info.ali_image;
            state.ball.el = event.path[0];
          }
        });
      }
      if (bOff) {
        // 开关默认设置为true 表示 购物车无商品数据，  就会走这里  然后设置商品属性 count， 并把这信息添加到 carPanelData 里（购物车商品数组）
        let goodsData = data.info;
        Vue.set(goodsData, "count", data.count);
        Vue.set(goodsData, "checked", true);
        state.carPanelData.push(goodsData);
        state.carShow = true;

        console.log(state.carPanelData);
        state.ball.show = true;
        state.ball.img = data.info.ali_image;
        state.ball.el = event.path[0];
        console.log(event);
      }
    },
    // 删除商品
    delCarPanelData(state, id) {
      state.carPanelData.forEach((goods, index) => {
        //这的参数传了2个  需要用括号括起来，   这里出错因为参数没加括号
        console.log(goods);
        //console.log(index);
        console.log(goods.sku_id);
        if (goods.sku_id === id) {
          state.carPanelData.splice(index, 1);
          return;
        }
      });
    },
    // 购物车页面商品数量的++和--
    plusCarPanelData(state, id) {
      state.carPanelData.forEach(goods => {
        if (goods.sku_id === id) {
          if (goods.count >= goods.limit_num) return;
          goods.count++;
          return;
        }
      });
    },
    subCarPanelData(state, id) {
      state.carPanelData.forEach(goods => {
        if (goods.sku_id === id) {
          if (goods.count <= 1) return;
          goods.count--;
          return;
        }
      });
    },

    // 购物车页 是否选中按钮
    checkgoods(state, id) {
      state.carPanelData.forEach(goods => {
        if (goods.sku_id === id) {
          goods.checked = !goods.checked;
          return;
        }
      });
    },
    // //点击全选按钮
    allCheckGoods(state, allChecked) {
      //传入商品数据， 和参数allChecked（全选）的值是选中还是 没选中
      //console.log(0);
      state.carPanelData.forEach((goods, index) => {
        goods.checked = !allChecked; // 这里是点击全选按钮， 所以点击全选按钮  给所有的商品取反就行了
        return;
      });
    },
    //删除选中商品
    delCheckGoods(state) {
      // 倒着删，这是一个数组中删除数据的一个小技巧
      let i = state.carPanelData.length;
      while (i--) {
        if (state.carPanelData[i].checked) {
          state.carPanelData.splice(i, 1);
        }
      }
      // state.carPanelData.forEach((goods, index) => {
      //   if (goods.checked) {
      //     state.carPanelData.splice(index, 1);
      //     return;
      //   }
      // });
    },
    //关闭商品最大值提示框
    closePrompt(state) {
      //传参数  state  因为数据都在state下
      state.maxOff = false;
    },
    // 显示购物车
    showCar(state) {
      clearTimeout(state.carTimer);
      state.carShow = true;
    },
    hideCar(state) {
      state.carTimer = setTimeout(() => {
        state.carShow = false;
      }, 1000);
    }
  }
});
export default store; //把store暴露出去，让我们能够拿到它
