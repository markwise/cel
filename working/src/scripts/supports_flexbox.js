var supports_flexbox = (function () {
    var o = html.style;
    return 'flexWrap' in o || 'webkitFlexWrap' in o || 'msFlexWrap' in o;
}());