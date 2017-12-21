import authentication from '../../api/authenticationService'
import store from '../../store'

// initial state
// shape: [{ id, quantity }]
const state = {
    authToken: window.sessionStorage.getItem('authToken'),
    username: window.sessionStorage.getItem('username')
}

// getters
const getters = {
    authToken: function () {
        return state.authToken
    },
    username: function () {
        return state.username
    }
}

// mutations
const mutations = {
    resetAuthentication (state) {
        state.authToken = null;
        state.tokenExpires = null;
        state.companyName = null;
        state.fullName = null;
        state.givenName = null;
        state.mainContractorId = null;

        window.sessionStorage.removeItem('authToken'),
            window.sessionStorage.removeItem('username');
    },

    UpdateAuthentication (state, userData) {
        state.username = userData["username"];
        state.authToken = userData["jwt"];

        window.sessionStorage.setItem('authToken', userData["jwt"]);
        window.sessionStorage.setItem('username', userData["username"]);
    },
    ResetAuthentication (state) {
        state.username = null;
        state.authToken = null;

        window.sessionStorage.removeItem('authToken');
        window.sessionStorage.removeItem('username');
    }
}

// actions
const actions = {
    insertUser({commit}, formData) {

        return new Promise((resolve, reject) => {
            authentication.insertUser(formData).then(function () {
                resolve();
            }).catch(e => {
                reject(e);
            });
        });
    },
    activateUser({commit}, data) {
        return new Promise((resolve, reject) => {
            authentication.activateUser(data).then(function (value) {
                resolve();
            }).catch(e => {
                reject(e);
            });
        });
    },
    authenticateUser({commit}, formData) {
        console.log(formData);
        return new Promise((resolve, reject) => {
            authentication.authenticateUser(formData).then(function (value) {
                store.commit('UpdateAuthentication', value);
                resolve();
            }).catch(e => {
                reject(e);
            });
        });
    },
    validateUser({commit}) {

        let token = this.getters.authToken;

        if (token === null) {
            token = window.sessionStorage.getItem("authToken");
        }

        return new Promise((resolve, reject) => {
            if (token !== null || token !== undefined) {
                console.log("test");
                authentication.validateUser(token).catch(function (err) {
                    store.commit('ResetAuthentication');
                    reject(err);
                });
            } else {
                reject({"message": "NOTOKEN"});
            }
        });
    },
};

export default {
    state,
    getters,
    actions,
    mutations
}
