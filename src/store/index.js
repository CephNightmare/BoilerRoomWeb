import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as getters from './getters'
import authentication from './modules/authentication'
import validation from './modules/validation'
import ideas from './modules/ideas'
import cards from './modules/cards'
import teams from './modules/teams'

Vue.use(Vuex)

export default new Vuex.Store({
    actions,
    getters,
    modules: {
        authentication,
        validation,
        ideas,
        teams,
        cards
    },
    authentication: {
        authToken: null,
        username: null
    }
})
