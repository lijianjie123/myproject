<template>
    <div>about 关于vue      
        about的导航显示红色 是应该用了局部设置激活状态的类名
            <hr/>

            <!-- <ul>
                exact填写上这个属相  为了精确匹配当前的激活状态是哪个 
                <router-link to = "/about" exact tag = "li"><a>study</a></router-link>
                <router-link to = "/about/work" tag = "li"><a>work</a></router-link>
                <router-link to = "/about/hobby" tag = "li"><a>hobby</a></router-link>
            </ul> -->

            <ul>
                <!--上边路由嵌套路径繁琐  下边改写 不使用to的方式  改成对象方式 :to ={ name: '路由名字'}-->
                <router-link :to = "{name:'about'}" exact tag = "li"><a>study</a></router-link>
                <router-link :to = "{name:'work'}" tag = "li"><a>work</a></router-link>
                <router-link :to = "{name:'hobby'}" tag = "li"><a>hobby</a></router-link>
            </ul>
            <hr>
            测试数据：{{test}}
            <!-- 渲染对应的子组件 -->
            <router-view></router-view>
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
  beforeRouteEnter(to, from, next) {
    console.log("beforeRouterEnter");
    console.log(this); //这里访问不到this
    next(vm => {
      vm.test = "改变了";
    });
  },

  beforeRouteUpdate(to, from, next) {
    console.log("beforeRouteUpdate");
    next();
  },
  beforeRouteLeave(to, from, next) {
    //离开组件
    next();
  }
};
</script>
<style>
</style>
