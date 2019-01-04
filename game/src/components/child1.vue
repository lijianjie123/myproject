<template>
    <div class="child-1">
        <p>in child1:</p>
        <p>props: {{pChild1}}</p>
        <p>$attrs: {{$attrs}}</p>
        <ul>

            <li v-for = "(item,index) in pChild1" :key = "index">{{item}}</li>
        </ul>
        <hr>
        <!-- C组件中能直接触发test的原因在于 B组件调用C组件时 使用 v-on 绑定了$listeners 属性 -->
        <!-- 通过v-bind 绑定$attrs属性，C组件可以直接获取到A组件中传递下来的props（除了B组件中props声明的） -->

       
        <child2 v-bind="$attrs" v-on="$listeners"></child2> 

    </div>
</template>
<script>
import Child2 from '@/components/Child2.vue';
export default {
    props: ['pChild1'],
    data() {
        return {};
    },
    inheritAttrs: true,
    components: { Child2 },
    mounted() {
        this.$emit('test1');
    }
};
</script>