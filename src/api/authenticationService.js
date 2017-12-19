export default {
    insertUser (formData) {
        var promise = $.ajax({
            type: 'POST',
            url: 'http://boilerroomdata.gvandrunen.biz:8080/insert-user.php',
            data: formData.serialize()
        });

        return promise
    },
}
