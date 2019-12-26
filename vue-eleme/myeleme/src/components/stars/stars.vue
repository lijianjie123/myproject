<template>
    <div>
        
        <span class="xx" v-for = "(star, index) of num" :key = "index"></span>
    </div>
</template>

<script>
export default {
    data(){
        return {

        }
    },
    props:['num']

}
</script>

<style>
.xx{
  width:12px;
  height:15px;
  display: inline-block;
  background: url(../../images/stars.png) -0px 2px no-repeat;
  
}

</style>
