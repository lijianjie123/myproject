<template>
  <div id="app">
    <div class="nav-box">
      <ul>
        <!-- <li>
          <!-- <a href="/home">home</a> >
          <!-- <router-link to = "/home">home</router-link> >
          <router-link :to = "index" tag = "a">home</router-link>
        </li> -->
        <!-- event = "mouseover" 鼠标移入切换 -->
        <router-link to = "/" tag = "li" exact event = "mouseover">
          <i class="fa"></i>
          <span>home</span>
        </router-link>

        <li>
          <!-- <a href="/document">document</a> -->
          <!-- active-class属性的默认值是router-link-active,所以如果没有设置，就会被渲染为这个class -->
          <!-- const router = new VueRouter({
            mode: 'hash',
            linkActiveClass: 'Active', // 这是默认链接激活时的class
          }) -->
          <!-- active-class = "activePink"    重新定义激活的class -->
          <router-link :to = "{path:'/document#abc'}" active-class = "activePink">document</router-link>
        </li>
        <li>
          <!-- <a href="/about">about</a> -->
          <router-link to = "/about" >about</router-link>
        </li>
        <li>
          <router-link to = "/user" >user</router-link>
        </li>
      </ul>
    </div>
    当前导航下标{{$route.meta.index}}
    <!-- <router-view name = "slider"></router-view> -->
    <!-- <router-view class="center"></router-view> -->
    <transition :name="names" >
      <!-- 把要运动的元素放在transition 标签中 -->
       <router-view class="center"></router-view>
    </transition>
    <router-view name = "slider"></router-view>
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
      names: "left" //动态绑定
    };
  }
};
</script>

<style>
.active {
  background: yellow;
}
.activePink {
  background: pink;
}
.center {
  text-align: center;
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 170px;
}
/* 进入 
.v-enter {
  opacity: 0;
}
.v-enter-to {
  opacity: 1;
}*/
/* // 运动持续时间 
.v-enter-active {
  transition: 1s;
}*/

/* 离开 
.v-leave {
  opacity: 1;
}
.v-leave-to {
  opacity: 0;
}
.v-leav-active {
  transition: 1s;
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
</style>
