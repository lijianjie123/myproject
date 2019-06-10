<template>
    <mt-swipe :auto="2000">
        <mt-swipe-item v-for="item in imgs"><img :src="item.src" alt=""></mt-swipe-item>
    </mt-swipe>
</template>

<script>
    export default {
        props:['imgs']
    }
</script>

<style scoped>
    .mint-swipe {
        height: 300px;
    }

    .mint-swipe-item {
        width: 100%;
        height: 300px;

    }

    .mint-swipe-item img {
        height: 300px;
        width: 100%;
    }
</style>