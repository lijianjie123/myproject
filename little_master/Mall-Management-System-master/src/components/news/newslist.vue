<template>
    <ul class="mui-table-view">
        <li class="mui-table-view-cell mui-media" v-for="item in newslist">
            <router-link href="javascript:;" v-bind="{to:'/news/newsdetail/'+item.id}">
                <img class="mui-media-object mui-pull-left" :src="item.img_url">
                <div class="mui-media-body">
                    <p v-text="item.title" class="title"></p>
                    <p class='mui-ellipsis' v-text="item.zhaiyao"></p>
                    <p  class="time">发表时间:{{item.add_time | dataformat("YYYY-MM-DD")}}&nbsp;&nbsp;&nbsp;&nbsp;点击数:<span v-text="item.click"></span></p>
                </div>
            </router-link>
        </li>
    </ul>
</template>

<script>
    import common from "../../kits/common.js"
    import {Toast} from "mint-ui";
    export default {
        data(){
            return{
                newslist:[]
            }
        },
        created(){
            this.getnewslist();
        },
        methods:{
            getnewslist() {
                var url=common.apidomain+"type=%20getnewslist";
                this.$http.get(url).then(function (res) {
                    if(res.body.status!=0){
                        Toast(res.body.message);
                        return;
                    }
                    this.newslist=res.body.message;
                })
            }
        }
    }
</script>

<style scoped>
    .mui-table-view{
        margin-top: 45px;
    }
    .mui-table-view-cell{
        padding: 11px 15px;
        height: 106px;
    }
    .mui-table-view-cell > a:not(.mui-btn).mui-active{
        padding: 11px 15px;
        height: 106px;
        background-color: #fff;
    }
    .mui-table-view .mui-media-object.mui-pull-left{
        max-width: 80px;
        height: 80px;
    }
    .mui-media-body .title{
        font-size: 17px;
    }
    .mui-media-body .mui-ellipsis{
        margin-bottom: 20px;
    }

    .mui-media-body .time{
        color: #0094ff;
        font-size: 14px;
    }


</style>