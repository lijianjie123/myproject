<template>
    <div class="subtmpl">
        <div class="inleft" @click="substrict">-</div>
        <div class="incenter" v-text="count"></div>
        <div class="inright" @click="add">+</div>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                count:1
            }
        },
        methods:{
            substrict(){
                this.count--;
                if(this.count<1){
                    this.count=1;
                }
                this.sendmessage();
            },
            add(){
                this.count++;
                this.sendmessage();
            },
            sendmessage(){
                this.$emit('dataobj',this.count);
            }
        }
    }
</script>

<style scoped>
    .subtmpl div{
        width: 40px;
        height: 25px;
        line-height: 25px;
        border: 1px solid #000;
        display: inline-block;
        text-align: center;
        /*color: black;*/
    }

</style>