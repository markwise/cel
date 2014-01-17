var layoutObserver = (function () {
            
    var observeAddedLayouts = function () {
        //::
    
        var eles = getUninitializedLayouts(),
            i = eles.length,
            ele;
        
        while (i--) {
            ele = eles[i]; 
            if (ele.layoutReady === void 0) {
                ele.layoutReady = false;
                layout.initialize(ele);
            }
        }
    };
    
    var observeEqualHeights = function () {
    
    
    
    
    };
    
    
    var a = [];
    
    
    if (!supports_mutation_observers) {
        a.push(observeAddedLayouts);
    } else {
        new MutationObserver(observeAddedLayouts).observe(body, {
            childList : true,
            subtree : true
        });
    }
    
    if (!supports_flexbox) {
        a.push(observeEqualHeights);
    }
    
    
    addEvent('click', doc, function () {
        //1. observe new layouts added to the dom that need to be initialized
    
        //2. observe height changes to a layout
        
            //new elements have been added or removed from a layout
        
            //content may expand and collapse (animated or a simple show and hide)
            
            //a layout may be expanded or collapsed (animated or a simple show and hide)
            
            //elements within a layout may be hidden and shown
        
            //a layout may be set to display:none and then display:block
        
        
    
    });
    
    
    addEvent('resize', win, function () {
        //observe height changes because of content reflow
    
    });
    
    
    
                       
    
    
    
    
    
    
    
    
    
    
    
    /*
    if (W.MutationObserver) {
        new MutationObserver(observeAddedLayouts)
        .observe(B, {
            childList : true,
            subtree : true
        });
        
    
    } else {
    
        var t = Timer.create(observeAddedLayouts);
        t.start(.01);
        
        D.addEventListener('click', function () {
            t.burst();
        });
        
        
        
    }
    
    */
    
    
    
    
}());