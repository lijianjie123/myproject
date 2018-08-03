<template>
    <div>
        <h2>简易加法计算器</h2>
        <div>
            <input type="button" value= "-" @click = "deHandle"/>
            <span> {{num}}</span>
            <input type="button" value = '+' @click = "addHandle">
        </div>
    </div>
</template>
<script>
export default {
  computed: {
    num() {
      return this.$store.state.count;
    }
  },
  methods: {
    addHandle() {
      //改变状态 提交一个mutation addIncrement
      //   this.$store.commit("addIncrement", {
      //     n: 5
      //   });
      //chufa yi ge action yibu
      this.$store.dispatch("addAction");
    },
    deHandle() {
      //this.$store.commit("deIncrement");
      this.$store.commit({
        type: "deIncrement",
        de: 10
      });
    }
  }
};
</script>

