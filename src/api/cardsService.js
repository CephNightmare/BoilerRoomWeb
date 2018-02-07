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
    }
}
