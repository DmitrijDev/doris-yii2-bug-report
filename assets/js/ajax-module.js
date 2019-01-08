const ajaxMethodType = {
    post: 'POST',
    get: 'GET'
}

const ajaxResponseStatus = {
    success: 200
}

const BugReportAjaxModule = {
    get: function (url, data) {
        return new Promise((resolve, reject) => {
            $.get(url, data).done(resolve).error(reject);
        });
    },

    post: function (url, data) {
        return new Promise((resolve, reject) => {
            $.post(url, data);
        });
    },
}

/*

return new Promise((resolve, reject) => {
			$.ajax({
				type: 'post',
				url: url,
				dataType: 'json',
				data: data,
				success: function (message) {
					resolve();
				}.bind(this),
				error: function () {
					reject();
				}.bind(this),
			});
		});

 */