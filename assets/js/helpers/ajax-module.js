const BugReportAjaxModule = {
    get: function (url, data) {
        return new Promise((resolve, reject) => {
            $.get(url, data).done(resolve).error(reject);
        });
    },

    post: function (url, data) {
        return new Promise((resolve, reject) => {
            $.post(url, data, resolve);
        });
    },
}