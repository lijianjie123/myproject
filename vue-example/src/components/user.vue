<template>
    <div style="height:2000px">我是user

        <div class ="user-list">
            <!-- <router-link style=" padding:30px" :to= "'/user/'+item.tip + '/'+ item.id" :key = "index" v-for="(item,index) in userList" >
            {{item.username}}
            </router-link> -->


            <router-link style=" padding:30px" :to= "{path:'/user/'+item.tip + '/'+ item.id,query:{info:'follow'}}" :key = "index" v-for="(item,index) in userList" >
            {{item.username}}
            </router-link>

        <!-- <router-link style=" padding:30px" :to= "{path:'/user/'+item.tip + '/'+ item.id, query:{info:'follow'}}" :key = "index" v-for="(item,index) in userList" >
            {{item.username}}
        </router-link> -->

        </div>
        <div class = "user-info" v-if = "userInfo.username">
          <p>姓名：{{userInfo.username}}</p>
          <p>性别：{{userInfo.sex}}</p>
          <p>爱好：{{userInfo.hobby}}</p>
        </div>
        <hr>
        <div v-if = "userInfo.username">
          
          <!-- <router-link exact to="?info=follow">他的关注</router-link>
          <router-link exact to="?info=share">他的分享</router-link> -->

          <router-link exact :to="{path:'',query:{info:'follow'}}">他的关注</router-link>
          <router-link exact :to="{path:'',query:{info:'share'}}">他的分享</router-link>
          <div>
            {{$route.query}}
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
    tip: "com",
    username: "leo3",
    sex: "女",
    hobby: "跳舞"
  },
  {
    id: 4,
    tip: "com",
    username: "leo4",
    sex: "男",
    hobby: "画画"
  }
];
export default {
  // beforeRouterEnter(to, from, next) {
  //   console.log(" beforeRouterEnter");
  //   next();
  // },

  data() {
    return {
      userList: data,
      userInfo: {}
    };
  },
  watch: {
    $route() {
      console.log("监控$route");
      console.log(this.$route.params.userId);
      // let id = this.$route.params.userId;
      //     if(id ){
      //       this.userInfo = this.userList.filter((item)=>{
      //         return item.id == id;
      //       })[0];
      //     }else{
      //       userInfo = {}
      //     }
      // 路径发生了变化 $route 会重新赋值， 监控了这个属性，会执行这个函数
      this.getData();
    }
  },
  //    生命周期
  created() {
    //组件刚一生成一次的时候，他会去执行以下这个生命周期钩子函数 这里是created() ，那么下一次没有重新生成 就不会执行这个生命周期钩子函数了

    console.log(this.$route.params.userId);
    //let id = this.$route.params.userId;
    // if(id ){
    //   this.userInfo = this.userList.filter((item)=>{
    //     return item.id == id;
    //   })[0];
    // }else{
    //   userInfo = {}
    // }

    //渲染这个组件会调用一次这个生命周期函数
    //服用这个组件，这个函数不会再次被调用了
    // 地址一但发生变化 $route会重新生成一个路由信息对象
    this.getData();
    console.log(this.userInfo);
  },
  methods: {
    getData() {
      let id = this.$route.params.userId;
      if (id) {
        this.userInfo = this.userList.filter(item => {
          return item.id == id;
        })[0];
      } else {
        userInfo = {};
      }
    }
  }
};
</script>
<style>
</style>