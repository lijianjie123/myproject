<template>
    <li class="nav-cart" >
			<a href="javascript:;" class = "ball-rect" 
			@mouseenter = "showCarHandle" @mouseleave = "hideCarHandle">购物车</a>
			<!--根据class改变颜色-->
			<span class="cart-empty-num " :class = "{'cart-num':count>0}">
				<i>{{count}}</i>
			</span>
			<div class="nav-cart-wrapper" v-if = "carShow">
				<div class="nav-cart-list">
					<div class="empty" v-if = "carPanelData.length > 0 ? false:true">
						<h3>购物车为空</h3>
						<p>您还没有选购任何商品，现在前往商城选购吧!</p>
					</div>
					<div class="full" v-else>
						<div class="nav-cart-items" >
							<ul>
								<li class="clear" v-for = "(item,index) in carPanelData" :key="index">
									<div class="cart-item js-cart-item cart-item-sell">
										<div class="cart-item-inner">
											<div class="item-thumb">
												<img :src="item.ali_image">
											</div>
											<div class="item-desc">
												<div class="cart-cell">
													<h4> 
														<a href="#/item/100027401">{{item.title}}</a>
													</h4>
													<p class="attrs">
														<span>{{item.spec_json.show_name}}</span>
													</p>
													<h6>
														<span class="price-icon">¥</span>
                            <span class="price-num">{{item.price}}</span>
                            <span class="item-num">x{{item.count}}</span>
													</h6>
												</div>
											</div>
											<div class="del-btn" @click="delGoods(item.sku_id)">删除</div>
										</div>
									</div>
								</li>
							</ul>
						</div>
						<div class="nav-cart-total">
							<!-- {{carPanelData.length }}-->
							<p>共 <strong class="ng-binding">{{ count}}</strong> 件商品</p>
							<!-- {{totalPrice}} -->
							<h5>合计：<span class="price-icon">¥{{ price}}</span><span class="price-num ng-binding" ng-bind="cartMenu.totalPrice"></span></h5>
							<h6>
								 <router-link class="nav-cart-btn" :to = "{name:'Cart'}">去购物车</router-link> 
								<!--<a ng-href="http://www.smartisan.com/shop/#/cart" class="nav-cart-btn" href="http://www.smartisan.com/shop/#/cart">去购物车</a>-->
							</h6>
						</div>
					</div>
				</div>
			</div>
			
				
				<transition name="ball" 
				v-on:before-enter = "beforeEnter"
				v-on:enter = "enter"
				v-on:after-enter = "afterEnter"
				v-bind:css = "true"
				>
					<div class = "addcart-mask" v-show = "ball.show">
						<img class="mask-item" style="background:red; width:20px; height:20px"/>
					</div>
				</transition>
	
		</li>
</template>
<script>
export default {
  // 购物车组件如何拿取vueX中的carpanelData数据呢 只需要在computed 中return 出去就可以使用了
  // 在组件中的computed 中 定义一个方法   方法中return出去  然后在页面中  循环computed 的方法的名称
  computed: {
    carPanelData() {
      return this.$store.state.carPanelData;
    },
    count() {
      return this.$store.getters.totleCount;
    },
    price() {
      return this.$store.getters.totlePrice;
    },
    carShow() {
      return this.$store.state.carShow;
    },
    // 这里如何拿取vuex中小球数据状态
    ball() {
      return this.$store.state.ball;
    }
  },
  methods: {
    delGoods(id) {
      this.$store.commit("delCarPanelData", id);
    },
    showCarHandle() {
      this.$store.commit("showCar");
    },
    hideCarHandle() {
      this.$store.commit("hideCar");
    },
    beforeEnter(el) {
      //先初始化  小球的位置
      // Element.getBoundingClientRect()方法返回元素的大小及其相对于视口的位置。
      let rect = this.ball.el.getBoundingClientRect();
      // 购物车位置
      let rectEl = document
        .getElementsByClassName("ball-rect")[0]
        .getBoundingClientRect();
      let ball = document.getElementsByClassName("mask-item")[0];
      // 差值   购物车元素中心点 到左边距离     小球中心点到左边距离
      let x = rectEl.left + 16 - (rect.left + rect.width / 2);
      let y = rect.top + rect.height / 2 - rectEl.top + 5 - 16;
      el.style.transform = "translate3d(0, " + y + "px,0)";
      ball.style.transform = "translate3d(-" + x + "px,0,0)";
      ball.src = this.ball.img;
    },

    enter(el) {
      let a = el.offsetHeight;
      el.a = a;
      el.style.transform = "translate3d(0,0,0)";
      document.getElementsByClassName("mask-item")[0].style.transform =
        "translate3d(0,0,0)";
    },
    afterEnter() {
      this.ball.show = false;
    }
  }
};
</script>
<style>
.ball-enter-active {
  transition: 0.5s cubic-bezier(0.32, 0.8, 0.7, 1.32);
}
.ball-enter-active .mask-item {
  transition: 0.5s cubic-bezier(0, 0, 1, 1);
}
</style>


