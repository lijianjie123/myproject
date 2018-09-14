<template>
  <div class="hello">
    <h2>Axios之——自定义请求3-- 拦截请求</h2>
  </div>
</template>

<script>
import axios from "axios"; // 引入axios 模块
import queryString from "queryString"; //系统提供的模块   添加这个模块 data就会转换为字符串格式的  miaov: "ketang", username: "leo"

// 这块可以提取到一个js文件中 export default 这个文件( 先导出这个文件)  哪个模块用就把他引入进来 import
var HTTP = axios.create({
  baseURL: " https://easy-mock.com/mock/5b6173457b15677bbe18a279/example",
  //连接超时 这里是 毫秒为单位
  timeout: 10000,
  //请求头
  headers: {
    "custom-header": "miaov",
    "content-type": "application/x-www-form-urlencoded" // 添加了 就能对应转换为支持的格式
  },
  //返回一种数据类型为json 的
  responseType: "json", //自动会解析为json 的格式
  // 设置查询字符的方式  设置的参数为查询字符串的参数
  params: {
    book: "123" //出现在地址栏的后边
  }
});

// 全局拦截
// 请求前的拦截
HTTP.interceptors.request.use(
  function(config) {
    //在发送请求之前做某事
    console.log("拦截");
    console.log(config);
    return config;
  },
  function(error) {
    //请求错误时做些事
    return Promise.reject(error);
  }
);
//请求后的拦截  响应拦截
HTTP.interceptors.response.use(function(data) {
  console.log("response");
  console.log(data);
  return data; //return data 出去  不然拿到的数据是空的
});

export default {
  name: "zidingyi",
  created() {
    //并发请求
    function http1() {
      return HTTP.get("test-axios");
    }
    function http2() {
      return HTTP.post("test-post-axios");
    }
    //并发请求
    axios
      .all([http1(), http2()])
      .then(
        axios.spread((res1, res2) => {
          // spread 帮忙把拿到的数据做分割， 就是分别返回 请求参数的结果
          console.log(res1);
          console.log(res2);
        })
      )
      .catch(error => {
        if (axios.isCancel(error)) {
          console.log(error.message); // 用户取消打印message
        } else {
          console.log(error); // 服务端错误
        }

        console.log(123);
      });
    //source.cancel("操作被用户取消");
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
