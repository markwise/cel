(function () {
    'use strict';
    
    var d = document;
    var html = d.documentElement;

    var cel = {
        release : '0.3.0'
    }

    var script;
    var styles;
    var path;
    
    
    script = D.querySelector('[src$="split-' + build + '.js"]');
    styles = D.createElement('link');
    styles.type = 'text/css';
    styles.rel = 'stylesheet';
    styles.media = defaults.media;
    path = script.src;
    path = path.substr(0, path.lastIndexOf('/') + 1);
    styles.href = path + 'split-' + build + '.css';
    H.insertBefore(styles, script);



    var supports_flexbox = function () {
        //::
    
        var styles = d.documentElement.style,
            a = ['msFlexWrap', 'webkitFlexWrap', 'flexWrap'],
            i = a.length - 1;
        
        do {
            if (a[i] in styles) {
                supports_flexbox = null;
                return true;                    
            }
        } while (i--);
    
        supports_flexbox = null;
        return false;
    };
    
    
    var load_css = function () {
        var styles;
         
        styles = d.createElement('link');
        styles.type = 'text/css';
        styles.rel = 'stylesheet';
        styles.
        
        
        
        
    
    
    };


    
    if (supports_flexbox()) {
        console.log('has flexbox');
        //load_styles();
        
    } else {
        console.log('no flexbox');
        //d.write('<style>body{background:blue}</style>');
        //load_styles();
    } 
}());