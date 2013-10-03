# Responsive layouts

Cel supports responsive screen sizes from 480 to 960 in increments of 20.

_Note that Cel is not tied to explicit devices, so there are no classes to distinguish between web, tablet and mobile._

Responsive layouts are created by adding a tilde (~) followed by a supported screen size to the class split. For example, split~640.

The tilde (~) has special meaning and is a responsive hook. When added to the class split, it tells a layout to respond if the screen size is less than or equal to the supplied screen size argument.

_Note that cel lines are automatically hidden when a layout responds._

__ex:__  
To create a layout that responds to a screen size of 640, add the class split~640 to a layout.

```html
<div class="split~640 by:3">
	<div class="cel">A</div>
	<div class="cel">B</div>
	<div class="cel">C</div>
</div>
```


### Showing and hiding elements

In addition, Cel can also show and hide elements. The class show initially hides elements until a layout responds to a screen size, whereas, the class hide initially shows elements.

__ex:__  
Column C will be hidden at 640.

```html
<div class="split~640 by:3">
	<div class="cel">A</div>
	<div class="cel">B</div>
	<div class="cel hide">C</div>
</div>
```

__ex:__  
Column C will be visible at 640.

```html
<div class="split~640 by:3">
	<div class="cel">A</div>
	<div class="cel">B</div>
	<div class="cel show">C</div>
</div>
```

__ex:__  
Column C will be hidden and column D will be visible at 640.

```html
<div class="split~640 by:3">
	<div class="cel">A</div>
	<div class="cel">B</div>
	<div class="cel hide">C</div>
	<div class="cel show">D</div>
</div>
```

