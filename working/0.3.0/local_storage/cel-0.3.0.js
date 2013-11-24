(function () {


    var layouts = [];
    
    
    var get_ratio_widths = function (whole, terms) {
        
        var i = terms.length - 1,
            sum = 0,
            part,
            ratio_widths = [];
        
        //Add ratio terms
        do {
            sum += terms[i];
        } while(i--);
        
        part = whole / sum;
        i = terms.length - 1;
        
        //Is there more than one term, e.g., by:1/2 
        if (i) {
            do {
                ratio_widths.push(part * terms[i]);
            } while(i--);
            
        //Is there one term, e.g., by:2
        } else {
            ratio_widths.push(part);
        }
        
        return ratio_widths;
    };
   
    
    var create_layouts = function () {
        
        var ratios = [      //ratios to create layouts from
                [3, 2],
                [2, 3],
                [3, 1],
                [1, 3],
                [2, 1],
                [1, 2],
                [5],
                [4],
                [3],
                [2]
            ],
            i = 1,          //equals gap size as a percent
            j,              //generic iterator
            whole,          //overall ratio width
            ratio,          //individual ratio from ratios array
            selector,       //selector created from each ratio
            ratio_widths,   //ratio terms represented as a percent width
            k,              //generic iterator
            cels;           //number of cels to target
        
        //Iterate gap sizes
        do {
            j = ratios.length - 1;
            whole = 100 - i;
   
            //Iterate ratios
            do {
                ratio = ratios[j];
                selector = '[class~="by:' + ratio.join('/') + '"]';
                
                //Is the gap size > 0
                if (i) {
                    selector += '[class~="with-gap:' + i + '"]';
                }
            
                ratio_widths = get_ratio_widths(whole, ratio);
                k = ratio_widths.length - 1;
                cels = [];
        
                //Iterate ratio widths
                do {
                    cels.push('.cel');
                    layouts.push(
                        selector, '>', cels.join('~'), '{',
                            'width:', ratio_widths[k], '%',  
                        '}\n'
                    );
                } while(k--);
            } while(j--);
        } while(i--);
    
        create_layouts = get_ratio_widths = null;
    };

    
    create_layouts();
    
    
    console.log(layouts.join(''));
    
    


    
    
    
    
    
}());




