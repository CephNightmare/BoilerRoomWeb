export default {
    insertCardCollection (formData, token) {
        return new Promise((resolve, reject) => {
            $.ajax({
                type: 'POST',
                url: 'http://boilerroomdata.gvandrunen.biz/ideas/cards/insert-card-collection.php',
                data: {"formData": formData, "jwt": token},
                success: function (data) {

                    console.log(data);

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
    insertCard (formData, token) {
        return new Promise((resolve, reject) => {
            $.ajax({
                type: 'POST',
                url: 'http://boilerroomdata.gvandrunen.biz/ideas/cards/insert-card.php',
                data: {"formData": formData, "jwt": token},
                success: function (data) {

                    console.log(data);

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
    getIdeaCards (token, ideaID) {
        return new Promise((resolve, reject) => {
            $.ajax({
                type: 'POST',
                url: 'http://boilerroomdata.gvandrunen.biz/ideas/cards/get-idea-cards.php',
                data: {"jwt": token, "ideaID": ideaID},
                success: function (data) {

                    data = JSON.parse(data);

                    console.log(data);

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
}
