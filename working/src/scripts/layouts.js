var layouts = (function () {

    var removeSignature = function (eles) {
        var i = eles.length;
        while (i--) {
            layout.removeSignature(eles[i]);
        }
    };
    
    var applySignature = function (eles) {
        var i = eles.length;
        while (i--) {
            layout.applySignature(eles[i]);
        }
    };

    return {
        removeSignature: removeSignature,
        applySignature: applySignature
    }
}());