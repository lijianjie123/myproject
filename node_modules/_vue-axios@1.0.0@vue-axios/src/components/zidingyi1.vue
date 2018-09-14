<template>
  <div class="hello">
    <h2>Axios之——自定义请求</h2>
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
  },
  //转换请求数据  只适合PUT POST 和PATCH
  transformRequest: [
    function(data) {
      console.log(data);
      data.age = 30; //也可以在发送请求前  加上一些属性 这里的 data.age = 30;
      return queryString.stringify(data); //需要return 这就这么写 return 出的是，转换后的字符串的数据格式,还需要请求头 设置"content-type"
    }
  ],
  //transformResponse对请求回来的数据进行处理
  transformResponse: [
    //对请求回来的数据进行处理
    function(data) {
      //这个data 是请求回来的数据
      console.log(" transformResponse");
      console.log(data);
      data.abc = "miaov"; //  让请求的数据都有一个属性.abc='miaov'
      return data; //需要return
    }
  ]
  // 根据需求进行配置 根据需求是否添加
  // validateStatus(status) {
  //   //根据返回值 判断是否成功
  //   console.log(status);
  //   //return status < 500; // 返回的状态码  小于500  都为请求成功
  //   return status < 400;
  // }
});
export default {
  name: "zidingyi",
  created() {
    HTTP.post("test-post-axios", {
      miaov: "ketang", // 有时需要数据是 字符串连接的格式  miaov=ketang& username=leo  有了上边的模块引入 再有上边的return queryString.Stringify(data)， 还需要请求头 设置"content-type" 就能实现了
      username: "leo"
    })
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
