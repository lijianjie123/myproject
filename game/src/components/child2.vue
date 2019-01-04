<template>
    <div class="child-2">
        <p>in child2:</p>
        <p>props: {{pChild2}}</p>
        <ul>

            <li v-for = "(item,index) in pChild2" :key = "index">{{item}}</li>
        </ul>
        <p>$attrs: {{$attrs}}</p>
        <hr>
    </div>
</template>
<script>
export default {
    props: ['pChild2'],
    data() {
        return {};
    },
    inheritAttrs: true,
    mounted() {
        this.$emit('test2');
    }
};
</script>