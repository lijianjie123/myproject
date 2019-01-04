<template>
    <div>
            <div class="startBox">
                <a href="javascript:void(0)"></a>
            </div>
            <!--登录前-->
            <div class="logWrap" style="display: none">
                <div class="login_username clearfix">
                    <div class="wrap_form">
                        <input type="text" value=""  placeholder="User Name/Email" class="username">
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
            <div class="logWrap" style="display:block">
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

            
    </div>
</template>
