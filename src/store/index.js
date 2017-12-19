import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as getters from './getters'
import authentication from './modules/authentication'

Vue.use(Vuex)

export default new Vuex.Store({
    actions,
    getters,
    modules: {
        authentication
    },
    authentication: {
        authToken: null,
        username: null
    }
})
