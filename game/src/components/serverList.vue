<template>
    <div class="Select_list clearfix" >
        <ul>
            
             <!-- <li><a >{{this.$route.query.serverId}}</a><span class="on1"></span></li> -->
            <!--<li><a href="#">{{this.$route.query.serverId}}</a><span class="on2"></span></li>
            <li><a href="#">EU Naruto S3</a><span class="on1"></span></li>
            <li><a href="#">EU Naruto S4</a><span class="on2"></span></li>
            <li><a href="#">EU Naruto S5</a><span class="on1"></span></li>
            <li><a href="#">US Naruto S2</a><span class="on2"></span></li>
            <li><a href="#">US Naruto S3</a><span class="on1"></span></li>
            <li><a href="#">US Naruto S4</a><span class="on2"></span></li> -->
            <li v-for="(item, index) in serverData" :key = "index" >
                <a @click="selectSign(index)"
                :class="{'active': itemIndex === index}">{{item}}</a>
                <span class="on1"></span>
            </li>

        </ul>
    </div>
</template>

<script>
let  serverData = {
                us:['US Naruto S1','US Naruto S2','US Naruto S3','US Naruto S4','US Naruto S5','US Naruto S6','US Naruto S7','US Naruto S8','US Naruto S9',],
                eu:['EU Naruto S1','EU Naruto S2','EU Naruto S3','EU Naruto S4','EU Naruto S5','EU Naruto S6','EU Naruto S7','EU Naruto S8','EU Naruto S9',],
            }
export default {
    data() {
        return {
            serverData:serverData.us,
           
            serverId:'us',
            itemIndex:0,
        }
    },
    watch: {
        '$route.query.serverId'(){
             
            //console.log(this.$route.query.serverId);
            if(this.serverId == 'us'){
                // alert('eu');
                this.serverData = serverData.eu
            }else if(this.serverId == 'eu'){
                // alert('us');
                this.serverData = serverData.us
            }
            this.serverId = this.$route.query.serverId;
            this.itemIndex = 0;

        }
    },
    methods: {
        selectSign(index){
            console.log(this.serverId)
            this.itemIndex = index
        }
    },

}
</script>

<style>

</style>
