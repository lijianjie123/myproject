<template>
  <div>
    <mt-header fixed  class="fs1-2" :title = this.headdata.address>
      <router-link to="/" slot="left">
        <!-- <div><icon class="search2" name="search2" ></icon></div> -->
      </router-link>
      <mt-button class="fs0-8" slot="right">登录|注册</mt-button>
    </mt-header>
    {{this.geohash}}
    <div class="padtop40">
      <mt-swipe class="myswipe" :auto="0"  >
        <mt-swipe-item  class="myitem" v-for = "(items,index) of category" :key = "index">
          <div v-for = "(item, index) of items" :key = "index">
            <div class="imgbox"><img :src = "imgBaseUrl+item.image_url"></div>
            <div class="fs0-8 col9f mgtop5">{{item.title}}</div>
          </div>
        </mt-swipe-item>
      </mt-swipe>

      <div class="mgtop10 bgfff maindiv">
        <div class="ih30 pad10">
          <!-- <div class="svgbox left">
            <icon name="shop" class="shopicon"></icon> 
          </div> -->
          <div class="fs0-8 left col9f mgleft10">
            附近商家
          </div>
        </div>

        <div class="shoplist after" v-for = "(item,index) of msite" :key = "index" @click = "gotoShop(item.id)"> 
            <div class="shopimgbox">
                <img :src = "imgshopUrl+item.image_path">
            </div>
            <div class="rightbox">
                <div class="shoptop">
                  <span class="pinpai fs10 mgl">品牌</span>
                  <span class="shopname">{{item.name}}</span>
                  <span class="rightspan right fs10 mgr">
                      <span v-for="(itemsupports, index) in item.supports" :key = "index" class="">{{itemsupports.icon_name}}</span>
                    </span>
                </div>
                <div class="xxdiv" >
                  <div class="xxbox fs10 mgl">
                    <!-- 代表循环出5个空心星星 -->
                    <span v-for="(itemxx,index) in 5" class="xxspan1" :key = "index">
                      <!-- 对每一个空心星星的里进行判断    -->
                      <!-- 如果当前index+1 <= 平分  显示.xx 的实心星星-->
                        <span v-if="index+1<=item.rating"  class="xx"></span>
                        <!-- 如果index+1 > 平分  显示.xx 的实心星星-->
                        <!-- <icon v-if="index+1>item.rating"  class="xx"></icon> -->
                          <span v-if="item.rating-(index)>0&&item.rating-(index)<1" class="xxspan2" :class="xxclass+(item.rating*10-index*10)">
                            
                            <span class="xx"></span>
                          </span> 
                          
                    </span>



                   
                  </div>
                  <span class="colred fs10 mgl mgleft8">{{item.rating}}</span>
                  <span class="fs10 mgl">月售{{item.recent_order_num}}单</span>
                  <span class="rightspan fs10 right mgr">
                      <span class="fn ">{{item.delivery_mode.text}}</span>
                      <span class="zs ">准时达</span>
                  </span>
                </div>
                <div class="shopfoot">
                    <div><span class="fs10 mgl">￥{{item.float_minimum_order_amount}}起送/{{item.piecewise_agent_fee.tips}}</span></div>
                    <div><span class="right fs10 mgr"><span class="">{{item.distance}}/</span><span class="col">{{item.order_lead_time}}</span></span></div>
                </div>
            </div>
        </div>



      </div>
    </div>

    <foot></foot>
    <load v-if = "num!= 1"></load>
    <router-view></router-view>
  </div>
</template>

<script>
import foot from '../../components/foot/foot'
// import icon from '../../components/page/msite/icon'
import load from '../../components/load/load'
export default {
  data () {
    return {
        geohash:this.$route.params.id,
        headdata:{}, //头部信息
        indexentry:[], //首页头部分类
        imgBaseUrl:'https://fuss10.elemecdn.com', //图片域名地址
        category:[], //用来存储头部分页的数组 8个数据为一组，
        msite:[],//商铺信息
        latitude:this.$route.query.latitude,
        longitude:this.$route.query.longitude,
        imgshopUrl:'http://cangdu.org:8001/img/',

        xxclass:"w",
        num:1 // 请求是否加载完成  //  每次发送请求时，num就减一，请求结束时（不管成功还是失败）num就 +1，  判断num 的值 是否等于1 就知道请求是否结束

      
    }
  },
  
  watch:{
      'geohash'(){
          this.$route.params.id = this.$route.params.id  
      } 
  },
  components:{
  //注册组件
    foot,
    load
    
  },
  created:function(){
      
  },
  
  mounted:function(){
  //生命周期
    this.num = this.num -1; // 每次请求前 num都减 一
    this.$axios.get('https://elm.cangdu.org/v2/pois/'+ this.geohash).then(data=>{
          console.log(data)
            this.headdata = data.data
            this.num = this.num + 1
    }),
    this.num = this.num -1;
    this.$axios.get('https://elm.cangdu.org/v2/index_entry').then(data=>{
          console.log(data)
            this.indexentry = data.data
            var num = parseInt(data.data.length/8);
           var category=[]; //最后要输出的数组
           var arr = [];

           for(var i=0; i<num; i++){
               arr = [];
               for(var j = 0; j<8; j++){
                   arr.push(this.indexentry[i*8+j])
               }
            category.push(arr)
           }
           arr = [];
           if(num*8<data.data.length){
               for(var k = num*8; k<data.data.length; k++){
                   arr.push(this.indexentry[num*8+k])
               }
               category.push(arr)
           }
            this.category = category
            this.num = this.num + 1
    }, response=>{
        console.log(response)
        this.num = this.num + 1
    }),


    this.$axios.get('https://elm.cangdu.org/shopping/restaurants?latitude=' + this.latitude + '&longitude=' + this.longitude).then(data=>{
        
          console.log(data)
            this.msite = data.data
    })


   
      
  },
  computed:{
  //计算属性
    
  },
    methods:{
  //函数
       getarr(){
           
        } ,
        gotoShop(id){
          this.$router.push({path:'/shop/'+ id }) 

        }
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

b.xx{ width: 15px; height: 15px; display: inline; background: yellow; border-radius:5px; margin-right: 5px; }
.fs10{
  font-size: 12px;
  transform: scale(0.95);
  color: #666;
  display:inline-block;
}
.mgr{
  transform-origin:100% 50% 0;/*改变缩放基点*/
}
.mgl{
  transform-origin:0 50% 0;/*改变缩放基点*/
}
.myswipe{
  height:210px;
  box-sizing:border-box;
  padding-bottom:30px;
  padding-top:10px;
  background-color:#ffffff;
  border-bottom:1px solid #E4E4E4;
}

.mint-swipe-indicator.is-active {
    background: #000;
}

.myitem>div{
  width:25%;
  height:50%;
  box-sizing:border-box;
  float:left;
  text-align:center;
}
.imgbox{
  height:60%;
}
.imgbox img{
  height:100%;
}
.shopicon{
  width:100%;
  height:100%;
  margin-bottom:-2px;
}
.svgbox{
  width:15px;
  height:15px;
}
.mgleft10{
  margin-left:10px;
}
.shoplist{
  padding:10px;
  overflow: hidden;
  display:flex;
}
.shoplist>div{
  float:left;
}
.shopimgbox{
  width:60px;
  height:60px;
  margin-right:5px;
}
.shopimgbox>img{
  height:100%;
  width:100%;
  background-color:red;
}
.maindiv{
  border-top:1px solid #E4E4E4;
}

.search2{
  width:20px;
  height:20px;
}
.rightbox{
  font-size:0.8rem;
  flex:1;
}
.shoptop,.xxdiv{
  height:25px;
  line-height:25px;
}
.pinpai{
  display:inline-block;
  width:30px;
  text-align:center;
  font-weight:bold;
  height:20px;
  line-height:20px;
  background-color:#ffd930;
  border-radius:3px;
}
.shopname{
  font-weight:bold;
  font-size:0.8rem;
}
.rightspan>span{
  display:inline-block;
  height:14px;
  border:1px solid #A3ACB7;
  margin-left:3px;
  padding:1px;
  color:#A3ACB7;
  line-height:14px;
  font-size:12px;
}

.xx{
  width:12px;
  height:15px;
  display: inline-block;
  background: url(../../images/stars.png) -0px 2px no-repeat;
  
}
.xxbox{
  display:inline-block;
  height:25px;
  box-sizing:border-box;
}
.xxbox>span{
    /* margin-right:-2px; */
}
.xxspan1{
  position:relative;
  display:inline-block;
  width: 12px; height: 15px;
   /* background: url(../../images/stars.png) 0 3px no-repeat; */
   background: url(../../images/stars.png) -13px 3px no-repeat;
}
.xxspan2{
  display:inline-block;
  position:absolute;
  left:0px;
  overflow: hidden;
}
.w1{
  width:10%;
}
.w2{
  width:20%;
}
.w3{
  width:30%;
}
.w4{
  width:40%;
}
.w5{
  width:50%;
}
.w6{
  width:60%;
}
.w7{
  width:70%;
}
.w8{
  width:80%;
}
.w9{
  width:90%;
}
.fn{
  background-color:#3190E8;
  color:white !important;
  border-color:#3190E8 !important;
}
.zs{
  color:#3190E8 !important;
   border-color:#3190E8 !important;
}
/* .mgleft8{
  margin-left:-8px;
} */
.shopfoot>div{
  width:50%;
  float:left;
}


</style>