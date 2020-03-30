<template>
    <div>
        关于我
        <hr>
        <ul class="nav">
            <!-- <router-link  to="/about" exact tag="li"><a> study</a></router-link>
            <router-link  to="/about/work" tag="li"><a>work</a></router-link>
            <router-link  to="/about/hobby" tag="li"><a>hobby</a></router-link> -->
            <!-- 改用对象的方式  添加匹配路由 -->
            <router-link  :to="{name:'about'}" exact tag="li"><a> study</a></router-link>
            <router-link  :to="{name:'work'}" tag="li"><a>work</a></router-link>
            <router-link  :to="{name:'hobby'}" tag="li"><a>hobby</a></router-link>
        </ul>
        <hr/>
        <router-view></router-view>
        测试数据：{{test}}
    </div>
</template>
<script>
export default {
  data() {
    return {
      test: "改变前"
    };
  },
  beforeCreate() {
    console.log("beforeCreate");
  },

  // to目标导航
  // from要离开的导航
  // next  执行的函数

  //给某个组件 设置导航钩子函数
  beforeRouteEnter(to, from, next) {
    console.log("beforeRouteEnter");
    console.log(this); // 这里打印的this 是undefind   因为组件实例还没创建
    next(vm => {
      //可以接收一个回调函数
      vm.test = "改变了";
    }); //需要执行函数  才能进入对应的导航
  },
  //组件更新之后执行 beforeRouteUpdate 导航钩子函数
  beforeRouteUpdate(to, from, next) {
    console.log("beforeRouteUpdate");
    next(); // 执行这个函数 代表进入更新
  },
  //   离开这个组件的时候执行一个导航钩子函数
  beforeRouteLeave(to, from, next) {
    console.log("beforeRouteLeave");
    next(); //调用next()  代表离开组件
  }
};
</script>
<style scoped>

.active{ background: #ccc; } 
</style>


