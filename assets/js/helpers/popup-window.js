function BugReportPopupWindow() {
    this.body = document.getElementsByTagName('body')[0];
    this.wrap = document.getElementsByClassName('bug-report-wrap')[0];
    this.background = document.getElementsByClassName('bug-report-background')[0];
    this.textarea = document.getElementById('bug-description');

    this.showWindow = function () {
        return new Promise((resolve, reject) => {
            try {
                this.body.classList.add('brblured');
                this.wrap.classList.add('show');
                this.background.addEventListener('click', this.hideWindow);
                window.addEventListener('keydown', this.keydownEvent.bind(this), true);

                resolve();
            } catch (e) {
                reject(e);
            }
        });
    };

    this.hideWindow = function () {
        return new Promise((resolve, reject) => {
            try {
                this.body.classList.remove('brblured');
                this.wrap.classList.remove('show');
                this.background.removeEventListener('click', this.hideWindow);
                window.removeEventListener('keydown', this.keydownEvent.bind(this), true);
                this.textarea.value = '';

                resolve();
            } catch (e) {
                reject(e);
            }
        });
    };

    this.keydownEvent = function (e) {
        if ((e.key === 'Escape' || e.key === 'Esc' || e.keyCode === 27) && (e.target.nodeName === 'BODY')) {
            e.preventDefault();
            this.hideWindow();
            return false;
        }
    }
}