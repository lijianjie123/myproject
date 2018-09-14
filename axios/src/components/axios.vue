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
//import axios from "axios"; //引入axios 模块
//import queryString from "queryString"; //引入queryString模块   它是用来处理查询字符串格式的 是系统提供的 不需要安装
import axios from "axios"; // 引入axios 模块

export default {
  name: "HelloWorld",
  //created 生命周期函数  在这里拿数据
  created() {
    axios({
      method: "get",
      url:
        "https://easy-mock.com/mock/5b6173457b15677bbe18a279/example/test-axios"
    })
      .then(response => {
        console.log(response);
      })
      //捕获到错误 走这里  用来给自己查看错误信息出现的原因
      .catch(error => {
        console.log(error);
      });
  },

  data() {
    return {
      msg: "一起学习axios吧"
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >
</style>
