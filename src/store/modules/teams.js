import teams from '../../api/teamsService'
import authentication from '../modules/authentication'

// initial state
// shape: [{ id, quantity }]
const state = {
};

// getters
const getters = {
};

// mutations
const mutations = {
};

// actions
const actions = {
    insertTeam({commit}, formData) {
        return new Promise((resolve, reject) => {
            teams.insertTeam(formData, authentication.getters.authToken()).then(function () {
                resolve();
            }).catch(e => {
                reject();
            });
        });
    },
    getAllTeams({commit}) {
        return new Promise((resolve, reject) => {
            teams.getAllTeams(authentication.getters.authToken()).then(function (data) {
                resolve(data);
            }).catch(e => {
                reject();
            });
        });
    }
};

export default {
    state,
    getters,
    actions,
    mutations
}
