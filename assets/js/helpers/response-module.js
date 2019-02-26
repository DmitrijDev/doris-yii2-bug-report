function BugReportResponseModule() {
    this.get = (url, data) => {
        return new Promise((resolve, reject) => {
            $.get(url, data).done(resolve).error(reject);
        });
    }

    this.post = (url, data) => {
        return new Promise((resolve, reject) => {
            $.post(url, data, resolve);
        });
    }
}