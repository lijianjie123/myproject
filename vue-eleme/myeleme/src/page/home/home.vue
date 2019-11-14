<template>
  	<div>
        <!-- <mt-progress :value = "20" :bar-height = "5"></mt-progress> -->
        <mt-header fixed class = "bgblu">
            <span slot = "left">ele.me</span>
            <mt-button slot = "right" @click.native="login">登录|注册</mt-button>
            <!-- <mt-button slot = "right"></mt-button> -->
        </mt-header>
        
        <div class="padtop400 bgf5">
            <div class="ih50 padlr10 box bgfff">
            <span  class="">当前选择城市</span>
            <span  class="right fs0-8 col9f">定位不准时，请在城市列表选择</span>
            </div>
            <mt-cell  :title="guesscities.name" class="col after" :to="{path:'/city/' + guesscities.id, query:{keyword:guesscities.name}}" is-link  value=""></mt-cell>

            <div class="mgtop10 bgfff" >
            <mt-cell class="after" title="热门城市"></mt-cell>
            <div class="itembox ovhid col">
                <div v-for = "(hotcity,key, index) of hotcities" :key = "index" @click="changecity(hotcity)">{{hotcity.name}}</div>
            </div>        
            </div>         

            <div class="mgtop10 bgfff" v-for = "(citys,key, index) of getlist" :key = "index" >
            <mt-cell class="after" :title="key"></mt-cell>
            <div class="itembox ovhid" >
              <!-- :to="{path:'/city/' + guesscities.id, query:{keyword:guesscities.name}}"  -->
                <div 
                  class="nowarp" v-for = "(city,index ) of citys"  :key = "index" 
                  @click="changecity(city)"
                  
                  >
                    {{city.name}}
                </div>
            </div>        
            </div>    

        </div>
    
  </div>
</template>

<script>

export default {
  data () {
    return {
      allcities :{}, // 所有城市的数据
      hotcities:{}, //热门城市
      guesscities:{},//'北京'//定位城市

     
    }
  },
  component:{
  //注册组件

  },
  mounted:function(){
  //生命周期
      this.$axios.get('https://elm.cangdu.org/v1/cities?type=group').then(data => {
        //console.log(data)
        this.allcities = data.data
      });

      this.$axios.get('http://cangdu.org:8001/v1/cities?type=hot').then((data)=>{
        //console.log(data)
        this.hotcities = data.data
      });

      this.$axios.get('http://cangdu.org:8001/v1/cities?type=guess').then((data)=>{
        console.log(data)
        this.guesscities = data.data
      });
  },
  computed:{
  //计算属性
    getlist(){
       var mycitylist = {};
       for(var i=65; i<=90; i++){
        // console.log(i, String.fromCharCode(i))
         var str = String.fromCharCode(i) // ABCD
         mycitylist[str] = this.allcities[str]  // 这样就把 
       }
       return mycitylist
    }

  },
  methods:{
  //函数
    changecity(city){
      this.guesscities = city;
      console.log(this.guesscities)
     this.$router.push({path:'/city/'+ this.guesscities.id, query:{keyword:this.guesscities.name}})   
    },
    login(){
      this.$router.push('/login')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.itembox>div{
  width:25%;
  float:left;
  text-align:center;
  height:40px;
  line-height:40px;
  box-sizing: border-box;
  border-right:1px solid #e4e4e4;
  border-bottom:1px solid #e4e4e4;
  font-size: 12px;
  font-family: '微软雅黑'
}
.itembox>div:nth-child(4n){
  border-right:0px;
}
.nowarp{
    white-space:nowrap;          /* 不换行 */
    overflow:hidden;               /* 内容超出宽度时隐藏超出部分的内容 */
    text-overflow:ellipsis;   /* 当对象内文本溢出时显示省略标记(...) ；需与overflow:hidden;一起使用。*/
}

</style>