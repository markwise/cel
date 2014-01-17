(function () {
    'use strict';
    
    var win  = window;
    var doc  = document;
    var html = doc.documentElement;
    var body = doc.body;
    
    
    var supports_flexbox = (function () {
        var o = html.style;
        return 'flexWrap' in o || 'webkitFlexWrap' in o || 'msFlexWrap' in o;
    }());
    
    var supports_media_queries = !!(win.matchMedia || win.styleMedia);
    
    var supports_mutation_observer = !!win.MutationObserver;
    
    var supports_negation_pseudo_class = (function () {
        try {
            doc.querySelectorAll('html:not(html)');
            return true;
        } catch(e) {
            return false;
        }            
    }());
    
    
    var classList = (function () {

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


        var getClassList = function (ele) {
            var s = trim(ele.className); 
            return s.length ? s.split(/\s+/) : [];
        };


        var contains = (function () {
            if (typeof DOMTokenList !== 'undefined') {
                return function (klass, ele) {
                    return ele.classList.contains(klass);
                };
            } else {
                return function (klass, ele) {
                    var a = getClassList(ele),
                        i = a.length;

                    while (i--) {
                        if (klass === a[i]) {
                            return true;
                        }
                    }

                    return false;
                };
            }
        }());
    
        
        var add = (function () {
            if (typeof DOMTokenList !== 'undefined') {
                return function (klass, ele) {
                    ele.classList.add(klass);
                };
            } else {
                return function (klass, ele) {
                    var a;
            
                    if (contains(klass, ele)) {
                        return;
                    }
                
                    a = getClassList(ele);
                    a.push(klass);
                    ele.className = a.join(' ');
                };
            }
        }());
    

        var remove = (function () {
            if (typeof DOMTokenList !== 'undefined') {
                return function (klass, ele) {
                    ele.classList.remove(klass);
                };
            } else {
                return function (klass, ele) {
                    var a = getClassList(ele),
                        i = a.length;

                    while (i--) {
                        if (klass === a[i]) {
                            a.splice(i, 1);
                            break;
                        }
                    }

                    ele.className = a.join(' ');
                };
            }
        }());
    
    
        return {
            contains : contains,
            add : add,
            remove : remove
        };
    }());
    
    
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
    
    
    var getLayouts = (function () {
        var selector = getLayoutSelector();
        return function () {
            return doc.querySelectorAll(selector); 
        };
    }());
    
    
    var getUninitializedLayouts = (function () {
        //Returns layouts that have not been initialized, i.e. layouts that don't
        //have the class layout-ready
    
        var selector = getLayoutSelector(true);
    
        var getUninitializedLayoutsFallback = function () {
            var eles = getLayouts(), 
                i = eles.length,
                ele,
                a = [];
        
            while (i--) {
                ele = eles[i];
                if (!classList.contains('layout-ready', ele)) {
                    a.push(ele);
                }
            }                
        
            return a;
        };
    
        return function () {
            if (supports_negation_pseudo_class) {
                return doc.querySelectorAll(selector);
            } else {
                return getUninitializedLayoutsFallback();  
            }
        }
    }());
    
    
    
    











}());