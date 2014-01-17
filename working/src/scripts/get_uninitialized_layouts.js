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