<template>
    <div id="temp">
        <!--图片分类-->
        <div id="cate">
            <ul v-bind="{style:'width:'+ulwidth+'px'}">
                <li @click="getimglist(0)">全部</li>
                <li v-for="item in photocate" @click="getimglist(item.id)">{{item.title}}</li>
            </ul>
        </div>

        <!--图片列表-->
        <div id="imglist">
            <ul>
                <li v-for="item in list">
                    <router-link v-bind="{to:'/photo/photodetail/'+item.id}">
                        <img v-lazy="item.img_url">
                        <div id="desc">
                            <h5 v-text="item.title"></h5>
                            <p v-text="item.zhaiyao"></p>
                        </div>
                    </router-link>

                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    import common from "../../kits/common.js"
    import {Toast} from "mint-ui";
    export default {
        data(){
            return{
                photocate:[],
                ulwidth:0,
                list:[]
            }
        },
        created(){
            this.getcates();

            var all=0;//获取所有的数据
            this.getimglist(all)

        },
        methods:{
            //获取图片列表
            getimglist(cateid){
                cateid=cateid||0;
                var url=common.apidomain+"type=getimages&cateid="+cateid;
                this.$http.get(url).then(function (res) {
                    if(res.body.status!=0){
                        Toast(res.body.message);
                        return;
                    }
                    this.list=res.body.message;

                })
            },


            //获取分类
            getcates(){
                var url=common.apidomain+"type=getimgcategory";
                this.$http.get(url).then(function (res) {
                    if(res.body.status!=0){
                        Toast(res.body.message);
                        return;
                    }
                    this.photocate=res.body.message;

                    //动态获取ul的宽度
                    var w=66;
                    var count=res.body.message.length+1
                    this.ulwidth=w*count;
                })
            }

        }

    }
</script>

<style scoped>

    #cate{
        width: 375px;
        max-width: 375px;
        overflow-x: auto;
    }
    #cate ul{
        margin: 0px;
        /*width: 1000px;*/
        padding-left: 5px;
        padding-top: 5px;
    }
    #cate ul li{
        display: inline-block;
        padding-bottom: 15px;
        cursor: pointer;
        color: #0094ff;
        font-size: 14px;
        padding-left: 10px;
    }
    image[lazy=loading] {
        width: 40px;
        height: 300px;
        margin: auto;
    }

    #imglist ul{
        padding: 0;
        margin: 0;
    }
    #imglist ul li{
        list-style: none;
        position: relative;
    }
    #imglist ul li img{
        width: 100%;
        height: 300px;

    }
    #imglist ul li #desc{
        position: absolute;
        padding: 0 10px;
        bottom: 0;
        left: 0;

    }
    #imglist ul li #desc h5{
        color: white;
        font-weight: bold;
    }
    #imglist ul li #desc p{
        color: #fff;
    }

</style>