import Vue from 'vue'
import Vuex from 'vuex'

import mutations from './mutations'
import actions from './action'
import getters from './getters'

Vue.use(Vuex)

const state = {
	nav:'nav1',// 默认底部导航显示第一个选项
	//userInfo: null, //用户信息
	
}

export default new Vuex.Store({
	state,
	getters,
	actions,
	mutations,
})