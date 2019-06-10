<template>
    <div id="temp">
        <!--头部轮播-->
        <!--<mt-swipe :auto="2000">-->
            <!--<mt-swipe-item v-for="item in list"><img :src="item.src" alt=""></mt-swipe-item>-->
        <!--</mt-swipe>-->
        <slider :imgs="list"></slider>

        <!--中间九宫格-->
        <div class="mui-content">
            <ul class="mui-table-view mui-grid-view mui-grid-9">
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                    <router-link to="/news/newslist">
                        <span class="mui-icon mui-icon-home"></span>
                        <div class="mui-media-body">新闻资讯</div>
                    </router-link>
                </li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                    <router-link to="/photo/photolist">
                        <span class="mui-icon mui-icon-email"></span>
                        <div class="mui-media-body">图片分享</div>
                    </router-link>
                </li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                    <router-link to="/goods/goodslist">
                        <span class="mui-icon mui-icon-chatbubble"></span>
                        <div class="mui-media-body">商品购买</div>
                    </router-link>
                </li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                    <router-link to="#">
                        <span class="mui-icon mui-icon-location"></span>
                        <div class="mui-media-body">留言反馈</div>
                    </router-link>
                </li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                    <router-link to="#">
                        <span class="mui-icon mui-icon-search"></span>
                        <div class="mui-media-body">视频专区</div>
                    </router-link>
                </li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                    <router-link to="#">
                        <span class="mui-icon mui-icon-phone"></span>
                        <div class="mui-media-body">联系我们</div>
                    </router-link>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    import common from "../kits/common.js"
    import {Toast} from "mint-ui";
    import slider from "../components/subcom/slider.vue"

    export default {
        components:{
            slider
        },
        data() {
            return {
                list: [],
            }
        },
        created() {
            this.getImages();
        },
        methods: {
            getImages() {
                var url = common.apidomain+"type=getslider";
                this.$http.get(url).then(function (res) {
                    if (res.body.status != 0) {
                        Toast(res.body.message);
                        return
                    }
                    ;
                    this.list = res.body.message;
                    console.log(res.body);
                })
            }
        }
    }
</script>

<style scoped>
    /*.mint-swipe {*/
        /*height: 300px;*/
    /*}*/

    /*.mint-swipe-item {*/
        /*width: 100%;*/
        /*height: 300px;*/

    /*}*/

    /*.mint-swipe-item img {*/
        /*height: 300px;*/
        /*width: 100%;*/
    /*}*/

    .mui-grid-view.mui-grid-9 {
        background-color: #fff;
        border-left: none;
        border-top: none;
    }

    .mui-grid-view.mui-grid-9 .mui-table-view-cell {
        border-right: none;
        border-bottom: none;
    }

    .mui-icon-home:before,
    .mui-icon-email:before,
    .mui-icon-chatbubble:before,
    .mui-icon-location:before,
    .mui-icon-search:before,
    .mui-icon-phone:before {
        content: '';
        width: 50px;
        height: 50px;
        display: inline-block;
        background-size: cover;
    }

    .mui-icon-home:before {
        background-image: url("../../statics/imgs/1.png");
    }

    .mui-icon-email:before {
        background-image: url("../../statics/imgs/2.png");
    }

    .mui-icon-chatbubble:before {
        background-image: url("../../statics/imgs/3.png");
    }

    .mui-icon-location:before {
        background-image: url("../../statics/imgs/4.png");
    }

    .mui-icon-search:before {
        background-image: url("../../statics/imgs/5.png");
    }

    .mui-icon-phone:before {
        background-image: url("../../statics/imgs/6.png");
    }


</style>