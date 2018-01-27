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
    getAllIdeas (token) {
        return new Promise((resolve, reject) => {
            $.ajax({
                type: 'POST',
                url: 'http://boilerroomdata.gvandrunen.biz/ideas/get-all-ideas.php',
                data: {"jwt": token},
                success: function (data) {

                    data = JSON.parse(data);

                    if (data["ok"] === 1) {

                        console.log(data);

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
        console.log("ideaID = " + ideaID);
        return new Promise((resolve, reject) => {
            $.ajax({
                type: 'POST',
                url: 'http://boilerroomdata.gvandrunen.biz/ideas/validateIdeaAccess.php',
                data: {"jwt": token, "ideaID": ideaID},
                success: function (data) {
                    console.log("allowed service");
                    console.log(data);
                    data = JSON.parse(data);

                    if (data["ok"] === 1) {
                        resolve(data);
                    } else {
                        reject();
                    }
                }, error: function (error) {
                    console.log("not allowed service");
                    console.log(error);
                    reject(error);
                }
            });
        });
    }
}
