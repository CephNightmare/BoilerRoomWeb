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
    insertCard (data, token) {

        console.log(data[1]);

        return new Promise((resolve, reject) => {
            $.ajax({
                type: 'POST',
                url: 'http://boilerroomdata.gvandrunen.biz/ideas/cards/insert-card.php',
                data: {"formData": data[0], "jwt": token, "ideaID": data[1]},

                success: function (data) {

                    console.log(data);

                    data = JSON.parse(data);

                    if (data["ok"] === 1) {
                        console.log("insert success");
                        resolve();
                    } else {
                        reject();
                        console.log("insert failed");
                    }
                }, error: function (error) {
                    console.log("error");
                    console.log(error);
                    reject(error);
                }
            });
        });
    },
    getIdeaCardCollections (token, ideaID) {
        return new Promise((resolve, reject) => {
            $.ajax({
                type: 'POST',
                url: 'http://boilerroomdata.gvandrunen.biz/ideas/cards/get-idea-card-collections.php',
                data: {"jwt": token, "ideaID": ideaID},
                success: function (data) {

                    data = JSON.parse(data);

                    if (data["ok"] === 1) {
                        resolve(data["data"]);
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

                    if (data["ok"] === 1) {
                        resolve(data["data"]);
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
