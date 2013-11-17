var class_list = (function () {
    'use strict';

    //classList polyfill
        
    var _validate = function (klass) {
        return !(
            typeof(klass) !== 'string' || 
            !klass.length ||
            /\s/.test(klass)
        );
    };
    
    var _contains = (function () {
        if (typeof(DOMTokenList) !== 'undefined') {
            return function (klass, ele) {
                return ele.classList.contains(klass);
            };
        } else {
            return function (klass, ele) {
                var class_list,
                    i;
                
                class_list = ele.className;
                class_list = class_list.length ? class_list.split(/\s+/) : [];
                i = class_list.length;

                while (i--) {
                    if (klass === class_list[i]) {
                        return true;
                    }
                }

                return false;
            };
        }
    }());

    var contains = function (klass, ele) {
        if (!_validate(klass)) {
            return;
        }
    
        return _contains(klass, ele);
    };
        
    var _add = (function () {
        if (typeof(DOMTokenList) !== 'undefined') {
            return function (klass, ele) {
                ele.classList.add(klass);
            };
        } else {
            return function (klass, ele) {
                var class_list;
            
                if (contains(klass, ele)) {
                    return;
                }
                
                class_list = ele.className;
                class_list = class_list.length ? class_list.split(/\s+/) : [];
                class_list.push(klass);
                ele.className = class_list.join(' ');
            };
        }
    }());

    var add = function (klass, elements) {
        if (!_validate(klass)) {
            return;
        }
    
        //Element
        if (elements.nodeType === 1) {
            _add(klass, elements);
        
        //NodeList or HTMLCollection
        } else {
            var i = elements.length;
            while (i--) {
                _add(klass, elements[i]);
            }
        }
    };

    var _remove = (function () {
        if (typeof(DOMTokenList) !== 'undefined') {
            return function (klass, ele) {
                ele.classList.remove(klass);
            };
        } else {
            return function (klass, ele) {
                var class_list,
                    i;
        
                class_list = ele.className;
                class_list = class_list.length ? class_list.split(/\s+/) : [];
                i = class_list.length;

                while (i--) {
                    if (klass === class_list[i]) {
                        class_list.splice(i, 1);
                        break;
                    }
                }

                ele.className = class_list.join(' ');
            };
        }
    }());

    var remove = function (klass, elements) {
        if (!_validate(klass)) {
            return;
        }
    
        //Element
        if (elements.nodeType === 1) {
            _remove(klass, elements);
        
        //NodeList or HTMLCollection
        } else {
            var i = elements.length;
            while (i--) {
                _remove(klass, elements[i]);
            }
        }
    };
    
    return {
        add : add,
        remove : remove,
        contains : contains
    };
}());
        