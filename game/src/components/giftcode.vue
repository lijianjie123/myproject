<template>  
    <div class="centerTopC clearfix">
        <h2 class="newsTitle" id = "giftcode">GUIDE</h2>
        <div class="giftbox">
            <!-- <h2>GET CODE</h2> -->
            <div id="get-card" class="code_con">
                <div class="giftTop"></div>
                <div class="giftCenter clearfix">
                    <ul class="get_card clearfix">
                        <li class="left_side">
                            <h3><strong>01 </strong>Server Selection：</h3>
                            <div class="server_info">
                                <div id="selected_server" node-data="">Server Selection</div>
                                <span id="selectBtn" class="select_btn"></span>
                            </div>
                            <ul class="server_list">
                            </ul>
                        </li>
                        <li class="right_side">
                            <h3><strong>02 </strong>Server Selection</h3>
                            <a href="javascript:void(0);" id="getCdKey">SClick to receive</a>
                        </li>
                    </ul>
                </div>
                <div class="giftBot"></div>

            </div>
            <h2>CODE INFO</h2>
            <div id="cdkGetedCont" class="code_con" style="display: block;">
                <div class="giftTop"></div>
                <div class="giftCenter clearfix">
                    <div class="cdkey_box1 clearfix">
                        <input id="cdk_string" class="cdkey_text" type="text" >
                        <a id="copy_button" class="cdkey_copy" href="javascript:void(0);">Copy</a>
                        <a id="goUseKey" class="cdkey_use" target="_blank" href="javascript:;">Use</a>
                        <p>You have already receive the gift code in this server.</p>
                        <div id="zclip-ZeroClipboardMovie_1" class="zclip" style="position: absolute; left: 820px; top: 709px; width: 86px; height: 31px; z-index: 99;">
                            <embed id="ZeroClipboardMovie_1" width="86" height="31" align="middle" wmode="transparent" flashvars="id=1&amp;width=86&amp;height=31" pluginspage="http://www.macromedia.com/go/getflashplayer" type="application/x-shockwave-flash" allowfullscreen="false" allowscriptaccess="always" name="ZeroClipboardMovie_1" bgcolor="#ffffff" quality="best" menu="false" loop="false" src="http://cdn.gogames.me/style/images/official/swf/ZeroClipboard.swf">
                        </div>
                    </div>
                </div>
                <div class="giftBot"></div>
            </div>

            <h2 id="cdkGeted">THE GIFT CONTENT </h2>
            <div id="cdkGetedCont" class="code_con">

                <div class="giftCenter clearfix">
                    <span class="giftBotTip1"></span>
                    <div class="cdkey_box1 clearfix">
                        <input type="text" class="cdkey_text" id="cdk_string1">
                        <a href="javascript:void(0);" class="cdkey_copy" id="copy_button"> </a>
                        <a href="javascript:void(0);" target="_blank" id="goUseKey" class="cdkey_use"> </a>
                        <!--input type="button" value="" class="cdkey_copy" id="copy_button"/>
                        <input type="button" value="" class="cdkey_use" id="goUseKey"/-->
                        <p>You have already receive the gift code in this server.</p>
                    </div>
                </div>
                <div class="giftBot"></div>
            </div>
            <h2>THE GIFT CONTENT </h2>
            <div class="giftContent">
                Lupine William towel、knapsack、纶巾、背包、
            </div>

            <h2>HOW TO USE THE GIFT CODE</h2>
            <div class="useGift">
                <ul>
                    <li><span>1</span>Copy for code</li>
                    <li><span>2</span>Copy for code</li>
                    <li><span>3</span>Copy for code</li>
                    <li><span>4</span>Copy for code</li>
                </ul>
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
