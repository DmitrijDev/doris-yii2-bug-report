function BugReportCanvasModule() {

    this.canvasDiv = document.getElementById('canvasSimpleDiv');
    this.context = null;
    this.canvas = null;

    this.init = function () {
        this.canvas = document.createElement('canvas');
        this.canvas.setAttribute('width', (window.innerWidth * 0.9) - 30);
        this.canvas.setAttribute('height', window.innerHeight);
        this.canvas.setAttribute('id', 'canvasSimple');
        this.canvasDiv.innerHTML = '';
        this.canvasDiv.appendChild(this.canvas);
        this.context = this.canvas.getContext("2d");
    }

    this.setImage = function (imageUrl) {
        var background = new Image();
        background.src = imageUrl;

        background.onload = () => {
            let imgWidth = (window.innerWidth * 0.9);
            let imgHeight = (window.innerHeight * 0.9);
            this.context.drawImage(background, 0, 0, imgWidth, imgHeight);
        }
    }

    this.init();
}
