<template>
    <div>
        <h2>简易加法计算器</h2>
        <div>
            <input type="button" value= "-"  @click = "addIncrement"/>
            <span> {{num}}</span>
            <input type="button" value = '+' @click = "addHandle">
        </div>
    </div>
</template>
<script>
export default {
  data() {
    return {
      num: 0
    };
  },
  methods: {
    deHandle() {
      this.num--;
    },
    addHandle() {
      this.num++;
    }
  }
};
</script>
