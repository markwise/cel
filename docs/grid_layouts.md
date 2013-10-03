# Grid layouts

Grid layouts are layouts that span multiple lines.

_Note that cel lines have erratic rendering when used with grid layouts and cannot be used._

Grids are created by adding more columns to a layout than defined with the class by causing additional columns to wrap. Because columns are inline-block elements, they are treated like normal runs of text. If there is not enough space to fit a column on a line, it wraps to the next line.

__ex:__
To create a 4x4 grid with equal width columns, add the class by:2 to a layout with four columns.

```html
<div class="split by:2">
	<div class="cel">A</div>
	<div class="cel">B</div>
	<div class="cel">C</div>
	<div class="cel">D</div>
</div>
```

__ex:__
To create a 4x4 grid with offset column widths, add the class by:1/2 to a layout with four columns.

```html
<div class="split by:1/2">
	<div class="cel">A</div>
	<div class="cel">B</div>
	<div class="cel">C</div>
	<div class="cel">D</div>
</div>
```


### Empty columns

Columns are horizontally aligned using text-align:justify and are always distributed evenly across a layout. This can affect the last line of a grid layout where columns will not be aligned next to each other as you might expect.

__ex:__
The following three column grid layout has two columns on the last line. Column D will be flush with the layouts left edge and column E will be flush with the layouts right edge leaving empty space in between.

```html
<div class="split by:3">
	<div class="cel">A</div>
	<div class="cel">B</div>
	<div class="cel">C</div>
	<div class="cel">D</div>
	<div class="cel">E</div>
</div>
```

To remedy this, add an empty column to the layout, so the number columns on the last line matches the expected number of columns per line. 

__ex:__
An empty column is added after column E aligning columns D and E left.

```html
<div class="split by:3">
	<div class="cel">A</div>
	<div class="cel">B</div>
	<div class="cel">C</div>
	<div class="cel">D</div>
	<div class="cel">E</div>
	<div class="cel"></div>
</div>
```

__ex:__
An empty column is added after column C aligning columns D and E right.

```html
<div class="split by:3">
	<div class="cel">A</div>
	<div class="cel">B</div>
	<div class="cel">C</div>
	<div class="cel"></div>
	<div class="cel">D</div>
	<div class="cel">E</div>
</div>
```

