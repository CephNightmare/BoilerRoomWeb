export default {
    insertTeam (formData, token) {
        return new Promise((resolve, reject) => {

            $.ajax({
                type: 'POST',
                url: 'http://boilerroomdata.gvandrunen.biz/teams/insert-team.php',
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
    getAllTeams (token) {
        return new Promise((resolve, reject) => {
            $.ajax({
                type: 'POST',
                url: 'http://boilerroomdata.gvandrunen.biz/teams/get-all-teams.php',
                data: {"jwt": token},
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
    getTeamIdeas (token) {
        return new Promise((resolve, reject) => {
            $.ajax({
                type: 'POST',
                url: 'http://boilerroomdata.gvandrunen.biz/teams/get-team-ideas.php',
                data: {"jwt": token},
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
    validateTeamAccess (token, ideaID) {
        return new Promise((resolve, reject) => {
            $.ajax({
                type: 'POST',
                url: 'http://boilerroomdata.gvandrunen.biz/ideas/validateIdeaAccess.php',
                data: {"jwt": token, "ideaID": ideaID},
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
    }
}
