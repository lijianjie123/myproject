var List = new Vue({
    el: '#page-list',
    data: {
        cate_index: 0, // 当前分类项下标
        filter_index: 0, // 当前条件筛选项下标
        price_isAsc: false, // 价格是否升序
        cate: [
            { id: 0, des: '推荐' },
            { id: 1, des: '母婴' },
            { id: 2, des: '鞋包饰品' },
            { id: 3, des: '食品' },
            { id: 4, des: '数码家电' },
            { id: 5, des: '居家百货' }
        ],
        sortMethods: [
            { name: '综合排序', method: 'setList' },
            { name: '销量优先', method: 'sortSales' },
            { name: '价格', method: 'sortPrice' }
        ],
        goods: [{
            id: 1001,
            name: 'Beats EP头戴式耳机',
            price: 558,
            type: 4,
            stock: 128,
            sales: 1872,
            img: 'http://img11.360buyimg.com/n1/s528x528_jfs/t3109/194/2435573156/46587/e0e867ac/57e10978N87220944.jpg!q70.jpg'
        }, {
            id: 1002,
            name: '雀巢（Nestle）高钙成人奶粉',
            price: 60,
            type: 3,
            stock: 5,
            sales: 2374,
            img: 'http://m.360buyimg.com/babel/jfs/t5197/28/400249159/97561/304ce550/58ff0dbeN88884779.jpg!q50.jpg.webp'
        }, {
            id: 1003,
            name: '煎炒烹炸一锅多用',
            price: 216,
            type: 5,
            stock: 2,
            sales: 351,
            ishot: true,
            img: 'http://gw.alicdn.com/tps/TB19OfQRXXXXXbmXXXXL6TaGpXX_760x760q90s150.jpg_.webp'
        }, {
            id: 1004,
            name: 'ANNE KLEIN 潮流经典美式轻奢',
            price: 585,
            type: 2,
            stock: 465,
            sales: 8191,
            img: 'http://gw.alicdn.com/tps/TB1l5psQVXXXXcXaXXXL6TaGpXX_760x760q90s150.jpg_.webp'
        }, {
            id: 1005,
            name: '乐高EV3机器人积木玩具',
            price: 3099,
            type: 1,
            stock: 154,
            sales: 165,
            img: 'https://m.360buyimg.com/mobilecms/s357x357_jfs/t6490/168/1052550216/653858/9eef28d1/594922a8Nc3afa743.jpg!q50.jpg'
        }, {
            id: 1006,
            name: '全球购 路易威登（Louis Vuitton）新款女士LV印花手袋 M41112',
            price: 10967,
            type: 2,
            stock: 12,
            sales: 6,
            img: 'https://m.360buyimg.com/n1/s220x220_jfs/t1429/17/1007119837/464370/310392f4/55b5e5bfN75daf703.png!q70.jpg'
        }, {
            id: 1007,
            name: 'Kindle Paperwhite3 黑色经典版电纸书',
            price: 805,
            type: 4,
            stock: 3,
            sales: 395,
            img: 'http://img12.360buyimg.com/n1/s528x528_jfs/t4954/76/635213328/51972/ec4a3c3c/58e5f717N4031d162.jpg!q70.jpg'
        }, {
            id: 1008,
            name: 'DELSEY 男士双肩背包',
            price: 269,
            type: 2,
            stock: 18,
            sales: 69,
            ishot: true,
            img: 'http://gw.alicdn.com/tps/LB1HL0mQVXXXXbzXVXXXXXXXXXX.png'
        }, {
            id: 1009,
            name: '荷兰 天赋力 Herobaby 婴儿配方奶粉 4段 1岁以上700g',
            price: 89,
            type: 1,
            stock: 36,
            sales: 1895,
            img: 'http://m.360buyimg.com/babel/s330x330_jfs/t4597/175/4364374663/125149/4fbbaf21/590d4f5aN0467dc26.jpg!q50.jpg.webp'
        }, {
            id: 1010,
            name: '【全球购】越南acecook河粉牛肉河粉特产 速食即食方便面粉丝 牛肉河粉米粉65克*5袋',
            price: 19.9,
            type: 3,
            stock: 353,
            sales: 3041,
            ishot: true,
            img: 'https://m.360buyimg.com/mobilecms/s357x357_jfs/t3169/228/5426689121/95568/d463e211/586dbf56N37fcd503.jpg!q50.jpg'
        }, {
            id: 1011,
            name: '正品FENDI/芬迪女包钱包女长款 百搭真皮钱夹 女士小怪兽手拿包',
            price: 3580,
            type: 2,
            stock: 5,
            sales: 18,
            img: 'http://img.alicdn.com/imgextra/i3/TB16avCQXXXXXcsXpXXXXXXXXXX_!!0-item_pic.jpg_400x400q60s30.jpg_.webp'
        }],
        list: []
    },
    created() {
        this.setList()   //实例创建完成后 挂载遍历出来的数据
    },
    methods:{
        //渲染数据的函数
        setList(){   
            let self = this;
            this.list = this.goods.filter(function(item){
                // console.log(item.type)
                // return self.cate_index !==0 ? item.type === self.cate_index : item
               if(self.cate_index === 0){   //判断data 数据里边 self.cate_index是不是为0 ，为0 则返回 整个数剧  否则返回item.type === self.cate_index匹配到数据
                    return item
               }else{
                    return item.type === self.cate_index
               }
            })
        },
        //需要切换类目的数组下标  商品列表切换
        toggleCate(index){   
           this.cate_index = index;   
           // 分类操作
           this.setList();
            //切换商品列表的时候，底下的综合，销量排序状态不变
           let filterIndex = this.filter_index;
           (filterIndex===2) && (this.price_isAsc = !this.price_isAsc)
           // 商品排序
           this.sortBy(this.sortMethods[filterIndex].method);
        },
        
        //封装了一个函数 根据属性值进行升序或降序的比较器 (封装一个升序降序的函数)  
        compare(prop,type){  //prop 属性名    type 排序方法 (desc: 降序, asc: 升序)
            console.log(prop,type)
            type = type || 'desc';
            let  flag1, flag2;
            if(type === 'desc' ){  //降序
                flag1 = -1;
                flag2 = 1;
            }else if(type === 'asc'){   //升序
                flag1 = 1;
                flag2 = -1;
            }
            return function(obj1,obj2){
                // console.log(obj1,obj2)
                let val1 = obj1[prop],
                    val2 = obj2[prop];
                if (val2 < val1) {
                    return flag1;
                } else if (val2 > val1) {
                    return flag2;
                } else {
                    return 0;
                }
            }
        },
        /* 按销量排序*/
        sortSales() {
           // this.list.sort(this.compare('sales'));   //根据传进去的sales进行判断
            this.list.sort(function(obj1, obj2){
                let val1 = obj1.sales;
                let val2 = obj2.sales;
                if(val2 < val1){
                    return -1;
                }else if(val2 > val1){
                    return 1;
                }else{
                    return 0
                }
            })
        },
        /* 按价格排序*/
        sortPrice() {
            var type = this.price_isAsc ? 'desc' : 'asc';
            this.list.sort(this.compare('price', type));
            this.price_isAsc = !this.price_isAsc;
        },
        //商品排序
        sortBy(method){   
            this.filter_index = this.sortMethods.findIndex(function(item){  //findIndex返回第一个符合条件的数组成员的位置，如果所有成员都不符合条件，则返回-1。
                //console.log(item.method)
                console.log( method);
                return item.method === method
            })
            method = method || 'setList'   //点击
            method !== 'sortPrice' && (this.price_isAsc = false)  //禁止价格按照底下方式排序
            this[method]();   //相当于this.sortSales()   this.setList() 调用
           
        },
        //添加到购物车
        addToCart(goods){
            let alreadyIndex = Cart.cart.findIndex(function(item,index){   //findIndex()函数也是查找目标元素，找到就返回元素的位置，找不到就返回-1。
                return item.id === goods.id;
            })
            // console.log(alreadyIndex,goods)
            // 查看商品是否存在，如果不存在就添加
            if(alreadyIndex === -1){
                let cartIndex = Cart.cart.length;
                // 添加新的商品，并初始化其数量、价格、被选中状态
                Cart.cart.push(goods);
                Cart.$set(Cart.cart[cartIndex],'quantity',1)   //初始化其数量
                Cart.$set(Cart.cart[cartIndex],'subtotal',goods.price.toFixed(1)) //初始化价格
                Cart.$set(Cart.cart[cartIndex],'checked',false) //被选中状态
                 // 新增商品，购物车不能为全选
                 Cart.checkAllFlag = false;
                return
            }
            // 如果商品已存在并且库存足够，数量加1
            let alreadyGoods =  Cart.cart[alreadyIndex];  //添加到购物车存在的商品

            let num = alreadyGoods.quantity;  //获取购物车存在的商品数量
            let stock = alreadyGoods.stock; //获取购物车存在的商品库存
            
            if(num<stock){ //如果商品属相少于商品库存
                Cart.$set(alreadyGoods, 'quantity', ++alreadyGoods.quantity);
                Cart.$set(alreadyGoods, 'subtotal', (alreadyGoods.price * alreadyGoods.quantity).toFixed(1));
            }else{
                alert('库存不够')
            }

        }
    }
})

var Cart = new Vue({
    el:'#page-cart',
    data:{
        checkAllFlag:false,
        selectedNum: 0,  //记录选中的个数
        delFlag: false, //记录删除状态
        cart: []
    },
    computed:{
        // 已选商品的总额
        totalPrice(){
            let num = 0;
            this.cart.forEach(function(item){
                item.checked && (num += parseFloat(item.subtotal) )
            })
            return num
        }
    },
    methods:{
        //点击增加，减少
        changeQty(isAdd, item){ //isAdd 是否增加    item商品下标
            console.log(1)
            let num = item.quantity;  //商品数量
            let stock = item.stock;  //库存
            if(isAdd && num<stock){
                this.$set(item, 'quantity', ++num);
            }else if(!isAdd && num>1){
                this.$set(item, 'quantity', --num);
            }
            this.$set(item, 'subtotal', (item.price * num).toFixed(1));
        },
        //选中与不选中
        selectGoods(item,index){
            console.log(1)
            // 状态值取反，并根据状态值对selectedNum进行加减
            item.checked = !item.checked
            item.checked ? ++this.selectedNum : --this.selectedNum
            this.selectedNum === this.cart.length ? this.checkAllFlag = true : this.checkAllFlag = false
        },
        //编辑
        toggleDelBtn(){
            this.delFlag = !this.delFlag
        },
        // 全选
        checkAll(){
            let _this = this;
            this.checkAllFlag = !this.checkAllFlag
            this.cart.forEach(item => {
                if(_this.checkAllFlag){
                    item.checked = true;
                    _this.selectedNum = _this.cart.length;
                }else{
                    item.checked = false;
                    _this.selectedNum = 0
                }
            });
        },
        //删除
        delGoods(){
            let cart = this.cart;
            this.cart = cart.filter(function(item){
                return !item.checked
            })
            
            this.selectedNum = 0; //重置被选商品数量
            this.checkAllFlag = false; //重置全选状态
            this.delFlag = !this.delFlag; //删除状态
        }
    },
   
})
   