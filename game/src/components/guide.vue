<template>  
    <div class="centerTopC clearfix">
        <h2 class="newsTitle" id = "abc">GUIDE</h2>
        <div class="newsbox" id="news20" style="display:block">
            <div class="guide_fl guide_icon_1 clearfix" v-for="(item,index) in data" :key = "index">

                <div class="guide_fl_con guide_icon_1">
                    <h3>{{item.title}}</h3>
                    <ul>
                        <li v-for = "(info,index) in item.guideType" :key = "index"><a>{{info}}</a></li>
                        
                    </ul>
                </div>
            </div>
            
        </div>

    </div>
</template>

<script>
export default {
    data() {
        return {
            
        }
    },
    props:['data'],

}
</script>

<style>

</style>
