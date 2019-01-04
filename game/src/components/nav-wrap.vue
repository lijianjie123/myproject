<template>
    <div class="navWrap">
        <div class="navCenterBox">
            <div class="gameLogo">
                <a href="javascript:void(0)">SOULCALIBUR</a>
            </div>
            <div class="navBox">
                <ul>
                    <li class="">
                        <router-link  to = "/" exact>HOME</router-link>
                    </li>
                    <li class="">
                        <router-link to = "/news" >NEWS</router-link>
                    </li>
                    <li class="">
                        <router-link to = "/guide" >GUIDE</router-link>
                    </li>
                    <li class="">
                        <router-link to = "/giftcode" >GIFT</router-link>
                    </li>
                    <li class="">
                        <a href="javascript:;">FORUM</a>
                    </li>
                </ul>
            </div>
        </div>

        <div class="logoBox">
            <a href="javascript:;">
                <img src="../assets/img/logobg.png" height="370" width="300" alt="">
            </a>
        </div>
    </div>
</template>
<style>
.active{ background: red}
</style>

