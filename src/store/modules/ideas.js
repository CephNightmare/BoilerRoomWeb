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
            ideas.insertIdea(formData, authentication.getters.authToken()).then(function (data) {
                resolve(data);
            }).catch(e => {
                reject();
            });
        });
    },
    getPrivateIdeas({commit}) {
        return new Promise((resolve, reject) => {
            ideas.getPrivateIdeas(authentication.getters.authToken()).then(function (data) {
                resolve(data);
            }).catch(e => {
                reject();
            });
        });
    },
    validateIdeaAccess ({commit}, ideaID) {
        return new Promise((resolve, reject) => {
            ideas.validateIdeaAccess(authentication.getters.authToken(), ideaID).then(function (data) {
                resolve(data);
            }).catch(e => {
                reject();
            });
        });
    },
    getIdeaCards({commit}) {
        return new Promise((resolve, reject) => {
            ideas.getIdeaCards(authentication.getters.authToken()).then(function (data) {
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
