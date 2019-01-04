<template>
    <!-- Swiper -->
                <div class="swiper-container">
                    <div class="swiper-wrapper">
                        <img class="swiper-slide" src="../assets/img/lb1.jpg">
                        <img class="swiper-slide" src="../assets/img/lb2.jpg">
                        <img class="swiper-slide" src="../assets/img/lb3.jpg">

                    </div>
                    <!-- Add Pagination -->
                    <div class="swiper-pagination"></div>
                    <!-- Add Navigation -->
                    <!--<div class="swiper-button-prev"></div>-->
                    <!--<div class="swiper-button-next"></div>-->
                </div>
</template>

<script>
import Swiper from '../../static/swiper';

export default {
    
    
    mounted(){
       // 初始化swiper插件
        
            var swiper = new Swiper('.swiper-container', {
                loop: true,
                autoplay: 3000,
                // 需要分页器
                pagination : {
                el:'.swiper-pagination', 
                },
                paginationClickable :true,
                preventClicks : false,
                noSwiping : true,
                effect : 'fade'
            });  
         
    },

    

}
</script>

<style>

</style>
