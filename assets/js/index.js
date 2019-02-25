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

function makeScreen(){
    BugReportModule.makeScreen().then((src) => {
        BugReportModule.showWindow();
        prepareSimpleCanvas(src);
    });
}