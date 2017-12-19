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
    isAuthenticated: function () {
        return state => state.authToken != null
    },
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

        userData = userData.serializeArray();
        let dataObj = {};

        $(userData).each(function(i, field){
            dataObj[field.name] = field.value;
        });

        console.log(dataObj["username"])
        // window.sessionStorage.setItem('authToken', userData.authToken),

        state.username = dataObj["username"];

        window.sessionStorage.setItem('username', dataObj["username"])

        // commit(types.INSERTUSER_SUCCESS);
    }
}

// actions
const actions = {
    insertUser({commit}, formData) {
        // commit(types.INSERTUSER_ATTEMPT); // show spinner

        return new Promise(resolve => {
            authentication.insertUser(formData).then(function(value) {
                store.commit('UpdateAuthentication', formData);
                return value
            }), function(error) {
                return reject(error);
            }
        });
    },
}

export default {
    state,
    getters,
    actions,
    mutations
}
