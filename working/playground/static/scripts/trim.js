var trim = (function () {
    if (String.prototype.trim) {
        return function (str) {
            return str.trim();
        };
    } else {
        return function (str) {
            return str.replace(/^\s+|\s+$/g, '');
        };
    }
}());
        