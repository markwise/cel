(function () {
    'strict';    
    var
    
    styles = [],
    
    //String dictionary
    //All styles are built from the string dictionary to prevent string duplication

    
    //Numbers
    _zero =                      '0',
    _one =                       '1',
    _two =                       '2',
    _three =                     '3',
    _four =                      '4',
    _five =                      '5',
    _six =                       '6',
    _seven =                     '7',
    _eight =                     '8',
    _nine =                      '9',
    
    //Punctuation
    _hyphen =                    '-',
    _minus =                     hyphen,
    _colon =                     ':',
    _semicolon =                 ';',
    _comma =                     ',',
    _left_bracket =              '[',
    _right_bracket =             ']',
    _left_brace =                '{',
    _right_brace =               '}',
    _period =                    '.',
    _decimal_mark =              period,
    _greater_than_sign =         '>',
    _equals_sign =               '=',
    _asterik =                   '*',
    _tilde =                     '~',
    _double_quote =              '"',
    _single_quote =              "'",
    _exclamation_mark =          '!',
    _hash =                      '#',
    _space =                     ' ',
    
    //Words
    _align =                     'align',
    _auto =                      'auto',
    _block =                     'block',
    _border =                    'border',
    _bottom =                    'bottom',
    _box =                       'box',
    _cel =                       'cel',
    _content =                   'content',
    _class =                     'class',
    _direction =                 'direction',
    _display =                   'display',
    _flip =                      'flip',
    _height =                    'height',
    _hidden =                    'hidden',
    _hide =                      'hide',
    _inline =                    'inline',
    _justify =                   'justify',
    _last =                      'last',
    _left =                      'left',
    _letter =                    'letter',
    _line =                      'line',
    _middle =                    'middle',
    _min =                       'min',
    _none =                      'none',
    _normal =                    'normal',
    _overflow =                  'overflow',
    _ready =                     'ready',
    _right =                     'right',
    _show =                      'show',
    _sizing =                    'sizing',
    _solid =                     'solid',
    _spacing =                   'spacing',
    _split =                     'split',
    _text =                      'text',
    _top =                       'top',
    _vertical =                  'vertical',
    _visible =                   'visible',
    _visibility =                'visibility',
    _width =                     'width',
    
    //Vendor prefixes
    _microsoft =                 '-ms-',
    _mozilla =                   '-moz-',
    _webkit =                    '-webkit-',
    
    //Units
    _em =                        'em',
    _percent =                   '%',
    _pixel =                     'px',
    
    //Selectors
    _class_split =               _period + _split,
    _class_cel =                 _period + _cel,
    _class_flip =                _period + _flip,
    _class_cel_line =            _period + _cel + _hyphen + _line,
    _class_ready =               _period + _ready,
    _class_show =                _period + _show,
    _class_hide =                _period + _hide,

    _attr_substring =            _left_bracket + _klass + _asterik + _equals_sign + _single_quote,
    _attr_contains =             _left_bracket + _klass + _tilde + _equals_sign + _single_quote,
    _attr_close =                _single_quote + _right_bracket,
    _attr_split =                _attr_substring + _split + _colon + _attr_close,
    _attr_align =                _attr_contains + _align + _colon,
    _attr_align_t =              _attr_align + 't' + _attr_close,
    _attr_align_m =              _attr_align + 'm' + _attr_close,
    _attr_align_b =              _attr_align + 'b' + _attr_close,
    
    
    //Properties
    __content =                 _content + _colon,      
    __border =                  _border + _colon,
    __border_bottom_width =     _border + _hyphen + _bottom + _hyphen + _width + _colon,
    __border_right_width =      _border + _hyphen + _right + _hyphen + _width + _colon,
    __border_top_width =        _border + _hyphen + _top + _hyphen + _width + _colon,
    __box_sizing =              _box + _hyphen + _sizing + _colon,
    __direction =               _direction + _colon,
    __display =                 _display + _colon,
    __letter_spacing =          _letter + _hyphen + _spacing + _colon,
    __line_height =             _line + _hyphen + _height + _colon,
    __min_height =              _min + _hyphen + _height + _colon,
    __moz_box_sizing =          _mozilla + _box + _hyphen + _sizing + _colon,
    __moz_text_align_last =     _mozilla + _text + _hyphen + _align + _hyphen + _last + _colon,
    __ms_text_align_last =      _microsoft + _text + _hyphen + _align + _hyphen + _last + _colon,
    __overflow =                _overflow + _colon,
    __text_align =              _text + _hyphen + _align + _colon,
    __vertical_align =          _vertical + _hyphen + _align + _colon,
    __visibility =              _visibility + _colon,
    __webkit_box_sizing =       _webkit + box + hyphen + sizing + colon,
    __width =                   _width + colon,

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
    visible__ =                 visible + semicolon,
    zero__ =                    zero + semicolon,
    one_hundred_percent__ =     '100%;',
    
    //Partials
    _important_ =               ' !important;',
    _ie_ =                      '\\9;',
    _with_gap_ =                'with-gap:';
    
    
    
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
        //Fallback styles for browsers that don't support flexbox
        
        
        
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
            class_split, attr_align_top, greater_than_sign, class_cel, comma,
            attr_split, attr_align_t, greater_than_sign, class_cel, comma,
            attr_split, attr_align_top, greater_than_sign, class_cel, left_brace,
                __vertical_align, top__,
            right_brace,
            
            class_split, attr_align_m, greater_than_sign, class_cel, comma,
            class_split, attr_align_middle, greater_than_sign, class_cel, comma,
            attr_split, attr_align_m, greater_than_sign, class_cel, comma,
            attr_split, attr_align_middle, greater_than_sign, class_cel, left_brace,
                __vertical_align, middle__,
            right_brace,
            
            class_split, attr_align_b, greater_than_sign, class_cel, comma,
            class_split, attr_align_bottom, greater_than_sign, class_cel, comma,
            attr_split, attr_align_b, greater_than_sign, class_cel, comma,
            attr_split, attr_align_bottom, greater_than_sign, class_cel, left_brace,
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




