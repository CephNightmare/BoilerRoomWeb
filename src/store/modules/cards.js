import ideas from '../modules/ideas'
import cards from '../../api/cardsService'
import authentication from '../modules/authentication'

// initial state
// shape: [{ id, quantity }]
const state = {
    cards: null,
    cardCollectionList: null
};

// getters
const getters = {
    cards: function () {
        return state.cards
    },
    cardCollectionList: function () {
        return state.cardCollectionList
    }
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
    insertCard({commit}, data) {

        console.log(data);

        return new Promise((resolve, reject) => {

            cards.insertCard(data, authentication.getters.authToken()).then(function (data) {
                resolve(data);
            }).catch(e => {
                reject();
            });
        });
    },
    getIdeaCardCollections({commit}, ideaID) {
        return new Promise((resolve, reject) => {
            cards.getIdeaCardCollections(authentication.getters.authToken(), ideaID).then(function (data) {
                state.cardCollectionList = data;
                resolve();
            }).catch(e => {
                reject();
            });
        });
    },
    getIdeaCards({commit}, ideaID) {
        return new Promise((resolve, reject) => {
            cards.getIdeaCards(authentication.getters.authToken(), ideaID).then(function (data) {
                state.cards = data;
                resolve();
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
