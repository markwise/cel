(function () {

    
/*
@media screen and (min-width:481px) {
    [class~='split:480']{
        display:-ms-flexbox;
        display:-webkit-flex;
        display:flex;
        -ms-flex-pack:justify;
        -webkit-justify-content:space-between;
        justify-content:space-between;
        -ms-flex-wrap:wrap;
        -webkit-flex-wrap:wrap;
        flex-wrap:wrap;
        -ms-flex-align:start;
        -webkit-align-items:flex-start;
        align-items:flex-start;
        -ms-flex:none;
        -webkit-flex:none;
        flex:none;
    }
    [class~='split:480']>.cel{
        -webkit-box-sizing:border-box;
        -moz-box-sizing:border-box;
        box-sizing:border-box;
        line-height:1.5;
    }
    [class~='split:480'][class~='align:t'],
    [class~='split:480'][class~='align:top']{
        -ms-flex-align:start;
        -webkit-align-items:flex-start;
        align-items:flex-start;
    }
    [class~='split:480'][class~='align:m'],
    [class~='split:480'][class~='align:middle']{
        -ms-flex-align:center;
        -webkit-align-items:center;
        align-items:center;
    }
    [class~='split:480'][class~='align:b'],
    [class~='split:480'][class~='align:bottom']{
        -ms-flex-align:end;
        -webkit-align-items:flex-end;
        align-items:flex-end;
    }
    [class~='split:480'].flip {
        -ms-flex-direction:row-reverse;
        -webkit-flex-direction:row-reverse;
        flex-direction:row-reverse;
    }
    [class~='split:480']>.show{
        display:none;
    }
}
*/


/*
[class~='by:2']>.cel{width:50%}
[class~='by:3']>.cel{width:33.333%}
[class~='by:4']>.cel{width:25%}
[class~='by:5']>.cel{width:20%}
[class~='by:1/2']>.cel{width:33.335%}
[class~='by:1/2']>.cel~.cel{width:66.665%}
[class~='by:2/1']>.cel{width:66.665%}
[class~='by:2/1']>.cel~.cel{width:33.335%}
[class~='by:1/3']>.cel{width:25%}
[class~='by:1/3']>.cel~.cel{width:75%}
[class~='by:3/1']>.cel{width:75%}
[class~='by:3/1']>.cel~.cel{width:25%}
[class~='by:2/3']>.cel{width:40%}
[class~='by:2/3']>.cel~.cel{width:60%}
[class~='by:3/2']>.cel{width:60%}
[class~='by:3/2']>.cel~.cel{width:40%}


[class~='by:2'][class~='with-gap:1']>.cel{width:49.5%}
[class~='by:3'][class~='with-gap:1']>.cel{width:32.665%}
[class~='by:4'][class~='with-gap:1']>.cel{width:24.25%}
[class~='by:5'][class~='with-gap:1']>.cel{width:19.2%}
[class~='by:1/2'][class~='with-gap:1']>.cel{width:33%}
[class~='by:1/2'][class~='with-gap:1']>.cel~.cel{width:66%}
[class~='by:2/1'][class~='with-gap:1']>.cel{width:66%}
[class~='by:2/1'][class~='with-gap:1']>.cel~.cel{width:33%}
[class~='by:1/3'][class~='with-gap:1']>.cel{width:24.75%}
[class~='by:1/3'][class~='with-gap:1']>.cel~.cel{width:74.25%}
[class~='by:3/1'][class~='with-gap:1']>.cel{width:74.25%}
[class~='by:3/1'][class~='with-gap:1']>.cel~.cel{width:24.75%}
[class~='by:2/3'][class~='with-gap:1']>.cel{width:39.6%}
[class~='by:2/3'][class~='with-gap:1']>.cel~.cel{width:59.4%}
[class~='by:3/2'][class~='with-gap:1']>.cel{width:59.4%}
[class~='by:3/2'][class~='with-gap:1']>.cel~.cel{width:39.6%}


[class~='by:2'][class~='with-gap:2']>.cel{width:49%}
[class~='by:3'][class~='with-gap:2']>.cel{width:32%}
[class~='by:4'][class~='with-gap:2']>.cel{width:23.5%}
[class~='by:5'][class~='with-gap:2']>.cel{width:18.4%}
[class~='by:1/2'][class~='with-gap:2']>.cel{width:32.665%}
[class~='by:1/2'][class~='with-gap:2']>.cel~.cel{width:65.335%}
[class~='by:2/1'][class~='with-gap:2']>.cel{width:65.335%}
[class~='by:2/1'][class~='with-gap:2']>.cel~.cel{width:32.665%}
[class~='by:1/3'][class~='with-gap:2']>.cel{width:24.5%}
[class~='by:1/3'][class~='with-gap:2']>.cel~.cel{width:73.5%}
[class~='by:3/1'][class~='with-gap:2']>.cel{width:73.5%}
[class~='by:3/1'][class~='with-gap:2']>.cel~.cel{width:24.5%}
[class~='by:2/3'][class~='with-gap:2']>.cel{width:39.2%}
[class~='by:2/3'][class~='with-gap:2']>.cel~.cel{width:58.8%}
[class~='by:3/2'][class~='with-gap:2']>.cel{width:58.8%}
[class~='by:3/2'][class~='with-gap:2']>.cel~.cel{width:39.2%}


[class~='by:2'][class~='with-gap:3']>.cel{width:48.5%}
[class~='by:3'][class~='with-gap:3']>.cel{width:31.33%}
[class~='by:4'][class~='with-gap:3']>.cel{width:22.75%}
[class~='by:5'][class~='with-gap:3']>.cel{width:17.6%}
[class~='by:1/2'][class~='with-gap:3']>.cel{width:32.335%}
[class~='by:1/2'][class~='with-gap:3']>.cel~.cel{width:64.665%}
[class~='by:2/1'][class~='with-gap:3']>.cel{width:64.665%}
[class~='by:2/1'][class~='with-gap:3']>.cel~.cel{width:32.335%}
[class~='by:1/3'][class~='with-gap:3']>.cel{width:24.25%}
[class~='by:1/3'][class~='with-gap:3']>.cel~.cel{width:72.75%}
[class~='by:3/1'][class~='with-gap:3']>.cel{width:72.75%}
[class~='by:3/1'][class~='with-gap:3']>.cel~.cel{width:24.25%}
[class~='by:2/3'][class~='with-gap:3']>.cel{width:38.8%}
[class~='by:2/3'][class~='with-gap:3']>.cel~.cel{width:58.2%}
[class~='by:3/2'][class~='with-gap:3']>.cel{width:58.2%}
[class~='by:3/2'][class~='with-gap:3']>.cel~.cel{width:38.8%}


[class~='by:2'][class~='with-gap:4']>.cel{width:48%}
[class~='by:3'][class~='with-gap:4']>.cel{width:30.665%}
[class~='by:4'][class~='with-gap:4']>.cel{width:22%}
[class~='by:5'][class~='with-gap:4']>.cel{width:16.8%}
[class~='by:1/2'][class~='with-gap:4']>.cel{width:32%}
[class~='by:1/2'][class~='with-gap:4']>.cel~.cel{width:64%}
[class~='by:2/1'][class~='with-gap:4']>.cel{width:64%}
[class~='by:2/1'][class~='with-gap:4']>.cel~.cel{width:32%}
[class~='by:1/3'][class~='with-gap:4']>.cel{width:24%}
[class~='by:1/3'][class~='with-gap:4']>.cel~.cel{width:72%}
[class~='by:3/1'][class~='with-gap:4']>.cel{width:72%}
[class~='by:3/1'][class~='with-gap:4']>.cel~.cel{width:24%}
[class~='by:2/3'][class~='with-gap:4']>.cel{width:38.4%}
[class~='by:2/3'][class~='with-gap:4']>.cel~.cel{width:57.6%}
[class~='by:3/2'][class~='with-gap:4']>.cel{width:57.6%}
[class~='by:3/2'][class~='with-gap:4']>.cel~.cel{width:38.4%}


[class~='by:2'][class~='with-gap:5']>.cel{width:47.5%}
[class~='by:3'][class~='with-gap:5']>.cel{width:30%}
[class~='by:4'][class~='with-gap:5']>.cel{width:21.25%}
[class~='by:5'][class~='with-gap:5']>.cel{width:16%}
[class~='by:1/2'][class~='with-gap:5']>.cel{width:31.665%}
[class~='by:1/2'][class~='with-gap:5']>.cel~.cel{width:63.335%}
[class~='by:2/1'][class~='with-gap:5']>.cel{width:63.335%}
[class~='by:2/1'][class~='with-gap:5']>.cel~.cel{width:31.665%}
[class~='by:1/3'][class~='with-gap:5']>.cel{width:23.75%}
[class~='by:1/3'][class~='with-gap:5']>.cel~.cel{width:71.25%}
[class~='by:3/1'][class~='with-gap:5']>.cel{width:71.25%}
[class~='by:3/1'][class~='with-gap:5']>.cel~.cel{width:23.75%}
[class~='by:2/3'][class~='with-gap:5']>.cel{width:38%}
[class~='by:2/3'][class~='with-gap:5']>.cel~.cel{width:57%}
[class~='by:3/2'][class~='with-gap:5']>.cel{width:57%}
[class~='by:3/2'][class~='with-gap:5']>.cel~.cel{width:38%}




.cel-line {
    -ms-flex-item-align:stretch;
    -webkit-align-self:stretch;
    align-self:stretch;
    overflow:hidden;
    border-top-width:0 !important;
    border-right-width:0 !important;
    border-bottom-width:0 !important;
    border:1px solid #ccc;
    width:0;
}

*/




}());