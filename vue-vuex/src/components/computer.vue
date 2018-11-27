<template>
    <div>
        <h2>简易加法计算器</h2>
        <div>
            <input type="button" value= "-"  @click = "dicHandle({de:10})"/>
            <span> {{count}}</span>
            <input type="button" value = '+' @click = "addHandle">
             <!-- <span> {{num2}}</span> -->
        </div>
    </div>
</template>
<script>
import { mapState, mapMutations, mapActions } from "vuex";
export default {
  // 使用mapState方法：  第一种 写成对象的方法
  // computed: mapState({
  //   // 以下几种写法
  //   // num:state=>state.count
  //   // num:'count'
  //   /*
  //   num(state){
  //     return state.count +100
  //   }
  //   */
  //   //count:'count'   这种方式渲染的时候  标签中就得改成<span> {{count}}</span>
  // }),
  // 使用mapState方法：  第二种 写成数组的方法
  //computed: mapState(['count'])  //注意  不是这样写 就成了  应该是以下的
  computed: {
    // abc() {
    //   return 123;
    // },
    ...mapState(["count"]) //使用扩展运算符  返回成一个对象   扩展到当前对象中     ["count"]  也可以改成使用第一种方法对象的形式
  },

  // computed: {
  //   num() {
  //     return this.$store.state.count;
  //   }
  //   // num2() {
  //   //   return this.$store.getters.filterNum;
  //   // }
  // },
  methods: {
    // addHandle() {
    //   //提交一个mutation
    //   // this.$store.commit("addIncrement", {
    //   //   n: 5
    //   // });

    //   // 触发一个action dispatch
    //   this.$store.dispatch("addAction");
    // },
    // 改成用使用...mapActions ...mapMutations()
    ...mapActions({
      addHandle: "addAction"
    }),
    ...mapMutations({
      dicHandle: "dicIncrement" //  有传参的情况  要把传递的参数 写到  调用函数里去   <input type="button" value= "-"  @click = "dicHandle({de:10})"/>
    })
    // dicHandle() {
    //   // 还可以写成提交对象的方式
    //   this.$store.commit({ // 用对象的方式传参的时候  vueX中mutations下的 dicIncrement(state, payload) 第二个参数 也就是payload  其实是一个对象 对象下的属性  payload.de
    //     type: "dicIncrement",
    //     de: 10
    //   });
    // }
  }
};
</script>
