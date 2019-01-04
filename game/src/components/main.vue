<template>
    <div id="wrapBox" >
        <!-- <nav-wrap></nav-wrap> -->
        <div class="centerBox ">
            <div class="contentCenterBox">
                <center-left-box></center-left-box>
                
            </div>
            <screenshot></screenshot>
            <footer-box></footer-box>   
        </div>
    
    </div>
</template>
<script>
import headerNav from "@/components/header-nav"; //引入组件
// import navWrap from "@/components/nav-wrap";
import centerLeftBox from "@/components/center-left-box";

import screenshot from "@/components/screenshot";
import footerBox from "@/components/footer-box";


export default {
    components:{
        //navWrap, //注册组件
        centerLeftBox,
       
        screenshot,
        footerBox
        
    }

    
}
</script>

