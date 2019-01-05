window.addEventListener('load', function () {
    var codes = [
        "D".charCodeAt(0),
        "R".charCodeAt(0)
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

        BugReportModule.makeScreen().then(() => {
            BugReportModule.showWindow();
        });
    };

    document.onkeyup = function (e) {
        e = e || window.event;

        delete pressed[e.keyCode];
    };
});