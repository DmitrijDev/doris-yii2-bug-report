function BugReportImageMaker() {
    this.height = 0;
    this.width = 0;

    this.makeScreen = function () {
        return new Promise((resolve, reject) => {
            html2canvas(document.querySelector("body"), {
                x: window.scrollX,
                y: window.scrollY,
                width: window.innerWidth,
                height: window.innerHeight
            }).then(canvas => {
                this.height = canvas.height;
                this.width = canvas.width;

                canvas.toBlob((blob) => {
                    let urlCreator = window.URL || window.webkitURL;
                    let imageUrl = urlCreator.createObjectURL(blob);

                    resolve(imageUrl);
                });
            });
        })
    }

    this.loadImage = function (event) {
        return new Promise((resolve, reject) => {
            try {
                let file = event.target.files[0];

                if (!file) {
                    reject('File is not loaded');
                    return;
                }

                let reader = new FileReader();
                reader.readAsDataURL(file);
                reader.onload = (event) => fetch(event.target.result)
                    .then(i => i.blob())
                    .then(blob => {
                        let urlCreator = window.URL || window.webkitURL;
                        let imageUrl = urlCreator.createObjectURL(blob);

                        var _URL = window.URL || window.webkitURL;
                        img = new Image();
                        img.onload = (event) => {
                            this.width = event.target.width;
                            this.height = event.target.height;
                            resolve(imageUrl);
                        };

                        img.src = _URL.createObjectURL(file);
                    });
            } catch (e) {
                reject(e);
            }
        });
    }
}