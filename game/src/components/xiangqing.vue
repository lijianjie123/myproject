<template>
    <div id="contentBox">
        <!-- v-for="(item,index) in itemInfo" :key = "index" -->
        <!-- 详情页面  接收到的只有一条数据 最外层不能再用到v-for 循环  -->
        <div class="newsbox">
            <div class="wrapInfoTop">
                <h2><strong>{{infoId}}-----{{itemInfo.id}}----{{itemInfo.info[0]}}</strong></h2>
                <span class="time">Time : {{itemInfo.time}}</span>
            </div>
            

        </div>

    </div>
</template>

<script>
import data from "@/lib/xiangqing";
export default {
    data() {
        return {
            data:data,
            
            infoId :this.$route.query.infoId, 
            obj:{},
        }
    },
    watch: {
        '$route.query.infoId'(){
            this.infoId = this.$route.query.infoId

        }
    },
    //要接收上一级点击过来的那个数据  所以要用computed()
    computed: {
        //里边要是一个函数
        // itemInfo(){ 
        //   let itemInfo = this.data.filter((item)=>{
        //         return Number(item.id) === Number(this.infoId)
        //     })[0]
        //     return itemInfo;
        // } 

    itemInfo() {
    // 由于箭头函数不绑定this， 它会捕获其所在（即定义的位置）上下文的this值， 作为自己的this值，
      let itemInfo = this.data.filter(item => {
        return Number(item.id) === Number(this.infoId);
      })[0];
      return itemInfo;
    }


    },
    // created(){
        
    // }
    updated() {
        console.log(itemInfo)
    },
   

}
</script>

<style>

</style>
