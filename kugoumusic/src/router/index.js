import Vue from "vue";
import Router from "vue-router";
import HelloWorld from "@/components/HelloWorld";

import navBar from "@/components/navBar";
import searchBar from "@/components/searchBar";

import NewSong from "@/views/new-song/new-song";
import Rank from "@/views/rank/rank";
import Search from "@/views/search/search";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "NewSong",
      components: {
        default: NewSong, // 默认组件
        nav: navBar // 多视图<router-view name="nav"/>
      }
    },
    {
      path: "/Rank",
      name: "Rank",
      components: {
        default: Rank, // 默认组件
        nav: navBar
      }
    },
    {
      path: "/Search",
      name: "Search",
      components: {
        default: Search, // 默认组件
        nav: searchBar
      }
    }
  ]
});
