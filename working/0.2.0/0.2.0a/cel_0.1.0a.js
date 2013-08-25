(function () {
    if (!window.addEventListener) {

        var trim = function (str) {
            return str.replace(/^\s+|\s+$/g, '');
        };


        var has_class = function (ele, klass) {
            var a, i;
            
            a = trim(ele.className);
            a = a.length ? a.split(/\s+/) : [];
            i = a.length;
    
            while (i--) {
                if (a[i] === klass) {
                    return true;
                }
            }
            
            return false;
        };


        var add_class = function (ele, klass) {
            var a;
            
            if (has_class(ele, klass)) {
                return;
            }
            
            a = trim(ele.className);
            a = a.length ? a.split(/\s+/) : [];
            a.push(klass);
            ele.className = a.join(' ');
        };
        
        
        var remove_class = function (ele, klass) {
            var a = trim(ele.className).split(/\s+/),
                i = a.length;
        
            while (i--) {
                if (klass === a[i]) {
                    a.splice(i, 1);
                } 
            }
            
            ele.className = a.join(' ');
        };
        

        var clean = function (ele) {
            var n = ele.firstChild;
    
            do {
                if (n.nodeType !== 1) {
                    ele.removeChild(n);
                } 
            } while (n = n.nextSibling);
        };
       
       
        var update_last_child = function (ele) {
            var n = ele.firstChild;
            
            do {
                remove_class(n, 'last-child');
            } while (n = n.nextSibling);
            
            add_class(ele.lastChild, 'last-child');
        };
       
       
       
       
        //Modified Node interface
        
        var __appendChild__ = Element.prototype.appendChild;
        
        var Node = {
            
            
            //call for appendChild, removeChild, replaceChild
            
            appendChild : function () {
                var self = this,
                    node;
                
                //Call native method
                node = __appendChild__.apply(self, arguments);
                
                //Update cel nodes
                if (has_class(self, 'split')) {
                    clean(self);
                    update_last_child(self);
                }
                
                
                //check child nodes
                
                //var list = node.querySelectorAll('.split');
                //var i = list.length;
                //var split
                //while (i--) {
                    //split = list[i];
                    //clean(split);
                    //update_last_child(split); 
                //};
                
                
            
                return node;
            }
        };
        
        
        //Implement modified Node interface
        
        for (var k in Node) {
            if (Node.hasOwnProperty(k)) {
                Element.prototype[k] = Node[k];
            }
        }
        
        
        
       //create function to initialize this

        var a = document.querySelectorAll('.split'),
            l = a.length,
            i = 0,
            split;
    
        for (; i < l; i++) {
            split = a[i];
            clean(split);
            update_last_child(split);
        }
    }
}());
