<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <div class="nav">
      <ul>
          <!-- <a href="/home" >home</a> -->
          <!-- 默认是点击事件， 如果想事件是 移入mouseover  ，添加event = "mouseover"     exact不包括的意思 -->
          <router-link  :to="index"  exact tag = "li" event = "mouseover">
            <i></i>
            <span>home</span>
          </router-link>
          <!-- <a href="/about">about</a> -->
          <router-link  :to="{path:'/about'}"  tag = "li" event = "mouseover"  active-class = "active">
           <i></i>
           <span>about</span>
          </router-link>
          <!-- <a href="/document">document</a> -->
          <router-link  :to="{path:'/document'}"  tag = "li" event = "mouseover">
          <i></i>
           <span>document</span>
          </router-link>
      </ul>
    </div>
    <!-- 告诉路由  把组件渲染在这   这里的class 最终会把class渲染到对应组件的跟节点 上去，  跟节点有类名  这里也有  最终是  拼接类名   就是组件上  两个类名都存在-->
    <router-view class="center"></router-view>

    <router-view name="slider"></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      index: "/home"
    };
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

li {
  list-style: none;
  display: inline-block;
  background: #ccc;
  width: 100px;
  height: 100px;
  line-height: 100px;
}
li i {
  display: inline-block;
  width: 10px;
  height: 100px;
  float: left;
  background: yellow;
}
li span {
  display: inline-block;
  width: 90px;
  height: 100px;
  float: left;
}
.is-active {
  background: pink;
}
.active {
  background: red;
}
</style>
