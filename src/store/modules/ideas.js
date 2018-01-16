import ideas from '../../api/ideasService'
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
    insertIdea({commit}, formData) {

        return new Promise((resolve, reject) => {
            ideas.insertIdea(formData, authentication.getters.authToken()).then(function () {
                resolve();
            }).catch(e => {
                reject();
            });
        });
    },

    getAllIdeas({commit}) {
        return new Promise((resolve, reject) => {
            ideas.getAllIdeas(authentication.getters.authToken()).then(function (data) {
                resolve(data);
            }).catch(e => {
                reject();
            });
        });
    },
};

export default {
    state,
    getters,
    actions,
    mutations
}
