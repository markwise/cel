casper.start('test.html', function () {
    casper.viewport(960, 1);
    
    //split
    specter.screenshot('.split', 'split');
    specter.screenshot('.split.with-gap', 'split__with-gap');
    specter.screenshot('.split[class~="with-gap:1"]', 'split__with-gap-1');
    specter.screenshot('.split[class~="with-gap:2"]', 'split__with-gap-2');
    specter.screenshot('.split[class~="with-gap:3"]', 'split__with-gap-3');
    specter.screenshot('.split[class~="with-gap:4"]', 'split__with-gap-4');
    specter.screenshot('.split[class~="with-gap:5"]', 'split__with-gap-5');
    specter.screenshot('.split.with-gap.and-line', 'split__with-gap__and-line');
    specter.screenshot('.split[class~="with-gap:1"].and-line', 'split__with-gap-1__and-line');
    specter.screenshot('.split[class~="with-gap:2"].and-line', 'split__with-gap-2__and-line');
    specter.screenshot('.split[class~="with-gap:3"].and-line', 'split__with-gap-3__and-line');
    specter.screenshot('.split[class~="with-gap:4"].and-line', 'split__with-gap-4__and-line');
    specter.screenshot('.split[class~="with-gap:5"].and-line', 'split__with-gap-5__and-line');
    
    //by:2
    specter.screenshot('.split[class~="by:2"]', 'by-2');
    specter.screenshot('.split[class~="by:2"].with-gap', 'by-2__with-gap');
    specter.screenshot('.split[class~="by:2"][class~="with-gap:1"]', 'by-2__with-gap-1');
    specter.screenshot('.split[class~="by:2"][class~="with-gap:2"]', 'by-2__with-gap-2');
    specter.screenshot('.split[class~="by:2"][class~="with-gap:3"]', 'by-2__with-gap-3');
    specter.screenshot('.split[class~="by:2"][class~="with-gap:4"]', 'by-2__with-gap-4');
    specter.screenshot('.split[class~="by:2"][class~="with-gap:5"]', 'by-2__with-gap-5');
    specter.screenshot('.split[class~="by:2"].with-gap.and-line', 'by-2__with-gap__and-line');
    specter.screenshot('.split[class~="by:2"][class~="with-gap:1"].and-line', 'by-2__with-gap-1__and-line');
    specter.screenshot('.split[class~="by:2"][class~="with-gap:2"].and-line', 'by-2__with-gap-2__and-line');
    specter.screenshot('.split[class~="by:2"][class~="with-gap:3"].and-line', 'by-2__with-gap-3__and-line');
    specter.screenshot('.split[class~="by:2"][class~="with-gap:4"].and-line', 'by-2__with-gap-4__and-line');
    specter.screenshot('.split[class~="by:2"][class~="with-gap:5"].and-line', 'by-2__with-gap-5__and-line');
    
    //by:3
    specter.screenshot('.split[class~="by:3"]', 'by-3');
    specter.screenshot('.split[class~="by:3"].with-gap', 'by-3__with-gap');
    specter.screenshot('.split[class~="by:3"][class~="with-gap:1"]', 'by-3__with-gap-1');
    specter.screenshot('.split[class~="by:3"][class~="with-gap:2"]', 'by-3__with-gap-2');
    specter.screenshot('.split[class~="by:3"][class~="with-gap:3"]', 'by-3__with-gap-3');
    specter.screenshot('.split[class~="by:3"][class~="with-gap:4"]', 'by-3__with-gap-4');
    specter.screenshot('.split[class~="by:3"][class~="with-gap:5"]', 'by-3__with-gap-5');
    specter.screenshot('.split[class~="by:3"].with-gap.and-line', 'by-3__with-gap__and-line');
    specter.screenshot('.split[class~="by:3"][class~="with-gap:1"].and-line', 'by-3__with-gap-1__and-line');
    specter.screenshot('.split[class~="by:3"][class~="with-gap:2"].and-line', 'by-3__with-gap-2__and-line');
    specter.screenshot('.split[class~="by:3"][class~="with-gap:3"].and-line', 'by-3__with-gap-3__and-line');
    specter.screenshot('.split[class~="by:3"][class~="with-gap:4"].and-line', 'by-3__with-gap-4__and-line');
    specter.screenshot('.split[class~="by:3"][class~="with-gap:5"].and-line', 'by-3__with-gap-5__and-line');

    //by:4
    specter.screenshot('.split[class~="by:4"]', 'by-4');
    specter.screenshot('.split[class~="by:4"].with-gap', 'by-4__with-gap');
    specter.screenshot('.split[class~="by:4"][class~="with-gap:1"]', 'by-4__with-gap-1');
    specter.screenshot('.split[class~="by:4"][class~="with-gap:2"]', 'by-4__with-gap-2');
    specter.screenshot('.split[class~="by:4"][class~="with-gap:3"]', 'by-4__with-gap-3');
    specter.screenshot('.split[class~="by:4"][class~="with-gap:4"]', 'by-4__with-gap-4');
    specter.screenshot('.split[class~="by:4"][class~="with-gap:5"]', 'by-4__with-gap-5');
    specter.screenshot('.split[class~="by:4"].with-gap.and-line', 'by-4__with-gap__and-line');
    specter.screenshot('.split[class~="by:4"][class~="with-gap:1"].and-line', 'by-4__with-gap-1__and-line');
    specter.screenshot('.split[class~="by:4"][class~="with-gap:2"].and-line', 'by-4__with-gap-2__and-line');
    specter.screenshot('.split[class~="by:4"][class~="with-gap:3"].and-line', 'by-4__with-gap-3__and-line');
    specter.screenshot('.split[class~="by:4"][class~="with-gap:4"].and-line', 'by-4__with-gap-4__and-line');
    specter.screenshot('.split[class~="by:4"][class~="with-gap:5"].and-line', 'by-4__with-gap-5__and-line');
    
    //by:5
    specter.screenshot('.split[class~="by:5"]', 'by-5');
    specter.screenshot('.split[class~="by:5"].with-gap', 'by-5__with-gap');
    specter.screenshot('.split[class~="by:5"][class~="with-gap:1"]', 'by-5__with-gap-1');
    specter.screenshot('.split[class~="by:5"][class~="with-gap:2"]', 'by-5__with-gap-2');
    specter.screenshot('.split[class~="by:5"][class~="with-gap:3"]', 'by-5__with-gap-3');
    specter.screenshot('.split[class~="by:5"][class~="with-gap:4"]', 'by-5__with-gap-4');
    specter.screenshot('.split[class~="by:5"][class~="with-gap:5"]', 'by-5__with-gap-5');
    specter.screenshot('.split[class~="by:5"].with-gap.and-line', 'by-5__with-gap__and-line');
    specter.screenshot('.split[class~="by:5"][class~="with-gap:1"].and-line', 'by-5__with-gap-1__and-line');
    specter.screenshot('.split[class~="by:5"][class~="with-gap:2"].and-line', 'by-5__with-gap-2__and-line');
    specter.screenshot('.split[class~="by:5"][class~="with-gap:3"].and-line', 'by-5__with-gap-3__and-line');
    specter.screenshot('.split[class~="by:5"][class~="with-gap:4"].and-line', 'by-5__with-gap-4__and-line');
    specter.screenshot('.split[class~="by:5"][class~="with-gap:5"].and-line', 'by-5__with-gap-5__and-line');
    
    //by:1/2
    specter.screenshot('.split[class~="by:1/2"]', 'by-1to2');
    specter.screenshot('.split[class~="by:1/2"].with-gap', 'by-1to2__with-gap');
    specter.screenshot('.split[class~="by:1/2"][class~="with-gap:1"]', 'by-1to2__with-gap-1');
    specter.screenshot('.split[class~="by:1/2"][class~="with-gap:2"]', 'by-1to2__with-gap-2');
    specter.screenshot('.split[class~="by:1/2"][class~="with-gap:3"]', 'by-1to2__with-gap-3');
    specter.screenshot('.split[class~="by:1/2"][class~="with-gap:4"]', 'by-1to2__with-gap-4');
    specter.screenshot('.split[class~="by:1/2"][class~="with-gap:5"]', 'by-1to2__with-gap-5');
    specter.screenshot('.split[class~="by:1/2"].with-gap.and-line', 'by-1to2__with-gap__and-line');
    specter.screenshot('.split[class~="by:1/2"][class~="with-gap:1"].and-line', 'by-1to2__with-gap-1__and-line');
    specter.screenshot('.split[class~="by:1/2"][class~="with-gap:2"].and-line', 'by-1to2__with-gap-2__and-line');
    specter.screenshot('.split[class~="by:1/2"][class~="with-gap:3"].and-line', 'by-1to2__with-gap-3__and-line');
    specter.screenshot('.split[class~="by:1/2"][class~="with-gap:4"].and-line', 'by-1to2__with-gap-4__and-line');
    specter.screenshot('.split[class~="by:1/2"][class~="with-gap:5"].and-line', 'by-1to2__with-gap-5__and-line');
    
    //by:2/1
    specter.screenshot('.split[class~="by:2/1"]', 'by-2to1');
    specter.screenshot('.split[class~="by:2/1"].with-gap', 'by-2to1__with-gap');
    specter.screenshot('.split[class~="by:2/1"][class~="with-gap:1"]', 'by-2to1__with-gap-1');
    specter.screenshot('.split[class~="by:2/1"][class~="with-gap:2"]', 'by-2to1__with-gap-2');
    specter.screenshot('.split[class~="by:2/1"][class~="with-gap:3"]', 'by-2to1__with-gap-3');
    specter.screenshot('.split[class~="by:2/1"][class~="with-gap:4"]', 'by-2to1__with-gap-4');
    specter.screenshot('.split[class~="by:2/1"][class~="with-gap:5"]', 'by-2to1__with-gap-5');
    specter.screenshot('.split[class~="by:2/1"].with-gap.and-line', 'by-2to1__with-gap__and-line');
    specter.screenshot('.split[class~="by:2/1"][class~="with-gap:1"].and-line', 'by-2to1__with-gap-1__and-line');
    specter.screenshot('.split[class~="by:2/1"][class~="with-gap:2"].and-line', 'by-2to1__with-gap-2__and-line');
    specter.screenshot('.split[class~="by:2/1"][class~="with-gap:3"].and-line', 'by-2to1__with-gap-3__and-line');
    specter.screenshot('.split[class~="by:2/1"][class~="with-gap:4"].and-line', 'by-2to1__with-gap-4__and-line');
    specter.screenshot('.split[class~="by:2/1"][class~="with-gap:5"].and-line', 'by-2to1__with-gap-5__and-line');
    
    //by:1/3
    specter.screenshot('.split[class~="by:1/3"]', 'by-1to3');
    specter.screenshot('.split[class~="by:1/3"].with-gap', 'by-1to3__with-gap');
    specter.screenshot('.split[class~="by:1/3"][class~="with-gap:1"]', 'by-1to3__with-gap-1');
    specter.screenshot('.split[class~="by:1/3"][class~="with-gap:2"]', 'by-1to3__with-gap-2');
    specter.screenshot('.split[class~="by:1/3"][class~="with-gap:3"]', 'by-1to3__with-gap-3');
    specter.screenshot('.split[class~="by:1/3"][class~="with-gap:4"]', 'by-1to3__with-gap-4');
    specter.screenshot('.split[class~="by:1/3"][class~="with-gap:5"]', 'by-1to3__with-gap-5');
    specter.screenshot('.split[class~="by:1/3"].with-gap.and-line', 'by-1to3__with-gap__and-line');
    specter.screenshot('.split[class~="by:1/3"][class~="with-gap:1"].and-line', 'by-1to3__with-gap-1__and-line');
    specter.screenshot('.split[class~="by:1/3"][class~="with-gap:2"].and-line', 'by-1to3__with-gap-2__and-line');
    specter.screenshot('.split[class~="by:1/3"][class~="with-gap:3"].and-line', 'by-1to3__with-gap-3__and-line');
    specter.screenshot('.split[class~="by:1/3"][class~="with-gap:4"].and-line', 'by-1to3__with-gap-4__and-line');
    specter.screenshot('.split[class~="by:1/3"][class~="with-gap:5"].and-line', 'by-1to3__with-gap-5__and-line');

    //by:3/1
    specter.screenshot('.split[class~="by:3/1"]', 'by-3to1');
    specter.screenshot('.split[class~="by:3/1"].with-gap', 'by-3to1__with-gap');
    specter.screenshot('.split[class~="by:3/1"][class~="with-gap:1"]', 'by-3to1__with-gap-1');
    specter.screenshot('.split[class~="by:3/1"][class~="with-gap:2"]', 'by-3to1__with-gap-2');
    specter.screenshot('.split[class~="by:3/1"][class~="with-gap:3"]', 'by-3to1__with-gap-3');
    specter.screenshot('.split[class~="by:3/1"][class~="with-gap:4"]', 'by-3to1__with-gap-4');
    specter.screenshot('.split[class~="by:3/1"][class~="with-gap:5"]', 'by-3to1__with-gap-5');
    specter.screenshot('.split[class~="by:3/1"].with-gap.and-line', 'by-3to1__with-gap__and-line');
    specter.screenshot('.split[class~="by:3/1"][class~="with-gap:1"].and-line', 'by-3to1__with-gap-1__and-line');
    specter.screenshot('.split[class~="by:3/1"][class~="with-gap:2"].and-line', 'by-3to1__with-gap-2__and-line');
    specter.screenshot('.split[class~="by:3/1"][class~="with-gap:3"].and-line', 'by-3to1__with-gap-3__and-line');
    specter.screenshot('.split[class~="by:3/1"][class~="with-gap:4"].and-line', 'by-3to1__with-gap-4__and-line');
    specter.screenshot('.split[class~="by:3/1"][class~="with-gap:5"].and-line', 'by-3to1__with-gap-5__and-line');
    
    //by:2/3
    specter.screenshot('.split[class~="by:2/3"]', 'by-2to3');
    specter.screenshot('.split[class~="by:2/3"].with-gap', 'by-2to3__with-gap');
    specter.screenshot('.split[class~="by:2/3"][class~="with-gap:1"]', 'by-2to3__with-gap-1');
    specter.screenshot('.split[class~="by:2/3"][class~="with-gap:2"]', 'by-2to3__with-gap-2');
    specter.screenshot('.split[class~="by:2/3"][class~="with-gap:3"]', 'by-2to3__with-gap-3');
    specter.screenshot('.split[class~="by:2/3"][class~="with-gap:4"]', 'by-2to3__with-gap-4');
    specter.screenshot('.split[class~="by:2/3"][class~="with-gap:5"]', 'by-2to3__with-gap-5');
    specter.screenshot('.split[class~="by:2/3"].with-gap.and-line', 'by-2to3__with-gap__and-line');
    specter.screenshot('.split[class~="by:2/3"][class~="with-gap:1"].and-line', 'by-2to3__with-gap-1__and-line');
    specter.screenshot('.split[class~="by:2/3"][class~="with-gap:2"].and-line', 'by-2to3__with-gap-2__and-line');
    specter.screenshot('.split[class~="by:2/3"][class~="with-gap:3"].and-line', 'by-2to3__with-gap-3__and-line');
    specter.screenshot('.split[class~="by:2/3"][class~="with-gap:4"].and-line', 'by-2to3__with-gap-4__and-line');
    specter.screenshot('.split[class~="by:2/3"][class~="with-gap:5"].and-line', 'by-2to3__with-gap-5__and-line');
    
    //by:3/2
    specter.screenshot('.split[class~="by:3/2"]', 'by-3to2');
    specter.screenshot('.split[class~="by:3/2"].with-gap', 'by-3to2__with-gap');
    specter.screenshot('.split[class~="by:3/2"][class~="with-gap:1"]', 'by-3to2__with-gap-1');
    specter.screenshot('.split[class~="by:3/2"][class~="with-gap:2"]', 'by-3to2__with-gap-2');
    specter.screenshot('.split[class~="by:3/2"][class~="with-gap:3"]', 'by-3to2__with-gap-3');
    specter.screenshot('.split[class~="by:3/2"][class~="with-gap:4"]', 'by-3to2__with-gap-4');
    specter.screenshot('.split[class~="by:3/2"][class~="with-gap:5"]', 'by-3to2__with-gap-5');
    specter.screenshot('.split[class~="by:3/2"].with-gap.and-line', 'by-3to2__with-gap__and-line');
    specter.screenshot('.split[class~="by:3/2"][class~="with-gap:1"].and-line', 'by-3to2__with-gap-1__and-line');
    specter.screenshot('.split[class~="by:3/2"][class~="with-gap:2"].and-line', 'by-3to2__with-gap-2__and-line');
    specter.screenshot('.split[class~="by:3/2"][class~="with-gap:3"].and-line', 'by-3to2__with-gap-3__and-line');
    specter.screenshot('.split[class~="by:3/2"][class~="with-gap:4"].and-line', 'by-3to2__with-gap-4__and-line');
    specter.screenshot('.split[class~="by:3/2"][class~="with-gap:5"].and-line', 'by-3to2__with-gap-5__and-line');
});

casper.run();