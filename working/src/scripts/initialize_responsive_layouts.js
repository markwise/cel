var initializeResponsiveLayouts = (function () {

    if (!supports_media_queries) {
        return;
    }

    var i = 480,
        mediaQueryList = [],
        timer;

    for (; i <= 960; i += 20) {
        mediaQueryList.push(mediaQuery.maxWidth(i));
    };

    timer = setInterval(function () {
        var i = mediaQueryList.length - 1;
        do {
            mediaQueryList[i].maxWidthChange();
        } while (i--);
    });

    win.addEventListener('DOMContentLoaded', function () {
        setTimeout(function () {
            clearInterval(timer);
        });
    });
}());