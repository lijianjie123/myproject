<template>

<!-- 3. 单向数据流
    props是单向绑定的，当父组件的属性变化时，将传导给子组件，但是不会反过来
    而且不允许子组件直接修改父组件中的数据，报错
    解决方式：
        方式1：如果子组件想把它作为局部数据来使用，可以将数据存入另一个变量中再操作，不影响父组件中的数据
        方式2：如果子组件想修改数据并且同步更新到父组件，两个方法：
            a.使用.sync（1.0版本中支持，2.0版本中不支持，2.3版本又开始支持）
                需要显式地触发一个更新事件   子组件中需要触发： this.$emit("update:isShow", !this.initshow);
                methods: {
                    showList() {
                      console.log(0);
                      // 触发一个自定义事件   update 是vue内部定义的
                      this.$emit("update:isShow", !this.initshow);
                    }
                  }
            b.可以将父组件中的数据包装成对象，然后在子组件中修改对象的属性(因为对象是引用类型，指向同一个内存空间)，推荐     -->

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
