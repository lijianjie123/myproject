import Vue from "vue"; //引入 vue   from后边的"vue" 要小写
// import Vuex, { Store } from "vuex";
import Vuex from "vuex";
Vue.use(Vuex);

// 使用到vuex  后  需要在 main.js中引入
let store = new Vuex.Store({
  //状态数据管理
  state: {
    // 创建一个数组，用来存放  加入购物车的数据
    carPanelData: [],
    receiveInfo: [
      {
        name: "王某某",
        phone: "13811111111",
        areaCode: "010",
        landLine: "64627856",
        provinceId: 110000,
        province: "北京市",
        cityId: 110100,
        city: "市辖区",
        countyId: 110106,
        county: "海淀区",
        add: "上地十街辉煌国际西6号楼319室",
        default: true
      },
      {
        name: "李某某",
        phone: "13811111111",
        areaCode: "010",
        landLine: "64627856",
        provinceId: 110000,
        province: "北京市",
        cityId: 110100,
        city: "市辖区",
        countyId: 110106,
        county: "海淀区",
        add: "上地十街辉煌国际东6号楼350室",
        default: false
      }
    ],
    maxShow: false,
    carShow: false,
    carTimer: null,
    ball: {
      show: false,
      el: null,
      img: ""
    }
    // allChecked: true
  },
  getters: {
    totleCount(state) {
      let count = 0;
      state.carPanelData.forEach(function(goods) {
        count += goods.count;
      });
      return count;
    },
    totlePrice(state) {
      let price = 0;
      state.carPanelData.forEach(function(goods) {
        price += goods.count * goods.price;
      });
      return price;
    },
    //选中的商品数量
    totalChecked(state) {
      let num = state.carPanelData.filter(item => {
        return item.checked;
      }).length;
      return num;
    },
    //总件数
    totalCount(state) {
      let count = 0;
      state.carPanelData.forEach(function(goods) {
        if (goods.checked) {
          count += goods.count;
        }
      });
      return count;
    },
    //总金额
    totalPrice(state) {
      let price = 0;
      state.carPanelData.forEach(function(goods) {
        if (goods.checked) {
          price += goods.count * goods.price;
        }
      });
      return price;
    },

    // 点击某一个的时候 计算全选按钮
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
    //挑选出选中的商品  给checkout.vue中使用
    checkedGoods(state) {
      let checkedCarPanelData = state.carPanelData.filter(function(goods) {
        return goods.checked;
      });
      return checkedCarPanelData;
    }
  },
  mutations: {
    //   加入购物车
    //data 代表传过来的数据  就是要加入购物车的那项商品数据
    addCarPanelData(state, data) {
      let bOff = true; // 默认为没有此商品
      if (!state.ball.show) {
        //!state.ball.show  判断下 当小球运动完了 商品数量再添加
        state.carPanelData.forEach(goods => {
          //   如果购物车中有这个商品了  那他的数量就+1
          if (goods.sku_id === data.info.sku_id) {
            ///// 声明一个变量data为对象{ info：data 就是传来的数据，  count：1   ++的数量}
            ///// let data = { info: data, count: 1 }  shop-item.vue组件中;
            // 因为改写了  传递的数量  所以这里也跟着改变了
            goods.count += data.count;
            bOff = false;
            if (goods.count > goods.limit_num) {
              //商品数量>商品库存最大值
              goods.count -= data.count;
              state.maxShow = true;
              return;
            }

            state.carShow = true;
            state.ball.show = true; //加入购物车的时候小球显示
            state.ball.img = data.info.ali_image;
            console.log(event);
            //这里拿到的就是  点击的那个加入购物车按钮 元素
            state.ball.el = event.path[0];
          }
        });
      }
      if (bOff) { //bOff = true; // 默认为没有此商品
        //  如果没有  就给设置一个count 属性   初始值为1   然后添加到购物车数组中
        let goodsData = data.info;
        Vue.set(goodsData, "count", data.count);
        Vue.set(goodsData, "checked", true);
        state.carPanelData.push(goodsData);
        console.log(state.carPanelData);
        state.carShow = true;
        state.ball.show = true; //加入购物车的时候小球显示
        state.ball.img = data.info.ali_image;
        console.log(event);
        //这里拿到的就是  点击的那个加入购物车按钮 元素
        state.ball.el = event.path[0]; //这个根据打印event 显示鼠标对象 MouseEvent对象下属性  event.path[0]  拿到的是一个节点层级数组
      }
    },
    // 删除商品
    delCarPanelData(state, id) {
      // state.carPanelData = state.carPanelData.filter(function(){

      // })
      state.carPanelData.forEach(function(goods, index) {
        //   如果购物车中有这个商品了  那他的数量就+1
        if (goods.sku_id === id) {
          //var index =
          state.carPanelData.splice(index, 1);
          return;
        }
      });
    },

    // 删除选中的商品
    delGoodsChecked(state) {
      //数组中删除数据的小技巧  倒着删
      let i = state.carPanelData.length;
      while (i--) {
        if (state.carPanelData[i].checked) {
          state.carPanelData.splice(i, 1);
        }
      }
      // 自己想的用filter()方法
      // state.carPanelData = state.carPanelData.filter(item => {
      //   return !item.checked;
      // });
    },
    // cart.vue中增加商品数量
    plusCarpanelData(state, id) {
      state.carPanelData.forEach(item => {
        if (item.sku_id == id) {
          if (item.limit_num < item.count) {
            return;
          }
          item.count++;
          return;
        }
      });
    },
    // cart.vue中减少商品数量
    subCarpanelData(state, id) {
      state.carPanelData.forEach(item => {
        if (item.sku_id == id) {
          if (item.count <= 1) {
            return;
          }
          item.count--;
          return;
        }
      });
    },
    //点击某一个
    checkedGoods(state, id) {
      state.carPanelData.forEach(item => {
        if (item.sku_id == id) {
          item.checked = !item.checked;
          return; //因为只有一个 用return结束循环
        }
      });
    },

    // 点击全选
    allcheckedCarpanel(state, allChecked) {
      //传一个当前全选按钮的状态 true或 false  （是否选中 ）
      console.log(allChecked);
      state.carPanelData.forEach(item => {
        //item.checked = !allChecked; // 这样写 取反更简洁
        if (allChecked == true) {
          item.checked = false;
        } else {
          item.checked = true;
        }
      });
    },

    closePrompt(state) {
      state.maxShow = false;
    },
    //显示漂浮的购物车
    showCar(state) {
      clearTimeout(state.carTimer);
      state.carShow = true;
    },
    //隐藏漂浮的购物车
    hideCar(state) {
      state.carTimer = setTimeout(() => {
        state.carShow = false;
      }, 1000);
    }
  }
});

export default store; //把store暴露出去，让我们能够拿到它
