function BugReportImageMaker() {

    this.makeScreen = function () {
        return new Promise((resolve, reject) => {
            html2canvas(document.querySelector("body"), {
                x: window.scrollX,
                y: window.scrollY,
                width: window.innerWidth,
                height: window.innerHeight
            }).then(canvas => {
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

                if (file) {
                    let reader = new FileReader();
                    reader.readAsDataURL(file);
                    reader.onload = (event) => fetch(event.target.result)
                        .then(i => i.blob())
                        .then(blob => {
                            let urlCreator = window.URL || window.webkitURL;
                            let imageUrl = urlCreator.createObjectURL(blob);

                            resolve(imageUrl);
                        })
                }
            } catch (e) {
                reject(e);
            }
        });
    }
}