<template>
    <div class="roleShow clearfix">
        <h2 class="roleTitle">ROLE INTRODUCE</h2>
        <div class="transformWrap" >
           <!-- <img src="../../static/img/0001.jpg">
             <img  src="../assets/img/0002.jpg">
            <img  src="../assets/img/0003.jpg">  -->
            <!-- :class="{'active': itemIndex === index}" -->
            <img :class="{'noTransform': itemIndex ===  index }"
            v-for = "(item,index) in data" 
            :key = "index" :src="'../../static/img/' + item.src"  
            @mouseover = "tabImg(index)"  >
        </div>
    </div>
</template>
<script>
// ,'../assets/img/0002.jpg','../assets/img/0003.jpg','../assets/img/0004.jpg'
let data = [
    {
        src:'0001.jpg',
    },
    {
        src:'0002.jpg',
    },
    {
        src:'0002.jpg',
    },
    {
        src:'0002.jpg',
    }
    // {
    //     src:'../assets/img/0002.jpg',
    // },
    // {
    //     src:'../assets/img/0003.jpg',
    // },
    // {
    //     src:'../assets/img/0004.jpg',
    // },
    ]
export default {
    data() {
        return {
            data:data,
            itemIndex:0
        }
    },
    methods:{
        tabImg(index){
            console.log(index)
            this. itemIndex = index
        }
    }



}
</script>

<style>

</style>

