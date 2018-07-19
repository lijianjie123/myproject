var List = new Vue({
  el: "#page-list",
  data: {
    cate: [
      { id: 0, des: "推荐" },
      { id: 1, des: "母婴" },
      { id: 2, des: "鞋包饰品" },
      { id: 3, des: "食品" },
      { id: 4, des: "数码家电" },
      { id: 5, des: "居家百货" }
    ],
    sortMethods: [
      { name: "综合排序", method: "setList" },
      { name: "销量优先", method: "sortSales" },
      { name: "价格", method: "sortPrice" }
    ],
    goods: [
      {
        id: 1001,
        name: "Beats EP头戴式耳机",
        price: 558,
        type: 4, //类型 品类
        stock: 128, //库存
        sales: 1872, //销量
        img:
          "http://img11.360buyimg.com/n1/s528x528_jfs/t3109/194/2435573156/46587/e0e867ac/57e10978N87220944.jpg!q70.jpg"
      },
      {
        id: 1002,
        name: "雀巢（Nestle）高钙成人奶粉",
        price: 60,
        type: 3,
        stock: 5,
        sales: 2374,
        img:
          "http://m.360buyimg.com/babel/jfs/t5197/28/400249159/97561/304ce550/58ff0dbeN88884779.jpg!q50.jpg.webp"
      },
      {
        id: 1003,
        name: "煎炒烹炸一锅多用",
        price: 216,
        type: 5,
        stock: 2,
        sales: 351,
        ishot: true, //热卖商品
        img:
          "http://gw.alicdn.com/tps/TB19OfQRXXXXXbmXXXXL6TaGpXX_760x760q90s150.jpg_.webp"
      },
      {
        id: 1004,
        name: "ANNE KLEIN 潮流经典美式轻奢",
        price: 585,
        type: 2,
        stock: 465,
        sales: 8191,
        img:
          "http://gw.alicdn.com/tps/TB1l5psQVXXXXcXaXXXL6TaGpXX_760x760q90s150.jpg_.webp"
      },
      {
        id: 1005,
        name: "乐高EV3机器人积木玩具",
        price: 3099,
        type: 1,
        stock: 154,
        sales: 165,
        img:
          "https://m.360buyimg.com/mobilecms/s357x357_jfs/t6490/168/1052550216/653858/9eef28d1/594922a8Nc3afa743.jpg!q50.jpg"
      },
      {
        id: 1006,
        name: "全球购 路易威登（Louis Vuitton）新款女士LV印花手袋 M41112",
        price: 10967,
        type: 2,
        stock: 12,
        sales: 6,
        img:
          "https://m.360buyimg.com/n1/s220x220_jfs/t1429/17/1007119837/464370/310392f4/55b5e5bfN75daf703.png!q70.jpg"
      },
      {
        id: 1007,
        name: "Kindle Paperwhite3 黑色经典版电纸书",
        price: 805,
        type: 4,
        stock: 3,
        sales: 395,
        img:
          "http://img12.360buyimg.com/n1/s528x528_jfs/t4954/76/635213328/51972/ec4a3c3c/58e5f717N4031d162.jpg!q70.jpg"
      },
      {
        id: 1008,
        name: "DELSEY 男士双肩背包",
        price: 269,
        type: 2,
        stock: 18,
        sales: 69,
        ishot: true,
        img: "http://gw.alicdn.com/tps/LB1HL0mQVXXXXbzXVXXXXXXXXXX.png"
      },
      {
        id: 1009,
        name: "荷兰 天赋力 Herobaby 婴儿配方奶粉 4段 1岁以上700g",
        price: 89,
        type: 1,
        stock: 36,
        sales: 1895,
        img:
          "http://m.360buyimg.com/babel/s330x330_jfs/t4597/175/4364374663/125149/4fbbaf21/590d4f5aN0467dc26.jpg!q50.jpg.webp"
      },
      {
        id: 1010,
        name:
          "【全球购】越南acecook河粉牛肉河粉特产 速食即食方便面粉丝 牛肉河粉米粉65克*5袋",
        price: 19.9,
        type: 3,
        stock: 353,
        sales: 3041,
        ishot: true,
        img:
          "https://m.360buyimg.com/mobilecms/s357x357_jfs/t3169/228/5426689121/95568/d463e211/586dbf56N37fcd503.jpg!q50.jpg"
      },
      {
        id: 1011,
        name: "正品FENDI/芬迪女包钱包女长款 百搭真皮钱夹 女士小怪兽手拿包",
        price: 3580,
        type: 2,
        stock: 5,
        sales: 18,
        img:
          "http://img.alicdn.com/imgextra/i3/TB16avCQXXXXXcsXpXXXXXXXXXX_!!0-item_pic.jpg_400x400q60s30.jpg_.webp"
      }
    ],
    cate_index: 0, // 当前分类项下标
    filter_index: 0, // 当前条件筛选项下标
    price_isAsc: false, // 价格是否升序
    list: []
  },
  created: function() {
    this.setList();
  },

  methods: {
    /**
     * @method 设置商品列表
     */
    // setList: function () {
    //     var self = this;
    //     this.list = this.goods.filter(function (item) {
    //         return self.cate_index !== 0
    //             ? item.type === self.cate_index
    //             : item
    //     });
    // },
    setList: function() {
      var self = this; // 后边filter 里用到了this， filter里直接用this  this的指向不是跟实例的，所以这先用变量存一下this
      /*filter(function (item, index, self) {}  //item为当前遍历到的项,和arr[i]一样，index为当前遍历到的项的索引，和i一样，self就是当前数组，和arr一样*/
      //cate_index: 0, // 当前分类项下标
      this.list = this.goods.filter(function(item) {
        //把原商品信息进行过滤添加到list：[]中;
        if (self.cate_index != 0) {
          //判断当前分类项下标是否等于0，等于0就返回每一项；  不等于0就返回每一项中item.type == self.cate_index；（每一项中的type值，与 当前分类项下标相等的那一项）
          return item.type === self.cate_index;
        } else {
          return item;
        }
      });
    },
    // 切换分类
    chooseType(index) {
      this.cate_index = index; // 由于这里设置了 cate_index 的值，所以下边再次调用的时候  数组中存的就是与点击的index 值相等的 type 的值；
      //分类操作
      this.setList(); // 这里调用后，list 数组中只有 item.type === self.cate_index  的商品数据了
      //console.log(this.list)
      //价格排序状态保持不变
    },
    // 根据属性值进行升序活降序的比较器
    // method 属性比较器
    // param {string} prop 属性名
    // param {string} type 排序方法（desc：降序， asc ：升序）
    compare: function(prop, type) {
      //console.log(prop,type)
      type = type || "desc"; //desc：降序
      var flag1; //, flag2;
      if (type === "desc") {
        flag1 = -1;
        //flag2 = 1;
      } else if (type === "asc") {
        // asc ：升序
        flag1 = 1;
        //flag2 = -1;
      }

      return function(obj1, obj2) {
        var val1 = obj1[prop],
          val2 = obj2[prop];
        if (flag1 === -1) {
          // 降序
          return val2 - val1;
        } else if (flag1 === 1) {
          // 升序
          return val1 - val2;
        } else {
          return 0; // 相等
        }
      };

      //     //console.log(obj1,obj2)
      //     var val1 = obj1[prop],
      //         val2 = obj2[prop];

      // return function (obj1, obj2) {
      //     //console.log(obj1,obj2)
      //     var val1 = obj1[prop],
      //         val2 = obj2[prop];
      //         console.log(val1);
      //         console.log(val2)

      //     if (val2 < val1) { //若 a 小于 b，在排序后的数组中 a 应该出现在 b 之前，则返回一个小于 0 的值。
      //         return flag1;
      //     } else if (val2 > val1) {
      //         return flag2;
      //     } else {
      //         return 0;
      //     }
      // }
      // console.log(flag1);
      // console.log(flag2)
    },

    //  按销量排序
    sortSales: function() {
      this.list.sort(this.compare("sales"));
    },
    // sortSales(){

    // },
    //按价格排序
    sortPrice: function() {
      //（desc：降序， asc ：升序）
      var type = this.price_isAsc ? "desc" : "asc";
      this.list.sort(this.compare("price", type));
      this.price_isAsc = !this.price_isAsc;
    },

    //商品排序
    sortBy: function(method) {
      //this.filter_index = index;
      this.filter_index = this.sortMethods.findIndex(function(sortMethod) {
        //findIndex返回第一个符合条件的数组成员的位置，如果所有成员都不符合条件，则返回-1。
        //console.log(item.method)
        console.log(method);
        return sortMethod.method === method;
      });
      method = method || "setList"; //点击

      if (method === "setList") {
        this.setList();
      } else if (method === "sortSales") {
        console.log(1);
        this.sortSales();
        this.list.sort(function(obj1, obj2) {
          let val1 = obj1.sales;
          let val2 = obj2.sales;
          if (val2 < val1) {
            return -1;
          }
        });
      } else {
        //this.price_isAsc = false; //升序
        this.sortPrice();
      }
      //    //点击 //'setList'  'sortSales'  sortPrice
      //     method = method || 'setList';
      //     method !== 'sortPrice' && (this.price_isAsc = false)  //禁止价格按照底下方式排序
      //this[method]();   //相当于this.sortSales()   this.setList() 调用
    },
    /**
     * @method 添加到购物车
     * @param {Object} goods 商品
     */
    addToCart: function(goods) {
      var alreadyIndex = Cart.cart.findIndex(function(item, index) {
        // findIndex（）函数查找目标元素，找到就返回元素的位置， 找不到就返回-1
        return item.id == goods.id; // -1     点击的时候查看这个item.id == goods.id值  是否相等，相等代表已经添加过了， 返回-1才是cart：[] 数组中不存在  然后进行添加
        // 这里item.id == goods.id;返回商品所在的位置，
      });
      // console.log(alreadyIndex, goods);
      // 如果商品不存在， 则添加
      if (alreadyIndex === -1) {
        var cartIndex = Cart.cart.length;
        //console.log(cartIndex); //0
        // 添加新的商品。并出始化其数量,价格, 被选中的状态
        Cart.cart.push(goods);

        Cart.$set(Cart.cart[cartIndex], "quantity", 1); //初始化cart数组中每项商品的数量;
        Cart.$set(Cart.cart[cartIndex], "subtotal", goods.price.toFixed(1)); //初始化价格  toFixed(num) 方法可把 Number 四舍五入为指定小数位数的数字  num 代表小数点后保留几位， 如果num=0； 则取整
        Cart.$set(Cart.cart[cartIndex], "checked", false); //被选中状态  默认不选中

        //如果新增加了商品  全选按钮不能被选中   所以给全选按钮的属性值设置为false
        Cart.checkAllFlag = false;
        return;
      }
      console.log(99);
      //如果商品已经添加过，并且商品库存足够，数量就+1
      var alreadyGoods = Cart.cart[alreadyIndex];
      console.log(alreadyGoods);
      // var num = alreadyGoods.quantity; //购物车中某一项商品的数量
      //var stock =  alreadyGoods.stock; //商品库存
      if (alreadyGoods.stock > alreadyGoods.quantity) {
        //console.log(0)
        Cart.$set(alreadyGoods, "quantity", ++alreadyGoods.quantity);
      }
    }
  }
});

var Cart = new Vue({
  el: "#page-cart",
  data: {
    // cart: [{
    //     id: 1001,
    //     name: 'Beats EP头戴式耳机',
    //     price: 558,
    //     type: 4,
    //     quantity: 1,
    //     subtotal: 558,
    //     stock: 128,
    //     checked: false,
    //     sales: 1872,
    //     img: 'http://img11.360buyimg.com/n1/s528x528_jfs/t3109/194/2435573156/46587/e0e867ac/57e10978N87220944.jpg!q70.jpg'
    // }]

    cart: [],
    selectedNum: 0, // 被选中的商品的件数
    delFlag: false, //购物车‘编辑按钮’的状态
    checkAllFlag: false //全选按钮是否选中  默认不选中
  },

  methods: {
    //点击增加，减少
    changeQty: function(isAdd, item) {
      //isAdd 是否增加， item 每一项商品
      let num = item.quantity; //商品数量
      let stock = item.stock; //商品库存
      if (isAdd && num < stock) {
        this.$set(item, "quantity", ++num);
      } else if (!isAdd && num > 1) {
        this.$set(item, "quantity", --num);
      }

      this.$set(item, "subtotal", (item.price * num).toFixed(1));
    },
    selectGoods: function(item) {
      //状态值  取反， 并根据状态值对selectedNum 进行加减
      item.checked = !item.checked;
      item.checked ? ++this.selectedNum : --this.selectedNum;
      //设置全选
      this.selectedNum === Cart.cart.length
        ? (this.checkAllFlag = true)
        : (this.checkAllFlag = false);
    },
    //全选
    checkAll: function() {
      console.log(0);
      var self = this; // 这个this  是为了给forEach() 函数使用的
      this.checkAllFlag = !this.checkAllFlag;
      this.cart.forEach(function(item) {
        if (self.checkAllFlag) {
          //全选
          item.checked = true;
          self.selectedNum = Cart.cart.length;
        } else {
          //全不选;
          item.checked = false;
          self.selectedNum;
        }
      });
    },
    // 切换编辑按钮
    toggleDelBtn: function() {
      this.delFlag = !this.delFlag;
    },
    delGoods: function() {
      // 提示：
      // 每次便利删除数组元素时， 会减少数组长度，所以不能缓存length
      // 也不能用forEach方法， 因为他会自动缓存数组的长度
      // 这里还可以使用filter
      var cart = this.cart;
      this.cart = cart.filter(function(item) {
        console.log(item.checked);
        return !item.checked; // 返回出没有被选中的
      });
      // 重置 被选商品数量  全选状态，删除状态
      this.selectedNum = 0;
      this.checkAllFlag = false;
      this.delFlag = !this.delFlag;
    }
  },
  //商品总价
  computed: {
    totalPrice: function() {
      var num = 0;
      this.cart.forEach(function(item) {
        item.checked && (num += parseFloat(item.subtotal));
      });
      return num;
    }
  }
});
