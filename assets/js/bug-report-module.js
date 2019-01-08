const BugReportModule = {
    makeScreen: function () {
        this.showLoader();

        return new Promise((resolve, reject) => {
            html2canvas(document.querySelector("body"), {
                x: window.scrollX,
                y: window.scrollY,
                width: window.innerWidth,
                height: window.innerHeight
            }).then(canvas => {
                this.hideLoader();

                canvas.toBlob((blob) => {
                    var urlCreator = window.URL || window.webkitURL;
                    var imageUrl = urlCreator.createObjectURL(blob);

                    resolve(imageUrl);
                });
            });
        })
    },

    sendReport: function () {
        const reader = new FileReader();

        reader.addEventListener('loadend', (e) => {
            let ua = detect.parse(navigator.userAgent);

            let data = {
                message: document.getElementById('bug-description').value,
                image: e.srcElement.result,
                meta: {
                    href: window.location.href,
                    viewportHeight: window.innerHeight,
                    viewportWidth: window.innerWidth,
                    scrollX: window.scrollX,
                    scrollY: window.scrollY,
                    browser: ua.browser.family,
                    browserVersion: ua.browser.version,
                    device: ua.device.type,
                    os: ua.os.name,
                    source: ua.source
                }
            };

            BugReportAjaxModule.post('bugReport', data).then((data) => {
                this.hideWindow();

                console.log(`MEssage: ${data}`);
            }, (message) => {
                alert(`Error: ${data}`);
            })
        });

        canvas_simple.toBlob((blob) => {
            reader.readAsDataURL(blob);
        });

    },

    showLoader: function () {
        document.getElementsByClassName('bug-report-status-bar')[0].classList.add('show');
    },

    hideLoader: function () {
        document.getElementsByClassName('bug-report-status-bar')[0].classList.remove('show');
    },

    showWindow: function () {
        document.getElementsByClassName('bug-report-wrap')[0].classList.add('show');
        document.getElementsByClassName('bug-report-background')[0].addEventListener('click', this.hideWindow);
        window.addEventListener('keydown', this.keydownEvent.bind(this), true);
    },

    hideWindow: function () {
        document.getElementsByClassName('bug-report-wrap')[0].classList.remove('show');
        document.getElementsByClassName('bug-report-background')[0].removeEventListener('click', this.hideWindow);
        window.removeEventListener('keydown', this.keydownEvent.bind(this), true);
        document.getElementById('bug-description').value = '';
        clearCanvas_simple();
    },

    keydownEvent: function (e) {
        if ((e.key == 'Escape' || e.key == 'Esc' || e.keyCode == 27) && (e.target.nodeName == 'BODY')) {
            e.preventDefault();
            this.hideWindow();
            return false;
        }
    },
};