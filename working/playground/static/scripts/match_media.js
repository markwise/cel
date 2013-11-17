var match_media = window.matchMedia || (function () {
    'use strict';

    //matchMedia polyfill for IE9, SA5, iOS4.2
    
    var w = window;
    
    if (!w.styleMedia) {
        return function () {
            return;
        }
    }
    
    var timer,
        listeners = [];
    
    var addListener = function (fn) {
        this.fn = fn;
        listeners.push(this);
    };
    
    //Need remove listener
    
    var resize = function () {
        var i = listeners.length,
            item,
            matches;
    
        while (i--) {
            item = listeners[i];
            matches = w.styleMedia.matchMedium(item.media);
            
            if (item.matches !== matches) {
                item.matches = matches;
                
                //Call listener
                if (item.fn) {
                    item.fn(item);
                }
            }
        }
        
        timer = null;
    };
    
    w.addEventListener('resize', function () {
        //Throttle resize event
    
        if(!timer) {
            timer = setTimeout(resize);
        }
    });

    return function (media) {
        
        if (typeof(media) !== 'string') {
            
        } 
    
        return {
            matches : w.styleMedia.matchMedium(media),
            media : media,
            addListener : addListener
        };
    };
}());
            