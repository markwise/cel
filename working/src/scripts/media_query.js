var mediaQuery = (function () {

    var getResponsiveLayouts = function (maxWidth) {
        return doc.querySelectorAll('[class~="respond:' + maxWidth + '"]');
    };
    
    
    var maxWidthChange = function (mediaQueryList) {
        var maxWidth = mediaQueryList.media.match(/(\d+)/)[1],
            eles = getResponsiveLayouts(maxWidth);
        
        if (eles.length) {
            if (mediaQueryList.matches) {
                layouts.removeSignature(eles);
            } else {
                layouts.applySignature(eles);
            }
        }
    };
    
    
    var maxWidth = function (maxWidth) {
        var media = 'screen and (max-width:' + maxWidth + 'px)',
            mediaQueryList = mediaMatch(media);
        
        mediaQueryList.addListener(maxWidthChange);
        
        return {
            maxWidthChange: function () {
                maxWidthChange(mediaQueryList);
            }
        };
    };
    
    
    return {
        maxWidth: maxWidth
    }
}());