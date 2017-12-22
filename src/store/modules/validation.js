import validation from '../../api/validationService'
import store from '../../store'

// initial state
// shape: [{ id, quantity }]
const state = {
}

// getters
const getters = {
    // isAuthenticated: function () {
    //     return state => state.authToken != null
    // },
    // authToken: function () {
    //     return state.authToken
    // },
    // username: function () {
    //     return state.username
    // }
}

// mutations
const mutations = {
    // resetAuthentication (state) {
    //     state.authToken = null;
    //     state.tokenExpires = null;
    //     state.companyName = null;
    //     state.fullName = null;
    //     state.givenName = null;
    //     state.mainContractorId = null;
    //
    //     window.sessionStorage.removeItem('authToken'),
    //         window.sessionStorage.removeItem('username');
    // }
}

// actions
const actions = {
    verifyUserNonExisting({commit}, value) {

        return new Promise((resolve, reject) => {
            validation.verifyUserNonExisting(value).then(function() {
                resolve();
            }).catch(e => {
                reject(e);
            });
        });
    },
    verifyUserExisting({commit}, value) {

        return new Promise((resolve, reject) => {
            validation.verifyUserExisting(value).then(function() {
                resolve();
            }).catch(e => {
                reject(e);
            });
        });
    },
    verifyEmail({commit}, value) {

        return new Promise((resolve, reject) => {
            validation.verifyEmail(value).then(function() {
                resolve();
            }).catch(e => {
                reject(e);
            });
        });
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}
