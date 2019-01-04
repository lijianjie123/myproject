<template>
<div class="ui-dialog ui-widget ui-widget-content ui-corner-all ui-front" tabindex="-1" role="dialog" aria-describedby="dialog_form" aria-labelledby="ui-id-1" style="height: auto; width: 450px; top: 179px; left: 723px; display: block;"><div class="ui-dialog-titlebar ui-widget-header ui-corner-all ui-helper-clearfix"><span id="ui-id-1" class="ui-dialog-title">Sign Up</span><button type="button" class="ui-button ui-widget ui-state-default ui-corner-all ui-button-icon-only ui-dialog-titlebar-close" role="button" aria-disabled="false" title="close"><span class="ui-button-icon-primary ui-icon ui-icon-closethick"></span><span class="ui-button-text">close</span></button></div><div id="dialog_form" showout="showOut" class="ui-dialog-content ui-widget-content" style="width: auto; min-height: 0px; max-height: none; height: 502px;"><div class="register_box clearfix" id="sign_up_dialog">
    
        <div class="main sign_dialog">
            <form class="register" target="xajax" name="form" id="form" method="post">
                <fieldset>
                    <div class="fullin_bg clearfix">
                    <div class="user">
                            <input v-model="username" type="text" class="text uname" placeholder="username" name="username" data-state="0">
                            <p class="info_con" :class="{'red': nameErr ? true : false }" v-show = "nameErr">{{ errorinfo.nameErr}}</p>
                            <span class="showIco"></span>
                        </div>
                    <!-- <div class="email">
                            <input v-model="email" type="text" class="text email" id="email" name="email" value="" placeholder="Email" data-state="0">
                            <p class="info_con"></p>
                            <span class="showIco"></span>
                   </div> -->
                    <div class="password">
                        <input v-model="password" type="password" class="text upwd" id="upwd" name="password" value="" placeholder="Password" data-state="0">
                        <p class="info_con" :class="{'red': passwordErr ? true : false }" v-show = "passwordErr">{{ errorinfo.passwordErr}}</p>
                        <span class="showIco"></span>
                    </div>
                    <!-- <div class="cpassword">
                        <input  v-model="cpassword" type="password" class="text passwordConfirm" id="passwordConfirm" name="repassword" placeholder="Confirm Password" value="" data-state="0">
                        <p class="info_con"></p>
                        <span class="showIco"></span>
                    </div> -->
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
    </div></div></div>
</template>

<script>
export default {
    data() {
        return {
            username:'',
            email:'',
            password:'',
            cpassword:'',
             isBtnLoading: false,
            errorinfo:{
                nameErr:'User name between the 6-16 characters.',
                passwordErr:'6 to 20 letters, numbers, and special characters!'
                
            },
            nameErr:false,
            passwordErr:false,

        }
    },
     



    // created:function(){}

    methods:{
        signup(val){
         var that = this;
        // this.$axios.post("http://test.sc.gamesprite.me/static_resource/sign_up")
        this.$axios({
            method:'POST',
            url:'http://test.sc.gamesprite.me/static_resource/sign_up',
            data:{
                'username': this.username,
                //'email':this.email,
                'password':this.password
            },
           headers: {
                
                "content-type": "application/x-www-form-urlencoded" // 添加了 就能对应转换为支持的格式
            },
        })
        .then(res=>{       
            if(res.status == 200){

            
            
            var pregUsername = /[\w_]{6,70}/;
            // var pregEmail = /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i;     
            if(that.username == ''){
                alert(0)
                 that.nameErr = true;
                 //return false
            }
            if(that.password == ''){
                alert(0)
                that.passwordErr = true;
                //return false
            }
            // pregUsername.test(that.username)   =>即 a.test(str)函数是判断 str字符串中，是否含有与a匹配的文本，有则返回 true，否则返回 false。
            if(that.username.length > 6 || that.username.length < 20 && pregUsername.test(that.username)){
               //    
            }else{
                that.nameErr = true;
                return false
            }
            // && !(pregEmail).test(username))
            // if(that.password.length < 6 || !(pregUsername).test(that.username) ){
            //     that.passwordErr = true; 
            // }

            //that.$emit('change', val) 
            }
        });

        
        }
   },

}
</script>

<style>

</style>
