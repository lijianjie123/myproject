<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>如何使用Easy Mock</h2>
    <router-link :to="{path:'/zidingyi'}">使用安装模块的请求</router-link> 
    <router-link :to="{path:'/zidingyi1'}">自定义请求1</router-link> 
    <router-link :to="{path:'/zidingyi2'}">自定义请求2</router-link> 
    <router-link :to="{path:'/zidingyi3'}">自定义请求3</router-link>
    
  </div>
</template>

<script>
import axios from "axios"; // 引入axios 模块
export default {
  name: "Hello",
  data() {
    return {
      msg: "Axios"
    };
  },
  created() {
    //   axios({
    //     method: "get",
    //     url:
    //       "https://easy-mock.com/mock/5b6173457b15677bbe18a279/example/test-axios"
    //   })
    //     .then(response => {
    //       console.log(response.data); // 成功就返回resopnse   response.data 才是拿到真实的数据
    //     })
    //     .catch(error => {
    //       console.log(error); //捕获错误 给自己看的 分析错误信息
    //     });
    // axios
    //   .get(
    //     "https://easy-mock.com/mock/5b6173457b15677bbe18a279/example/test-axios"
    //   )
    //   .then(response => {
    //     console.log(response.data);
    //   })
    //   .catch(error => {
    //     console.log(error);
    //   });

    // axios
    //   .post(
    //     "https://easy-mock.com/mock/5b6173457b15677bbe18a279/example/test-post-axios"
    //   )
    //   .then(response => {
    //     console.log(response.data);
    //   })
    //   .catch(error => {
    //     console.log(error);
    //   });

    // axios
    //   .get(
    //     "https://easy-mock.com/mock/5b6173457b15677bbe18a279/example/test-axios",
    //     {
    //       //params对象参数
    //       params: { abc: "miaov", miaov: "ketang" }//params对象参数
    //     }
    //   )
    //   .then(response => {
    //     console.log(response.data);
    //   })
    //   .catch(error => {
    //     console.log(error);
    //   });

    axios
      .post(
        "https://easy-mock.com/mock/5b6173457b15677bbe18a279/example/test-post-axios",
        {
          miaov: "课堂"
        }
      )
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }
};
</script>

<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
