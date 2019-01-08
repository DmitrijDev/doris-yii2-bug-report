// get from http://www.williammalone.com/articles/create-html5-canvas-javascript-drawing-app/#demo-simple
var clickX_simple = new Array();
var clickY_simple = new Array();
var clickDrag_simple = new Array();
var paint_simple;
var canvas_simple;
var context_simple;
var image;

function prepareSimpleCanvas(imageUrl) {
    if (canvas_simple) {
        clearCanvas_simple();

        var background = new Image();
        background.src = imageUrl;

        background.onload = function () {
            context_simple.drawImage(background, 0, 0);
            image = background;
        }

        return;
    }

    var canvasDiv = document.getElementById('canvasSimpleDiv');
    canvas_simple = document.createElement('canvas');
    canvas_simple.setAttribute('width', (window.innerWidth * 0.9) - 30);
    canvas_simple.setAttribute('height', window.innerHeight);
    canvas_simple.setAttribute('id', 'canvasSimple');
    canvasDiv.appendChild(canvas_simple);
    if (typeof G_vmlCanvasManager != 'undefined') {
        canvas_simple = G_vmlCanvasManager.initElement(canvas_simple);
    }
    context_simple = canvas_simple.getContext("2d");

    var background = new Image();
    background.src = imageUrl;

    background.onload = function () {
        let imgWidth = (window.innerWidth * 0.9) - 30;
        let imgHeight = window.innerHeight;
        context_simple.drawImage(background, 0, 0, imgWidth, imgHeight);
        image = background;
    }


    // Add mouse events
    // ----------------
    $('#canvasSimple').mousedown(function (e) {
        // Mouse down location
        var rect = canvas_simple.getBoundingClientRect();
        var mouseX = e.offsetX + e.offsetX * 0.025,
            mouseY = e.offsetY + e.offsetY * 0.025;

        paint_simple = true;
        addClickSimple(mouseX, mouseY, false);
        redrawSimple();
    });

    $('#canvasSimple').mousemove(function (e) {
        if (paint_simple) {
            var rect = canvas_simple.getBoundingClientRect();
            var mouseX = e.offsetX + e.offsetX * 0.025,
                mouseY = e.offsetY + e.offsetY * 0.025;

            addClickSimple(mouseX, mouseY, true);
            redrawSimple();
        }
    });

    $('#canvasSimple').mouseup(function (e) {
        paint_simple = false;
        redrawSimple();
    });

    $('#canvasSimple').mouseleave(function (e) {
        paint_simple = false;
    });

    // Add touch event listeners to canvas element
    canvas_simple.addEventListener("touchstart", function (e) {
        // Mouse down location
        var mouseX = e.touches[0].clientX - window.innerWidth * 0.05 - 15,
            mouseY = e.touches[0].clientY - window.innerHeight * 0.05 - 15 + document.getElementsByClassName('bug-report-window')[0].scrollTop;

        paint_simple = true;
        addClickSimple(mouseX, mouseY, false);
        redrawSimple();
    }, false);
    canvas_simple.addEventListener("touchmove", function (e) {
        var mouseX = e.touches[0].clientX - window.innerWidth * 0.05 - 15,
            mouseY = e.touches[0].clientY - window.innerHeight * 0.05 - 15 + document.getElementsByClassName('bug-report-window')[0].scrollTop;

        if (paint_simple) {
            addClickSimple(mouseX, mouseY, true);
            redrawSimple();
        }
        e.preventDefault()
    }, false);
    canvas_simple.addEventListener("touchend", function (e) {
        paint_simple = false;
        redrawSimple();
    }, false);
    canvas_simple.addEventListener("touchcancel", function (e) {
        paint_simple = false;
    }, false);
}

function addClickSimple(x, y, dragging) {
    clickX_simple.push(x);
    clickY_simple.push(y);
    clickDrag_simple.push(dragging);
}

function clearCanvas_simple() {
    context_simple.clearRect(0, 0, canvas_simple.clientWidth, canvas_simple.clientHeight);
}

function redrawSimple() {
    clearCanvas_simple();
    let imgWidth = (window.innerWidth * 0.9) - 30;
    let imgHeight = window.innerHeight;
    context_simple.drawImage(image, 0, 0, imgWidth, imgHeight);

    var radius = 4;
    context_simple.strokeStyle = "#FF0000";
    context_simple.lineJoin = "round";
    context_simple.lineWidth = radius;

    for (var i = 0; i < clickX_simple.length; i++) {
        context_simple.beginPath();
        if (clickDrag_simple[i] && i) {
            context_simple.moveTo(clickX_simple[i - 1], clickY_simple[i - 1]);
        } else {
            context_simple.moveTo(clickX_simple[i] - 1, clickY_simple[i]);
        }
        context_simple.lineTo(clickX_simple[i], clickY_simple[i]);
        context_simple.closePath();
        context_simple.stroke();
    }
}