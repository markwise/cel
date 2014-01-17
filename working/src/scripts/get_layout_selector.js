var getLayoutSelector = function (uninitialized) {
    //Generates a selector to find all layouts or uninitialized layouts if 
    //uninitialized param is true
    
    var selector = uninitialized ? ':not(.layout-ready)' : '',
        i = 481,
        a = ['.split' + selector];

    for (; i <= 961; i += 20) {
        a.push('[class~="split:' + i + '"]' + selector);
    }

    return a.join(',');
};