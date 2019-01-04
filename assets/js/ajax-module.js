const ajaxMethodType = {
    post: 'POST',
    get: 'GET'
}

const ajaxResponseStatus = {
    success: 200
}

const ajax = {

    get: function (url, data) {
        this.send(url, ajaxMethodType.get, data);
    },

    post: function (url, data) {
        this.send(url, ajaxMethodType.post, data);
    },


    send: function (url = '/', method = ajaxMethodType.get, data = {}) {
        return new Promise((resolve, reject) => {
            let xhr = new XMLHttpRequest();
            xhr.open(method, url);

            xhr.onload = function () {
                if (xhr.status === ajaxResponseStatus.success) {
                    resolve(xhr.responseText);
                    return;
                }

                reject(xhr.status);
            };

            xhr.send(data);
        })
    }
}


/*

 var xhr = new XMLHttpRequest();
    xhr.open('GET', "bugReport");

    xhr.onload = function () {
        if (xhr.status === 200) {
            alert('User\'s name is ' + xhr.responseText);
        } else {
            alert('Request failed.  Returned status of ' + xhr.status);
        }
    };
    xhr.send();


 */