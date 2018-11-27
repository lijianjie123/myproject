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
    list: [] //空数组

    //    id: 1008,
    //     name: "DELSEY 男士双肩背包",
    //     price: 269,
    //     type: 2,
    //     stock: 18,
    //     sales: 69,
    //     ishot: true,
    //     img:
  },
  // 钩子函数创建完成后
  //在created阶段，vue实例的数据对象data有了，$el 还没有。
  created() {
    this.setList(); //此处调用 也就是说,数据都能拿到了,但是还没有挂载点
    console.log(this.list[0]);
  },
  methods: {
    // 创建数据对象函数
    setList() {
      //把商品添加到自己建立的数组中
      var that = this; // fliter中不能直接用this
      this.list = this.goods.filter(function(item, index, self) {
        if (that.cate_index != 0) {
          // 数据中没有item.type == 0 的项
          // 不等于0  就把对应的 item.type == that.cate_index  返回出去
          return item.type === that.cate_index;
        } else {
          // 等于0 就返回每一项
          return item;
        }
      });
    },
    //点击分类 加载对应的商品
    chooseType(index) {
      this.cate_index = index;
      this.setList(); //这里重新调用下，找到的是和分类 下标相等的商品
      console.log(this.list);
    },
    // 根据属性值进行升序或者降序排列 的函数
    // method 属性比较器
    // param {string} prop 属性名  prop代表的参数只有sales， 因为这里是为销量的升序排和降序排 写的方法
    // param {string} type 排序方法（desc：降序， asc ：升序）
    compare: function(prop, type) {
      type = type || "desc";
      var flag1;
      if (type === "desc") {
        flag1 = -1; // 降序排
      } else if (type === "asc") {
        flag1 = 1; //升序排
      }

      //return一个函数  根据变量flag的值 判断 是升序还是降序
      return function(obj1, obj2) {
        var val1 = obj1[prop];
        var val2 = obj2[prop];

        if (flag1 == 1) {
          return val1 - val2;
        } else if (flag1 == -1) {
          return val2 - val1;
        } else {
          return 0; // 相等
        }
      };
    },

    //按销量排序
    sortSales() {
      this.list.sort(this.compare("sales"));
    },
    //按价格排
    sortPrice() {
      //默认为false  降序
      var type = this.price_isAsc; // 默认false  降序
      if (type == false) {
        this.price_isAsc = true;
        this.list = this.list.sort(function(obj1, obj2) {
          var price1 = obj1.price;
          var price2 = obj2.price;
          return price1 - price2; // 价格从大到小排
        });
      } else {
        this.price_isAsc = false;
        this.list = this.list.sort(function(obj1, obj2) {
          var price1 = obj1.price;
          var price2 = obj2.price;
          return price2 - price1; // 价格从小到大排
        });
      }
    },
    sortName(method) {
      // 传来的参数 setList  sortSales sortPrice
      //findIndex  返回第一个符合条件的组员的位置，如果都不符合条件，则返回-1.
      this.filter_index = this.sortMethods.findIndex(function(item) {
        return item.method == method;
      });

      //method =

      if (method === "setList") {
        this.setList(); //这里调用下，找到的是所有商品
      } else if (method === "sortSales") {
        this.sortSales();

        // 开始  这块是自己想到的商品排序方法
        // this.setList();
        // this.list.sort(function(a, b) {
        //   // return a-b;  从小到大
        //   // return b-a; 从大到小
        //   // ab 代表第一第二个商品 的每项信息
        //   // var salesA = a.sales;
        //   // var salesB = b.sales;
        //   return b.sales - a.sales; //   b-a  是降序排列
        // });
        //完
      } else {
        this.sortPrice();
      }
    },

    // 添加到购物车
    addToCar(goods) {
      // 这个参数是传递的  list[]数组中的 每一项商品信息
      // 查找加入到购物车中商品的id，和传递的那项商品的id   找到就返回所在的位置   没有就返回-1
      var goodsIndex = Cart.cart.findIndex(function(item) {
        return item.id == goods.id;
      });
      // 如果商品不存在 就添加到cart[] 数组中
      if (goodsIndex == -1) {
        var cartLen = Cart.cart.length;
        Cart.cart.push(goods);
        console.log(Cart.cart);

        // 给添加到购物车的商品添加 数量属性  初始化为1
        // 只要心添加一件商品就会对应给设置 新的自定义属性 为quantity  并且值为1
        Cart.$set(Cart.cart[cartLen], "quantity", 1); //初始化添加到cart数组中商品的数量
        Cart.$set(Cart.cart[cartLen], "checked", false); //设置初始化 状态是否被选中
        //return;  如果下边没有写在else 中  就会出现 stock undefind  因为goodsIndex  这个值为-1  找不到商品  所以更找不到商品的stock
        Cart.checkAllFlag = false;
      } else {
        //如果存在  在没有超出库存的基础上  数量++
        // 所以要找到这件商品的库存   Cart.cart[goodsIndex]  这项代表添加过的商品
        var hasgoods = Cart.cart[goodsIndex];
        console.log(hasgoods.stock);
        //添加过商品的库存
        //var stockNum = hasgoods.stock;
        if (hasgoods.stock > hasgoods.quantity) {
          // var num = 1;
          // console.log(num++); //1  先运算 后++
          // console.log(num); // 2
          // console.log(++num); //3  先自+ 后运算
          // console.log(num); //3
          // hasgoods.quantity++;   后++  就不对
          Cart.$set(hasgoods, "quantity", ++hasgoods.quantity);
        }
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
    cart: [], //加入到购物车的商品
    selectedNum: 0, // 被选中的商品的件数
    checkAllFlag: false, //全选按钮是否选中  默认不选中

    edit: true
  },
  methods: {
    //单词别写错  是methods是复数的
    addGoods(item) {
      var goodsStock = item.stock;
      if (goodsStock > item.quantity) {
        this.$set(item, "quantity", ++item.quantity);
        //++item.quantity;
      }
    },
    jianGoods(item) {
      console.log(222);
      var goodsStock = item.stock;
      if (goodsStock >= item.quantity) {
        if (item.quantity == 1) {
          console.log(111);
          this.$set(item, "quantity", 1);
          return;
        }
        this.$set(item, "quantity", --item.quantity);
      }
    },
    ischeck(item) {
      console.log(this.selectedNum);

      item.checked = !item.checked;
      if (item.checked) {
        ++this.selectedNum;
        if (this.selectedNum == Cart.cart.length) {
          this.checkAllFlag = true;
        }
      } else {
        --this.selectedNum;
        this.checkAllFlag = false;
      }

      //this.$set(item, "totlePrice", );
    },
    checkAll() {
      // 给forEach 里的函数用的  forEach里的function 不能直接使用this
      var that = this;
      //点击的时候给 this.checkAllFlag 取反  使其能够来回切换是否选中
      this.checkAllFlag = !this.checkAllFlag;
      this.cart.forEach(function(item) {
        if (that.checkAllFlag) {
          item.checked = true;
          that.selectedNum = Cart.cart.length;
          console.log(0);
        } else {
          item.checked = false;
          //that.selectedNum
          //console.log(1)
        }
      });
    },
    //点击编辑
    clickEdit() {
      this.edit = !this.edit;
      // if (this.edit == true) {
      //   console.log(1);
      //   this.edit = false;
      // } else {
      //   console.log(0);
      //   this.edit = true;
      // }
    },
    // 删除商品
    delGoods() {
      this.cart = this.cart.filter(function(item, index, self) {
        return item.checked != true;
      });
    }
  },

  computed: {
    totalPrice() {
      var totalPrice = 0;
      this.cart.filter(function(item) {
        if (item.checked) {
          totalPrice += item.price * item.quantity;
        }
        // return totalPrice; //不能在这里return
      });
      return totalPrice;
    }
  }
});
