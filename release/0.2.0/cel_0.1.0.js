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
            console.log('add class');
        
            var a;
            
            if (has_class(ele, klass)) {
                return;
            }
            
            a = trim(ele.className);
            a = a.length ? a.split(/\s+/) : [];
            a.push(klass);
            ele.className = a.join(' ');
            console.log(ele.className);
        };
        
        
        var remove_class = function (ele, klass) {
            console.log('remove class');
        
            var a = trim(ele.className).split(/\s+/),
                i = a.length;
        
            while (i--) {
                if (klass === a[i]) {
                    a.splice(i, 1);
                } 
            }
            
            ele.className = a.join(' ');
            console.log(ele.className);
        };
        

        var clean = function (ele) {
            var n = ele.firstChild;
    
            do {
                if (n.nodeType !== 1) {
                    ele.removeChild(n);
                } 
            } while (n = n.nextSibling);
        };
       
       
        var add_last_child_class = function (ele) {
            
            /*
            var n = ele.firstChild;
    
            do {
                if (n.nodeType === 1) {
                    remove_class(n, 'last-child');
                } 
            } while (n = n.nextSibling);
            */
            
            
            
            //add_class(ele.lastChild, 'last-child');
        }
       
       
       
       
        //Modified Node interface
        
        var __appendChild__ = Element.prototype.appendChild;
        
        var Node = {
            
            appendChild : function () {
                var self = this;
                var node;
               
                
                //console.log(self.lastChild);
                
                //Call native method
                node = __appendChild__.apply(self, arguments);
                
                //Update classes
                if (has_class(self, 'split')) {
                    clean(self);
                    //add_last_child_class(self);
                    
                    //console.log(self.lastChild.className);
                }
                
                
                //walk down new nodes inserted and check for split class
                    //alter last-child class
                    
                
                
                
            
                return node;
            }
        };
        
        
        //Implement modified Node interface
        
        for (var k in Node) {
            if (Node.hasOwnProperty(k)) {
                Element.prototype[k] = Node[k];
            }
        }
        
        
        
       

        var a = document.querySelectorAll('.split'),
            l = a.length,
            i = 0,
            split;
    
        for (; i < l; i++) {
            split = a[i];
            //clean(split);
            //add_last_child_class(split);
        
            //add_class(split.lastChild, 'last-child');
            
            //remove_class(split.lastChild, 'last-child');
            
        }
    }
}());
