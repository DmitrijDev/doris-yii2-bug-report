var BugReportModule = {
    image: new BugReportImageMaker(),
    popup: new BugReportPopupWindow(),
    canvas: new BugReportCanvasModule(),

    init: function () {
        window.addEventListener('load', function () {
            var codes = [
                "Q".charCodeAt(0),
                "W".charCodeAt(0),
                "E".charCodeAt(0)
            ];
            var pressed = {};

            document.onkeydown = function (e) {
                e = e || window.event;

                pressed[e.keyCode] = true;

                for (var i = 0; i < codes.length; i++) {
                    if (!pressed[codes[i]]) {
                        return;
                    }
                }

                pressed = {};

                makeScreen()
            };

            document.onkeyup = function (e) {
                e = e || window.event;

                delete pressed[e.keyCode];
            };
        });
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

            BugReportAjaxModule.post('/bugReport/', data).then((data) => {
                this.hideWindow();

                console.log(`Message: ${data}`);
            }, (message) => {
                alert(`Error: ${message}`);
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

    errorHandler: function (message) {
        this.hideLoader();
        console.log(message);
    },

    makeScreen: function () {
        this.popup.hideWindow().then(() => {
            this.showLoader();

            this.image.makeScreen().then((imageUrl) => {
                this.popup.showWindow().then(() => {
                    this.hideLoader();
                    this.canvas.setImage(imageUrl);
                }, this.errorHandler);
            }, this.errorHandler);
        }, this.errorHandler);
    }
}

BugReportModule.init();