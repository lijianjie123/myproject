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
            <input class="cityinput" v-model = "message"  placeholder="输入学校、商务楼、地址" />

            <div class="width87">
                <mt-button  size="large" type="primary"  @click="getmessage" @keyup.enter = "getmessage">提交</mt-button>
            </div>            

        </div>
        <div>
            
            <div>
                <mt-cell class = "botline" v-for = "(item, key, index) of address" :key = "index" 
                :title="item.name" :label="item.address" ></mt-cell>
            </div>

            <div v-if= "cityaddress">
                <span>搜索历史</span>
                <mt-cell class = "botline" v-for = "(item, key, index) of address" :key = "index" 
                :title="item.name" :label="item.address" to="//github.com"></mt-cell>
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
            cityaddress:null,//缓存选择过的地址  

        }
    },
    watch:{
        '$route.params.id'(){
            this.city = this.$route.params.id
        },
        '$route.query.keyword'(){
            this.keyword = this.$route.query.keyword
        }
    },
    created(){
     this.keyupEnter()

    },
    mounted(){
       

    },
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
             this.$axios.get(`https://elm.cangdu.org/v1/pois?city_id=${this.city}&keyword=${this.message}&type=search`).then(data => {
           // this.$axios.get('https://elm.cangdu.org/v1/pois?city_id=1&keyword=迪士尼&type=search').then(data => {
                console.log(this.city, this.message)
                console.log(data.data)
                this.address = data.data
        
            });
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
</style>



