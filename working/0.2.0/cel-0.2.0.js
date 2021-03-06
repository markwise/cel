(function () {
    var w = window,
        d = document,
        cel_lines;
    
    var reset_all_cel_line_heights = function () {
        var i = cel_lines.length;
        while (i--) {
            cel_lines[i].style.height = 'auto';
        }
    };

    var get_height = function (ele) {
        var style = w.getComputedStyle,
            a;
        
        //DOM Level 2 accessor
        if (style) {
            style = style(ele, null);
        //IE8
        } else {
            style = ele.currentStyle;
        }
        
        a = [
            parseInt(style.borderTopWidth) || 0,
            parseInt(style.borderBottomWidth) || 0,
            parseInt(style.paddingTop) || 0,
            parseInt(style.paddingBottom) || 0
        ];
        
        return ele.offsetHeight - (a[0] + a[1] + a[2] + a[3]);
    };
    
    var set_all_cel_line_heights = function () {
        var i = cel_lines.length,
            cel_line;
        
        reset_all_cel_line_heights();

        while (i--) {
            cel_line = cel_lines[i];
            cel_line.style.height = get_height(cel_line.parentNode) + 'px';
            
            if (!/\bready\b/.test(cel_line.className)) { 
                cel_line.className += ' ready';
            }
        }
    };
    
    var init_resize_event = function () {
        if (cel_lines.length) {
            if (w.addEventListener) {
                w.addEventListener('resize', function () {
                    set_all_cel_line_heights();
                });
            } else {
                w.attachEvent('onresize', function () {
                    set_all_cel_line_heights();
                });
            }
        }
    };

    var ready = function (fn) {
        //A simple DOM ready method that has been abstracted from jQuery and
        //Diego Perini's doscroll check for DOM readiness in IE8
    
        var html = d.documentElement;
    
        var init = function (e) {
            if (e.type === 'DOMContentLoaded') {
                d.removeEventListener('DOMContentLoaded', init);
            } else
            if (e.type === 'load') {
                w.detachEvent('onload', init);
            }
            
            fn();
            init = poll = null;
        };
        
        //DOM ready check for IE8
        var poll = function () {
            try {
                html.doScroll('left');
                fn();
                init = poll = null;
            } catch (e) {
                setTimeout(poll, 1);
            }
        };
    
        if (d.addEventListener) {
            d.addEventListener('DOMContentLoaded', init, false);
        } else {
            if (!w.frameElement) {
                poll();
            } else {
                w.attachEvent('onload', init);
            }
        }
    };
    
    ready(function () {
        cel_lines = d.querySelectorAll('.cel-line');
        set_all_cel_line_heights();
        init_resize_event();
    });
}());




