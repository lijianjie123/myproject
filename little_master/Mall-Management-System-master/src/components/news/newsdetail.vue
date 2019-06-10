<template>
    <div id="temp">
        <!--详情-->
        <div class="title">
            <h4 v-text="detail.title"></h4>
            <p>{{detail.add_time | dataformat("YYYY-MM-DD")}} {{detail.click}}次浏览</p>
        </div>
        <div class="content" v-text="detail.content"></div>

        <!--评论-->
        <comment :id="id"></comment>
    </div>
</template>

<script>
    import common from "../../kits/common.js"

    //导入评论组件comment.vue
    import comment from "../subcom/comment.vue"
    import {Toast} from "mint-ui";
    export default {
        components:{
        //    注册comment
            comment
        },

        data(){
            return{
                id:0,
                detail:''
            }
        },
        created(){
            this.id=this.$route.params.id;
            this.getnewsdetail()
        },
        methods:{
            getnewsdetail(){
                var url=common.apidomain+"type=getnew&newid="+this.id
                this.$http.get(url).then(function (res) {
                    if(res.body.status!=0){
                        Toast(res.body.message);
                        return;
                    }
                    this.detail=res.body.message;
                })
            }
        }

    }
</script>

<style scoped>
    .title{
        padding: 10px 5px;
    }
    .title h4{
        color: #0094ff;
    }
    .title p{
       color: rgba(0, 0,0,0.5);
    }

    .content{
        padding: 0 5px 10px 5px;
    }

</style>