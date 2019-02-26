function BugReportCanvasModule() {
    this.canvasDiv = document.getElementById('canvasSimpleDiv');
    this.canvasSimple = document.getElementById('canvasSimple');
    this.context = null;
    this.canvas = null;

    this.init = () => {
        this.canvas = document.createElement('canvas');
        this.canvas.setAttribute('width', (window.innerWidth * 0.9) - 30);
        this.canvas.setAttribute('height', window.innerHeight);
        this.canvas.setAttribute('id', 'canvasSimple');
        this.canvasDiv.innerHTML = '';
        this.canvasDiv.appendChild(this.canvas);
        this.context = this.canvas.getContext("2d");
    }

    this.setImage = (imageUrl) => {
        var background = new Image();
        background.src = imageUrl;

        background.onload = (event) => {
            let imgWidth = event.target.width;
            let imgHeight = event.target.height;

            this.canvas.setAttribute('width', imgWidth);
            this.canvas.setAttribute('height', imgHeight);

            this.context.drawImage(background, 0, 0, imgWidth, imgHeight);
        }
    }

    this.getImage = () => {
        return new Promise((resolve, reject) => {
            this.canvas.toBlob((blob) => {
                resolve(blob);
            });
        })
    }

    this.init();
}
