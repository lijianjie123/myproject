<template>
    <div class="centerTopC clearfix">
                <h2 class="newsTitle">SERVER LIST ---   点击start按钮传的参数：接收的params参数：[{{this.$route.params.userId}}]， 接收的query参数[{{this.$route.query.userId}}]</h2>
                <div id="contentBox">
                    <div class="Select_number">
                        <p>Login history:<a href="/play/server/196" title="Go to US 196 And Play Game">US 196</a> </p>
                    </div>
                    <div class="wrapInfoCenter clearfix">
                        <div class="Select_Server clearfix">

                            <div class="Select_title borderSever clearfix">
                                <h3>SELECT A SERVER</h3>
                                <p>
                                    <span class="on1">New Realm </span>
                                    <span class="on2">Recommend Realm </span>
                                    <span class="on3">Down</span>
                                </p>
                            </div>
                            <div class="clear"></div>
                            <div class="Select_title clearfix">
                                <h4>Recent Play：</h4>
                            </div>
                            <div class="Select_list clearfix">
                                <ul>
                                    <li><a href="#" class="active">US Naruto S1</a><span class="on1"></span></li>
                                    <li><a href="#">EU Naruto S2</a><span class="on2"></span></li>
                                </ul>
                            </div>
                            <div class="Select_allbox clearfix" id="Select_allbox">
                                <div class="Select_button clearfix" id="Select_button">
                                    <!-- <a href="javascript:void(0);" class="SeverTab-01" typeu="us">US.Server</a>
                                    <a href="javascript:void(0);" class="SeverTab-02 active" typeu="ue">EU.Server</a> -->
                                    <router-link    exact :to = "{path:'', query:{serverId:'us'}}">US.Server</router-link>
                                    <router-link  exact :to = "{path:'', query:{serverId:'eu'}}" >EU.Server</router-link>
                                </div>
                                <router-view></router-view>
                                <!-- <div class="Select_list clearfix" id="us" style="display: none;">
                                    <ul>
                                        <li><a href="#" class="active">US Naruto S1</a><span class="on1"></span></li>
                                        <li><a href="#">US Naruto S2</a><span class="on2"></span></li>
                                        <li><a href="#">US Naruto S3</a><span class="on3"></span></li>
                                        <li><a href="#">US Naruto S4</a><span class="on2"></span></li>
                                        <li><a href="#">US Naruto S5</a><span class="on1"></span></li>
                                        <li><a href="#">US Naruto S2</a><span class="on2"></span></li>
                                        <li><a href="#">US Naruto S3</a><span class="on3"></span></li>
                                        <li><a href="#">US Naruto S4</a><span class="on2"></span></li>
                                        <li><a href="#">US Naruto S5</a><span class="on1"></span></li>
                                        <li><a href="#">US Naruto S2</a><span class="on2"></span></li>
                                        <li><a href="#">US Naruto S3</a><span class="on1"></span></li>
                                        <li><a href="#">US Naruto S4</a><span class="on2"></span></li>
                                        <li><a href="#">US Naruto S5</a><span class="on1"></span></li>
                                        <li><a href="#">US Naruto S2</a><span class="on2"></span></li>
                                        <li><a href="#">US Naruto S3</a><span class="on1"></span></li>
                                        <li><a href="#">US Naruto S4</a><span class="on2"></span></li>
                                        <li><a href="#">US Naruto S5</a><span class="on1"></span></li>
                                        <li><a href="#">US Naruto S2</a><span class="on2"></span></li>
                                        <li><a href="#">US Naruto S3</a><span class="on1"></span></li>
                                        <li><a href="#">US Naruto S4</a><span class="on2"></span></li>
                                        <li><a href="#">US Naruto S5</a><span class="on1"></span></li>

                                    </ul>
                                </div>
                                <div class="Select_list clearfix" style="display: block;" id="ue">
                                    <ul>
                                        <li><a href="#" class="active">UE Naruto S1</a><span class="on1"></span></li>
                                        <li><a href="#">EU Naruto S2</a><span class="on2"></span></li>
                                        <li><a href="#">EU Naruto S3</a><span class="on1"></span></li>
                                        <li><a href="#">EU Naruto S4</a><span class="on2"></span></li>
                                        <li><a href="#">EU Naruto S5</a><span class="on1"></span></li>
                                        <li><a href="#">US Naruto S2</a><span class="on2"></span></li>
                                        <li><a href="#">US Naruto S3</a><span class="on1"></span></li>
                                        <li><a href="#">US Naruto S4</a><span class="on2"></span></li>
                                        <li><a href="#">US Naruto S5</a><span class="on1"></span></li>

                                    </ul>
                                </div> -->
                            </div>
                        </div>
                    </div>

                </div>
            </div>
</template>

<script>


export default {

}
</script>

<style>

</style>
