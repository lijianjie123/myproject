<template>      
    <div class="box">
        <div class="newscon" v-for = "(item,index) in data" :key = "index" >
            <div class="newscon_info">
                <router-link :to = "{path:'xiangqing',query:{infoId:item.id}}" tag="h3" @click.native = "changeval(false)">
                    <a href="/article/aid/114" title="Join the Close Beta and Receive Free Rewards for Open Beta">
                    news Join the Close Beta and Receive Free Rewards for Open Beta</a>
                    <span>Time :{{item.time}}</span>
                </router-link> 
                <p><a >{{item.text}}</a></p>

            </div>
        </div>

        
        
        

    </div>
</template>

<script>
import data from "@/lib/data"; // 引入数据（就是需要用到的数据代码）  data 是@/lib/data 暴露出去的文件  引入时要注意
export default {
    data(){
        return{
           data: data.hot,
           val:false
        }
    },
    methods:{
        changeval(val){
            this.$emit('showtab', val)
        }
    },
     watch: {
        '$route'(){
            
        }
    },
    

}
</script>

<style>

</style>
