export default {
    verifyUser (value) {
        return new Promise((resolve, reject) => {
            $.ajax({
                type: 'POST',
                url: 'http://boilerroomdata.gvandrunen.biz:8080/validation/validate-username.php',
                data: 'username=' + value,
                success: function (data) {
                    let msg = JSON.parse(data);

                    console.log(msg);

                    if (msg["message"] == 1) {
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
    verifyEmail (value) {
        return new Promise((resolve, reject) => {
            $.ajax({
                type: 'POST',
                url: 'http://boilerroomdata.gvandrunen.biz:8080/validation/validate-email.php',
                data: 'email=' + value,
                success: function (data) {
                    let msg = JSON.parse(data);

                    if (msg["message"] == 1) {
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
}
