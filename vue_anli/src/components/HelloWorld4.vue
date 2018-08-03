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
  },
  // transformRequest转换数据 只适合PUT，POST和PATCH
  transformRequest: [
    function(data) {
      console.log(data);
      data.age = 30; //也可以在发送请求前  加上一些属性 这里的 data.age = 30;
      return queryString.stringify(data); // 这就这么写 return 出的是，转换后的数据格式
    }
  ],
  //transformResponse对请求回来的数据进行处理
  transformResponse: [
    //对请求回来的数据进行处理
    function(data) {
      //这个data 是请求回来的数据
      console.log(" transformResponse");
      console.log(data);
      data.abc = "miaov";
      return data;
    }
  ],
  cancelToken: source.token //取消请求的 配置项
  // validateStatus(status) { //根据需求是否添加
  //   console.log(status);
  //   return status < 400;
  // }
});
export default {
  name: "HelloWorld",
  created() {
    HTTP.post("test-post-axios", {
      miaov: "ketang", //转换为  miaov=ketang&username=lijj 的格式  需要在header（请求头）添加"content-type": "application/x-www-form-urlencoded"
      username: "lijj"
    })
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        if (axios.isCancel(error)) {
          console.log(error.message); // 用户取消打印message
        } else {
          console.log(error); // 服务端错误
        }
        console.log(123);
        console.log(error);
      });
    source.cancel("操作被用户取消");
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
