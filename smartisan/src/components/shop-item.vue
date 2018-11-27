<template>
<div class="item" >
        <div>
            <div class="item-img"><img :alt="item.name" :src="item.sku_info[itemIndex].ali_image + '?x-oss-process=image/resize,w_206/quality,Q_80/format,webp'" style="opacity: 1;">
            </div>
            <h6>{{item.name}}</h6>
            <h3 >{{item.name_title}}</h3>
            <div class="params-colors">
                <ul class="colors-list">
                    <li v-for = "(sku,index) in item.sku_info" :key = "index">
                    <a href="javascript:;"  :title="sku.spec_json.show_name" :class="{'active': itemIndex === index}" @click= "changeClor(index)">
                    <img :src="'http://img01.smartisanos.cn/'+sku.spec_json.image + '20X20.jpg'">
                    </a>
                </li>
                </ul>
            </div>
            <div class="item-btns clearfix">
                <span class="item-gray-btn">
                    <router-link :to = "{name:'Item',query:{itemId:item.sku_info[itemIndex].sku_id}}">查看详情</router-link>
                    </span><span class="item-blue-btn" @click="addCarPanelHandle(item.sku_info[itemIndex])">加入购物车 </span>
            </div>
            <div class="item-price clearfix">
                <i>¥</i><span>{{item.price}}</span>
            </div>
            <div class="discount-icon">false</div>
            <div class="item-cover">
              <router-link :to = "{name:'Item',query:{itemId:item.sku_info[itemIndex].sku_id}}"></router-link>
                <!-- <a href="javascript:;" target="_blank"></a> -->
            </div>
        </div>
</div>
</template>
<script>
export default {
  data() {
    return {
      // 要用到索引传值的时候  先自定义一个初始状态值为0
      itemIndex: 0
    };
  },
  // 自组件接收父组件传递的值  要用props 接收  子组件中prop 中的值 是父组件  绑定的属性名称 :item = "item"即  ：和=  之间的那个值
  props: ["item"],
  methods: {
    changeClor(index) {
      this.itemIndex = index;
    },
    addCarPanelHandle(data) {
      //声明一个变量data为对象{ info：data 就是传来的数据，  count：1   ++的数量}
      let itemData = { info: data, count: 1 }; //这里给data 做下修改 把data改为对象
      this.$store.commit("addCarPanelData", itemData);
    }
  }
};
</script>

