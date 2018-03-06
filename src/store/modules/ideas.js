import ideas from '../../api/ideasService'
import authentication from '../modules/authentication'

// initial state
// shape: [{ id, quantity }]
const state = {
    integratedTodoCategories: null,
    todoCategories: null,
    todos: null,
};

// getters
const getters = {
    integratedTodoCategories: function () {
        return state.integratedTodoCategories
    },
    todoCategories: function () {
        return state.todoCategories
    },
    todos: function () {
        return state.todos
    }
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
    insertTodo({commit}, data) {
        return new Promise((resolve, reject) => {

            let formData = data[0];
            let ideaID = data[1];

            ideas.insertTodo(formData, authentication.getters.authToken(), ideaID).then(function (data) {
                resolve(data);
            }).catch(e => {
                reject();
            });
        });
    },
    getTodos({commit}, ideaID) {
        return new Promise((resolve, reject) => {

            ideas.getTodos(authentication.getters.authToken(), ideaID).then(function (data) {
                state.todos = data["data"];

                resolve(data);
            }).catch(e => {
                reject();
            });
        });
    },
    addTodoCategory({commit}, data) {
        return new Promise((resolve, reject) => {

            let formData = data[0];
            let ideaID = data[1];

            ideas.addTodoCategory(formData, authentication.getters.authToken(), ideaID).then(function (data) {
                resolve(data);
            }).catch(e => {
                reject();
            });
        });
    },
    updateTodoCategories({commit}, ideaID) {
        return new Promise((resolve, reject) => {

            ideas.updateTodoCategories(authentication.getters.authToken(), ideaID).then(function (data) {
                let integratedTodos = (data["data"] || []).filter(function (el) {
                    return (el.isIntegrated || '') === 1;
                });
                let todos = (data["data"] || []).filter(function (el) {
                    return (el.isIntegrated || '') !== 1;
                });

                state.integratedTodoCategories = integratedTodos;
                state.todoCategories = todos;

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
                console.log("resolved");
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
