import Vue from "vue";
import Router from "vue-router";
import HelloWorld from "@/components/HelloWorld";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "HelloWorld",
      component: HelloWorld
    }
  ]
});

// import Vue from "vue";
// import Router from "vue-router";
// import hello from "@/components/HelloWorld";
// import NewSong from "@/views/new-song/new-song";
// // import Rank from "@/views/rank/rank";
// import Search from "@/views/search/search";

// import NavBar from "@/components/navBar";
// import SearchBar from "@/components/searchBar";

// Vue.use(Router);

// export default new Router({
//   mode: "history",
//   routes: [
//     {
//       path: "/hello",
//       // name: "NewSong",
//       component: hello
//       // components: {
//       //   nav: NavBar, // 这个对应的就是 App.vue 中  <router-view name = "nav"/>   渲染在这个里面<router-view name = "nav"/>
//       //   default: NewSong // 默认对应的就是 App.vue 中  <router-view/>   渲染在这<router-view/>
//       // }
//     }
// {
//   path: "/rank",
//   name: "Rank",
//   components: {
//     nav: NavBar, // 这个对应的就是 App.vue 中  <router-view name = "nav"/>   渲染在这个里面<router-view name = "nav"/>
//     default: Rank // 默认对应的就是 App.vue 中  <router-view/>   渲染在这<router-view/>
//   }
// },
// {
//   path: "/search",
//   name: "Search",
//   components: {
//     nav: SearchBar,
//     default: Search
//   }
// }
//   ]
// });
