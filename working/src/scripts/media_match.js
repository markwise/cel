var mediaMatch = win.matchMedia || (function () {
    //matchMedia polyfill for IE9, SA5, iOS4.2
    
    if (!supports_media_queries) {
        return;
    }
    
    var timer,
        listeners = [];
    
    var addListener = function (fn) {
        this.fn = fn;
        listeners.push(this);
    };
    
    
    var resize = function () {
        var i = listeners.length,
            item,
            matches;
    
        while (i--) {
            item = listeners[i];
            matches = win.styleMedia.matchMedium(item.media);
            
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
    
    
    win.addEventListener('resize', function () {
        //Throttle resize event
    
        if (!timer) {
            timer = setTimeout(resize);
        }
    });


    return function (media) {
        return {
            matches: win.styleMedia.matchMedium(media),
            media: media,
            addListener: addListener
        };
    };
}());
            