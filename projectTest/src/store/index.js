import Vue from 'vue'
import Vuex from 'vuex'

import mutations from './mutations'
import actions from './actions'
import getters from './getters'

const state = {
    user: window.localStorage.getItem("user"),
    token: window.localStorage.getItem("token"),

    cartlist: [],
    selectPrice: 0
}

Vue.use(Vuex)
const store = new Vuex.Store({
    state,
    mutations,
    actions,
    getters
})

export default store;