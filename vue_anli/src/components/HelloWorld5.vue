<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <ul>
      <li>
        <a
          href="https://vuejs.org"
          target="_blank"
        >
          Core Docs
        </a>
      </li>
      <li>
        <a
          href="https://forum.vuejs.org"
          target="_blank"
        >
          Forum
        </a>
      </li>
      <li>
        <a
          href="https://chat.vuejs.org"
          target="_blank"
        >
          Community Chat
        </a>
      </li>
      <li>
        <a
          href="https://twitter.com/vuejs"
          target="_blank"
        >
          Twitter
        </a>
      </li>
      <br>
      <li>
        <a
          href="http://vuejs-templates.github.io/webpack/"
          target="_blank"
        >
          Docs for This Template
        </a>
      </li>
    </ul>
    <h2>Ecosystem</h2>
    <ul>
      <li>
        <a
          href="http://router.vuejs.org/"
          target="_blank"
        >
          vue-router
        </a>
      </li>
      <li>
        <a
          href="http://vuex.vuejs.org/"
          target="_blank"
        >
          vuex
        </a>
      </li>
      <li>
        <a
          href="http://vue-loader.vuejs.org/"
          target="_blank"
        >
          vue-loader
        </a>
      </li>
      <li>
        <a
          href="https://github.com/vuejs/awesome-vue"
          target="_blank"
        >
          awesome-vue
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from "axios"; //引入axios 模块
import queryString from "queryString"; //引入queryString模块   它是用来处理查询字符串格式的 是系统提供的 不需要安装

var CancelToken = axios.CancelToken; //  创建取消求的令牌
var source = CancelToken.source(); //  创建取消求的令牌

var HTTP = axios.create({
  baseURL: "https://easy-mock.com/mock/5b6173457b15677bbe18a279/example/", //基本路径
  //timeout: 1, //1s  ms 为单位   请求时间
  responseType: "json", //数据类型
  // params: {
  //   //查询字符串  配置参数   //只要设置了params参数  地址栏就会显示对应的参数出来
  //   book: "123"
  // },
  headers: {
    //请求头
    "custome-header": "miaov",
    "content-type": "application/x-www-form-urlencoded" // 添加了 就能对应转换为支持的格式
  }
});
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
//请求后的拦截
HTTP.interceptors.response.use(function(data) {
  console.log("response");
  console.log(data);
  return data; //return data 出去  不然拿到的数据是空的
});

export default {
  name: "HelloWorld",
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
        console.log(error);
      });
  },

  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
