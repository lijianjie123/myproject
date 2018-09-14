<template>
  <div id="app">
    <header-nav></header-nav>
    <router-view/>
  </div>
</template>

<script>
import headerNav from "@/components/header-nav"; //引入组件
export default {
  name: "App",
  components: {
    headerNav //注册组件
  }
};
</script>

<style>
</style>
