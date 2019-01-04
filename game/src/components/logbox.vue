<template>
    <div>
            <div class="startBox">
                <a href="javascript:void(0)"></a>
            </div>
            <!--登录前-->
            <div class="logWrap" style="display: block">
                <div class="login_username clearfix">
                    <div class="wrap_form">
                        <input type="text" v-model="username" @input="passName(username)"  placeholder="User Name/Email" class="username">
                        <input type="password" value="" placeholder="Password" class="password">
                        <a href="javascript:void(0);" title="Login" class="user_logout">LOG IN</a>
                        <a href="javascript:void(0);" title="Login" class="signin sub_signup_btn">Sign Up</a>
                        <a href="javascript:void(0);" title="Login" class="signin sub_gift_btn">Novice Gift</a>

                    </div>
                </div>
                <div class="loginWay">
                    <p class="login_con clearfix">
                        <input class="checkbox" type="checkbox" checked="checked">
                        <a href="javascript:void(0);">Remember me</a>
                        <a href="javascript:void(0);" target="_blank" title="Forget Password">Forgot Password?</a>
                    </p>

                    <strong>
                        <a href="javascript:void(0);" class="ad_facebook_btn"></a>
                        <a href="javascript:void(0);" class="ad_google_btn"></a>
                        <a href="javascript:void(0);" class="ad_twitter_btn"></a>
                    </strong>
                </div>
            </div>
            <!--登录后-->
            <div class="logWrap" style="display:none">
                <div class="login_username clearfix" >
                    <div class="welcome">welcome! xiaobai</div>
                    <p class="clearfix">
                        <span>Last login ip: 61.135.152.194</span>
                        <span>Last login time: 2014-06-24 04:36</span>
                        <span>Last login history:</span>
                        <a class='last_login_history'>S999 - TEST SERVER</a>
                    </p>
                </div>
                <div class="wrap_form">
                    <a href="javascript:void(0);" title="Login" class="user_logout">Log Out</a>
                    <a href="javascript:void(0);" title="Login" class="signin sub_gift_btn">Novice Gift</a>

                </div>
               
            </div>
            <div class="peopleShow">
                <swiper></swiper>
            </div>
    </div>
</template>

<script>
//import Swiper from '../../static/swiper';
import Swiper from "@/components/swiper";
export default {
    data() {
        return {
            username:'',
            password:'',
            userInfo:'',
        }
    },
    components:{
        Swiper
    },
      // 生命周期函数created  vue实例的数据对象data有了，$el 还没有。
//   created:function(){

//     this.$axios.post("http://test.sc.gamesprite.me/static_resource/login").then(res=>{
//       console.log(res);
//       console.log(res.data)
//       this.userInfo = res.data
//     });
    

//   },

    methods: {
        passName(val){
            //console.log(val)
            this.$axios.post("http://test.sc.gamesprite.me/static_resource/login").then(res=>{
            // console.log(res);
            console.log(res.data)

           // if(){}

            this.userInfo = res.data
        });

        }
    },
    
    // mounted(){
    //    // 初始化swiper插件
        
    //         var swiper = new Swiper('.swiper-container', {
    //             loop: true,
    //             autoplay: 3000,
    //             // 需要分页器
    //             pagination : {
    //             el:'.swiper-pagination', 
    //             },
    //             paginationClickable :true,
    //             preventClicks : false,
    //             noSwiping : true,
    //             effect : 'fade'
    //         });  
         
    // },

    

}
</script>

<style>

</style>
