<template>
    <div>
            <div class="startBox">
                <!-- 使用<router-link  to是必选参数>   -->
                <!-- <router-link :to = "{name :'fuwuqi'}"></router-link>  -->
                
                <a  @click = "routerTo"></a>
            </div>
            <!--登录前-->
            <div class="logWrap" v-if = "userInfo == false">
                <div class="login_username clearfix">
                    <div class="wrap_form">
                        <input type="text"  v-model="username"  placeholder="User Name/Email" class="username">
                        <input type="password" v-model="password" value="" placeholder="Password" class="password">
                        <a @click="signIn" title="Login" class="user_log">LOG IN</a>

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
            <div class="logWrap" v-else>
                <div class="login_username clearfix" >
                    <div class="welcome">welcome! {{userInfo.email}}</div>
                    <p class="clearfix">
                        <span>Last login ip: {{userInfo.last_login_ip}}</span>
                        <span>Last login time: {{userInfo.last_login_time}}</span>
                        <span>Last login history:</span>
                        <a class='last_login_history'>{{userInfo.last_login_server_name}}</a>
                    </p>
                </div>
                <div class="wrap_form">
                    <a href="javascript:void(0);" title="Login" class="user_logout">Log Out</a>
                    <!-- <a href="javascript:void(0);" title="Login" class="signin sub_gift_btn">Novice Gift</a> -->

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
import bus from "@/lib/bus";
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

//     this.$axios.post("http://test.tlc.vivagames.me/static_resource/login").then(res=>{
//       console.log(res);
//       console.log(res.data)
//       this.userInfo = res.data
//     });
    

//   },

    methods: {
        routerTo(){
            // 使用name:'', params:{} =>即{ name: 'fuwuqi', params: { userId: 123 }} 的方式 传递参数  
            // 然后在目标组件中接收参数（这里就是在服务器组件中接收参数） 如果刷新服务器页面  参数会丢失
            //  特别注意：命名路由这种方式传递的参数，如果在目标页面刷新是会出错的

            // 注意：和name配对的是params，和path配对的是query

            //this.$router.push({ name: 'fuwuqi', params: { userId: 123 }});


           // this.$router.push({ path: '/fuwuqi', query: { userId: 123 }});

           this.$router.push('/fuwuqi')

            
        },
        signIn(){
            
            console.log(this.username)
            console.log(this.password)
        },

        receive(){
            bus.$on('passuserinfo', data=>{
                this.userInfo = data;
                console.log(this.userInfo)
            })
        }
    },
    // mounted() {
    //     //   执行该方法
    //   this.receive();

      
    // },
    
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
