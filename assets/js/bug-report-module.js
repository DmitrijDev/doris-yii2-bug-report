var BugReportModule = {
    image: new BugReportImageMaker(),
    popup: new BugReportPopupWindow(),
    canvas: new BugReportCanvasModule(),
    response: new BugReportResponseModule(),

    init() {
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

    sendReport() {
        this.canvas.getImage().then((blob) => {
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

                this.response.post('/bugReport/', data).then((data) => {
                    this.popup.hideWindow();

                    console.log(`Message: ${data}`);
                }, this.errorHandler)
            });

            reader.readAsDataURL(blob);
        }, this.errorHandler);
    },

    showLoader() {
        document.getElementsByClassName('bug-report-status-bar')[0].classList.add('show');
    },

    hideLoader() {
        document.getElementsByClassName('bug-report-status-bar')[0].classList.remove('show');
    },

    errorHandler(message) {
        this.popup.hideWindow();
        this.hideLoader();
        alert(message);
    },

    makeScreen() {
        this.popup.hideWindow().then(() => {
            this.showLoader();

            this.image.makeScreen().then((imageUrl) => {
                this.popup.showWindow().then(() => {
                    this.hideLoader();

                    this.canvas.setSize(this.image.width, this.image.height)
                    this.canvas.setImage(imageUrl);
                }, this.errorHandler);
            }, this.errorHandler);
        }, this.errorHandler);
    },

    loadImage(event) {
        this.showLoader();

        this.image.loadImage(event).then((imageUrl) => {
            this.hideLoader();

            this.canvas.setSize(this.image.width, this.image.height);
            this.canvas.setImage(imageUrl);
        }, this.errorHandler);
    }
}

BugReportModule.init();