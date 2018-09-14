<template>
  <div id="app">
    <mt-header fixed title="固定在顶部"></mt-header>
    <router-view name = "nav"/>
    <router-view/>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "App",
  created() {
    console.log("app");
    axios("/proxy/rank/list?json=true").then(({ data }) => {
      console.log(data);
    });
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
