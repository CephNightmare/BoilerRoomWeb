export default {
    insertUser (formData) {
        return new Promise((resolve, reject) => {
            $.ajax({
                type: 'POST',
                url: 'http://boilerroomdata.gvandrunen.biz/insert-user.php',
                data: formData.serialize(),
                success: function (data) {

                    let msg = JSON.parse(data);

                    if (msg.hasOwnProperty("inserted")) {
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
    activateUser (data) {
        return new Promise((resolve, reject) => {
            $.ajax({
                type: 'POST',
                url: 'http://boilerroomdata.gvandrunen.biz/activate-user.php',
                data: data,
                success: function (data) {
                    var parsedData = JSON.parse(data);

                    if (parsedData.hasOwnProperty("activated")) {
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
    authenticateUser (formData) {
        return new Promise((resolve, reject) => {

            $.ajax({
                type: 'POST',
                url: 'http://boilerroomdata.gvandrunen.biz/authenticate-user.php',
                data: formData,
                success: function (data) {

                    let msg = JSON.parse(data);

                    if (msg.hasOwnProperty("jwt") && msg.hasOwnProperty("username")) {
                        resolve(msg);
                    } else {
                        reject(data);
                    }
                }, error: function (error) {
                    reject(error);
                }
            });
        });
    },
    validateUser (token) {
        return new Promise((resolve, reject) => {
            $.ajax({
                type: 'POST',
                url: 'http://boilerroomdata.gvandrunen.biz/validate-user.php',
                data: 'jwt=' + token,
                success: function (data) {
                    let msg = JSON.parse(data);

                    if (msg.hasOwnProperty("approved")) {
                        resolve();
                    } else {
                        reject(data)
                    }
                }, error: function (error) {
                    resolve(error);
                }
            });
        });
    },
}
