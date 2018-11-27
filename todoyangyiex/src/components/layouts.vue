<template>
  <section class="container" > <!--最外层容器-->
    <section class="menu"> <!--左边的容器-->
    <menus></menus>
    </section>
    <section class="content-container"><!--右边的容器-->
    <todo></todo>
    </section>
  </section>
</template>
<script>
import menus from "./menus";
import todo from "./todo";
export default {
  components: {
    //注册menus 组件  让其可以在template 调用
    menus,
    todo
  }
};
</script>
<style lang="less">
@import "../common/style/layouts.less";
</style>