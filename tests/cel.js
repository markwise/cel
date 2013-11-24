//open('file:///users/markwise/workspace/cel/tests/cel.html', function () {
open('cel.html', function () {
    
    test(['1024x768'], function () {
        capture('.split', 'split');
        capture('.split[class~="by:2"]', 'split-by_2');
    
    });


    
    finish();
});