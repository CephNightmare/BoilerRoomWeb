export default {
    insertIdea (formData, token) {
        return new Promise((resolve, reject) => {
            $.ajax({
                type: 'POST',
                url: 'http://boilerroomdata.gvandrunen.biz/ideas/insert-idea.php',
                data: {"formData": formData, "jwt": token},
                success: function (data) {

                    data = JSON.parse(data);

                    if(data["ok"] === 1) {
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

                    if(data["ok"] === 1) {

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
    }
}
