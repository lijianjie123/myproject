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
          <router-link  to="/about"  tag = "li" event = "mouseover"  active-class = "active">
           <i></i>
           <span>about</span>
          </router-link>

          <router-link  to="/user"  tag = "li" event = "mouseover"  active-class = "active">
           <i></i>
           <span>user</span>
          </router-link>
          <!-- <a href="/document">document</a> -->
          <router-link  :to="{path:'/document#abc'}"  tag = "li" event = "mouseover">
          <i></i>
           <span>document</span>
          </router-link>
      </ul>
    </div>
    当前导航下标：{{$route.meta.index}}
    <div class="main">
        <!-- 把要有效果的 元素  放到<transition>过度动效标签内 -->
          <!-- mode = "in-out" 过渡模式     in-out：新元素先进行过度，完成之后当前元素过渡离开     out-in：当前元素先进行过渡，完成之后新元素过渡进入-->
        <!-- <transition mode = "out-in" name = "left"> -->  
          <!-- 去掉了mode  -->
          <transition  :name = "names"> 
          <!-- 告诉路由  把组件渲染在这   这里的class 最终会把class渲染到对应组件的跟节点 上去，  跟节点有类名  这里也有  最终是  拼接类名   就是组件上  两个类名都存在-->
          <router-view class="center"></router-view>
        </transition>
        <router-view name="slider"></router-view>
    </div> 
  </div>
</template>

<script>
export default {
  name: "App",

  watch: {
    $route(to, from) {
      console.log(to.meta.index); //目标导航下标
      console.log(from.meta.index); //离开导航下标

      if (to.meta.index < from.meta.index) {
        this.names = "right";
      } else {
        this.names = "left";
      }
    }
  },
  data() {
    return {
      index: "/home",
      names: "left"
    };
  }
};
</script>

<style>
.center {
  /* text-align: center; */

  width: 100%;
  height: 100%;
  float: left;
  position: absolute;
  left: 0;
  top: 0;
}
.main {
  position: relative;
}

/* // 过度动效样式写法 
.v-enter {
  opacity: 0;
}
.v-enter-to {
  opacity: 1;
}
.v-enter-active {
  transition: 1s;
}
.v-leave {
  opacity: 1;
}
.v-leave-to {
  opacity: 0;
}
.v-leave-active {
  transition: 2s;
}

.left-enter {
  transform: translateX(100%);
}
.left-enter-to {
  transform: translateX(0);
}
.left-enter-active {
  transition: 2s;
}
.left-leave {
  transform: translateX(0);
}
.left-leave-to {
  transform: translateX(-100%);
}
.left-leav-active {
  transition: 2s;
}

.right-enter {
  transform: translateX(-100%);
}
.right-enter-to {
  transform: translateX(100%);
}
.right-enter-active,
.right-leave-active {
  transition: 2s;
}

.right-leave-to {
  transform: translateX(-100%);
}*/
.v-enter {
  opacity: 0;
}
.v-enter-to {
  opacity: 1;
}
.v-enter-active {
  transition: 1s;
}
.v-leave {
  opacity: 1;
}
.v-leave-to {
  opacity: 0;
}
.v-leave-active {
  transition: 1s;
}
.left-enter {
  transform: translateX(100%);
}
.left-enter-active,
.left-leave-active {
  transition: 1s;
}
.left-leave-to {
  transform: translateX(-100%);
}
.right-enter {
  transform: translateX(-100%);
}
.right-enter-active,
.right-leave-active {
  transition: 1s;
}
.right-leave-to {
  transform: translateX(100%);
}

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
