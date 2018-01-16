import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as getters from './getters'
import authentication from './modules/authentication'
import validation from './modules/validation'
import ideas from './modules/ideas'

Vue.use(Vuex)

export default new Vuex.Store({
    actions,
    getters,
    modules: {
        authentication,
        validation,
        ideas
    },
    authentication: {
        authToken: null,
        username: null
    }
})
