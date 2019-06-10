<template>
    <div>
        <!--商品轮播图-->
        <div class="slider">
            <slider :imgs="imgs"></slider>
        </div>

        <!--实现商品购买区域-->
        <div class="buy">
            <h4 v-text="info.title"></h4>
            <p class="p"></p>
            <ul>
                <li class="price">
                    市场价：<s>&yen;{{info.market_price}}</s>  销售价：<span>&yen;{{info.sell_price}}</span>
                </li>
                <li class="inputli">
                    购买数量: <inputnumber v-on:dataobj='getcount' class="inputnumber"></inputnumber>

                    <transition name="show" @before-enter="beforeEnter" @enter="enter" @afterEnter="afterEnter">
                        <div v-if="isshow" class="ball"></div>
                    </transition>
                </li>
                <li>
                    <mt-button type="primary" size="small">立即购买</mt-button>
                    <mt-button type="danger" size="small" @click="toshopcar">加入购物车</mt-button>
                </li>
            </ul>
        </div>

        <!--图文详解-->
        <div class="params">
            <h6>商品参数</h6>
            <p class="p"></p>
            <ul>
                <li>商品货号：{{info.goods_no}}</li>
                <li>库存情况：{{info.stock_quantity}}</li>
                <li>上架时间：{{info.add_time | dataformat('YYYY-MM-DD')}}</li>
            </ul>
        </div>

        <!--商品评论-->
        <div class="other">
            <router-link v-bind="{to:'/goods/goodsdesc/'+id}">
                <mt-button class="imgdesc" type="primary" size="large">图文详情</mt-button>
            </router-link>
            <router-link v-bind="{to:'/goods/goodscomment/'+id}">
                <mt-button type="danger" size="large">商品评论</mt-button>
            </router-link>
        </div>
    </div>

</template>

<script>
    import slider from "../subcom/slider.vue";
    import common from "../../kits/common.js";
    import {Toast} from "mint-ui";
    import inputnumber from "../subcom/inputNumber.vue";
    import {vm,COUNTSTR} from "../../kits/vm.js";
    import {setItem,valueObj} from "../../kits/localSg.js";

    export default {
        components:{
            slider,
            inputnumber
        },
        data(){
            return{
                id:0,
                imgs:[],
                info:{},
                inputNumberCount:1,
                isshow:false
            }
        },
        created(){
            this.id=this.$route.params.id;
            this.getImages();
            this.getinfo()
        },
        methods:{
            beforeEnter(el){
                el.style.transform="translate(0px,0px)";
            },
            enter(el,done){
                el.offsetWidth;
                el.style.transform="translate(80px,202px)";
                done();
            },
            afterEnter(el){
                this.isshow=!this.isshow
            },

            //加入购物车方法
            toshopcar(){
                vm.$emit(COUNTSTR,this.inputNumberCount);
                valueObj.goodsid=this.id;
                valueObj.count=this.inputNumberCount;
                setItem(valueObj);
                this.isshow=!this.isshow;
            },
            getcount(count){
                this.inputNumberCount=count;
            },
            getImages(){
                var url=common.apidomain+"type=getthumimages&imgid=59f287d5e370ed0d3cc16a5d";
                this.$http.get(url).then(function (res) {
                    if(res.body.status!=0){
                        Toast(res.body.message);
                        return;
                    }
                    this.imgs=res.body.message;

                })
            },
            getinfo(){
                var url=common.apidomain+"type=getinfo&id="+this.id;
                this.$http.get(url).then(function (res) {
                    if(res.body.status!=0){
                        Toast(res.body.message);
                        return;
                    }
                    this.info=res.body.message;

                })
            }
        }
    }
</script>

<style scoped>
    .slider{
        border: 1px solid #ccc;
        padding: 5px;
        margin: 45px 5px 5px 5px;
        border-radius: 5px;
    }
    .buy,.params,.other{
        margin: 5px;
        padding: 5px;
        border: 1px solid #ccc;
        border-radius: 5px;
    }
    .buy h4{
        font-size: 18px;
        color: #0094ff;
        padding: 10px 3px 5px 3px;

    }
    .buy ul,.params ul{
        padding: 0;
        margin: 0;
        position: relative;
    }
    .buy ul li,.params ul li{
        list-style: none;
        padding: 10px 5px;
    }
    .buy ul .price span {
        color: red;
    }
    .params h6{
        font-size: 16px;
        color: #6d6d72;
        padding-left: 5px;
    }
    .p{
        width: 100%;
        height: 1px;
        background-color: rgba(0,0,0,0.2);
    }
    .other .imgdesc{
        margin-bottom: 15px;
    }

    .inputli{
        position: relative;
    }

    .inputli .inputnumber{
        position: absolute;
        left: 100px;
        top: 7px;
    }
    .ball{
        width: 20px;
        height: 20px;
        border-radius: 50%;
        background-color: red;
        position: absolute;
        left: 155px;
        top: 9px;
        transition: all 0.4s ease;
    }
</style>