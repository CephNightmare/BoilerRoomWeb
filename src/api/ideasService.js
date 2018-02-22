import store from '../../src/store'

export default {
    insertIdea (formData, token) {
        return new Promise((resolve, reject) => {
            $.ajax({
                type: 'POST',
                url: 'http://boilerroomdata.gvandrunen.biz/ideas/insert-idea.php',
                data: {"formData": formData, "jwt": token},
                success: function (data) {

                    data = JSON.parse(data);

                    if (data["ok"] === 1) {
                        resolve(data["ideaID"]);
                    } else {
                        reject();
                    }
                }, error: function (error) {

                    reject(error);
                }
            });
        });
    },
    insertTodo (formData, token, ideaID) {
        return new Promise((resolve, reject) => {
            $.ajax({
                type: 'POST',
                url: 'http://boilerroomdata.gvandrunen.biz/ideas/todos/insert-todo.php',
                data: {"formData": formData, "jwt": token, "ideaID": ideaID},
                success: function (data) {

                    data = JSON.parse(data);

                    if (data["ok"] === 1) {
                        console.log("resolved");
                        resolve();
                    } else {
                        console.log("rejected");
                        reject();
                    }
                }, error: function (error) {
                    reject(error);
                }
            });
        });
    },
    getTodos (token, ideaID) {
        return new Promise((resolve, reject) => {
            $.ajax({
                type: 'POST',
                url: 'http://boilerroomdata.gvandrunen.biz/ideas/todos/get-todos.php',
                data: {"jwt": token, "ideaID": ideaID},
                success: function (data) {

                    data = JSON.parse(data);

                    if (data["ok"] === 1) {
                        resolve(data);
                    } else {
                        reject();
                    }
                }, error: function (error) {
                    reject(error);
                }
            });
        });
    },
    addTodoCategory (formData, token, ideaID) {
        return new Promise((resolve, reject) => {
            $.ajax({
                type: 'POST',
                url: 'http://boilerroomdata.gvandrunen.biz/ideas/todos/add-todo-category.php',
                data: {"formData": formData, "jwt": token, "ideaID": ideaID},
                success: function (data) {

                    data = JSON.parse(data);

                    if (data["ok"] === 1) {
                        resolve();
                    } else {
                        reject();
                    }
                }, error: function (error) {
                    reject(error);
                }
            });
        });
    },
    updateTodoCategories (token, ideaID) {
        return new Promise((resolve, reject) => {
            $.ajax({
                type: 'POST',
                url: 'http://boilerroomdata.gvandrunen.biz/ideas/todos/get-todo-categories.php',
                data: {"jwt": token, "ideaID": ideaID},
                success: function (data) {

                    data = JSON.parse(data);

                    if (data["ok"] === 1) {
                        resolve(data);
                    } else {
                        reject();
                    }
                }, error: function (error) {
                    reject(error);
                }
            });
        });
    },
    getPrivateIdeas (token) {
        return new Promise((resolve, reject) => {
            $.ajax({
                type: 'POST',
                url: 'http://boilerroomdata.gvandrunen.biz/ideas/get-private-ideas.php',
                data: {"jwt": token},
                success: function (data) {

                    data = JSON.parse(data);

                    if (data["ok"] === 1) {

                        resolve(data);
                    } else {
                        reject();
                    }
                }, error: function (error) {
                    reject(error);
                }
            });
        });
    },
    validateIdeaAccess (token, ideaID) {
        return new Promise((resolve, reject) => {
            $.ajax({
                type: 'POST',
                url: 'http://boilerroomdata.gvandrunen.biz/ideas/validateIdeaAccess.php',
                data: {"jwt": token, "ideaID": ideaID},
                success: function (data) {
                    data = JSON.parse(data);

                    if (data["ok"] === 1) {
                        resolve(data);
                    } else {
                        reject();
                    }
                }, error: function (error) {
                    reject(error);
                }
            });
        });
    }
}
