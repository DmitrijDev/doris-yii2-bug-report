function BugReportCanvasModule() {
    this.canvasDiv = document.getElementById('canvasSimpleDiv');
    this.canvasSimple = document.getElementById('canvasSimple');
    this.context = null;
    this.canvas = null;
    this.tool = null;
    this.currentTool = '';

    this.init = () => {
        this.canvas = document.createElement('canvas');
        this.canvas.setAttribute('width', (window.innerWidth * 0.9) - 30);
        this.canvas.setAttribute('height', window.innerHeight);
        this.canvas.setAttribute('id', 'canvasSimple');
        this.canvasDiv.innerHTML = '';
        this.canvasDiv.appendChild(this.canvas);
        this.context = this.canvas.getContext("2d");

        this.changePointTool('pencil');
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

    this.setSize = (width, height) => {
        this.tool.setSize(width, height);
    }

    this.changePointTool = (tool) => {
        this.tool = tool;
        let tools = document.querySelectorAll('#bg-tools-wrap .tool');

        for (var i = 0; tools.length > i; i++) {
            tools[i].classList.remove('active');
        }

        switch (tool) {
            case 'pencil': {
                document.getElementById('bugreport-pencil').classList.add('active');
                this.currentTool = 'pencil';

                this.tool = new BugReportPencilCanvasTool(this.canvas, this.context, this.canvasDiv);
                this.tool.init();
                break;
            }
            case 'quadrangle': {
                this.currentTool = 'quadrangle';
                document.getElementById('bugreport-quadrangle').classList.add('active');
                break;
            }
            case 'ellipse': {
                this.currentTool = 'ellipse';
                document.getElementById('bugreport-ellipse').classList.add('active');
                break;
            }
            default: {
                throw error(`Tool ${tool} not supported.`);
            }
        }
    }

    this.init();
}
