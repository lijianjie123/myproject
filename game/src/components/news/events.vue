<template>
    
            
            <div class="box" style="display: block;">
                <div class="newscon" v-for = "(item,index) in data" :key = "index">
                    <div class="newscon_info" >
                        <router-link :to = "{path:'xiangqing',query:{infoId:item.id}}" tag="h3">
                            <a >{{item.text}}</a>
                            <span>Time :{{item.time}}</span>
                        </router-link>
                        <p><a >{{item.text}}</a></p>
                    </div>
                </div>
                


            </div>
           
        
</template>

<script>
import data from "@/lib/data"; // 引入数据（就是需要用到的数据代码）  data 是@/lib/data 暴露出去的文件
export default {
    data(){
        return{
           data: data.events,
           index:0
        }
    },
    created() {
        console.log(data.all)
    },
    

}
</script>
<style>

</style>
