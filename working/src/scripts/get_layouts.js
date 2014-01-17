var getLayouts = (function () {
    var selector = getLayoutSelector();
    return function () {
        return doc.querySelectorAll(selector); 
    };
}());