<template>
    <div id="temp">
        <div id="desc">
            <!--标题-->
            <div class="title">
                <h4 v-text="photodetail.title"></h4>
                <p>{{photodetail.add_time | dataformat('YYYY-MM-DD HH:mm:ss')}} {{photodetail.click}}次浏览</p>
                <p class="p"></p>
            </div>
            <!--图片-->
            <div class="mui-content">
                <ul class="mui-table-view mui-grid-view mui-grid-9">
                    <li  class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3" v-for="(item,index) in list">
                        <!--<img :src="item.src" alt="">-->
                        <img class="preview-img" :src="item.src" height="100" @click="$preview.open(index, list)">
                    </li>
                </ul>
            </div>
            <!--摘要-->
            <p v-text="photodetail.content"></p>
        </div>
        <div>
            <comment :id="id"></comment>
        </div>
    </div>

</template>

<script>
    import comment from "../subcom/comment.vue";
    import common from "../../kits/common.js"
    import {Toast} from "mint-ui";
    export default {
        components:{
            comment
        },
        data(){
            return{
                id:0,
                photodetail:{},
                list:[]

            }
        },
        created() {
            this.id = this.$route.params.id;
            this.getImages();
            this.getdetail();

        },

        methods:{

            getImages(){
                var url=common.apidomain+"type=getthumimages&imgid="+this.id;
                this.$http.get(url).then(function (res) {
                    if(res.body.status!=0){
                        Toast(res.body.message);
                        return;
                    }
                    res.body.message.forEach(function (item) {
                        var img=document.createElement("img");
                        img.src=item.src;
                        item.w=img.width;
                        item.h=img.height;
                    });
                    this.list=res.body.message;

                })
            },

            getdetail(){
                var url=common.apidomain+"type=getimageInfo&imgid="+this.id;
                this.$http.get(url).then(function (res) {
                    if(res.body.status!=0){
                        Toast(res.body.message);
                        return;
                    }
                    this.photodetail=res.body.message[0];

                })
            }
        }
    }
</script>

<style scoped>
    #desc{
        padding: 15px 10px;
    }
    #desc .title h4{
        color: #0094ff;
    }
    #desc .title p{
        color: rgba(0,0,0,0.4);
        margin-top: 10px;
    }
    #desc .title .p{
        width: 100%;
        height: 1px;
        background-color: rgba(0,0,0,0.3);
    }
    .mui-grid-view.mui-grid-9 {
        background-color: #fff;
        border-left: none;
        border-top: none;
    }

    .mui-grid-view.mui-grid-9 .mui-table-view-cell {
        border-right: none;
        border-bottom: none;
    }

</style>