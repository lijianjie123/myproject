<template>
    <div class="centerTopB clearfix">
            <h2 class="screenTitle">SCREENSHOT</h2>
            <div id="main">
                <ul>
                    <li :class="{'styleS': itemIndex === index }"
                     v-for="(item,index) in data" 
                     :key="index"
                     
                     @mouseover="tabImg(index)">
                        <div  
                         :style="{background:'url(../../static/img/' + item.src + ') center '}"
                         :class="{'filterGray': itemIndex === index }"></div>
                        <!-- <img :src="imgurl" alt=""> -->
                    </li> 
                    <!-- <li style="width: 484px;">
                        <div :style="bgimg" class="filterGray"></div>
                    </li>  -->
                </ul>
            </div>
        </div>
</template>

<script>
let data = [
    {
        src:'002.jpg',
    },
    {
        src:'002.jpg',
    },
    {
        src:'002.jpg',
    },
    {
        src:'002.jpg',
    },
    {
        src:'002.jpg',
    },
    {
        src:'002.jpg',
    }
];
//const url = require("../assets/img/002.jpg");
export default {
    // data(){
    //     return {
    //         bgimg:{
    //             background: "url(" + url + ") center"
    //         }
    //         // imgurl:require('../assets/img/002.jpg'),  //配合img 标签使用方式
            

    //     }
    // }



    data() {
        return {
            data:data,
            styleS:{
                width:'480px'
            },
            itemIndex:0

            
        }
    },
    methods: {
        tabImg(index){
            console.log(index)
            this.itemIndex = index

        }
    },

}
</script>

<style scope>


</style>

