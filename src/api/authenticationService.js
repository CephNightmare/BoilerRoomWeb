export default {
    insertUser (formData) {
        return new Promise((resolve, reject) => {
            $.ajax({
                type: 'POST',
                url: 'http://boilerroomdata.gvandrunen.biz:8080/insert-user.php',
                data: formData.serialize(),
                success: function (data) {

                    let msg = JSON.parse(data);

                    if (msg["message"] == 1) {
                        resolve();
                    } else {
                        reject(data);
                    }
                }, error: function (error) {
                    reject(error);
                }
            });
        });
    },
}
