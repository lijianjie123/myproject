<template>
  <div class="list-todos">  <!--菜单容器-->
    <a class="list-todo list activeListClass" :key  = 'index'  v-for="(item, index) in items"> <!--单个菜单容器-->
        <span class="icon-lock" v-if = 'item.locked'></span>  <!--锁的图标-->
        <span class="count-list" v-if = 'item.count'>{{item.count}}</span><!--数字-->
        {{ item.title }} <!--菜单内容-->
    </a>
    <a class=" link-list-new" > <!--新增菜单-->
        <span class="icon-plus">
        </span>
        新增
    </a>
  </div>
</template>
<script>
export default {
  data() {
    //data函数
    return {
      items: [
        { title: "星期一", count: 1, locked: true },
        { title: "星期二", count: 2, locked: false },
        { title: "星期三", count: 3, locked: true },
        { title: "星期四", count: 4, locked: false },
        { title: "星期五", count: 5, locked: true }
      ]
    };
  }
};
</script>
<style lang="less">
@import "../common/style/menu.less";
</style>