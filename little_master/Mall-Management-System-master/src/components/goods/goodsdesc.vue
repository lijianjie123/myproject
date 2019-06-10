<template>
    <div id="temp">
        <h4 v-text="des.title"></h4>
        <p class="p"></p>
        <div v-html="des.content"></div>
    </div>
</template>

<script>
    import common from "../../kits/common.js";
    import {Toast} from "mint-ui";
    export default {
        data(){
            return{
                id:0,
                des:{}
            }
        },
        created(){
            this.id=this.$route.params.id;
            this.getdes()
        },
        methods:{
            getdes(){
                var url=common.apidomain+"type=getdesc&id="+this.id;
                this.$http.get(url).then(function (res) {
                    if(res.body.status!=0){
                        Toast(res.body.message);
                        return;
                    }
                    this.des=res.body.message;

                })
            }
        }
    }
</script>

<style scoped>
    #temp{
        padding: 5px;
        width: 100%;
    }
    #temp h4{
        padding-top: 5px;
        font-size: 18px;
        color: #0094ff;
    }
    .p{
        width: 100%;
        height: 1px;
        background-color: rgba(0,0,0,0.2);
        margin-bottom: 10px;
    }
    #temp div{
        overflow: hidden;
        width: 100%;
    }
    /*#temp img.gomeImgLoad{*/
        /*width: 400px !important;*/
    /*}*/

</style>