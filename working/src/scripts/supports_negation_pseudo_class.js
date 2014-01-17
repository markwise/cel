var supports_negation_pseudo_class = (function () {
    try {
        doc.querySelectorAll('html:not(html)');
        return true;
    } catch(e) {
        return false;
    }            
}());