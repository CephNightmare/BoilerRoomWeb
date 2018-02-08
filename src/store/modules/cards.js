import cards from '../../api/cardsService'
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
    insertCardCollection({commit}, formData) {

        return new Promise((resolve, reject) => {
            cards.insertCardCollection(formData, authentication.getters.authToken()).then(function (data) {
                resolve(data);
            }).catch(e => {
                reject();
            });
        });
    },
    insertCard({commit}, formData) {

        return new Promise((resolve, reject) => {
            cards.insertCard(formData, authentication.getters.authToken()).then(function (data) {
                resolve(data);
            }).catch(e => {
                reject();
            });
        });
    },
    getIdeaCards({commit}, ideaID) {
        return new Promise((resolve, reject) => {
            cards.getIdeaCards(authentication.getters.authToken(), ideaID).then(function (data) {
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
