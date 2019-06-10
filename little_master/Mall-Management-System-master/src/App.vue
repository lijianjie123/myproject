<template>
    <div id="temp">
        <!--1 头部-->
        <mt-header fixed title="Chelle Vue商城管理"></mt-header>

        <div id="back" v-show="isshow">
            <a href="javascript:void(0)" @click="backto">返回</a>
        </div>

        <!--2 利用vue-router的<router-vue>进行占位-->
        <router-view></router-view>

        <!--3 底部-->
        <nav class="mui-bar mui-bar-tab">
            <router-link class="mui-tab-item" to="/home">
                <span class="mui-icon mui-icon-home"></span>
                <span class="mui-tab-label">首页</span>
            </router-link>
            <router-link class="mui-tab-item" to="/vip">
                <span class="mui-icon mui-icon-email"></span>
                <span class="mui-tab-label">会员</span>
            </router-link>
            <router-link class="mui-tab-item" to="/shopcar/car">
                <span class="mui-icon mui-icon-contact">
                    <span id="badge" class="mui-badge">0</span></span>
                <span class="mui-tab-label">购物车</span>
            </router-link>
            <router-link class="mui-tab-item" to="/search">
                <span class="mui-icon mui-icon-gear"></span>
                <span class="mui-tab-label">搜索</span>
            </router-link>
        </nav>
    </div>
</template>

<script>
    import {vm,COUNTSTR} from "./kits/vm.js";
    vm.$on(COUNTSTR,function (count) {
        var badgeobj=document.querySelector("#badge");
        badgeobj.innerText=parseInt(badgeobj.innerText)+count;
    })
    export default {
        data(){
            return{
                isshow:false
            }
        },
        watch:{
            '$route':function (newroute,oldroute) {
                if(newroute.path.toLowerCase()=="/home"){
                    this.isshow=false;
                }else {
                    this.isshow=true;
                }
            }
        },
        methods:{
            backto(){
                this.$router.go(-1);
            }
        }
    }
</script>

<style scoped>
    p{
        color: red;
    }
    #back{
        width: 60px;
        position: absolute;
        top: 10px;
        left: 10px;
        z-index: 101;
    }
    #back a{
        color: white;
        font-size: 16px;
        font-weight: bold;
    }
</style>