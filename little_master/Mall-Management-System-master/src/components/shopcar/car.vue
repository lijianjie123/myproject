<template>
    <div id="temp">
        <div class="row" v-for="(item,index) in datalist">
            <mt-switch class="switch" v-model="value[index]"></mt-switch>
            <img class="img" :src="item.thumb_path" alt="商品图片">
            <div class="inforight">
                <h4 v-text="item.title"></h4>
                <div class="bottom">
                    <ul>
                        <li>￥{{item.sell_price}}</li>
                        <li>
                            <carinputnumber :initCount="item.cou" :goodsid="item.id" v-on:cardataobj="getInputNumber"></carinputnumber>
                        </li>
                        <li><a href="javascript:void(0)" @click="delrow(item.id,index)">删除</a></li>
                    </ul>
                </div>
            </div>
        </div>
        <div id="total">
            <div class="desc">
                <ul>
                    <li>总数（不含运费）</li>
                    <li>已勾选商品{{totalcount}}件，总价：￥:{{totalAmount}}</li>
                </ul>
            </div>
            <div id="button">
                <mt-button type="danger" size="small">去结算</mt-button>
            </div>
        </div>
    </div>
</template>
<script>
    import {getgoodsObject,updateData,remoteItem} from "../../kits/localSg";
    import common from "../../kits/common.js";
    import {Toast} from "mint-ui";
    import carinputnumber from "../subcom/carinputNumber.vue";

    export  default{
        components:{
            carinputnumber
        },
        computed:{
          //  计算总金额
          totalcount(){
              var trueArr=this.value.filter(function (item) {
                  return item;
              });

              var amount =0;
              this.value.forEach((item,index)=>{
                  if(item){
                      var count=this.datalist[index].cou;
                      var price=this.datalist[index].sell_price;
                      var itemamount=count*price;
                      amount=itemamount;
                  }
              });
              this.totalAmount=amount;
              return trueArr.length;

          }
        },
        data(){
            return{
                value:[],
                datalist:[],
                totalAmount:0
            }
        },
        created(){
            this.getdatalist()
        },
        methods:{
            //删除一行数据
            delrow(goodsid,index){
                console.log(goodsid, index);
                this.value.splice(index,1);
                this.datalist.splice(index,1);
                remoteItem(goodsid);
            },

            getInputNumber(resObj){
                updateData(resObj);
                for(var i=0;i<this.datalist.length;i++){
                    if(this.datalist[i].id==resObj.goodsid){
                        if(resObj.type=="add"){
                            this.datalist[i].cou=this.datalist[i].cou+1;
                        }else {
                            this.datalist[i].cou=this.datalist[i].cou-1;
                        }
                        break;
                    }
                }
            },
            getdatalist(){
                var obj=getgoodsObject();
                var idstring='';
                for(var key in obj){
                    idstring+=key+","
                }
                idstring=idstring.substring(0,idstring.length-1);

                var url=common.apidomain+"type=getshopcarlist&ids="+idstring

                this.$http.get(url).then(function (res) {
                    if(res.body.status!=0){
                        Toast(res.body.message);
                        return;
                    }
                    res.body.message.forEach((item)=> {
                        item.cou=obj[item.id];
                        this.value.push(false);
                    })
                    this.datalist=res.body.message;
                })
            }
      }
  }
</script>
<style scoped>
    .row{
        border-bottom: 1px solid rgba(0,0,0,0.3);
        height: 102px;
        display: flex;
        padding: 5px;
    }
    .switch{
        flex: 0 0 52px;
    }
    .img{
        margin-left: 5px;
        height: 75px;
        width: 75px;
        flex: 0 0 85px;
    }
    .inforight{
        margin-left: 5px;
        flex: 1;
    }
    .inforight ul{
        padding-left: 0;
    }
    .inforight li{
        list-style: none;
        display: inline-block;
    }
    .inforight h4{
        color: #0094ff;
        font-size: 14px;
    }
    .bottom li:first-child{
        color: red;
        margin-right: 5px;
    }
    .bottom li:last-child{
        margin-left: 5px;
    }
    #total{
        height: 100px;
        background-color: rgba(0,0,0,0.1);
        display: flex;
        padding: 5px;
    }
    #total ul{
        list-style: none;
        font-size: 14px;
    }
    #button{
        flex: 0 0 60px;
        margin: 30px 0 0 0;
    }
    .desc{
        flex: 1;
    }

</style>

