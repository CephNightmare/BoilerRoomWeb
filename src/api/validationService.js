export default {
    verifyUserNonExisting (value) {
        return new Promise((resolve, reject) => {
            $.ajax({
                type: 'POST',
                url: 'http://boilerroomdata.gvandrunen.biz/validation/validate-username-nonexisting.php',
                data: 'username=' + value,
                success: function (data) {
                    data = JSON.parse(data);

                    if(data["ok"] === 1) {
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
    verifyUserExisting (value) {
        return new Promise((resolve, reject) => {
            $.ajax({
                type: 'POST',
                url: 'http://boilerroomdata.gvandrunen.biz/validation/validate-username-existing.php',
                data: 'username=' + value,
                success: function (data) {
                    data = JSON.parse(data);

                    if(data["ok"] === 1) {
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
    verifyEmail (value) {
        return new Promise((resolve, reject) => {
            $.ajax({
                type: 'POST',
                url: 'http://boilerroomdata.gvandrunen.biz/validation/validate-email.php',
                data: 'email=' + value,
                success: function (data) {
                    data = JSON.parse(data);

                    if(data["ok"] === 1) {
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
