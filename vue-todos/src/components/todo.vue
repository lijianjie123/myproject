<template>
  <div class="page lists-show">
    <!-- 头部模块 -->
    <nav>
      <!-- 当用户浏览车窗口尺寸小于40em时候，显示手机端的菜单图标 -->
      <div class="nav-group">
        <a class="nav-item">
          <span class="icon-list-unordered">
          </span>
        </a>
      </div>
      <!-- 显示标题和数字模块 -->
      <h1 class="title-page">
        <span class="title-wrapper">{{todo.title}}</span>  <!-- title:标题 绑定标题 -->
        <span class="count-list">{{todo.count || 0}}</span><!-- count:数量 绑定代办单项熟练-->
      </h1>
      <!-- 右边显示删除图标和锁定图标的模块 -->
      <div class="nav-group right">
        <div class="options-web">
          <a class=" nav-item">
            <!-- cicon-lock锁定的图标
            icon-unlock：非锁定的图标
            -->
            <span class="icon-lock" v-if="todo.locked"></span>
            <span class="icon-unlock" v-else>
            </span>
          </a>
          <a class=" nav-item">
            <span class="icon-trash">
            </span>
          </a>
        </div>
      </div>
      <!-- 用户新增代办事项的input模块 -->
      <div class=" form todo-new input-symbol">
        <!-- 绑定disabled值，当todo.locked为绑定的时候，禁止input输入 -->
        <input type="text" v-model="text" placeholder='请输入' :disabled="todo.locked" @keyup.enter = "onAdd" />
        <span class="icon-add"></span>
      </div>
    </nav>
    <!-- 列表主体模块 -->
    <div class="content-scrollable list-items" >
      <div v-for = "item in items" :key = "item.index">
        <!-- <item>是子组件 父组件向子组件传递数据通过Prop  Prop 是写在子组件中的  而且子组件绑定的属性值  是写在prop中的 -->
        <item :item = "item"> {{items.title}}</item>
      </div>
     
    </div>
  </div>
</template>

<script>
import item from "./item";
export default {
  //components的作用就可以把其他子组件挂载到当前父组件的作用域里。
  components: {
    item
  },
  data() {
    return {
      todo: {
        title: "星期一", //标题
        count: 12, //数量
        locked: false //是否绑定
      },
      items: [
        //代办单项列表
        { checked: false, text: "新的一天", isDelete: false },
        { checked: false, text: "新的一天", isDelete: false },
        { checked: false, text: "新的一天", isDelete: false }
      ],
      text: "" //用户输入单项项绑定的输入
    };
  },
  methods: {
    onAdd() {
      //alert(1);
      this.items.push({
        checked: false,
        text: this.text,
        isDelete: false
      });
      this.text = "";
    }
  }
};
</script>

<style lang = "less">
@import "../common/style/nav.less";
@import "../common/style/form.less";
@import "../common/style/todo.less";
</style>

