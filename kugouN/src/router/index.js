import Vue from "vue";
import Router from "vue-router";
import NavBar from "@/components/navBar";
import SearchBar from "@/components/searchBar";

import NewSong from "@/views/new-song/new-song";
import Rank from "@/views/rank/rank";
import Search from "@/views/search/search";
import Test from "@/views/test/test";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "NewSong",
      components: {
        nav: NavBar, // 这个对应的就是 App.vue 中  <router-view name = "nav"/>   渲染在这个里面<router-view name = "nav"/>
        default: NewSong // 默认对应的就是 App.vue 中  <router-view/>   渲染在这<router-view/>
      }
    },
    {
      path: "/rank",
      name: "Rank",
      components: {
        nav: NavBar, //
        default: Rank
      }
    },
    {
      path: "/test",
      name: "Test",
      component: Test
    },
    {
      path: "/search",
      name: "Search",
      components: {
        nav: SearchBar, //
        default: Search
      }
    }
  ]
});
