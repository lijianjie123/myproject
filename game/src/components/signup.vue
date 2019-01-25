<template>
<div v-show = "show" class="ui-dialog ui-widget ui-widget-content ui-corner-all ui-front" tabindex="-1" role="dialog" aria-describedby="dialog_form" aria-labelledby="ui-id-1" style="height: auto; width: 450px; top: 179px; left: 723px; display: block;">
    <div class="ui-dialog-titlebar ui-widget-header ui-corner-all ui-helper-clearfix">
        <span id="ui-id-1" class="ui-dialog-title">Sign Up</span>
        <button type="button" class="ui-button ui-widget ui-state-default ui-corner-all ui-button-icon-only ui-dialog-titlebar-close" role="button" aria-disabled="false" title="close">
            <span class="ui-button-icon-primary ui-icon ui-icon-closethick"></span>
            <span class="ui-button-text" @click="hidesign(show)">close</span>
        </button>
    </div>
        <div id="dialog_form" showout="showOut" class="ui-dialog-content ui-widget-content" style="width: auto; min-height: 0px; max-height: none; height: 502px;">
            <div class="register_box clearfix" id="sign_up_dialog">
    
        <div class="main sign_dialog">
            <form class="register" target="xajax" name="form" id="form" method="post">
                <fieldset>
                    <div class="fullin_bg clearfix">
                        <!-- <div class="user">
                            <input v-model="username" type="text" class="text uname" placeholder="username" name="username" data-state="0">
                            <p class="info_con" :class="{'red': nameNull ? true : false }" v-show = "nameNull">{{ errorinfo.nameNull}}</p>
                            <span class="showIco">{{username}}</span>
                        </div> -->
                        <div class="email">
                                <input v-model="email" type="text" class="text email" id="email" name="email" value="" placeholder="Email" data-state="0">
                                <p class="info_con" :class="{'red': emailNull ? true : false }" v-show = "nameNull">{{errorinfo.emailNull}}</p>
                                <span class="showIco">{{email}}</span>
                        </div>
                        <div class="password">
                            <input v-model="password" type="password" class="text upwd" id="upwd" name="password" value="" placeholder="Password" data-state="0">
                            <p class="info_con" :class="{'red': passwordNull ? true : false }" v-show = "passwordNull">{{ errorinfo.passwordNull}}</p>
                            <span class="showIco">{{password}}</span>
                        </div>
                        <div class="cpassword">
                            <input  v-model="cpassword" type="password" class="text passwordConfirm" id="passwordConfirm" name="repassword" placeholder="Confirm Password" value="" data-state="0">
                            <p class="info_con"></p>
                            <span class="showIco"></span>
                        </div>
                        </div>
    
                    <!-- <div class="cbox">
                        <label for="c1">
                            <span id="check_agree" class="check_agree">
                                <span class="agreen"><input type="checkbox" checked="checked"></span>
                                I have read and agree to                            <a href="javascript:void(0)" link="/static_resource/privacy_policy" class="showBigialog" title="Privacy Policy" id="btn1">Privacy Policy</a> and
                                <a href="javascript:void(0)" link="/static_resource/terms_of_service" class="showBigialog" title="Terms of Service" id="btn1">Terms of Service</a>.
                            </span>
                        </label>
                    </div> -->
                    <input class="sub_btn play"  @click="signup(false)"  round:loading="isBtnLoading" type="button" value="Register">
                </fieldset>
            </form>
            <!-- <div class="login_with">
                <div class="login_new">
                    <span>Already Registerd ?&nbsp;&nbsp;<a href="javascript:void(0);" dialog_type="Login" title="Login" class="show_form" link="/static_resource/show_login">Login here</a>&nbsp;&nbsp;or</span>
                </div>
                <div class="">
                    <ul class="toplogos" style="display:block;">
                        <li><a href="javascript:void(0);" link="https://user.gamesprite.me/index.php/hauth/login?provider=Facebook&amp;_g=1&amp;client_id=" class="open_auth ad_facebook_btn"></a></li>
                        <li><a href="javascript:void(0);" link="https://user.gamesprite.me/index.php/hauth/login?provider=Google&amp;_g=1&amp;client_id=" class="open_auth ad_google_btn"></a></li>
                    </ul>
                </div>
            </div> -->
            </div>
        </div>
    </div>
</div>
</template>

<script>
import bus from "@/lib/bus";
import Qs from 'qs';
export default {
    data() {
        return {
            username:'',
            email:'',
            password:'',
            cpassword:'',
             isBtnLoading: false,
            errorinfo:{
               // nameErr:'User name between the 6-16 characters.',
               // passwordErr:'6 to 20 letters, numbers, and special characters!',
                nameNull : 'User name between the 6-16 characters.',
                emailNull :'Please enter a valid Email.',
                passwordNull : '6 to 16 letters, numbers, and special characters!',
                confirmPasswordNull : 'Please enter your password again!',

                nameErr : 'User Name Already Exists!',
                emailErr : 'Email Be Used Or Error!',
                passwordErr : '6 to 16 letters, numbers, and special characters!',
                cPasswordErr : 'Entered Passwords Differ!',
                
            },

            nameNull:false,
            emailNull:false,
            passwordNull:false,

            nameErr:false,
            emailErr:false,
            passwordErr:false,

            show:false,


            userInfo:{
                // 'display_email': "jinajie.li1@jo...",
                // 'email': "jinajie.li1@joyfun.com",
                // 'is_real_email': "0",
                // 'last_login_ip': "221.219.242.178",
                // 'last_login_server_id': "",
                // 'last_login_server_name': "N/A",
                // 'last_login_time': "2019-01-08 00:40",
                // 'user_id': "15951",
                // 'script': "http://test.user.vivagames.me/auth/syn_login?client_id=vivagames.me&is_encrypted=1&request_time=1546929656&token=QFNcBFhWBgMAUgFfVwRRXAMCBAUCVlAHBVIBB1VfAQsOGg%3D%3D&uc_user_id=QFBRXFQEEg%3D%3D&secure_hash=7fc00f4d1546b83747e1288bacde3c29",
                // 'status': true
            }
        }
    },





    // created(){
    //     this.$axios.post("http://test.tlc.vivagames.me/static_resource/sign_up",{
    //         email:this.email,
    //         password:this.password
    //     })
    //     .then((data)=>{
    //         console.log(data);
    //         //console.log(data.data)
    //     })


    // },
    mounted(){
			//绑定全局事件globalEvent
			var that = this;
            bus.$on('globalEvent',function(val){
                console.log(val)
				that.show = val

            })
            //this.signup();
		},
    methods:{
        signup(){
            // let data = {
            //     'display_email': "jinajie.li1@jo...",
            //     'email': "jinajie.li1@joyfun.com",
            //     'is_real_email': "0",
            //     'last_login_ip': "221.219.242.178",
            //     'last_login_server_id': "",
            //     'last_login_server_name': "N/A",
            //     'last_login_time': "2019-01-08 00:40",
            //     'user_id': "15951",
            //     'script': "http://test.user.vivagames.me/auth/syn_login?client_id=vivagames.me&is_encrypted=1&request_time=1546929656&token=QFNcBFhWBgMAUgFfVwRRXAMCBAUCVlAHBVIBB1VfAQsOGg%3D%3D&uc_user_id=QFBRXFQEEg%3D%3D&secure_hash=7fc00f4d1546b83747e1288bacde3c29",
            //     'status': true
            // }
            // this.userInfo = data;
            // console.log(this.userInfo);
            // this.show = false;
            // bus.$emit('passuserinfo',this.userInfo)


            
            var that = this;
         var data = Qs.stringify({email:this.email,password:this.password,cpassword:this.cpassword});
         
        //  this.$axios.post("/api/static_resource/sign_up", data, 
        //  )
        this.$axios({
            method:'POST',
            url:'http://test.tlc.vivagames.me/static_resource/sign_up',
            data : data,
            // data:{
            //     //username: this.username,
            //     email:this.email,
            //     password:this.password,
            //     cpassword:this.cpassword,

            // },
           headers: {
           
            "content-type": "application/x-www-form-urlencoded" // 添加了 就能对应转换为支持的格式
        },
           
         })
         .then(res=>{      
             console.log(res) 
         })
        // .then(res=>{      
        //     console.log(res) 
        //     // if(res.status == 200){
        //     //     console.log(res.status);
            
        //     // //var pregUsername = /[\w_]{6,70}/;
        //     // var pregEmail = /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i;     
        //     // // if(that.username == ''){
                
        //     // //      that.nameNull = true;
        //     // //      //return false
        //     // // }
        //     // if(that.email == ''){
        //     //      that.emailNull = true;
        //     // }
        //     // if(that.password == ''){
                
        //     //     that.passwordNull = true;
        //     //     //return false
        //     // }

        //     // // pregUsername.test(that.username)   =>即 a.test(str)函数是判断 str字符串中，是否含有与a匹配的文本，有则返回 true，否则返回 false。
        //     // if(that.username.length > 6 || that.username.length < 20 && pregUsername.test(that.username)){
                
        //     // }

        //     // // if(that.username.length > 6 || that.username.length < 20 && pregUsername.test(that.username)){
        //     // //    that.show = false ;
        //     // //    alert( that.username + '注册成功！') 
        //     // // }else{
        //     // //     that.nameErr = true;
        //     // //     return false
        //     // // }
        //     // // && !(pregEmail).test(username))
        //     // // if(that.password.length < 6 || !(pregUsername).test(that.username) ){
        //     // //     that.passwordErr = true; 
        //     // // }

            
        //     // }
        // })
        // .catch(error=>{
        //     console.log(error)
        // });

        
        },


        hidesign(val){
            
            if(this.show){
                this.show =!this.show;
                bus.$emit('closesign',val)
            }
           console.log(this.show)

        }
   },

}
</script>

<style>

</style>
