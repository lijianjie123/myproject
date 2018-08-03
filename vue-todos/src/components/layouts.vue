
<!--template里面最外层必须是只有一个容器-->
<template>
    <section class="container"><!--最外层容器-->
        <section class="menu"> <!--左边的容器-->
        <menus></menus>
        </section>  
        <section class="content-container"><!--右边的容器-->
        <todo></todo>
        </section>
    </section>
</template>
<!--script 中的 export default {} 即导出这个组件，外部可以引用。-->
<script>
import menus from "./menus"; // 导入创建的menus 组件
import todo from "./todo"; // 导入创建的todo 组件
export default {
  components: {
    // 局部注册menus 组件， 让其可以 在template 调用
    menus,
    todo
  }
};
</script>
<!--style 中的 lang 指额外表示支持的语言可以让编辑器识别,scoped 指这里写的css只适用于该组件。-->
<style lang = "less">
@import "../common/style/layouts.less";
</style>

