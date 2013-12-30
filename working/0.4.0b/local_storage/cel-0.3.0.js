(function () {
    'strict';    
    var
    
    styles = [],
    
    //String dictionary
    //All styles are built from the string dictionary to prevent string duplication

    
    //Numbers
    zero =                      '0',
    one =                       '1',
    two =                       '2',
    three =                     '3',
    four =                      '4',
    five =                      '5',
    six =                       '6',
    seven =                     '7',
    eight =                     '8',
    nine =                      '9',
    
    //Punctuation
    hyphen =                    '-',
    minus =                     hyphen,
    colon =                     ':',
    semicolon =                 ';',
    comma =                     ',',
    left_bracket =              '[',
    right_bracket =             ']',
    left_brace =                '{',
    right_brace =               '}',
    period =                    '.',
    decimal_mark =              period,
    greater_than_sign =         '>',
    equals_sign =               '=',
    asterik =                   '*',
    tilde =                     '~',
    double_quote =              '"',
    single_quote =              "'",
    exclamation_mark =          '!',
    hash =                      '#',
    space =                     ' ',
    
    //Words
    align =                     'align',
    auto =                      'auto',
    block =                     'block',
    border =                    'border',
    bottom =                    'bottom',
    box =                       'box',
    cel =                       'cel',
    content =                   'content',
    klass =                     'class',
    direction =                 'direction',
    display =                   'display',
    flip =                      'flip',
    height =                    'height',
    hidden =                    'hidden',
    hide =                      'hide',
    inline =                    'inline',
    justify =                   'justify',
    last =                      'last',
    left =                      'left',
    letter =                    'letter',
    line =                      'line',
    middle =                    'middle',
    min =                       'min',
    none =                      'none',
    normal =                    'normal',
    overflow =                  'overflow',
    ready =                     'ready',
    right =                     'right',
    show =                      'show',
    sizing =                    'sizing',
    solid =                     'solid',
    spacing =                   'spacing',
    split =                     'split',
    text =                      'text',
    top =                       'top',
    vertical =                  'vertical',
    visible =                   'visible',
    visibility =                'visibility',
    width =                     'width',
    
    //Vendor prefixes
    microsoft =                 '-ms-',
    mozilla =                   '-moz-',
    webkit =                    '-webkit-',
    
    //Units
    em =                        'em',
    percent =                   '%',
    pixel =                     'px',
    
    //Partials
    _important_ =               ' !important;',
    _ie_ =                      '\\9;',
    _attr_substring_ =          left_bracket + klass + asterik + equals_sign + single_quote,
    _attr_contains_ =           left_bracket + klass + tilde + equals_sign + single_quote,
    _attr_close_ =              single_quote + right_bracket,
    _attr_align_ =              _attr_contains_ + align + colon,
    _attr_with_gap_ =           _attr_contains_ + 'with-gap:',
    
    //Selectors
    class_split =               period + split,
    class_cel =                 period + cel,
    class_flip =                period + flip,
    class_cel_line =            period + cel + hyphen + line,
    class_ready =               period + ready,
    class_show =                period + show,
    class_hide =                period + hide,
    
    attr_split =                _attr_substring_ + split + colon + _attr_close_,
    attr_align_t =              _attr_align_ + 't' + _attr_close_,
    attr_align_m =              _attr_align_ + 'm' + _attr_close_,
    attr_align_b =              _attr_align_ + 'b' + _attr_close_,
    attr_with_gap_1 =           _attr_with_gap_ + '1' + _attr_close_,
    attr_with_gap_2 =           _attr_with_gap_ + '2' + _attr_close_,
    attr_with_gap_3 =           _attr_with_gap_ + '3' + _attr_close_,
    attr_with_gap_4 =           _attr_with_gap_ + '4' + _attr_close_,
    attr_with_gap_5 =           _attr_with_gap_ + '5' + _attr_close_,
    
    pseudo_after =              '::after',
    
    //Properties
    __content =                 content + colon,      
    __border =                  border + colon,
    __border_bottom_width =     border + hyphen + bottom + hyphen + width + colon,
    __border_right_width =      border + hyphen + right + hyphen + width + colon,
    __border_top_width =        border + hyphen + top + hyphen + width + colon,
    __box_sizing =              box + hyphen + sizing + colon,
    __direction =               direction + colon,
    __display =                 display + colon,
    __letter_spacing =          letter + hyphen + spacing + colon,
    __line_height =             line + hyphen + height + colon,
    __min_height =              min + hyphen + height + colon,
    __moz_box_sizing =          mozilla + box + hyphen + sizing + colon,
    __moz_text_align_last =     mozilla + text + hyphen + align + hyphen + last + colon,
    __ms_text_align_last =      microsoft + text + hyphen + align + hyphen + last + colon,
    __overflow =                overflow + colon,
    __text_align =              text + hyphen + align + colon,
    __vertical_align =          vertical + hyphen + align + colon,
    __visibility =              visibility + colon,
    __webkit_box_sizing =       webkit + box + hyphen + sizing + colon,
    __width =                   width + colon,

    //Values
    auto__ =                    auto + semicolon,
    border_box__ =              border + hyphen + box + semicolon,
    bottom__ =                  bottom + semicolon,
    hidden__ =                  hidden + semicolon,
    inline_block__ =            inline + hyphen + block + semicolon,
    justify__ =                 justify + semicolon,
    left__ =                    left + semicolon,
    ltr__ =                     'ltr;',
    middle__ =                  middle + semicolon,
    none__ =                    none + semicolon,
    normal__ =                  normal + semicolon,
    rtl__ =                     'rtl;',
    top__ =                     top + semicolon,
    visible__ =                 visible + semicolon;
    
    
    
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
    
    var create_fallback_cel_line_styles = function () {
        /*
        .cel-line{
            display:inline-block;
            overflow:hidden;
            border-top-width:0 !important;
            border-right-width:0 !important;
            border-bottom-width:0 !important;
            border:1px solid #ccc;
            width:0;
            vertical-align:top;
            visibility:hidden;
            opacity:0;
            -webkit-transition:opacity .5s;
            -moz-transition:opacity .5s;
            -ms-transition:opacity .5s;
            transition:opacity .5s;
        }
        
        .cel-line.ready{
            visibility:visible;
            opacity:1;
        }
        */
    
    
    };
    
    
    
    var create_flexbox_styles = function (selector) {
        
    };
   
    
    var create_fallback_styles = function (selector) {
        //Fallback styles for browsers that don't support flexbox or flex-wrap property
        
        styles.push(
            selector, left_brace,
                __line_height, '0;',
                __line_height, normal, _ie_,
                __text_align, justify__,
                __moz_text_align_last, justify__,
                __ms_text_align_last, justify__,
                __letter_spacing, '-.334em;',
                __letter_spacing, '-.34em', _ie_,
            right_brace,
        
            selector, attr_with_gap_1, comma,
            selector, attr_with_gap_2, comma,
            selector, attr_with_gap_3, comma,
            selector, attr_with_gap_4, comma,
            selector, attr_with_gap_5, left_brace,
                __letter_spacing, '-.25em;',
                __letter_spacing, '-.34em', _ie_,
            right_brace,
            
            selector, pseudo_after, left_brace,
                __content, '"";',
                __display, inline_block__,
                __display, none, _ie_,
                __width, '100%;',
                __vertical_align, top__,
            right_brace,
            
            '@-moz-document url-prefix(){',
                selector, left_brace,
                    __line_height, normal__,
                right_brace,
                
                selector, pseudo_after, left_brace,
                    __display, none__,
                right_brace,
            right_brace,
            
            selector, greater_than_sign, class_cel, left_brace,
                __display, inline_block__,
                __webkit_box_sizing, border_box__,
                __moz_box_sizing, border_box__,
                __box_sizing, border_box__,
                __min_height, '100%;',
                __vertical_align, top__,
                __line_height, '1.5;',
                __text_align, left__,
                __moz_text_align_last, auto__,
                __ms_text_align_last, auto__,
                __letter_spacing, normal__,
            right_brace,
            
            selector, attr_align_t, greater_than_sign, class_cel, left_brace,
                __vertical_align, top__,
            right_brace,
            
            selector, attr_align_m, greater_than_sign, class_cel, left_brace,
                __vertical_align, middle__,
            right_brace,
            
            selector, attr_align_b, greater_than_sign, class_cel, left_brace,
                __vertical_align, bottom__,
            right_brace,
            
            selector, class_flip, left_brace,
                __direction, rtl__,
            right_brace,
            
            selector, class_flip, greater_than_sign, class_cel, left_brace,
                __direction, ltr__,
            right_brace,
            
            selector, greater_than_sign, class_show, left_brace,
                __display, none__,
            right_brace
        );
    };
    
    
    var create_ie8_styles = function () {
    
        styles.push(
            class_split, comma,
            attr_split, left_brace,
                __text_align, justify__,
                __ms_text_align_last, justify__,
                __letter_spacing, '-.34em;',
            right_brace,
            
            class_split, greater_than_sign, class_cel, comma,
            attr_split, greater_than_sign, class_cel, left_brace,
                __display, inline_block__,
                __box_sizing, border_box__,
                __min_height, '100%;',
                __vertical_align, top__,
                __line_height, '1.5;',
                __text_align, left__,
                __ms_text_align_last, auto__,
                __letter_spacing, normal__,
            right_brace,
            
            class_split, attr_align_t, greater_than_sign, class_cel, comma,
            attr_split, attr_align_t, greater_than_sign, class_cel, left_brace,
                __vertical_align, top__,
            right_brace,
            
            class_split, attr_align_m, greater_than_sign, class_cel, comma,
            attr_split, attr_align_m, greater_than_sign, class_cel, left_brace,
                __vertical_align, middle__,
            right_brace,
            
            class_split, attr_align_b, greater_than_sign, class_cel, comma,
            attr_split, attr_align_b, greater_than_sign, class_cel, left_brace,
                __vertical_align, bottom__,
            right_brace,
            
            class_split, class_flip, comma,
            attr_split, class_flip, left_brace,
                __direction, rtl__,
            right_brace,
            
            class_split, class_flip, greater_than_sign, class_cel, comma,
            attr_split, class_flip, greater_than_sign, class_cel, left_brace,
                __direction, ltr__,
            right_brace,
            
            class_split, class_show, comma,
            attr_split, class_show, left_brace,
                __display, none__,
            right_brace
        );
    };
    
    
    
    
    
    //create_flexbox_styles(class_split);
    //create_ie8_styles();
    
    //create_fallback_styles(class_split);
    //create_fallback_styles(attr_contains + split + colon + i + attr_close);
    
    
    
    
    
    
    console.log(styles.join(''));
    
    
    /*
    
    var create_min_width_styles = function (width, fn, selector) {
        styles.push('@media screen and (min-width:', width, 'px){');
        fn(selector);
        styles.push('}');
    };
    
    
    var create_max_width_styles = function (width, selector) {
        styles.push(
            '@media screen and (max-width:', width, 'px){',
                selector, greater_than_sign, class_cel_line, comma,
                selector, greater_than_sign, class_hide, left_brace,
                    __display, none__,
                right_brace,
                
                selector, greater_than_sign, class_cel, left_brace,
                    __width, auto, space, _important_,
                right_brace,
            right_brace
        );
    };
    
    
    var create_responsive_styles = function (fn) {
        
        //generate core styles
        fn(class_split);
        
        //generate media queries
        var i = 480;
        var l = 960;
        var selector;
        
        for (; i <= l; i += 20) {
            selector = attr_contains + split + colon + i + attr_close;
            create_min_width_styles(i + 1, selector);
            create_max_width_styles(i, selector);
        }
    };
    
    
    if (cel.build !== localStorage.cel.build) {
        //generate layouts
        
        if (ie8) {
            create_ie8_styles();    
        } else
        if (flexbox) {
            create_responsive_styles(create_flexbox_styles);
        } else {
            create_responsive_styles(create_fallback_styles);
        }
        
    } else {
        //get styles from local storage
    
    
    }
    
    
    
    
    
    */

   
    
    
}());




