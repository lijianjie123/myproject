<template>
    <div id="temp">
        <comment></comment>
    </div>
</template>

<script>
    import comment from "../subcom/comment.vue"
    export default {
        components:{
            comment
        },
        data(){
            return{
                id:0,
            }
        },
        created(){
            this.id=this.$route.params.id;
        },
    }
</script>

<style scoped>

</style>