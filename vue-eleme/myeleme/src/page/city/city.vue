<template>
  	<div>
        <mt-header :title="keyword">
            <router-link to="/" slot="left">
                <mt-button icon="back"></mt-button>
                <!-- <mt-button @click="handleClose">关闭</mt-button> -->
            </router-link>
            <mt-button  slot="right" @click="back">切换城市</mt-button>
        </mt-header>
        
        <div class="cont">
            <form v-on:submit.prevent>
                <input class="cityinput" required v-model = "message"  placeholder="输入学校、商务楼、地址" />

                <div class="width87">
                    <mt-button  size="large" type="primary"  @click="getmessage" @keyup.enter = "getmessage">提交</mt-button>
                </div>     
            </form>
       

        </div>
        <div>
            
            <div>
                <!-- :to="{path:'/msite'}" -->
                <mt-cell class = "botline" v-for = "(item, key, index) of address" :key = "index" 
                :title="item.name" :label="item.address"  @click.native = "getaddressinfo(item)" ></mt-cell>
            </div>

            <div v-if= "cityaddress !=''">
                <span>搜索历史</span>
                <!-- -->
                <mt-cell class = "botline" v-for = "(item, key, index) of cityaddress" :key = "index" 
                :title="item.name" :label="item.address" @click.native = "getaddressinfo(item)"></mt-cell>
                <span class="clearall" v-if= "cityaddress !=''" @click = "remove">清空所有</span>
            </div>
        </div>
        
        
        
    </div>
</template>
<script>
import { Button } from 'mint-ui';
export default {
    data(){
        return {
            city:this.$route.params.id,
            keyword:this.$route.query.keyword,
            address:[], //存储搜索到的信息
            message :'',
            cityaddress:"",//缓存搜索后选择过的地址  

        }
    },
    // watch:{
    //     '$route.params.id'(){
    //         this.city = this.$route.params.id
    //     },
    //     '$route.query.keyword'(){
    //         this.keyword = this.$route.query.keyword
    //     }
    // },
    created(){
     this.keyupEnter();
     

    },
    mounted(){
       //历史记录应该页面一进来就显示，所以我们应该在vue的生命周期mounted函数里写操作
       if(localStorage.getItem('cityaddress')){
           this.cityaddress = JSON.parse(localStorage.getItem('cityaddress'))
       }

    },
    // computed:{
    //     getaddressinfos(){
    //        return this.cityaddress
    //    }
    // },
    methods:{
        back(){
            this.$router.go(-1)
        },
        keyupEnter(){
            document.onkeydown=e=>{
                let _key=window.event.keyCode;
                    if(_key===13){
                    this.getmessage()
                }
            }
        },
        getmessage(){
            // 先判断一下  搜索的数据不为空在发送请求
            if(this.message){
                this.$axios.get(`https://elm.cangdu.org/v1/pois?city_id=${this.city}&keyword=${this.message}&type=search`).then(data => {
                // this.$axios.get('http://cangdu.org:8001/v1/pois?city_id='+this.city+'&keyword='+this.message+'&type=search').then(data => {
                    console.log(this.city, this.message)
                    console.log(data)
                    this.address = data.data
            
                }, response => {
          console.log(response);
          
        });               
            }

        },
        // getaddressinfo(item)
        getaddressinfo(address){
            //缓存搜索历史
            var arr = [];
            // 如果存在 读取到后存到数组中去
            if(localStorage.getItem('cityaddress')){
                arr = JSON.parse( localStorage.getItem('cityaddress'));
                for(var i= 0; i<arr.length; i++){
                    if(arr[i].geohash == address.geohash){
                        var has = true
                        // arr.push(address) 
                        // 不能在这里直接  push到数组中   因为外层中有for 循环  数组中  数据多了  会导致i是多少循环添加多少  
                        //  命名一个变量为布尔值 通过变量的 真 假  再往数组中添加 
                    }
                }
                if(!has){
                 //arr.push(address)  不能使用追加了  而是添加到数组的头部
                  arr.unshift(address)  // 
                }
                localStorage.setItem('cityaddress', JSON.stringify(arr))
            }else{
                console.log(1)
                arr.unshift(address)
                localStorage.setItem('cityaddress', JSON.stringify(arr))
            }

            
            this.cityaddress =JSON.parse(localStorage.getItem('cityaddress')) 
            this.address = ''
            //console.log(this.cityaddress)



            this.$router.push({path:'/msite/'+ address.geohash, query:{latitude:this.address.latitude, longitude :this.address.longitude }})

        },
        remove(){
            this.cityaddress = '';
            localStorage.clear()
        }

    }
}
</script>
<style>
.cityinput{
    width: 87%;
    margin:4% auto;
    margin-left: 5%;
    margin-right: 5%;
    height: 36px;
    padding-left: 2%;
    border: 1px solid rgb(209, 208, 208);
    border-radius: 6px;
    line-height: 36px;
    color: #5f5f5f;

}
.width87{ width: 90%; margin-left: 5%; padding-bottom: 5%; }
.cont{ border: 1px solid rgb(209, 208, 208); background: #fff; margin-top: 10px;margin-bottom: 2% }
.botline{ border-bottom:1px solid rgb(209, 208, 208); padding:8px 0;}
.clearall{display:inline-block;width: 100%; height: 40px; line-height: 40px; background: #fff; text-align: center}
</style>



