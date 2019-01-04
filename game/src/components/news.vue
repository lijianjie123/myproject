<template>
    <div class="centerTopC clearfix" >
        <div>
            <h2 class="newsTitle" v-if = "showTab">NEWS</h2>
            <div class="navx" v-if = "showTab">
                <a class="more" ></a>
                <ul>
                    <router-link  tag="li" :to = "{name:'news'}" exact><a>ALL</a></router-link>
                    <router-link  tag="li" :to = "{name:'hot'}"><a>NEWS</a></router-link> 
                    <router-link  tag="li" :to = "{name:'events'}"><a>EVENTS</a></router-link>
                </ul>
            </div>
        </div>
        <div class="contentCenter">
            <transition mode="out-in" name = "move">
               <router-view @showtab = "hidetab" ></router-view> 
            </transition>
        </div>
        
        

    </div>
    
</template>

<script>
export default {
    data() {
        return {
            showTab:true,
        }
    },
    methods: {
        hidetab(val){
            console.log('我被触发了, 值为:' + val)
            this.showTab = val

        }
    },
   


}
</script>

<style scoped>
.active {
  background: #ccc;
}

/* 一下样式需要配合transition 的name 属性 达到css过渡 */
.move-enter {
  opacity: 0;
}
.move-enter-to {
  opacity: 1;
}
.move-enter-active {
  transition: 1s;
}
.move-leave {
  opacity: 1;
}
.move-leave-to {
  opacity: 0;
}
.move-leave-active {
  transition: 1s;
}


</style>

