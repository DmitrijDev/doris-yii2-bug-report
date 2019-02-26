let ImageMaker = {

    makeScreen(){
        BugReportModule.hideWindow();

        return new Promise((resolve, reject) => {
            html2canvas(document.querySelector("body"), {
                x: window.scrollX,
                y: window.scrollY,
                width: window.innerWidth,
                height: window.innerHeight
            }).then(canvas => {
                canvas.toBlob((blob) => {
                    var urlCreator = window.URL || window.webkitURL;
                    var imageUrl = urlCreator.createObjectURL(blob);

                    BugReportModule.showWindow();
                    resolve(imageUrl);
                });
            });
        })
    }
}