
<template>
    <div class="item" >
        <div>
            <div class="item-img"><img :alt="itemD.name" :src="itemD.sku_info[itemIndex].ali_image  + '?x-oss-process=image/resize,w_206/quality,Q_80/format,webp'" style="opacity: 1;">
            </div>
            <h6>{{itemD.name}}</h6>
            <h3 >{{itemD.name_title}}</h3>
            <div class="params-colors">
                <ul class="colors-list">
                    <li v-for = "(sku,index) in itemD.sku_info" :key = "index" 
                    :title =" sku.spec_json.show_name"
                    >
                        <a href="javascript:;" @click="tableIndex(index)" :class = "{'active': index==itemIndex }" >
                        <img :src="'http://img01.smartisanos.cn/' + sku.spec_json.image +'20X20.jpg'">
                        </a>
                    </li>
                </ul>
            </div>
            <div class="item-btns clearfix">
                <span class="item-gray-btn">
                    <router-link :to = "{name:'Item',query:{itemId:itemD.sku_info[itemIndex].sku_id}}">查看详情</router-link>
                </span>
                <span class="item-blue-btn" @click = "addCarPanelHandle(itemD.sku_info[itemIndex])">加入购物车 </span>
            </div>
            <div class="item-price clearfix">
                <i>¥</i><span>{{itemD.price}}</span>
            </div>
            <div class="discount-icon">false</div>
            <div class="item-cover">
                <router-link :to = "{name:'Item',query:{itemId:itemD.sku_info[itemIndex].sku_id}}"></router-link>
                <!-- <a href="javascript:;" target="_blank"></a> -->
            </div>
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      itemIndex: 0
    };
  },

  props: {
    //子组件接收数据   要把props写在子组件的script中
    itemD: {
      type: Object // 这里的type 类型 Object要注意大小写  //这里出错写成了object
    }
  },
  methods: {
    tableIndex(index) {
      console.log(index);
      this.itemIndex = index;
      //这里是点击小圆点  切换商品颜色  即是 切换的商品的img图片路径  这里图片路径也是从数据中读取出来的  所以要修改 图片上  对应的索引值
      //<img :alt="itemD.name" :src="itemD.sku_info[itemIndex].ali_image  + '?style="opacity: 1;">
    },
    addCarPanelHandle(data) {
      let itemData = { info: data, count: 1 }; //这里给data 做下修改 把data改为对象
      this.$store.commit("addCarPanelData", itemData);
      //console.log("text");
      //this.$store.commit("addCarPanelData", data);
    }
  }
};
</script>

<style>
</style>
