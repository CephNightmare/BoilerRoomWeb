export default {
    insertUser (formData) {
        return new Promise((resolve, reject) => {
            $.ajax({
                type: 'POST',
                url: 'http://boilerroomdata.gvandrunen.biz/insert-user.php',
                data: formData.serialize(),
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
    activateUser (data) {
        return new Promise((resolve, reject) => {
            $.ajax({
                type: 'POST',
                url: 'http://boilerroomdata.gvandrunen.biz/activate-user.php',
                data: data,
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
    authenticateUser (formData) {
        return new Promise((resolve, reject) => {

            $.ajax({
                type: 'POST',
                url: 'http://boilerroomdata.gvandrunen.biz/authenticate-user.php',
                data: formData,
                success: function (data) {
                    console.log(data);

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
    validateUser (token) {
        return new Promise((resolve, reject) => {

            $.ajax({
                type: 'POST',
                url: 'http://boilerroomdata.gvandrunen.biz/validate-user.php',
                data: 'jwt=' + token,
                success: function (data) {
                    data = JSON.parse(data);

                    if (data["ok"] === 1) {
                        resolve(data);
                    } else {
                        reject();
                    }
                }, error: function (error) {
                    console.log(error);
                    reject(error);
                }
            });
        });
    },
}
