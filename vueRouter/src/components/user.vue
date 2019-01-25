<template>
    <div>
        user
        <div class="userlist">
            <router-link style="padding-left:30px" 
            :to = "{path:'/user/'+item.tip +'/'+ item.id,query:{info:'follow'}}" 
            v-for = "(item,index) in userList" 
            :key = "index">{{item.username}}</router-link>
        </div>
        <div class="user-info" v-if = "userInfo.username">
            <p>姓名:{{userInfo.username}}</p> 
            <p>姓别:{{userInfo.sex}}</p>
            <p>爱好:{{userInfo.hobby}}</p>
        </div>
        <hr>
        <div class="info-n" v-if = "userInfo.username">
            <!-- <router-link exact to="/user/vip/1?info=follow">她的关注</router-link>
             <router-link exact to="/user/vip/1?info=share">她的分享</router-link> -->
            <!-- 查询字符串 -->
            <!-- <router-link exact to="?info=follow">她的关注</router-link>
             <router-link exact to="?info=share">她的分享</router-link> -->
<!-- 查询字符串 写法方式二 -->
             <router-link exact :to="{path:'',query:{info:'follow', a:1}}">她的关注</router-link>
             <router-link exact :to="{path:'',query:{info:'share', b:1}}">她的分享</router-link>
             <div>
                  $route是路由信息对象
                {{ $route.query}}
             </div>
        </div>
    </div>
</template>
<script>
let data = [
  {
    id: 1,
    tip: "vip",
    username: "leo1",
    sex: "男",
    hobby: "写代码"
  },
  {
    id: 2,
    tip: "vip",
    username: "leo2",
    sex: "女",
    hobby: "唱歌"
  },
  {
    id: 3,
    tip: "common",
    username: "leo3",
    sex: "女",
    hobby: "跳舞"
  },
  {
    id: 4,
    tip: "common",
    username: "leo4",
    sex: "男",
    hobby: "画画"
  }
];
export default {
  data() {
    return {
      userList: data,
      userInfo: {} //空对象
    };
  },
  watch: {
    //   路径发生变化，$router 会重新赋值，监控了这个属性，会执行这个函数
    $route() {
      console.log("监控$route");
      console.log(this.$route.params.id);
      //   let id = this.$route.params.id;
      //   if (id) {
      //     this.userInfo = this.userList.filter(item => {
      //       return item.id == id;
      //     })[0];
      //   } else {
      //     this.userInfo = {};
      //   }
      this.getDate();
    }
  },
  created() {
    //编译之前
    //生命周期钩子函数
    console.log(this.$route);
    console.log(this.$route.params.id); // this.$route

    // let id = this.$route.params.id;
    // //console.log(id);
    // if (id) {
    //   this.userInfo = this.userList.filter(item => {
    //     return item.id == id;
    //   })[0];
    // } else {
    //   this.userInfo = {};
    // }

    // console.log(this.uesrInfo);
    //渲染这个组件会调用一次这个生命周期函数
    // 复用这个组件，这个函数不会再次被调用了
    // 地址一但发生变化 $route会重新生成一个路由信息对象
    this.getDate();
  },
  methods: {
    getDate() {
      let id = this.$route.params.id;
      //console.log(id);
      if (id) {
        this.userInfo = this.userList.filter(item => {
          return item.id == id;
        })[0];
      } else {
        this.userInfo = {};
      }
    }
  }
};
</script>
<style>
</style>

