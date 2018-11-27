<template>
    <ul class="list">
      <li v-for="(item,index) in data" :key= "index" @click="getval(item.title)">{{item.title}}</li>
      
      
    </ul>
</template>

<script>
export default {
  //props: ["data"],
  // list.vue中怎么拿到vuex 中的list  用的computed  只需要在computed中 定义方法 使用return this.$store.state.list  或者 其他（）
  computed: {
    data() {
      return this.$store.state.list;
    }
  },
  methods: {
    getval(val) {
      // this.$emit("changeTitle", val);
      //  改变vuex中的状态
      this.$store.commit("changetitle", { title: val });
    }
  },
  created() {
    //获取数据  怎么获取数据呢   因为数据是在 vuex中的axios中的  所以这里需要触发  vuex 中actions 中对应有axios 的函数
    // 这里用 dispatch 是因为触发 异步的action 函数getListAction
    this.$store.dispatch("getListAction");
  }
};
</script>
