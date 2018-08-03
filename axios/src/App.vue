<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <router-view></router-view>
  </div>
</template>

<script>
import axios from "axios"; // 引入axios
export default {
  name: "App"
  // created() {
  // axios({
  //   method: "get", //请求方式   不写这个method  默认就是get
  //   url:
  //     " https://easy-mock.com/mock/5b6173457b15677bbe18a279/example/test-axios"
  // }) //axios  会返回promise   所以后边 直接 .then
  //   .then(response => {
  //     console.log(response.data);
  //   })
  //   .catch(error => {
  //     //catch 捕获
  //     console.log(error);
  //   });
  // axios
  //   .get(
  //     "https://easy-mock.com/mock/5b6173457b15677bbe18a279/example/test-axios",
  //     {
  //       params: {
  //         abc: "miaov",
  //         miaov: "ketang"
  //       }
  //     }
  //   )
  //   .then(response => {
  //     console.log(response.data);
  //   })
  //   .catch(error => {
  //     console.log(error);
  //   });
  // axios
  //   .post(
  //     "https://easy-mock.com/mock/5b6173457b15677bbe18a279/example/test-post-axios",
  //     {
  //       abc: "miaov",
  //       miaov: "ketang"
  //     }
  //   )
  //   .then(response => {
  //     console.log(response.data);
  //   })
  //   .catch(error => {
  //     console.log(error);
  //   });
  //}
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
