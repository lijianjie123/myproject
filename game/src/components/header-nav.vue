<template>
    <!--nav-->
    <div class="topbox">
    <!--choose language-->
    <div class="languageWrap">
        <a href="javascript:void(0);" class="default">
            <!-- <img src="../../assets/img/EnUK.gif"/>English (US) -->
            <!-- <img src="../../assets/img/downTip.png"/> -->
        </a>
        <ul typeLanguage = 'true'>
            <li><span>Change your country or region</span></li>
            <li><a href="javascript:void(0);" class="languageEnUK"> <img src="../assets/img/languages/en.gif"/> English (UK)</a> </li>
            <li><a href="javascript:void(0);" class="languageEnUS"> <img src="../assets/img/languages/fr.gif"/>English (US)</a> </li>
            
        </ul>
    </div>
    <div class="top">
        <div class="top_center">
                    </div>
        <div class="topleft">
            <div class="all_hover">
                <a href="javascript:void(0);" class="all">All Games</a>
                <ul class="all_game" style="display: none;">
                    <li style="text-indent:999px;"></li>
                                            <li>
                            <a href="http://test.bleach.gogames.me" class="game_1404187200" title="Bleach">Bleach</a>
                        </li>
                                            <li>
                            <a href="http://test.onepiece.joybit.com" class="game_1588888888" title="Chaos">Chaos</a>
                        </li>

                </ul>
            </div>
        </div>
        <div class="topright" id="top_right">
            <div class="emailInfoTip">

                <a href="http://test.www.gamesprite.me" target="_blank" style="display:block; float:right">
                    <!-- <img src="../assets/img/official_logo.png" width="170" height="30" title="JoyGames" alt="JoyGames"> -->
                </a>
            </div>


                <div>
                    <div class="signbox" style="display:block">
                        <a href="javascript:void(0);" title="Login" dialog_type="Login" id="loginInBtn" class="login_btn show_form" link="/static_resource/show_login">Log In</a>
                        <a href="javascript:void(0);" title="Sign Up" dialog_type="Sign Up" class="sign_up_btn show_form" link="/static_resource/show_sign_up"
                         @click="show(showB)"
                        >Sign Up</a>
                    </div>
                    
                    <ul class="toplogos">
                        <li><a href="javascript:void(0);"  class="open_auth ad_facebook_btn"></a></li>
                        <li><a href="javascript:void(0);" class="open_auth ad_google_btn"></a></li>
                        <li><a href="javascript:void(0);" class="open_auth ad_twitter_btn"></a></li>
                    </ul>
                </div>
            <div id="dialog_form" showout="Hide"></div>
        </div>
    </div>
</div>

</template>


<script>
// 使用中央事件总线的方式。新建一个Vue事件bus对象，然后通过bus.$emit触发事件，bus.$on监听触发的事件。
	// 传递数据的兄弟组件 触发bus.$emit('globalEvent', val)事件，   
	// 接收数据的兄弟组件 监听 bus.$on('globalEvent',val)事件


import bus from "@/lib/bus";
// import data from "@/lib/xiangqing";
export default {
    data() {
        return {
            showB:true 
            
        }
    },
    mounted() {
        let that = this;
        bus.$on('closesign', (val)=>{
            that.showB = val;
        })
    },
    methods: {
        show(val){
            bus.$emit('globalEvent',val)
            // this.showB = !this.showB;
            // console.log(this.showB)


        }
    },
    

}
</script>

<style>

</style>

