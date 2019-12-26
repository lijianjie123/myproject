<template>
  <div id="shop" class="bgfff">
    {{this.shopid}}
        <div class="topbg">
                <img class="topbgimg" :src="imgpath+shopinfo.image_path">
        </div>
        <div class="shoptop">
            <div class="toptop ih30">
              <!-- <icon class="backicon" name="back"></icon> -->
              <span class="right">
                  <!-- <icon class="backicon2" name="cart"></icon>
                  <icon class="backicon2" name="more"></icon>  -->
              </span>
            </div>
            <div class="topfoot">
                <div class="topleft">
                    <img :src="imgpath+shopinfo.image_path">
                </div>
                <div class="topright nowarp">
                    <div class="foota">
                        <div class="footamain fs1-2 nowarp">{{shopinfo.name}}</div>
                        <!-- <icon name="right" class=" icon3"></icon> -->
                    </div>
                    <div class="footb nowarp">
                        <div class="nowarp">公告:{{shopinfo.promotion_info}}</div>
                    </div>
                    <div class="footc">
                        <span class="footcmain"><span v-if="shopinfo.delivery_mode">{{shopinfo.delivery_mode.text}}•</span><span>约{{shopinfo.order_lead_time}}</span></span>
                    </div>
                </div>
            </div>
            
        </div>

        <div class="shopmid mgtop10">
            <div v-if="shopinfo.activities[0]" class="midtop"><span class="te mgr5">{{shopinfo.activities[0].icon_name}}</span><span>{{shopinfo.activities[0].description}}</span><span class="right">{{shopinfo.status}}个活动 
              <!-- <icon<icon name="down" class="icon4"></icon<icon> -->
                </span></div>
            <div class="mytab">
                <div @click ="chooseOneTab(true)" :class="{on : shoporscore }">商品</div>
                <div @click ="chooseOneTab(false)" :class="{on : !shoporscore }">评价---{{shopinfo.rating}}分</div>
            </div>
        </div>

    <div class="shopmain" v-if = "shoporscore">
        <div class="mianleft">
            <div class="leftdiv " :class = "{on: indexIndex == index}" v-for = "(item, index) of shopmean" :key = "index" @click = "chooseTab(index)">
                <div >
                    <!-- <icon class="icon5" name="hot" ></icon> -->
                    <span>{{item.name}}</span>
                </div>
            </div>
        </div>
        <div class="mainright">
            <div class="item" v-for="(item,index) in shopmean" :key = "index" v-if = "indexIndex == index">
                <div class="itemtop ih30 after">
                    <span class="fs15">{{item.name}}</span>
                    <span class="fs0-8 col9f">{{item.description}}</span>
                </div>
                <div class="itemmain">
                    <div class="iteminfo after" v-for = "(goods,index) of item.foods" :key = "index">
                        <div class="infoimgbox">
                            <img :src="imgpath+goods.image_path">
                        </div>
                        <div class="inforight">
                            <div class="fs15 ih20">{{goods.name}}</div>
                            <div class="fs0-8 col9f">{{goods.description}}</div>
                            <div class="ih15 col9f"><span class="fs10 mgl">{{goods.tips}},</span><span class="fs10 mgl">好评率{{goods.satisfy_rate}}%</span></div>
                            <div class="ih15"><span class="fs10 mgl"><span class="zk">7折</span><span class="yh">每单限1份优惠</span></span></div>
                            <div class="ih20"><span class="colred fs12">￥{{goods.specfoods[0].price}}</span><span class="colred mgr5"></span>
                            <!-- <span class="fs12 col9f midline">原价：￥56</span> -->
                            
                            <span class="special right" v-if = "goods.specifications[0]">选规格</span>
                            <icon name="add" scale="2" class="addicon right blue" v-else></icon>
                            
                            </div>
                        </div>
                    </div>
                    
                    
                </div>
            </div>
        </div>
    </div>

<div class="score rating" v-if="!shoporscore">
        <div class="scoretop">
          <div class="scoretopleft">
              <div class="fs1-2 colf60">{{shopinfo.rating}}分</div>
              <div class="fs15 col9f">综合评价</div>
              <div class="fs0-8 col9f">高于周边商家{{(scorerating.compare_rating*100).toFixed(1)}}%</div>
          </div>
          <div class="scoretopright">
              <div><span class="fs15 col9f">评价服务<span class="xx" v-for = "(s ,index) of parseInt(scorerating.service_score)" :key = "index"></span>{{scorerating.service_score.toFixed(1)}}</span></div>
              <div><span class="fs15 col9f">菜品评价<span class="xx" v-for = "(s ,index) of parseInt(scorerating.service_score)" :key = "index"></span>{{scorerating.food_score.toFixed(1)}}</span></div>
              <div><span class="fs15 col9f">送达时间:{{scorerating.deliver_time}}分钟</span></div>

          </div>
        </div>
        <div class="scoremain">
              <div class="scoremaintop after">
                <div class="ih30 fs0-8 sty1 " :class = "{on: index == scoreindex, sty2 : item.name === '服务不错'  }" v-for = "(item,index) of scoretags" :key = "index" >{{item.name}}{{item.count}}</div>
               
              </div>
              <div class="scoremaininfo">
                  <div class="scoreitem after" v-for = "(item,index) of score" :key = "index">
                      <div class="scoreitemleft">
                          <img :src="imgaddpath(item.avatar)" >
                      </div>
                      <div class="scoreitemright fs12 col9f">
                          <div>
                              <span>{{item.username}}</span>
                              <span class="right fonts12">{{item.rated_at}}</span>
                          </div>
                          <div>
                              <stars :num = "item.rating_star" ></stars> 
                          </div>
                          <div>
                              {{item.time_spent_des}}
                          </div>
                          <div class="scoreimgbox">
                            <img v-for="(itema,index) in item.item_ratings" :key = "index" :src="imgaddpath(itema.image_hash)">
                            
                          </div>
                          <div class="namebox">
                              <div v-for = "(food,index) of item.item_ratings" :key = "index">{{food.food_name}}</div>
                             
                          </div>

                      </div>
                  </div>
                  
              </div>
        </div>
    </div>

    <div class="foot" v-if = "shoporscore">
      <div class="footleft">
          <div class="footlogo">
            <!-- <icon name="footcar" class="footicon"></icon> -->
            </div>
          <div class="footmain">未选购商品</div>
      </div>
      <div class="footright">
          ￥20起送
      </div>
    </div>
  </div>
</template>

<script>
import stars from '../../components/stars/stars'
// import foot from '../../components/foot/foot'
export default {
  data () {
    return {
      imgpath:'http://cangdu.org:8001/img/',
      shopinfo:'',
      shopmean:'',
      indexIndex:0,
      shopid:this.$route.params.id,
      shoporscore: true , // tab切换   选中商家还是评价

      score:"",         //评价信息   评论详情
      scorerating:"",   //评价分数  
      scoretags:"",     //评价分类 (好评  差评)
      scoreindex:0      //选中第几个评价分类


      
    }
  },
  components:{
  //注册组件
  stars,

  },
  mounted:function(){
  //生命周期
    // 餐馆详情
    // this.$axios.get(`https://elm.cangdu.org/v1/pois?city_id=${this.city}&keyword=${this.message}&type=search`).then(data => {
      this.$axios.get(`https://elm.cangdu.org/shopping/restaurant/${this.shopid}`).then(data => {
         
          console.log(data)
         this.shopinfo = data.data
  
        }, response => {
        console.log(response);
        
      }); 
      // 获取食品列表
  //  this.$axios.get('http://cangdu.org:8001/shopping/v2/menu?restaurant_id=1').then(response => {
      this.$axios.get(`http://cangdu.org:8001/shopping/v2/menu?restaurant_id=${this.shopid}`).then(response => {
        console.log('shopmean',response);
        this.shopmean=response.data;
      }, response => {
        console.log(response);
      });

  //评论详情
                      // 'https://elm.cangdu.org/ugc/v2/restaurants/:restaurant_id/ratings'
      this.$axios.get(`http://cangdu.org:8001/ugc/v2/restaurants/${this.shopid}/ratings?offset=0&limit=10`).then(response => {
        console.log(response);
        this.score=response.data;


      }, response => {
        console.log(response);
      });
      //评论分数
                      // 'https://elm.cangdu.org/ugc/v2/restaurants/:restaurant_id/ratings/scores'
      this.$axios.get(`http://cangdu.org:8001/ugc/v2/restaurants/${this.shopid}/ratings/scores`).then(response => {
        console.log(response);
        this.scorerating=response.data;
      }, response => {
        console.log(response);
      });
       //评论分类
                      // 'https://elm.cangdu.org/ugc/v2/restaurants/:restaurant_id/ratings/tags'
      this.$axios.get(`http://cangdu.org:8001/ugc/v2/restaurants/${this.shopid}/ratings/tags`).then(response => {
        console.log(response);
        this.scoretags=response.data;
      }, response => {
        console.log(response);
      });
    
  },
  computed:{
  //计算属性

  },
  methods:{
  //函数
  chooseTab(index){
    this.indexIndex = index
  },
  chooseOneTab(bool){
    this.shoporscore = bool
  },
  //函数
      imgaddpath:function(e){
                            // https://fuss10.elemecdn.com/d/c8/dc864033625905f0a15a2d181d53a425jpeg.jpeg
                            // https://fuss10.elemecdn.com/d/c8/   64033625905f0a15a2d181d53a425jpeg.jpeg




                            //  https://fuss10.elemecdn.com/d/c8/64033625905f0a15a2d181d53a425jpeg.jpeg  my

                            //  https://fuss10.elemecdn.com/d/c8/64033625905f0a15a2d181d53a425jpeg.jpeg


                            //  https://fuss10.elemecdn.com/0/74/e0e203f613deff4e456c31e4177d1jpeg.jpeg  my
                            //  https://fuss10.elemecdn.com/0/74/e0e203f613deff4e456c31e4177d1jpeg.jpeg
        var str = e ;
        var str1 = str.substring(0,1);
        var str2 = str.substring(1,3);
        var str3 = str.substring(3)
        return "https://fuss10.elemecdn.com/"+ str1 +'/'+ str2 +'/'+ str3 + '.jpeg'
      }

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.shoptop{
  height:120px;
  background-color: rgba(119,103,137,.43);
  box-sizing:border-box;
  padding:10px 10px 0px 10px;
  position: relative;
}
.topbg{
  position: absolute;
  width:100%;
  height:120px;
  left:0px;
  right:0px;
  overflow:hidden;
}
.topbgimg{
  width:100%;
  filter: blur(10px);
}
.backicon{
  height:30px;
  width:30px;
}
.backicon2{
  height:25px;
  width:25px;
}
.toptop{
  margin-bottom:10px;
}
.topfoot{
  height:70px;
  display:flex;
}
.topleft{
  height:80px;
  width:80px;
  background-color:#3c3c3c;
  margin-right:10px;
  border-radius:3px;
  box-shadow:0 0 5px #3c3c3c;  
}
.topleft>img{
  max-width:100%;
  max-height:100%;
}
.topright,.topleft{
  float:left;
}
.topright{
  height:100%;
  flex:1;
}
.foota{
  height:30px;
  color:white;
  line-height:30px;
  display:flex;
}
.icon3{
  width:20px;
  height:20px;
  margin-top:5px;
}
.footc{
  height:20px;
  line-height:20px;
  font-size:12px;
}
.footb{
  font-size:12px;
  color:white;
}
.footcmain{
  background-color:#0097FF;
  color:white;
  padding:0px 5px; 
}
.shopmid{
  padding:10px 10px 0px 10px;
  margin-bottom:10px;
  border-bottom:2px solid #F8F8F8;
}
.midtop{
  font-size:12px;
}
.te{
  background-color:#F08449;
  padding:0px 10px;
  color:white;
}
.mytab{
  overflow:hidden;
  margin-top:10px;
}
.mytab>div{
  float:left;
  padding-bottom:10px;
  margin-right:10px;
  border-bottom:2px solid white;
}
.mytab>div.on{
  color:#0B89FF;
  border-color:#0B89FF;
}
.leftdiv{
  width:60px;
  padding:0px 10px;
  color:#727272;
  background-color:#f0efef;
}
.leftdiv>div{
  padding:15px 0px;
  border-bottom:1px solid #e0e0e0;
}
.leftdiv.on{
  background-color:white;
  color:#080808;
}
.leftdiv.on>div{
  border:0px;
}
.icon5{
  width:15px;
  height:15px;
}
.mianleft{
  width:80px;
  box-sizing:border-box;
  overflow:scroll;
}
#shop{
  display:-webkit-box;
  -webkit-box-orient:vertical;
  height:100vh;
}
.shopmain{
  -webkit-box-flex:1;
  display:-webkit-box;
  overflow:hidden;
}
.mainright{
  -webkit-box-flex:1;
  overflow:scroll;
  padding-left:10px;
}
.foot{
  height:50px;
  line-height:50px;
  background-color:#594C46;
  display:flex;
}
.footleft{
  flex:2;
  display:flex;
}
.footright{
  flex:1;
  text-align:center;
  color:#B7B7B7;
  background-color:#61686A;
}
.footlogo{
  text-align:center;
  width:50px;
  height:50px;
  border-radius:50%;
  background-color:#515151;
  margin:0px 10px;
  border:3px solid #444446;
  transform:translatey(-15px)
}
.footicon{
  width:40px;
  height:40px;
  margin-top:7px;
}
.footmain{
  height:50px;
  color:#ADADAD;
  font-size:0.8rem;
}
.itemmain{
  padding-right:10px;
 
}
.iteminfo{

   display:flex;
   padding:10px 0px;
}
.infoimgbox{
  width:70px;
  height:70px;
  margin-right:5px;
  
}
.infoimgbox>img{
  width:100%;
  height:100%;
}
.inforight{
  flex:1;
}
.ih20{
  height:20px;
  line-height:20px;
}
.ih15{
  height:15px;
  line-height:15px;
  margin: 5px 0px;
  font-size: 0.6rem
}
.addicon{
  width:20px;
  height:20px;
}
.zk{
  background-color:#FF5F15;
  padding:0px 3px;
  color:white;
  border:1px solid #FF5F15;

}
.yh{
  padding:0px 3px;
  color:#FF5F15;
  border:1px solid #FF5F15;
}
.midline{text-decoration: line-through; margin-left: 15px; font-size: 14px}

.special{ display: inline-block; background:  #167fea; border-radius: 6px; padding: 0 3px; font-size: 14px; color: #fff}
.blue{color:  #167fea; }





/* 评价 */
.scoretop{
  display:flex;
  padding:0px 10px 10px 10px;
  border-bottom:10px solid #F5F5F5;
}
.scoretopleft{
  flex:1;
  text-align:center;
}
.scoretopright{
  flex:1;
}
.scoremain{
  padding:0px 10px;
}
.scoremaintop{
  padding:10px 0px 5px 0px;
  display:flex;
  flex-wrap:wrap;
}
.scoremaintop>div{
  padding:0px 8px;
  border-radius:5px;
  margin-right:5px;
  margin-bottom:5px;
}
.sty1{
  background-color:#EBF5FF;
  color:#9f9f9f;
}
.sty1.on{
  background-color:#3190E8;
  color:#fff;
}
.sty2{
  background-color:#d7161a;
  color:#fff;
}
.scoreitem{
  display:flex;
  margin-top:10px;
}
.scoreitemleft{
  width:50px;
  height:50px;
  margin-right:10px;

  border: 1px solid #4d4d4d
}
.scoreitemleft>img{
  width:100%;
  border-radius:50%; 
}
.scoreitemright{
  flex:1;
}
.namebox{
  display:flex;
  flex-wrap: wrap;
}
.namebox>div{
  border:1px solid;
  padding:3px 3px;
  margin-right:5px;
  border-radius:3px;
  margin-bottom:5px;
  font-size: 12px;
}
.score{
  padding-top:10px;
  flex:1;
  overflow: scroll;
}
.scoreimgbox>img{
  width:4rem;
  height:4rem;
  
  margin-right:10px;
}
</style>