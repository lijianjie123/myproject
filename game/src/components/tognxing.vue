<template>
    
</template>

<script>


Vue.component('C',{
        template:`
            <div>
                <input type="text" v-model="$attrs.messagec" @input="passCData($attrs.messagec)"> </div>
        `,

        methods:{
            passCData(val){
                //触发父组件A中的事件
                this.$emit('getCData',val)
            }
        }
    })

    Vue.component('B',{
        data(){
            return {
                mymessage:this.message
            }
        },
        template:`
            <div>
                <input type="text" v-model="mymessage" @input="passData(mymessage)"> 
                <!-- C组件中能直接触发getCData的原因在于 B组件调用C组件时 使用 v-on 绑定了$listeners 属性 -->
                <!-- 通过v-bind 绑定$attrs属性，C组件可以直接获取到A组件中传递下来的props（除了B组件中props声明的） -->
                <C v-bind="$attrs" v-on="$listeners"></C>
            </div>
        `,
        props:['message'],//得到父组件传递过来的数据
        methods:{
            passData(val){
                //触发父组件中的事件
                this.$emit('getChildData',val)
            }
        }
    })
    Vue.component('A',{
        template:`
            <div>
                <p>this is parent compoent!</p>
                <B :messagec="messagec" :message="message" v-on:getCData="getCData" v-on:getChildData="getChildData(message)"></B>
            </div>
        `,
        data(){
            return {
                message:'hello',
                messagec:'hello c' //传递给c组件的数据
            }
        },
        methods:{
            getChildData(val){
                console.log('这是来自B组件的数据')
            },
            //执行C子组件触发的事件
            getCData(val){
                console.log("这是来自C组件的数据："+val)
            }
        }
    })
    var app=new Vue({
        el:'#app',
        template:`
            <div>
                <A></A>
            </div>
        `
    })

</script>

<style>

</style>
