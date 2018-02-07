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
    getIdeaCards (token, ideaID) {
        return new Promise((resolve, reject) => {
            $.ajax({
                type: 'POST',
                url: 'http://boilerroomdata.gvandrunen.biz/cards/get-idea-cards.php',
                data: {"jwt": token, "IdeaID": ideaID},
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
