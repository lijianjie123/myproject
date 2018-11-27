<template>
    <section class="warp">
      <div class="searchIpt clearFix">
        <!-- sync 双向数据绑定 子组件改变  父组件也跟着改变-->
        <select-input :is-show.sync = "listshow" :val = "title"></select-input>
        <list v-show= "listshow"  @changeTitle = "changeval"></list>
      </div>
    </section>
</template>

<script>
import list from "@/components/list";
import selectInput from "@/components/selectInput";

// let listData = [
//   { title: "js" },
//   { title: "vue" },
//   { title: "css" },
//   { title: "jq" },
//   { title: "h5" }
// ];
export default {
  data() {
    return {
      //用一个状态值 控制list列表 显示、隐藏
      listshow: false,
      //listData: listData,
      title: ""
    };
  },
  components: {
    list,
    selectInput
  },
  methods: {
    changeval(val) {
      console.log(val);
      this.title = val;
    }
  }
};
</script>
