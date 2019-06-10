<template>
    <div id="temp">
        <div class="postcomment">
            <h3>提交评论</h3>
            <p class="p"></p>
            <textarea placeholder="请输入您的评论的内容" v-model="postcontent" @keydown.enter="postcomment"></textarea>
            <mt-button type="primary" size="large" @click="postcomment" >发表评论</mt-button>
        </div>

        <div class="commentlist">
            <h3>评论列表</h3>
            <p class="p"></p>
            <div v-for="(item,index) in commentlist">
                <div class="listtitle">
                    <span>第{{index+1}}楼</span>
                    <span>用户：{{item.user_name}}</span>
                    <span>发表时间：{{item.add_time | dataformat("YYYY-MM-DD HH-MM-SS")}}</span>
                </div>
                <div class="listcontent">
                    <p v-text="item.content"></p>
                </div>
            </div>
        </div>

        <div class="more">
            <mt-button type="danger" size="large" plain @click="getmore">加载更多</mt-button>
        </div>

    </div>
</template>

<script>
    import common from "../../kits/common.js"
    import {Toast} from "mint-ui";
    export default {
        props:["id"],
        data(){
            return{
                postcontent:"",
                commentlist:[],
                pageindex:1,
            }
        },
        created(){
            this.getcomment(this.pageindex);
        },
        methods:{
            //获取更多

            getmore:function () {
                this.pageindex++;

                this.getcomment(this.pageindex)
            },

            //获取评论
            getcomment:function (pageindex) {
                var url=common.apidomain+"type=getcomments&artid="+this.id+"&pageindex="+pageindex;
                this.$http.get(url).then(function (res) {
                    if(res.body.status!=0){
                        Toast(res.body.message);
                        return;
                    }
                    this.commentlist= this.commentlist.concat(res.body.message)
                })
            },

            //添加评论
            postcomment:function (){
                if(this.postcontent.trim().length<=0){
                    Toast("您评论的内容不能为空！");
                    return;
                }
                var url=common.apidomain+"type=postcomment&artid="+this.id;
                this.$http.post(url,{content:this.postcontent},{emulateJSON:true}).then(function (res) {
                    this.commentlist=[{'user_name':'匿名用户','user_logo':'','add_time':new Date(),'content':this.postcontent,'pagecount':0}].concat(this.commentlist);
                    Toast("评论成功");
                    this.postcontent="";

                })
            }
        }
    }
</script>

<style scoped>
    .postcomment,.commentlist{
        padding: 10px 5px;
    }
    .p{
        height: 1px;
        width: 100%;
        background-color: rgba(0,0,0,0.2);
    }
    .commentlist .listtitle{
        background-color: rgba(0,0,0,0.1);
        padding: 5px;
        font-size: 14px;
        color: #424242;
    }
    .commentlist .listcontent p{
        padding: 8px 5px;
        margin-bottom: 0px;
        max-width: 100%;
        border-bottom: 1px solid #dcdcdc;
        font-size: 15px;
    }
    .more{
        padding: 0px 5px;
    }
</style>