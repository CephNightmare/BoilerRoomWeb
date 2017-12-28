import authentication from '../../api/authenticationService'
import store from '../../store'

// initial state
// shape: [{ id, quantity }]
const state = {
    authToken: window.localStorage.getItem('authToken'),
    username: window.localStorage.getItem('username')
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

        window.localStorage.removeItem('authToken'),
            window.localStorage.removeItem('username');
    },

    UpdateAuthentication (state, userData) {
        state.username = userData["username"];
        state.authToken = userData["jwt"];

        window.localStorage.setItem('authToken', userData["jwt"]);
        window.localStorage.setItem('username', userData["username"]);
    },
    ResetAuthentication (state) {
        state.username = null;
        state.authToken = null;

        window.localStorage.removeItem('authToken');
        window.localStorage.removeItem('username');
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
            console.log(token);
            token = window.localStorage.getItem("authToken");
            console.log(token);
        }

        return new Promise((resolve, reject) => {
            if (token !== null && token !== undefined) {
                authentication.validateUser(token)
                    .then(function() {
                        store.commit('UpdateAuthentication');
                    })
                    .catch(function (err) {
                        store.commit('ResetAuthentication');
                        reject(err);
                    });
            } else {
                reject({"message": "NOTOKEN"});
            }
        });
    },
    logout({commit}){
        return new Promise((resolve, reject) => {
            store.commit('resetAuthentication');
            resolve(null);
        });
    }
};

export default {
    state,
    getters,
    actions,
    mutations
}
