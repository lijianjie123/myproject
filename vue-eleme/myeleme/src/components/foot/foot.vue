<template>
    <div>
        <mt-tabbar fixed  v-model="nav">
            <mt-tab-item id="nav1">
                <icon  name="wx" scale="2" class= "middle"></icon>
                外卖
            </mt-tab-item>
            <mt-tab-item id="nav2">
                <icon name="baidu" scale="2" class= "middle"></icon>
                搜索
            </mt-tab-item>
            <mt-tab-item id="nav3">
                <icon name="qq2" scale="2" class= "middle"></icon>
                订单
            </mt-tab-item>
            <mt-tab-item id="nav4">
                <icon name="QQ1" scale="2" class= "middle"></icon>
                我的
            </mt-tab-item>
        </mt-tabbar>
    </div>
</template>

<script>
export default {
    data(){
        return{
            id: this.$route.params.id,
        }
    },
    computed:{
        nav:{
            get(){
                return this.$store.state.nav
            },
            set(newnav){
                console.log(newnav);
                this.$store.commit('changenav', newnav)
                this.goRouter(newnav)
            }
        }
    },
    methods:{
        goRouter(newnav){
            switch(newnav){
                case 'nav1':
                    this.$router.push({path:'/msite'});
                    break;
                case 'nav2':
                    this.$router.push({path:'/search'});
                    break;
                case 'nav3':
                    this.$router.push({path:'/order'});
                    break;
                case 'nav4':
                    this.$router.push({path:'/my'});
                    break;

            }

        }

    }

}
</script>

<style>
.middle{ vertical-align: middle}

</style>
