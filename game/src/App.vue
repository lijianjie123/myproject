<template>
  <div id="app" class="test-class" data-test = "test" >
   <header-nav></header-nav>
    <div id="wrapBox">
      <nav-wrap></nav-wrap>
      <div class="centerBox">
        <div class="contentCenterBox">
          <div class="centerTopN clearfix">
            <router-view name = "logbox"></router-view>
            <router-view :data = "data"></router-view>
            <router-view name = "peopleshow"></router-view>
            
          </div>
          
          <router-view name = "rightbar"></router-view>
          <router-view name = "bottom"></router-view>
         </div>
      </div>

      <signup v-show="show" @change = "changeval"></signup>

    </div>


  </div>
</template>

<script>
import headerNav from "@/components/header-nav"; //引入组件
//import centerRightBox from "@/components/center-right-box";
import navWrap from "@/components/nav-wrap";
import signup from "@/components/signup";

let data = [
  {
    title: 'Gameplay1',
    guideType:[
      'Novice Guide(Hot)','Novice Guide(Hot)','Novice Guide(Hot)','Novice Guide(Hot)','Novice Guide(Hot)','Novice Guide(Hot)','Novice Guide(Hot)','Novice Guide(Hot)',
    ]
  },
  {
    title: 'Gameplay2',
    guideType:[
      'Novice Guide(Hot)','Novice Guide(Hot)','Novice Guide(Hot)','Novice Guide(Hot)','Novice Guide(Hot)','Novice Guide(Hot)','Novice Guide(Hot)','Novice Guide(Hot)',
    ]
  },
  {
    title: 'Gameplay3',
    guideType:[
      'Novice Guide(Hot)','Novice Guide(Hot)','Novice Guide(Hot)','Novice Guide(Hot)','Novice Guide(Hot)','Novice Guide(Hot)','Novice Guide(Hot)','Novice Guide(Hot)',
    ]
  },
  {
    title: 'Gameplay4',
    guideType:[
      'Novice Guide(Hot)','Novice Guide(Hot)','Novice Guide(Hot)','Novice Guide(Hot)','Novice Guide(Hot)','Novice Guide(Hot)','Novice Guide(Hot)','Novice Guide(Hot)',
    ]
  },

];
export default {
  name: 'App',
  data(){
    return {
      data:data,
      userInfo:[],
      show:true
    }
  },
  components:{
    navWrap,
    // centerRightBox,
    headerNav, //注册组件
    signup
  },
  methods: {
    changeval(val){ 
      console.log(val)
      this.show = val
    }
  },

}

</script>

<style>

</style>
