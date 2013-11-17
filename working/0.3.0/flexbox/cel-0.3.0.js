(function () {

    var w = window;
    var d = document;
    
    var cel = {
        release : '0.3.0'    
    };
    
    var style = d.createElement('style');
    
    var create_styles = function () {
        var a = [];
        var i = 480;
        var l = 960;
        
        for (; i <= l; i += 20) {
            a.push([
                '@media screen and (min-width:', i + 1, 'px){',
                    '[class~="split:', i, '"]{',
                        'display:-webkit-flex;',
                        'display:flex;',
                        '-webkit-justify-content:space-between;',
                        'justify-content:space-between;',
                        '-webkit-flex-wrap:wrap;',
                        'flex-wrap:wrap;',
                    '}',
                    '[class~="split:', i, '"][class~="align:t"],',
                    '[class~="split:', i, '"][class~="align:top"]{',
                        '-webkit-align-items:flex-start;',
                        'align-items:flex-start;',
                    '}',
                    '[class~="split:', i, '"][class~="align:m"],',
                    '[class~="split:', i, '"][class~="align:middle"]{',
                        '-webkit-align-items:center;',
                        'align-items:center;',
                    '}',
                    '[class~="split:', i, '"][class~="align:b"],',
                    '[class~="split:', i, '"][class~="align:bottom"]{',
                        '-webkit-align-items:flex-end;',
                        'align-items:flex-end;',
                    '}',
                    '[class~="split:', i, '"].flip{',
                        '-webkit-flex-direction:row-reverse;',
                        'flex-direction:row-reverse;',
                    '}',
                    '[class~="split:', i, '"]>.show{',
                        'display:none;',
                    '}',
                '}\n',
                '@media screen and (max-width:', i, 'px){',
                    '[class~="split:', i, '"]>.cel{',
                        'width:auto !important;',
                    '}',
                    '[class~="split:', i, '"]>.cel-line,',
                    '[class~="split:', i, '"]>.hide{',
                        'display:none;',
                    '}',
                '}\n'
            ].join(''));
        }
      
      
        //console.log(a.join(''));
      
        return a.join('');
    };
    
    var release = localStorage.cel_release;
    var queries = localStorage.cel_queries;
    
    
    //if (release !== cel.release) {
        //console.log('new build');
        //localStorage.cel_build = cel.build;
        styles = create_styles();
        
        //console.log(styles);
        
    
    //use existing styles
    //} else {
        //styles = localStorage.cel_styles;
    //}
    
    style.innerHTML = styles;
    //console.log(style.innerHTML);
    d.head.appendChild(style);
    //localStorage.cel_styles = style.innerHTML;
  
  
    var css = w.CSS;
    
    if (!!(
        css &&
        css.supports && 
        css.supports('(flex-wrap:wrap) or (-webkit-flex-wrap:wrap)'))
    ){
        
        //if ( css.supports('(flex-wrap:wrap) or (-webkit-flex-wrap:wrap)'))   ) {
            //load styles
        //}
        
        console.log('asdf');
        
    
    } else {
        //load defualt styles
        
    }
    
    
    
    //if flexbox support
        //load cel flexbox css
    //else
        //load legacy css
    
    


}());




/*
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
*/




